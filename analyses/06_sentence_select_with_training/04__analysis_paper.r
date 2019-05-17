library(tidyverse)
library(cowplot)
library (brms)
options (mc.cores=parallel::detectCores ()) # Run on multiple cores
# library(nnet)
# devtools::install_github('michael-franke/bayes_mixed_regression_tutorial/faintr', build_vignettes = TRUE)
library(faintr)

source('04_a_data_preparation.r')
source('04_b_plotting.r')
source('04_c_analyses.r')

