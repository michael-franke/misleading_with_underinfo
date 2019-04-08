library(tidyverse)
library(magrittr)

d = read_csv('data/05_sentence_selection/data_raw.csv') %>% 
  filter(! prolific_id %in% c("TESTMF"))

d$prolific_id %>% unique() %>% length

# bonus payment string

# tibble(string = filter(d, startTime > 1.5538e+12) %>% pull(prolific_id) %>% unique() %>% paste0(",0.75")) %>% 
#   write_csv("~/Desktop/bonus_payments.csv")

# check comments
d$comments %>% unique

# check colorblindness

color_blindness_failures = filter(d, trial_type == "color_blindness_test") %>%
  select(prolific_id, correct, response) %>%
  mutate(correct = ifelse(correct == response,1,0)) %>%
  group_by(prolific_id) %>%
  summarize(mean_correct = mean(correct)) %>%
  filter(mean_correct < 1) %>%
  pull(prolific_id)

d = filter(d, ! prolific_id %in% color_blindness_failures)

message("Number of failures on color blindness test: ", length(color_blindness_failures))

# comprehension checks

# filter(d, trial_type == "comprehension_test") 

# sentence completion

filter(d, trial_type == "sentence_completion") %>% 
  select(prolific_id, condition, glb_condition, condition, response) %>% 
  ggplot(aes(x = response)) + geom_bar() +
  facet_grid(glb_condition~condition) + coord_flip()

# performance rating

filter(d, trial_type == "performance_rating") %>% 
  mutate(response = as.numeric(response)) %>% 
  ggplot(aes(x = response, fill = glb_condition)) + geom_histogram()

# TVJ

d_tvj = filter(d, trial_type == "truth_value_judgements") %>% 
  mutate(response = ifelse(response == "true", 1, 0))

d_summary = d_tvj %>% group_by(trigger, condition) %>% 
  summarize(mean_true = mean(as.numeric(response))) %>% arrange(condition)

d_summary_id = d_tvj %>% group_by(submission_id, trigger, condition) %>% 
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
  filter(trial_type == "sentence_completion", ! condition %in% c("all", "none")) %>% 
  select(prolific_id, condition, glb_condition, condition, response) %>% 
  ggplot(aes(x = response)) + geom_bar() +
  facet_grid(glb_condition~condition) + coord_flip()

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


d_id %<>% 
  mutate(prfm_group = ifelse(abs(prfm - 0.5) < 0.05, "fatalist", 
                             ifelse(prfm > 0.5, "optimist", "pessimist")),
         sem_group = ifelse(abs(mean_true - 0.5) < 0.05, "uncertain",
                            ifelse(mean_true > 0.5, "semantic", "pragmatic")))
with(d_id, table(prfm_group, sem_group))

d_id %>% group_by(prfm_group, sem_group) %>% 
  summarize(mean_red_some = mean(red_some),
            mean_red_ad_hoc = mean(red_ad_hoc),
            mean_red_number = mean(red_number))
