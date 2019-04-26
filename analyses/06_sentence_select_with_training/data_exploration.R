library(tidyverse)
library(brms)
library(cowplot)

# read data and discard early submission for erroneous run with too little trials 
d = read_csv('../../data/06_sentence_select_with_training/data_raw.csv') %>% 
  filter(! prolific_id %in% c("TEST_MF")) %>% 
  filter(submission_id >= 7688)

# d$prolific_id %>% unique() %>% sort()
# 
# # bonus payment string
# 
# tibble(string = filter(d) %>% pull(prolific_id) %>% unique() %>% paste0(",0.75")) %>%
#   write_csv("~/Desktop/bonus_payments.csv")

# check comments
d$comments %>% unique

##########################################
# allocation to conditions
##########################################

message("Nr. of submissions for each co-player type:")
show(table(d$coplayer_type)/122)

##########################################
## color blindness
##########################################

color_blindness = filter(d, trial_type == "color_blindness_test") %>%
  select(submission_id, correct, response) %>%
  mutate(correct = ifelse(correct == response,1,0)) %>%
  group_by(submission_id) %>%
  summarize(color_blind = mean(correct) < 1)
color_blindness_failures = filter(color_blindness, color_blind == TRUE) %>% pull(submission_id)
message("Number of failures on color blindness test: ", length(color_blindness_failures))
## exclude color blind participants right away?
# d = filter(d, ! submission_id %in% color_blindness_failures)

# add info to full data set
d = full_join(d, color_blindness, by = "submission_id")

##########################################
# inspect data from training with feedback
##########################################

success_threshold = 0.4

d_training = filter(d, trial_type == "sentence_completion_training")

d_training_summary = d_training %>% 
  mutate(winning_move = ifelse(coplayer_type == "strategic", "green", "red"),
         winning_move_chosen = ifelse(winning_move == response, 1, 0),
         loosing_move = ifelse(coplayer_type == "strategic", "red", "green"),
         loosing_move_chosen = ifelse(loosing_move == response, 1, 0),
         distractor_move_chosen = ifelse(response == "false", 1, 0)) %>% 
  group_by(submission_id, coplayer_type, condition) %>% 
  summarize(win = mean(winning_move_chosen),
            loose = mean(loosing_move_chosen),
            dstrct = mean(distractor_move_chosen)) %>% 
  ungroup() %>% 
  gather(key = response, value = proportion, win, loose, dstrct) %>% 
  mutate(new_col_names = paste0("train_", condition, "_", response)) %>% 
  select(submission_id, new_col_names, proportion) %>% 
  spread(key = new_col_names, value = proportion) %>% 
  group_by(submission_id) %>% 
  mutate(training_successful = ifelse(mean(c(train_all_win, train_none_win)) > success_threshold, 1, 0)) %>% 
  ungroup()

d = full_join(d, d_training_summary, by = "submission_id")

message("Nr learned from training?")
d %>% select(submission_id, coplayer_type, training_successful) %>% 
  unique() %>% 
  group_by(coplayer_type, training_successful) %>% 
  summarize(count = n()) %>% show()

##########################################
# inspect data from TVJ task
##########################################

control_threshold = 0.7
semprag_threshold = 0.5

d_tvj = filter(d, trial_type == "truth_value_judgements") %>% 
  mutate(response = ifelse(response == "true", 1, 0))

d_tvj_summary = d_tvj %>% 
  group_by(submission_id, trigger, condition) %>% 
  summarize(mean_true = mean(response)) %>% 
  arrange(submission_id) %>% 
  ungroup() %>% 
  mutate(new_col_names = paste0("tvj_", trigger, "_", condition)) %>% 
  select(submission_id, new_col_names, mean_true) %>% 
  spread(key = "new_col_names", value = mean_true) 

d_tvj_controls = d_tvj %>% 
  filter( condition != "implicature" ) %>% 
  group_by(submission_id, trigger, condition) %>% 
  summarize(mean_true = mean(response)) %>% 
  arrange(submission_id) %>% 
  ungroup() %>% 
  mutate(control_score = ifelse(condition == "true", mean_true, 1-mean_true)) %>% 
  group_by(submission_id) %>% 
  summarize(tvj_control_mean = mean(control_score),
            tvj_control_fail = ifelse(tvj_control_mean < control_threshold, 1, 0))

message("Number of people who performed really badly in the TVJ: ", 
        d_tvj_controls$tvj_control_fail %>% sum())

d_tvj_implicatures = d_tvj %>% 
  filter( condition == "implicature", trigger != "number" ) %>% 
  group_by(submission_id, trigger, condition) %>% 
  summarize(mean_true = mean(response)) %>% 
  group_by(submission_id) %>% 
  summarize(tvj_implicature_mean = mean(mean_true),
            tvj_semprag_type = ifelse(tvj_implicature_mean <= semprag_threshold, 
                                      "pragmatic", "semantic"))

message("Number of participants who expected co-player to interpret pragmatically in TVJ: ", 
        sum(d_tvj_implicatures$tvj_semprag_type == "pragmatic"))

d = full_join(d, d_tvj_summary, by = "submission_id")
d = full_join(d, d_tvj_controls, by = "submission_id")
d = full_join(d, d_tvj_implicatures, by = "submission_id")

# exclude bad performers
d = filter(d, tvj_control_fail == 0)

##########################################
# looking at how many combinations we got
##########################################

d %>% filter(tvj_control_fail == 0) %>% 
  select(submission_id, 
         coplayer_type, 
         training_successful, 
         tvj_semprag_type, 
         tvj_control_fail) %>% 
  unique() %>% 
  group_by(coplayer_type, training_successful, tvj_semprag_type) %>% 
  summarize(count = n()) %>% show()

e = d %>% filter(tvj_control_fail == 0) %>%
  select(submission_id,
         coplayer_type,
         training_successful,
         tvj_semprag_type,
         tvj_control_fail) %>%
  unique()

View(e)

##########################################
# plot main data as a function of 
# behavioral types in other parts
##########################################

get_group_plot = function(sp_type = "pragmatic", success = 1) {
  group_data = filter(d, 
                      trial_type == "sentence_completion", 
                      # color_blind == FALSE,
                      tvj_semprag_type == sp_type, 
                      training_successful == success) %>% 
    mutate(condition = factor(condition, ordered = T, 
                              levels = c("all", "none", "number", "ad_hoc", "some"))) 
  N = group_data$submission_id %>% unique() %>% length()
  group_data %>% ggplot(aes(x = response)) + 
    geom_bar(aes( y = ..prop.., group = 1)) +
    coord_flip() +
    facet_grid(coplayer_type ~ condition, scales = "free") +
    ggtitle(paste0(sp_type, " responders with ", 
                   ifelse(success, "successful", "unsuccessful"), 
                   " training (N=", N, ")"))
}

prag_success = get_group_plot("pragmatic", 1)
prag_fail = get_group_plot("pragmatic", 0)
sem_success = get_group_plot("semantic", 1)
sem_fail = get_group_plot("semantic", 0)

plot_grid(
  prag_success,
  prag_fail,
  sem_success,
  sem_fail,
  labels = c("A", "B", "C", "D"), 
  align = "h",
  ncol = 2) %>% show()

stop()

##########################################
# inspect data from sentence completion
## by individual
##########################################

d_main = filter(d, trial_type == "sentence_completion")

d_main_summary = d_main %>% 
  mutate(winning_move = ifelse(coplayer_type == "strategic", "green", "red"),
         winning_move_chosen = ifelse(winning_move == response, 1, 0),
         loosing_move = ifelse(coplayer_type == "strategic", "red", "green"),
         loosing_move_chosen = ifelse(loosing_move == response, 1, 0),
         distractor_move_chosen = ifelse(response == "false", 1, 0)) %>% 
  group_by(submission_id, coplayer_type, condition) %>% 
  summarize(winning_move = mean(winning_move_chosen),
            loosing_move = mean(loosing_move_chosen),
            distractor_move = mean(distractor_move_chosen)) %>% 
  group_by(submission_id) %>% 
  mutate(main_successful = ifelse(mean(winning_move) > 0.5, 1, 0)) %>% 
  ungroup()

# sentence completion

filter(d, trial_type == "sentence_completion") %>% 
  select(submission_id, condition, glb_condition, condition, response, coplayer_type) %>% 
  ggplot(aes(x = response)) + geom_bar() +
  facet_grid(coplayer_type~condition) + coord_flip()

# performance rating

filter(d, trial_type == "performance_rating") %>% 
  mutate(response = as.numeric(response)) %>% 
  ggplot(aes(x = response, fill = glb_condition)) + geom_histogram()

# TVJ

d_tvj = filter(d, trial_type == "truth_value_judgements") %>% 
  mutate(response = ifelse(response == "true", 1, 0))

d_summary = d_tvj %>% group_by(trigger, condition) %>% 
  summarize(mean_true = mean(as.numeric(response))) %>% arrange(condition)

d_summary_id = d_tvj %>% group_by(submission_id, coplayer_type, trigger, condition) %>% 
  summarize(mean_true = mean(response)) %>% arrange(submission_id) %>% 
  filter(condition == "implicature") 

d_summary_id_imp = d_summary_id %>% filter(trigger != "number") %>% 
  group_by(submission_id) %>% 
  summarize(mean_true = mean(mean_true)) 

d_summary_id_imp %>% 
  ggplot(aes(x = mean_true)) + geom_histogram()

message("Number of pragmatic responders: ", sum(d_summary_id_imp$mean_true < 0.5))

# look at pragmatic responders

filter(d, submission_id %in% (filter(d_summary_id_imp, mean_true < 0.5) %>% pull(submission_id ))) %>% 
  filter(trial_type == "sentence_completion") %>% 
  select(submission_id, condition, coplayer_type, glb_condition, condition, response) %>% 
  ggplot(aes(x = response)) + geom_bar() +
  facet_grid(coplayer_type~condition) + coord_flip()

# look at patterns in everyone's answers

d_summary_id_completion = filter(d, trial_type == "sentence_completion") %>% 
  group_by(submission_id, condition) %>% 
  summarize(
    red = sum(response == "red")/n()
    # fls = sum(response == "false")/n()
  ) %>% 
  gather(key = response, value = proportion, red) %>% 
  mutate(combined = paste0(response, "_", condition)) %>% 
  select(-condition, - response) %>% 
  spread(key = combined, value = proportion)

d_summary_id_perfomance = filter(d, trial_type == "performance_rating") %>% 
  mutate(prfm = as.integer(response) / 100) %>% 
  select(submission_id, prfm)

d_id = full_join(
  d_summary_id_imp, 
  d_summary_id_perfomance, 
  by = "submission_id"
) %>% full_join(d_summary_id_completion, 
                by = "submission_id")

# clustering (https://www.statmethods.net/advstats/cluster.html)

mydata = as.matrix(d_id[,-1])
rownames(mydata) = d_id %>% pull(submission_id)

d <- dist(mydata, method = "euclidean") # distance matrix
fit <- hclust(d, method="ward") 
plot(fit) # display dendogram
groups <- cutree(fit, k=2) # cut tree into 5 clusters
# draw dendogram with red borders around the 5 clusters 
rect.hclust(fit, k=2, border="red")



#################
library(mclust)
fit <- Mclust(mydata)
# plot(fit) # plot results 
summary(fit) # display the best model

#################

d_id$group = fit$classification

# filter(d_id, group == 1) %>% select(-group) %>% 
#   gather(-submission_id, key = dimension, value = value) %>% 
#   ggplot(aes(x = dimension, y = value)) + geom_bar(stat = "identity") + 
#   facet_grid(submission_id ~.)
# 
# filter(d_id, group == 2) %>% select(-group) %>% 
#   gather(-submission_id, key = dimension, value = value) %>% 
#   ggplot(aes(x = dimension, y = value)) + geom_bar(stat = "identity") + 
#   facet_grid(submission_id ~.)

ggplot(d_id, aes(x = mean_true, y = prfm)) + geom_point()


d_id = d_id %>% 
  mutate(prfm_group = ifelse(abs(prfm - 0.5) < 0.05, "fatalist", 
                             ifelse(prfm > 0.5, "optimist", "pessimist")),
         sem_group = ifelse(abs(mean_true - 0.5) < 0.05, "uncertain",
                            ifelse(mean_true > 0.5, "semantic", "pragmatic")))
with(d_id, table(prfm_group, sem_group))

d_id %>% group_by(prfm_group, sem_group) %>% 
  summarize(mean_red_some = mean(red_some),
            mean_red_ad_hoc = mean(red_ad_hoc),
            mean_red_number = mean(red_number))

## analysis (attempt)

# library(brms)
# 
# fit = brm(
#   response ~ sem_prag_type,  
#   family="categorical",
#   data = filter(d, trial_type == "sentence_completion", condition == c("some")) %>% 
#        
