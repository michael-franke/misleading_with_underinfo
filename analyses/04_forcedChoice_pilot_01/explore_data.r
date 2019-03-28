library(tidyverse)

d = read_csv('data/04_forcedChoice_pilot_01/data_raw.csv') %>% 
  filter(! prolific_id %in% c("Nausicaa", "test by MF"))
