const sentence_completion_type = function(config) {
    const dropdownChoice = {
        name: config.name,
        title: babeUtils.view.setter.title(config.title, ""),
        render: function(CT, babe) {
            let startingTime;
            console.log("huhu");
            const QUD = babeUtils.view.setter.QUD(config.data[CT].QUD);
            const sentence_fragment = config.data[CT].sentence_fragment;
            const completions_shuffle_index = _.shuffle([0,1,2,3,4,5]);
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
                <p class='babe-view-question babe-view-qud'>${QUD}</p>
                <div class='babe-view-stimulus-container'>
                    <div class='babe-view-stimulus babe-nodisplay'></div>
                </div>
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
            babeUtils.view.createTrialDOM(
                {
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
    trials: 3,
    name: 'dropdown_choice',
    trial_type: 'dropdown_choice_main',
    data: main_trials.sentence_completion
});


