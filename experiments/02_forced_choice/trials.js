const practice_trials = {
    forcedChoice: [
        {
            question: "What's on the bread?",
            picture: "images/question_mark_02.png",
            option1: 'jam',
            option2: 'ham'
        },
        {
            question: "What's the weather like?",
            picture: "images/weather.jpg",
            option1: "shiny",
            option2: "rainbow"
        }
    ],
}

const main_trials = {
    multi_dropdown: [
        {
            sentence_chunk_1: "Some of the",
            sentence_chunk_2: "are",
            sentence_chunk_3: "today.",
            choice_options_1: ["cats", "dogs"],
            choice_options_2: ["happy", "hungry", "sad"]
        },
        {
            sentence_chunk_1: "All of the",
            sentence_chunk_2: "will be",
            sentence_chunk_3: "tomorrow.",
            choice_options_1: ["cats", "dogs"],
            choice_options_2: ["happy", "hungry", "sad"]
        }
    ],

    sentence_completion: [
        {
            condition: "number",
            number: "01",
            picture: "01NUM.PNG",
            sentence_fragment: "On the bonus card two of the objects are",
            completions: [
                "blue",     // pragmatic bonus    
                "cups",     // pragmatic no-bonus 
                "pumpkins", // false              
                "green",    // false              
                "objects",  // tautology          
                "clowns"    // non-sense          
            ],
            answer_category: [
                "pragmatic_bonus",
                "pragmatic_no-bonus",
                "false", "false",
                "tautology",
                "nonsense"
            ]
        },
        {
            condition: "number",
            number: "02",
            picture: "02NUM.PNG",
            sentence_fragment: "On the bonus card two of the objects are",
            completions: [
                "socks",        // pragmatic bonus    
                "pink",         // pragmatic no-bonus 
                "blue",         // false              
                "pineapples",   // false              
                "objects",      // tautology          
                "clowns"        // non-sense          
            ],
            answer_category: [
                "pragmatic_bonus",
                "pragmatic_no-bonus",
                "false",
                "false",
                "tautology",
                "nonsense"
            ]
        },
        {
            condition: "number",
            number: "03",
            picture: "03NUM.PNG",
            sentence_fragment: "On the bonus card two of the objects are",
            completions: [
                "yellow",    // pragmatic bonus    
                "saws",      // pragmatic no-bonus 
                "spoons",    // false              
                "blue",      // false              
                "objects",   // tautology          
                "clowns"     // non-sense          
            ],
            answer_category: [
                "pragmatic_bonus",
                "pragmatic_no-bonus",
                "false",
                "false",
                "tautology",
                "nonsense"
            ]
        },
        {
            condition: "number",
            number: "04",
            picture: "04NUM.PNG",
            sentence_fragment: "On the bonus card three of the objects are",
            completions: [
                "ships",    // pragmatic bonus    
                "green",      // pragmatic no-bonus 
                "toasters",    // false              
                "pink",      // false              
                "objects",   // tautology          
                "clowns"     // non-sense          
            ],
            answer_category: [
                "pragmatic_bonus",
                "pragmatic_no-bonus",
                "false",
                "false",
                "tautology",
                "nonsense"
            ]
        },
    ]
}

