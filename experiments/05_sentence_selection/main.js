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
            // comprehension_test,
            // wait_for_player,
            // sentence_completion,
            // instructions_self_assessment,
            // performance_rating,
            instructions_part2,
            truth_value_judgements,
            instructionsPostTest,
            post_test,
            thanks,
        ],
        deploy: {
            experimentID: "50",
            serverAppURL: "https://mcmpact.ikw.uni-osnabrueck.de/babe/api/submit_experiment/",
            deployMethod: "debug",
            contact_email: "exprag@gmail.com",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=ADL8OZB3"
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
