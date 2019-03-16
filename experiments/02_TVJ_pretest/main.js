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
            // instructions_general,
            // instructions_color_blindness,
            // color_blindness_test,
            // instructions_part1,
            // comprehension_test,
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
            experimentID: "42",
            serverAppURL: "https://mcmpact.ikw.uni-osnabrueck.de/babe/api/submit_experiment/",
            deployMethod: "Prolific",
            contact_email: "the.secret.goldfish@me.com",
            prolificURL: "testme"
        },
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
                "truth_value_judgements"
            ],
            style: "separate",
            width: 100
        },
    });
});
