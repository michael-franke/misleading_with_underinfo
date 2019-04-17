// initialises a babe experiment with babeinit
$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keycode == 32 && e.target == document.body) {
            e.preventdefault();
        }
    };

    // calls babeinit
    babeInit({
        views_seq: [
            intro,
            instructions_general,
            // instructions_color_blindness,
            // color_blindness_test,
            instructions_part1,
            instructions_training_as_guesser,
            training_as_guesser,
            // comprehension_test,
            instructions_training_with_feedback,
            wait_for_player,
            training_with_feedback,
            instructions_begin_test_part_1,
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
            experimentID: "51",
            serverAppURL: "https://mcmpact.ikw.uni-osnabrueck.de/babe/api/submit_experiment/",
            deployMethod: "debug",
            contact_email: "exprag@gmail.com",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=IF03IVF6"
        },
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
                "training_as_guesser",
                "sentence_completion",
                "truth_value_judgements"
            ],
            style: "separate",
            width: 100
        },
    });
});
