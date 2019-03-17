library(tidyverse)

d = read_csv('data/02_TVJ_pretest/data_raw.csv') %>% 
  mutate(response = ifelse(response == "TRUE", 1, 0))

d = d[-which(d$comments == "Test run by MF"),]

d_summary = d %>% group_by(trigger, condition, question) %>% 
  summarize(mean_true = mean(response)) %>% arrange(condition)

d_summary_id = d %>% group_by(submission_id, trigger, condition) %>% 
  summarize(mean_true = mean(response)) %>% arrange(submission_id) %>% 
  filter(condition == "implicature") 

d_summary_id %>% filter(trigger != "number") %>% 
  group_by(submission_id) %>% 
  summarize(mean_true = mean(mean_true)) %>% 
  ggplot(aes(x = mean_true)) + geom_histogram()

