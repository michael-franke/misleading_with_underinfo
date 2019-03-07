// initialises a babe experiment with babeInit
$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode == 32 && e.target == document.body) {
            e.preventDefault();
        }
    };

    // adjust the instructions text depending on whether the cooperative or competitive condition is played

    const between_subjects_condition = _.shuffle(["cooperative", "competitive"])[0];

    console.log("This is a run of in the " + between_subjects_condition + " condition.")

    const instructions = babeViews.instructions({
        trials: 1,
        name: 'instrucions',
        title: 'General Instructions',
        text:  between_subjects_condition == "cooperative" ?
            // cooperative condition
            "foo"
            :
            "bar",
        buttonText: 'go to forced choice trials'
    });

    // calls babeInit
    babeInit({
        views_seq: [
            intro,
            instructions,
            sentence_completion,
            // instructionsPostTest,
            post_test,
            thanks,
        ],
        deploy: {
            experimentID: "INSERT_A_NUMBER",
            serverAppURL: "https://babe-demo.herokuapp.com/api/submit_experiment/",
            deployMethod: "debug",
            contact_email: "YOUREMAIL@wherelifeisgreat.you",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
                "task_one",
                "task_two"
            ],
            style: "separate",
            width: 100
        },
    });
});
