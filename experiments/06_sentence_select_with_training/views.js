const intro = babeViews.intro({
    trials: 1,
    name: 'intro',
    text: `Thank you for taking part in this experiment.
            <br />
            <br />
            Your participation is voluntary. You may quit the experiment at any time. 
            <br />
            <br />
            Data from this experiment will be used anonymously by researchers from the University of Osnabr&uuml;ck and University College London. Your data might be shared with other researchers. But it will not be used for commercial purposes.`,
    buttonText: 'begin the experiment'
});

const instructions_general = babeViews.instructions({
    trials: 1,
    name: 'instructions_general',
    title: 'General instructions',
    text: '<strong>This experiment will last approximately 15 minutes in total</strong>. There are two parts. The first part is an interactive game where you will be playing with another human player, who will also be recruited from Prolific. The second part will be performed alone, but it is equally important. <br><br> Since <strong>this experiment involves playing together with another human player</strong>, we need to ask you for some patience. It may take some time for another player to be found and paired with you (on average about  1 minute) and it may take time for the other player to make decisions. Also, for your co-player\'s benefit, it would be nice for you to: <br> * do not abandon the experiment unnecessarily beyond this point, <br> * read the instructions carefully, <br> * play the game as well as you can, and <br> * finish the whole experiment eventually. <br> <br> Thank you very much for your understanding!'
});

const instructions_color_blindness = babeViews.instructions({
    trials: 1,
    name: 'instructions_color_blindness',
    title: 'Color Blindness Test',
    text: 'It is important for this experiment that you can perceive and distinguish colors sufficiently well. Therefore, you will next see three instances of a standard color vision test. Please enter the number you see in each picture in the text box. If you do not see a number, please write that you do not.'
});

const color_blindness_test = babeViews.textboxInput({
    trials: 3,
    name: "color_blindeness_test",
    trial_type: "color_blindness_test",
    data: _.shuffle(main_trials.color_blindness_test)
});

const instructions_part1 = instructions_custom({
    trials: 1,
    name: 'instructions part 1',
    title: 'Instructions for Part 1',
    buttonText: 'continue'
});

const comprehension_test = babeViews.forcedChoice({
    trials: practice_trials.comprehension_checks.length,
    name: "comprehension_test",
    trial_type: "comprehension_test", 
    title: "Comprehension checks",
    data: practice_trials.comprehension_checks
})

const wait_for_player = waiting_custom({
    trials: 1,
    name: 'waiting',
    title: "Waiting",
    buttonText: 'start play'
})

const training_with_feedback = sentence_completion_with_feedback_type({
    // trials: 2,
    trials: main_trials.sentence_completion.length,
    name: 'sentence_completion',
    trial_type: 'sentence_completion',
    data: _.shuffle(main_trials.sentence_completion)
});

const sentence_completion = sentence_completion_type({
    // trials: 2,
    trials: main_trials.sentence_completion.length,
    name: 'sentence_completion',
    trial_type: 'sentence_completion',
    data: _.shuffle(main_trials.sentence_completion)
});

const instructions_self_assessment = babeViews.instructions({
    trials: 1,
    name: 'instructions_self_assessment',
    title: 'You have almost completed part 1 of the experiment',
    text: 'Before we move on to part 2, we would like to ask you one simple question, about how you estimate your own performance so far.'
});

const performance_rating = slider_rating_custom_type({
    trials: 1,
    name: 'performance_rating',
    trial_type: 'performance_rating',
    title: "Estimate your own performance",
    data: [{
        optionLeft: "0%",
        optionRight: "100%"
    }]
});

const instructions_part2 = babeViews.instructions({
    trials: 1,
    name: 'instructions_part2',
    title: 'Instructions part 2',
    text: "We are about to enter the second part of this experiment. <br><br> <strong>We are interested in finding out what you believe about the person you just played with</strong>. Therefore, you will now read " + main_trials.truth_value_judgements.length +  " sentences. For each of these sentences, your task is to <strong>decide whether the person you just played with will consider the sentence true or false</strong>. So, to be clear: we are not asking for your own opinion about the truth of falsity of these sentences. We are interested in your beliefs about what the other player will say. (Of course, it is possible that you think that the other player will judge a sentence just like you do. This, however, is not necessarily always the case.) <br><br> You can answer by pressing buttons labeled 'true' and 'false'. But before these buttons appear there is a pause. Please use this pause to <strong>carefully think about your answer</strong>, as some sentences might not be too obviously true or false. <strong>Please do not take this task lightly! It is very important for us that you think about your choice with care.</strong>"
});

const truth_value_judgements = forcedChoice_pause({
    // trials: 2,
    trials: main_trials.truth_value_judgements.length,
    name: "truth_value_judgements",
    trial_type: "truth_value_judgements",
    title: "Will the other player judge this sentence as true or false?",
    data: _.shuffle(main_trials.truth_value_judgements),
    stim_duration: 5000
})

const instructionsPostTest = babeViews.instructions({
    trials: 1,
    name: 'instructions_post_test',
    title: 'Almost done',
    text: `Thank you so much for your participation! The experimental parts are over. Please finish the experiment by telling us a bit more about yourself if you are so kind. <br> <br> Before you proceed, we need to tell you that this experiment used a technique called <strong>deliberate deceit</strong>. You have not actually been playing against a human participant. But it was crucial for this experiment that you temporarily believed that you did. We apologize for "playing tricks" in this way and sincerely hope you are not offended. In order to show our respect for your kind help, we will pay the maximum promised bonus of 0.75 pounds irrespective of your answers in part 1.`
});

// the post questionnaire can be translated
const post_test = babeViews.postTest({
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'Answering the following questions is optional, but your answers will help us analyze our results.'
});

// the 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.thanks({
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});


