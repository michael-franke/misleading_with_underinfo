library(tidyverse)
library(cowplot)
library (brms)
library(nnet)
options (mc.cores=parallel::detectCores ()) # Run on multiple cores

# m2 <- brm (Species ~ Petal.Length + Petal.Width + Sepal.Length + Sepal.Width, data=iris,
# family="categorical", prior=c(set_prior ("normal (0, 8)")))
# 
# m2nn = multinom(Species ~ Petal.Length + Petal.Width + Sepal.Length + Sepal.Width, data=iris)

d = read_csv("../../data/06_sentence_select_with_training/data_raw_final.csv")

# check comments
d$comments %>% unique

# participants (gender, age...)
d %>% select(submission_id, gender) %>% unique() %>% group_by(gender) %>% summarize(count = n())
mean(d$age)
sd(d$age)

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

# add info to full data set
d = full_join(d, color_blindness, by = "submission_id")

# inspect colorblind failures for gravity:

filter(d, color_blind == TRUE, trial_type == "color_blindness_test") %>% 
  select(submission_id, correct, response)

## we do not exlcude anybody for a severe color-blindness

##########################################
# inspect data from training with feedback
##########################################

success_threshold = 0.5

d_training = filter(d, trial_type == "sentence_completion_training")

d_training_summary = d_training %>% 
  mutate(winning_move = ifelse(coplayer_type == "unstrategic", "red", "green"),
         winning_move_chosen = ifelse(winning_move == response, 1, 0),
         loosing_move = ifelse(coplayer_type == "unstrategic", "green", "red"),
         loosing_move_chosen = ifelse(loosing_move == response, 1, 0),
         distractor_move_chosen = ifelse(response == "false", 1, 0)) %>% 
  group_by(submission_id, coplayer_type, condition) %>% 
  summarize(win = mean(winning_move_chosen),
            loose = mean(loosing_move_chosen),
            dstrct = mean(distractor_move_chosen)) %>% 
  ungroup() %>% 
  gather(key = response, value = proportion, win, loose, dstrct) %>% 
  mutate(new_col_names = paste0("train_", condition, "_", response)) %>% 
  select(submission_id, coplayer_type, new_col_names, proportion) %>% 
  spread(key = new_col_names, value = proportion) %>% 
  group_by(submission_id) %>% 
  mutate(
    training_score = mean(c(train_all_win, train_none_win)),
    training_successful = ifelse(training_score > success_threshold, 1, 0)
    ) %>% 
  ungroup()

# show distribution of training scores (average sucess)
d_training_summary %>% ggplot(aes(x = training_score)) + geom_histogram() + facet_grid( ~coplayer_type)

d_training_summary %>% 
  group_by(coplayer_type) %>% 
  summarize(mean_score = mean(training_score))

d = full_join(d, select(d_training_summary, - coplayer_type), by = "submission_id")

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

# e = d %>% filter(tvj_control_fail == 0) %>%
#   select(submission_id,
#          coplayer_type,
#          training_successful,
#          tvj_semprag_type,
#          tvj_control_fail) %>%
#   unique()
# View(e)

##########################################
# plot main data as a function of 
# behavioral types in other parts
##########################################


get_group_plot = function(sp_type = "pragmatic", success = 1) {
  group_data = filter(d, 
                      trial_type == "sentence_completion", 
                      # coplayer_type != "cooperative",
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
  ncol = 2) %>% show()


######################################################
## logistic regression on "win-move player" proportion
######################################################

## for each triple of player, co-player type and sentence
## determine whether the majority choice (> 50%) was the 
## winning move (for that condition)
## --> analyze the proportion of "win-move" players
## as a function of co-player type and sentence


# filter and select the relevant bits for analysis
# code the responses as win/lose/opt_out
d_analysis = filter(d, trial_type == "sentence_completion") %>% 
  filter(training_successful == 1) %>% 
  mutate(
    rsp = relevel(factor(
      ifelse(coplayer_type == "unstrategic",
             case_when(response == "red" ~ "win",
                       response == "green" ~ "lose",
                       TRUE ~ "opt_out"),
             case_when(response == "green" ~ "win",
                       response == "red" ~ "lose",
                       TRUE ~ "opt_out"))),
      ref = "win"),
    condition = relevel(factor(condition), ref = "all"),
    item = number,
    win_move = ifelse(rsp == "win", 1, 0)
  ) %>% 
  select(submission_id, item, coplayer_type, condition, tvj_semprag_type, rsp, win_move)


# threshold of minimal proportion of win-moves a player-condition typle
# needs to be counted as "majority-win-move" choice 
winning_threshold = 0.7

# get the "win-move" proportions
d_win_prop = d_analysis %>% 
  group_by(submission_id, coplayer_type, condition, tvj_semprag_type) %>% 
  summarize(win_move_prop = mean(win_move),
            winner = win_move_prop > winning_threshold)

prior <- c(prior_string("normal(0,10)", class = "b"))
model_win_prop = brm(
  formula = winner ~ coplayer_type * condition * tvj_semprag_type,
  family = "bernoulli",
  data = d_win_prop,
  prior = prior
)

post_samples = posterior_samples(model_win_prop) %>% 
  as_tibble() %>% 
  select( - lp__)
newcolnames = str_replace(names(post_samples), "b_", "") %>% 
  str_replace("condition", "") %>% 
  str_replace("coplayer_type", "") %>% 
  str_replace("tvj_semprag_type", "")
names(post_samples) = newcolnames

bayesplot::mcmc_intervals(post_samples)

# interpretation
# credibly positive intercept -> majority of win-choices overal
# credibly less win choices in competitive condition (coefs 'strategic' and 'unstrategic')
# credibly less win choices for 'ad hoc' -> seems more complicated
# NO credible difference for 'semantic vs pragmatic' but tendency for 'semantic' to be better
# credibly positive interaction between 'strategic' and 'ad hoc' suggesting (not particularly interesting)
# NO credible difference between 'all' and any other sentence condition (except 'ad hoc') so: 'number' and 'some' were
#   equally successful as the semantic conditions (also no further interactions), at this level of analysis



stop()

##########################################
## multinomial regression
##########################################

d_main = filter(d, trial_type == "sentence_completion") %>% 
  mutate(
    rsp = relevel(factor(
      ifelse(coplayer_type == "unstrategic",
             case_when(response == "red" ~ "win",
                       response == "green" ~ "lose",
                       TRUE ~ "opt_out"),
             case_when(response == "green" ~ "win",
                       response == "red" ~ "lose",
                       TRUE ~ "opt_out"))),
      ref = "win"),
    training = relevel(factor(ifelse(training_successful == 1, "success", "failure")), ref = "success"),
    condition = relevel(factor(condition), ref = "all")
  ) %>% 
  select(rsp, coplayer_type, training, condition, tvj_semprag_type)

## frequentist model w/o random effects 

model_freq = multinom(
  rsp ~ coplayer_type + training + condition + tvj_semprag_type,
  data = d_main
)

# model_freq = step(model_freq)

z = summary(model_freq)$coefficients / summary(model_freq)$standard.errors
p = (1- pnorm(abs(z), 0, 1)) * 2

c_df = t(summary(model_freq)$coefficients) %>% as.data.frame() %>% 
  mutate(coefficient = rownames(t(summary(model_freq)$coefficients))) %>% 
  gather(key = "choice_option", value = "estimate", lose, opt_out)

p_df = t(p) %>% as.data.frame() %>% 
  mutate(coefficient = rownames(t(p))) %>% 
  gather(key = "choice_option", value = "p_value", lose, opt_out)

model_freq_summary = full_join(c_df, p_df, by = c("coefficient", "choice_option")) %>% 
  mutate(
    p_value = signif(p_value, 4),
    signif = case_when(p_value < 0.001 ~ "***",
                            p_value < 0.01 ~ "**",
                            p_value < 0.05 ~ "*",
                            TRUE ~ ""))
show(model_freq_summary)


# model_bayes = brm(
#   formula = rsp ~ coplayer_type + training + condition,
#   data = d_main,
#   family = "categorical",
#   prior = c(set_prior ("normal (0, 8)"))
# )


