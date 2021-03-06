library(tidyverse)

d = read_csv("~/Desktop/results_54_misleading_imps_V06_comp_MF.csv")
d = read_csv("~/Desktop/results_55_misleading_imps_final_MF.csv")


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
  mutate(winning_move = "green",
         winning_move_chosen = ifelse(winning_move == response, 1, 0),
         loosing_move = "red",
         loosing_move_chosen = ifelse(loosing_move == response, 1, 0),
         distractor_move_chosen = ifelse(response == "false", 1, 0)) %>% 
  group_by(submission_id) %>% 
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
  prag_fail,
  sem_fail,
  labels = c("A", "B"), 
  align = "h",
  ncol = 2) %>% show()

stop()