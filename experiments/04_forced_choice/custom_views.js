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
            const cooperative_QUD = "Look at the picture. Then read the sentence and complete it so as to enable the guesser to choose the bonus card (marked in green)!";
            const competitive_QUD = "Look at the picture. Then read the sentence and complete it so as to make the guesser <strong>not</strong> choose the bonus card (marked in green)!";
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
            <p class='babe-view-question babe-view-qud' style='font-size:90%;color:gray;'>${QUD}</p>
            <div class='babe-view-stimulus-container-custom'>
                <div class='babe-view-stimulus babe-nodisplay'></div>
            </div>

        </div>`;

        //     const answerContainerElem = `<div class='babe-view-answer-container babe-response-dropdown'>
        //     ${sentence_fragment}
        //     <select id='response' name='answer'>
        //         <option disabled selected></option>
        //         <option value=${answer_category1}>${option1}</option>
        //         <option value=${answer_category2}>${option2}</option>
        //         <option value=${answer_category3}>${option3}</option>
        //         <option value=${answer_category4}>${option4}</option>
        //         <option value=${answer_category5}>${option5}</option>
        //         <option value=${answer_category6}>${option6}</option>
        //     </select> .

        //     </p>
        //     <button id='next' class='babe-view-button babe-nodisplay'>Next</button>
        // </div>`;

            const answerContainerElem = `
                    <div class='babe-view-answer-container'>
                        <p class='babe-view-question' style='background-color:lightgray;font-size:120%;'><strong>${sentence_fragment} ... </strong></p>
                        <table style="margin: 0px auto;">
                         <tr>
                           <td style='width: 150px'>
                            <label for='s1' class='babe-response-sentence'>${option1}</label>
                            <input type='radio' name='answer' id='s1' value="${answer_category1}" />
                           </td>
                           <td style='width: 150px'>
                            <label for='s2' class='babe-response-sentence'>${option2}</label>
                            <input type='radio' name='answer' id='s2' value="${answer_category2}" />
                           </td>
                           <td style='width: 150px'>
                            <label for='s3' class='babe-response-sentence'>${option3}</label>
                            <input type='radio' name='answer' id='s3' value="${answer_category3}" />
                           </td>
                         </tr>
                         <tr>
                           <td style='width: 150px'>
                            <label for='s4' class='babe-response-sentence'>${option4}</label>
                            <input type='radio' name='answer' id='s4' value="${answer_category4}" />
                           </td>
                           <td style='width: 150px'>
                            <label for='s5' class='babe-response-sentence'>${option5}</label>
                            <input type='radio' name='answer' id='s5' value="${answer_category5}" />
                           </td>
                           <td style='width: 150px'>
                            <label for='s6' class='babe-response-sentence'>${option6}</label>
                            <input type='radio' name='answer' id='s6' value="${answer_category6}" />
                           </td>
                         </tr>
                        </table>
                    </div>`;


            $("#main").html(viewTemplate);

            const enableResponse = function() {
                $(".babe-view").append(answerContainerElem);

                $("input[name=answer]").on("change", function(e) {
                    var RT = Date.now() - startingTime; // measure RT before anything else
                    var trial_data = {
                        trial_type: config.trial_type,
                        trial_number: CT + 1,
                        response: e.target.value,
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

const slider_rating_custom_type = function(config) {
    babeUtils.view.inspector.missingData(config, "slider rating");
    babeUtils.view.inspector.params(config, "slider rating");
    const sliderRating = {
        name: config.name,
        title: babeUtils.view.setter.title(config.title, ""),
        render: function(CT, babe) {
            let startingTime;
            const question = babeUtils.view.setter.question(
                config.data[CT].question
            );
            const QUD = babeUtils.view.setter.QUD(config.data[CT].QUD);
            const option1 = config.data[CT].optionLeft;
            const option2 = config.data[CT].optionRight;
            const viewTemplate = `<div class='babe-view'>
                <h1 class='babe-view-title'>${this.title}</h1>
                <p class='babe-view-question babe-view-QUD'>${QUD}</p>
                <div class='babe-view-stimulus-container'>
                    <div class='babe-view-stimulus babe-nodisplay'></div>
                </div>
            </div>`;

            const answerContainerElem = `<p class='babe-view-question'>${question}</p>
            <div class='babe-view-answer-container'>
                <span class='babe-response-slider-option'>${option1}</span>
                <input type='range' id='response' class='babe-response-slider' min='0' max='100' value='50'/>
                <span class='babe-response-slider-option'>${option2}</span>
	              <p class = 'babe-view-question'>selected percentage: <output>50</output>%</div>
            </div>
            <button id="next" class='babe-view-button babe-nodisplay'>Next</button>`;

            $("#main").html(viewTemplate);

            const enableResponse = function() {
                let response;

                $(".babe-view").append(answerContainerElem);

                response = $("#response");
                // checks if the slider has been changed
                response.on("change", function() {
                    $("#next").removeClass("babe-nodisplay");
                    $('output')[0].innerHTML = _.round(response.val());
                });
                response.on("click", function() {
                    $("#next").removeClass("babe-nodisplay");
                    $('output')[0].innerHTML = _.round(response.val());
                });

                $("#next").on("click", function() {
                    const RT = Date.now() - startingTime; // measure RT before anything else
                    const trial_data = {
                        trial_type: config.trial_type,
                        trial_number: CT + 1,
                        response: response.val(),
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
                    view: "sliderRating"
                },
                enableResponse
            );
        },
        CT: 0,
        trials: config.trials
    };

    return sliderRating;
}

const sentence_completion = sentence_completion_type({
    // trials: 2,
    trials: main_trials.sentence_completion.length,
    name: 'sentence_completion',
    trial_type: 'sentence_completion',
    data: _.shuffle(main_trials.sentence_completion)
});

const instructions_part1 = instructions_custom({
    trials: 1,
    name: 'instructions part 1',
    title: 'Instructions for Part 1',
    buttonText: 'start training phase'
});

const performance_rating = slider_rating_custom_type({
    trials: 1,
    name: 'performance_rating',
    trial_type: 'performance_rating',
    title: "Estimate your own performance",
    data: [{
        optionLeft: "0%",
        optionRight: "100%",
        question: "Given the descriptions you selected, what percentage of the time do you think the guesser will be able to select the bonus card?"
    }]
});
