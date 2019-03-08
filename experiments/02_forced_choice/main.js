// initialises a babe experiment with babeInit
$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode == 32 && e.target == document.body) {
            e.preventDefault();
        }
    };

    // calls babeInit
    babeInit({
        views_seq: [
            intro,
            instructions_general,
            instructions_color_blindness,
            color_blindness_test,
            instructions_part1,
            comprehension_test,
            sentence_completion,
            instructions_self_assessment,
            performance_rating,
            instructions_part2,
            truth_value_judgements,
            instructionsPostTest,
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
                "sentence_completion",
                "truth_value_judgements"
            ],
            style: "separate",
            width: 100
        },
    });
});
