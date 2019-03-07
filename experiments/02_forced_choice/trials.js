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
            picture: "images/01NUM.PNG",
            sentence_fragment: "On the bonus card five of the objects are",
            completions: [
                "pumpkins", // pragmatic bonus    
                "blue",     // pragmatic no-bonus 
                "cups",     // false              
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
            picture: "images/02NUM.PNG",
            sentence_fragment: "On the bonus card five of the objects are",
            completions: [
                "pineapples",   // pragmatic bonus    
                "pink",         // pragmatic no-bonus 
                "blue",         // false              
                "socks",        // false              
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
            picture: "images/03NUM.PNG",
            sentence_fragment: "On the bonus card five of the objects are",
            completions: [
                "blue",      // pragmatic bonus    
                "spoons",    // pragmatic no-bonus 
                "saws",      // false              
                "yellow",    // false              
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
            picture: "images/04NUM.PNG",
            sentence_fragment: "On the bonus card six of the objects are",
            completions: [
                "green",     // pragmatic bonus    
                "toasters",  // pragmatic no-bonus 
                "pink",      // false              
                "ships",     // false              
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
            number: "05",
            picture: "images/05NUM.PNG",
            sentence_fragment: "On the bonus card six of the objects are",
            completions: [
                "green",     // pragmatic bonus    
                "pears",     // pragmatic no-bonus 
                "yellow",    // false              
                "buckets",   // false              
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
            number: "06",
            picture: "images/06NUM.PNG",
            sentence_fragment: "On the bonus card six of the objects are",
            completions: [
                "bathtubs",  // pragmatic bonus    
                "pink",      // pragmatic no-bonus 
                "candles",   // false              
                "yellow",    // false              
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

