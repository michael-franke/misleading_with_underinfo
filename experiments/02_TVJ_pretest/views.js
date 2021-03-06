/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

* More about the properties and functions of the wrapping views - https://github.com/babe-project/babe-project/blob/master/docs/views.md#wrapping-views-properties

*/

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

const instructions = babeViews.instructions({
    trials: 1,
    name: 'instrucions',
    title: 'General Instructions',
    text: `This is a sample instructions view.
            <br />
            <br />
            Tell your participants what they are to do here.`,
    buttonText: 'go to forced choice trials'
});

const instructionsPostTest = babeViews.instructions({
    trials: 1,
    name: 'instructions_post_test',
    title: 'Post Questionnaire',
    text: `Thank you! You are done with the main experiment. We only have a few questions left for you. Answering these is voluntary but may help us greatly.`
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

/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
    - trial_type: string - the name of the trial type as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
        More about trial life cycle - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-lifecycle

    - hook: object - option to hook and add custom functions to the view
        More about hooks - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-hooks

* All about the properties of trial - https://github.com/babe-project/babe-project/blob/master/docs/views.md#properties-of-trial
*/

const instructions_self_assessment = babeViews.instructions({
    trials: 1,
    name: 'instructions_self_assessment',
    title: 'You have almost completed part 1 of the experiment',
    text: 'Before we move on to part 2, we would like to ask you one simple question, about how you estimate your own performance so far.'
});

const instructions_general = babeViews.instructions({
    trials: 1,
    name: 'instructions_general',
    title: 'General instructions',
    text: 'This experiment has two parts. It will last approximately XXX minutes. We will start with a color blindness test. yadda yadda.'
});

const instructions_part2 = babeViews.instructions({
    trials: 1,
    name: 'instructions_part2',
    title: 'Instructions',
    text: 'You will now read ' + main_trials.truth_value_judgements.length +  ' sentences. Your task is to evaluate whether each sentence is true or false. Just base your decisions on your general knowledge. If you are unsure about how to evaluate a sentence, give us your best guess.'
});

const instructions_color_blindness = babeViews.instructions({
    trials: 1,
    name: 'instructions_color_blindness',
    title: 'Color Blindness Test',
    text: 'It is important for this experiment that you can perceive and distinguish colors sufficiently well. Therefore, you will next see three instances of a standard color vision test. Please enter the number you see in each picture in the text box. If you do not see a number, please write that you do not.'
});

const truth_value_judgements = babeViews.forcedChoice({
    trials: main_trials.truth_value_judgements.length,
    name: "truth_value_judgements",
    trial_type: "truth_value_judgements",
    title: "True or false?",
    data: _.shuffle(main_trials.truth_value_judgements)
})

const comprehension_test = babeViews.forcedChoice({
    trials: practice_trials.comprehension_checks.length,
    name: "comprehension_test",
    trial_type: "comprehension_test", 
    title: "Comprehension checks",
    data: practice_trials.comprehension_checks
})

const color_blindness_test = babeViews.textboxInput({
    trials: 3,
    name: "color_blindeness_test",
    trial_type: "color_blindness_test",
    data: _.shuffle(main_trials.color_blindness_test)
});

