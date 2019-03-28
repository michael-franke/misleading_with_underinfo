library(tidyverse)

d = read_csv('data/04_forcedChoice_pilot_01/data_raw.csv') %>% 
  filter(! prolific_id %in% c("Nausicaa", "test by MF"))

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

filter(d, trial_type == "comprehension_test") %>%  View()

# sentence completion

filter(d, trial_type == "sentence_completion", ! condition %in% c("all", "none")) %>% 
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
