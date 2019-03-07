const instructions_custom = function(config) {
    const instructions_custom = {
        name: config.name,
        title: babeUtils.view.setter.title(config.title, "Instructions"),
        button: babeUtils.view.setter.buttonText(config.buttonText),
        render: function(CT, babe) {

            const between_subjects_condition = _.shuffle(["cooperative", "competitive"])[0];
            const cooperative_description = "This is a <strong>cooperative game</strong> with two players: a describer and a guesser. You are to play as the describer. Another participant will later see the answer you give here and finish the game in the role of the guesser. This will happen in a later, separate experiment. <br><br> In each round of the game you'll see two cards. One of the cards is the <strong>bonus card, marked by a green border</strong>. The guesser will later see the same two cards (possibly in another spatial arrangement), but will not know which one is the bonus card. Your goal is to <strong>complete a description of the bonus card by selecting one word from a drop-down menu</strong>, in such a way as <strong>to enable the guesser to guess the bonus card</strong>. The guesser will know that this is a cooperative game but they don't know that you are completing the descriptions instead of writing them freely. You can choose whichever sentence completion you like, but remember that you're helping the guesser, so your goal is to make them find the bonus card (which is circled in green for you, but not for the guesser). </br>";
            const competitive_description =  "This is a <strong>competitive game</strong> with two players: a describer and a guesser. You are to play as the describer. Another participant will later see the answer you give here and finish the game in the role of the guesser. This will happen in a later, separate experiment. <br><br> In each round of the game you'll see two cards. One of the cards is the <strong>bonus card, marked by a green border</strong>. The guesser will later see the same two cards (possibly in another spatial arrangement), but will not know which one is the bonus card. The guesser wins if they guess the bonus card, and you win if they do not. Your goal is therefore to <strong>complete a description of the bonus card by selecting one word from a drop-down menu</strong>, in such a way as <strong>to make the guesser guess the other card, not the bonus card</strong>. The guesser will know that this is a competitive game but they don't know that you are completing the descriptions instead of writing them freely. You can choose whichever sentence completion you like, but remember that you're trying to mislead the guesser, so your goal is to make them not choose the bonus card (which is circled in green for you, but not for the guesser). </br>";

            console.log("This is a run of the " + between_subjects_condition + " condition.")

            // add information about current randomly sampled condition to babe global data object
            babe.global_data.condition = between_subjects_condition;

            const text = between_subjects_condition == "cooperative" ? cooperative_description : competitive_description;

            const viewTemplate = `<div class="babe-view">
                <h1 class='babe-view-title'>${this.title}</h1>
                <section class="babe-text-container">
                    <p class="babe-view-text">${text}</p>
                </section>
                <button id="next" class='babe-view-button'>${
                    this.button
                }</button>
            </div>`;

            $("#main").html(viewTemplate);

            // moves to the next view
            $("#next").on("click", function() {
                babe.findNextView();
            });
        },
        CT: 0,
        trials: config.trials
    };

    return instructions_custom;
};


const sentence_completion_type = function(config) {
    const dropdownChoice = {
        name: config.name,
        title: babeUtils.view.setter.title(config.title, ""),
        render: function(CT, babe) {
            console.log(babe.mfhello);
            let startingTime;
            const cooperative_QUD = "Select a word to enable the guesser to choose the bonus card! <br> (Remember that the bonus card is marked in green.)";
            const competitive_QUD = "Select a word to make the guesser not choose the bonus card! <br> (Remember that the bonus card is marked in green.)";
            const QUD_text = babe.global_data.condition == "cooperative" ? cooperative_QUD : competitive_QUD;
            const QUD = babeUtils.view.setter.QUD(QUD_text);
            const sentence_fragment = config.data[CT].sentence_fragment;
            const completions_shuffle_index = _.shuffle([0, 1, 2, 3, 4, 5]);
            const option1 = config.data[CT].completions[completions_shuffle_index[0]];
            const option2 = config.data[CT].completions[completions_shuffle_index[1]];
            const option3 = config.data[CT].completions[completions_shuffle_index[2]];
            const option4 = config.data[CT].completions[completions_shuffle_index[3]];
            const option5 = config.data[CT].completions[completions_shuffle_index[4]];
            const option6 = config.data[CT].completions[completions_shuffle_index[5]];
            const answer_category1 = config.data[CT].answer_category[completions_shuffle_index[0]];
            const answer_category2 = config.data[CT].answer_category[completions_shuffle_index[1]];
            const answer_category3 = config.data[CT].answer_category[completions_shuffle_index[2]];
            const answer_category4 = config.data[CT].answer_category[completions_shuffle_index[3]];
            const answer_category5 = config.data[CT].answer_category[completions_shuffle_index[4]];
            const answer_category6 = config.data[CT].answer_category[completions_shuffle_index[5]];
            const viewTemplate = `<div class='babe-view'>
            <h1 class='babe-view-title'>${this.title}</h1>
            <div class='babe-view-stimulus-container'>
                <div class='babe-view-stimulus babe-nodisplay'></div>
            </div>
            <p class='babe-view-question babe-view-qud' style='background-color:lightgray'>${QUD}</p>
        </div>`;

            const answerContainerElem = `<div class='babe-view-answer-container babe-response-dropdown'>
            ${sentence_fragment}
            <select id='response' name='answer'>
                <option disabled selected></option>
                <option value=${answer_category1}>${option1}</option>
                <option value=${answer_category2}>${option2}</option>
                <option value=${answer_category3}>${option3}</option>
                <option value=${answer_category4}>${option4}</option>
                <option value=${answer_category5}>${option5}</option>
                <option value=${answer_category6}>${option6}</option>
            </select> .
            </p>
            <button id='next' class='babe-view-button babe-nodisplay'>Next</button>
        </div>`;

            $("#main").html(viewTemplate);

            const enableResponse = function() {
                let response;

                $(".babe-view").append(answerContainerElem);

                response = $("#response");

                response.on("change", function() {
                    $("#next").removeClass("babe-nodisplay");
                });

                $("#next").on("click", function() {
                    const RT = Date.now() - startingTime; // measure RT before anything else
                    const trial_data = {
                        trial_type: config.trial_type,
                        trial_number: CT + 1,
                        response: $(response).val(),
                        RT: RT
                    };

                    for (let prop in config.data[CT]) {
                        if (config.data[CT].hasOwnProperty(prop)) {
                            trial_data[prop] = config.data[CT][prop];
                        }
                    }

                    if (config.data[CT].picture !== undefined) {
                        trial_data.picture = config.data[CT].picture;
                    }

                    if (config.data[CT].canvas !== undefined) {
                        for (let prop in config.data[CT].canvas) {
                            if (
                                config.data[CT].canvas.hasOwnProperty(prop)
                            ) {
                                trial_data[prop] =
                                    config.data[CT].canvas[prop];
                            }
                        }
                    }

                    babe.trial_data.push(trial_data);
                    babe.findNextView();
                });
            };

            startingTime = Date.now();

            // creates the DOM of the trial view
            babeUtils.view.createTrialDOM({
                    pause: config.pause,
                    fix_duration: config.fix_duration,
                    stim_duration: config.stim_duration,
                    data: config.data[CT],
                    evts: config.hook,
                    view: "dropdownChoice"
                },
                enableResponse
            );
        },
        CT: 0,
        trials: config.trials
    };

    return dropdownChoice;
};

const sentence_completion = sentence_completion_type({
    trials: 2,
    name: 'dropdown_choice',
    trial_type: 'dropdown_choice_main',
    data: _.shuffle(main_trials.sentence_completion)
});

const instructions_mf = instructions_custom({
    trials: 1,
    name: 'instructions',
    title: 'General Instructions',
    buttonText: 'start training phase'
});
