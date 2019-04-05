const practice_trials = {
        comprehension_checks : [
            {
                question: "Which color is the box surrounding the bonus card?",
                option1: "red",
                option2: "green"
            },
            {
                question: "Are you allowed to select words that make the whole descriptions false?",
                option1: "yes",
                option2: "no"
            },
            {
                question: "Is your goal to help the guesser find the bonus card, or should you mislead the guesser to pick the other card instead?",
                option1: "help",
                option2: "mislead"
            }
        ]
}

const main_trials = {
    color_blindness_test : [
        {
            picture: "images/Plate1.png",
            question: "Please type the number you see in the picture above into the textbox. Please write 'none' if you do not see anything?",
            min_chars: 0,
            correct: 12
        },
        {
            picture: "images/Plate13.png",
            question: "Please type the number you see in the picture above into the textbox. Please write 'none' if you do not see anything?",
            min_chars: 0,
            correct: 73,
        },
        {
            picture: "images/Plate9.png",
            question: "Please type the number you see in the picture above into the textbox. Please write 'none' if you do not see anything?",
            min_chars: 0,
            correct: 45
        }
    ],

    sentence_completion : [
        {
            condition: "some",
            number: "07",
            picture: "images/01SOME.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>some</strong> of the objects are <strong>pink</strong>",
                "<strong>some</strong> of the objects are <strong>keys</strong>",
                "<strong>all</strong> of the objects are <strong>clowns</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        }
    ],

    sentence_completion_real : [
        // condition ::: NUMBER
        {
            condition: "number",
            number: "01",
            picture: "images/01NUM.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "pumpkins", // pragmatic bonus    
                "blue",     // pragmatic no-bonus 
                "mugs",     // false              
                "green",    // false              
                "objects",  // tautology          
                "clowns"    // non-sense          
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "number",
            number: "02",
            picture: "images/02NUM.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "pineapples",   // pragmatic bonus    
                "pink",         // pragmatic no-bonus 
                "blue",         // false              
                "socks",        // false              
                "objects",      // tautology          
                "clowns"        // non-sense          
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "number",
            number: "03",
            picture: "images/03NUM.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "blue",      // pragmatic bonus    
                "spoons",    // pragmatic no-bonus 
                "saws",      // false              
                "yellow",    // false              
                "objects",   // tautology          
                "clowns"     // non-sense          
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "number",
            number: "04",
            picture: "images/04NUM.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "green",     // pragmatic bonus    
                "toasters",  // pragmatic no-bonus 
                "pink",      // false              
                "boats",     // false              
                "objects",   // tautology          
                "clowns"     // non-sense          
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "number",
            number: "05",
            picture: "images/05NUM.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "green",     // pragmatic bonus    
                "pears",     // pragmatic no-bonus 
                "yellow",    // false              
                "buckets",   // false              
                "objects",   // tautology          
                "clowns"     // non-sense          
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "number",
            number: "06",
            picture: "images/06NUM.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "bathtubs",  // pragmatic bonus    
                "pink",      // pragmatic no-bonus 
                "candles",   // false              
                "yellow",    // false              
                "objects",   // tautology          
                "clowns"     // non-sense          
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        // condition ::: SOME
        {
            condition: "some",
            number: "07",
            picture: "images/07SOME.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "pink",      // pragmatic bonus    
                "keys",      // pragmatic no-bonus 
                "bowties",   // false              
                "green",     // false              
                "objects",   // tautology          
                "clowns"     // non-sense          
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "some",
            number: "08",
            picture: "images/08SOME.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "lamps",      // pragmatic bonus    
                "yellow",     // pragmatic no-bonus 
                "green",      // false              
                "phones",     // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "some",
            number: "09",
            picture: "images/09SOME.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "yellow",     // pragmatic bonus    
                "flags",      // pragmatic no-bonus 
                "pink",       // false              
                "sandwiches", // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "some",
            number: "10",
            picture: "images/10SOME.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "beds",       // pragmatic bonus    
                "blue",       // pragmatic no-bonus 
                "donuts",     // false              
                "green",      // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "some",
            number: "11",
            picture: "images/11SOME.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "pink",       // pragmatic bonus    
                "books",      // pragmatic no-bonus 
                "hammers",    // false              
                "blue",       // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "some",
            number: "12",
            picture: "images/12SOME.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "flowers",    // pragmatic bonus    
                "blue",       // pragmatic no-bonus 
                "yellow",     // false              
                "scissors",   // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        // condition :: AD HOC
        {
            condition: "ad_hoc",
            number: "13",
            picture: "images/13HOC.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "blue",       // pragmatic bonus    
                "kites",      // pragmatic no-bonus 
                "green",      // false              
                "benches",    // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "ad_hoc",
            number: "14",
            picture: "images/14HOC.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "crowns",     // pragmatic bonus    
                "blue",       // pragmatic no-bonus 
                "pink",       // false              
                "pistols",    // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "ad_hoc",
            number: "15",
            picture: "images/15HOC.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "yellow",     // pragmatic bonus    
                "forks",      // pragmatic no-bonus 
                "blue",       // false              
                "leaves",     // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "ad_hoc",
            number: "16",
            picture: "images/16HOC.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "vases",      // pragmatic bonus    
                "pink",       // pragmatic no-bonus 
                "green",      // false              
                "diamonds",   // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "ad_hoc",
            number: "17",
            picture: "images/17HOC.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "green",      // pragmatic bonus    
                "apples",      // pragmatic no-bonus 
                "guitars",     // false              
                "yellow",     // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "ad_hoc",
            number: "18",
            picture: "images/18HOC.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "pink",        // pragmatic bonus    
                "bells",       // pragmatic no-bonus 
                "yellow",      // false              
                "hourglasses", // false              
                "objects",     // tautology          
                "clowns"       // non-sense          
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        // condition ::: NONE
        {
            condition: "none",
            number: "19",
            picture: "images/19NONE.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>none</strong> of the objects are <strong>green</strong>",
                "<strong>none</strong> of the objects are <strong>pink</strong>",
                "<strong>some</strong> of the objects are <strong>clowns</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "none",
            number: "20",
            picture: "images/20NONE.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>none</strong> of the objects are <strong>cakes</strong>",
                "<strong>none</strong> of the objects are <strong>teapots</strong>",
                "<strong>some</strong> of the objects are <strong>clowns</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "none",
            number: "21",
            picture: "images/21NONE.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>none</strong> of the objects are <strong>pink</strong>",
                "<strong>none</strong> of the objects are <strong>yellow</strong>",
                "<strong>some</strong> of the objects are <strong>clowns</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "none",
            number: "22",
            picture: "images/22NONE.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>none</strong> of the objects are <strong>kettles</strong>",
                "<strong>none</strong> of the objects are <strong>bananas</strong>",
                "<strong>some</strong> of the objects are <strong>clowns</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "none",
            number: "23",
            picture: "images/23NONE.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>none</strong> of the objects are <strong>blue</strong>",
                "<strong>none</strong> of the objects are <strong>pink</strong>",
                "<strong>some</strong> of the objects are <strong>clowns</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "none",
            number: "24",
            picture: "images/24NONE.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>none</strong> of the objects are <strong>pans</strong>",
                "<strong>none</strong> of the objects are <strong>jars</strong>",
                "<strong>some</strong> of the objects are <strong>clowns</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "none",
            number: "25",
            picture: "images/25NONE.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>none</strong> of the objects are <strong>blue</strong>",
                "<strong>none</strong> of the objects are <strong>green</strong>",
                "<strong>some</strong> of the objects are <strong>clowns</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "none",
            number: "26",
            picture: "images/26NONE.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>none</strong> of the objects are <strong>cars</strong>",
                "<strong>none</strong> of the objects are <strong>sofas</strong>",
                "<strong>some</strong> of the objects are <strong>clowns</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "none",
            number: "27",
            picture: "images/27NONE.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>none</strong> of the objects are <strong>blue</strong>",
                "<strong>none</strong> of the objects are <strong>yellow</strong>",
                "<strong>some</strong> of the objects are <strong>clowns</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        // condition ::: ALL
        {
            condition: "all",
            number: "28",
            picture: "images/28ALL.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>all</strong> of the objects are <strong>umbrellas</strong>",
                "<strong>all</strong> of the objects are <strong>rockets</strong>",
                "<strong>some</strong> of the objects are <strong>clowns</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "all",
            number: "29",
            picture: "images/29ALL.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>all</strong> of the objects are <strong>green</strong>",
                "<strong>all</strong> of the objects are <strong>yellow</strong>",
                "<strong>some</strong> of the objects are <strong>clowns</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "all",
            number: "30",
            picture: "images/30ALL.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>all</strong> of the objects are <strong>shoes</strong>",
                "<strong>all</strong> of the objects are <strong>trophies</strong>",
                "<strong>some</strong> of the objects are <strong>clowns</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "all",
            number: "31",
            picture: "images/31ALL.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>all</strong> of the objects are <strong>pink</strong>",
                "<strong>all</strong> of the objects are <strong>green</strong>",
                "<strong>some</strong> of the objects are <strong>clowns</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "all",
            number: "32",
            picture: "images/32ALL.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>all</strong> of the objects are <strong>drums</strong>",
                "<strong>all</strong> of the objects are <strong>tents</strong>",
                "<strong>some</strong> of the objects are <strong>clowns</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "all",
            number: "33",
            picture: "images/33ALL.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>all</strong> of the objects are <strong>yellow</strong>",
                "<strong>all</strong> of the objects are <strong>pink</strong>",
                "<strong>some</strong> of the objects are <strong>clowns</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "all",
            number: "34",
            picture: "images/34ALL.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>all</strong> of the objects are <strong>trumpets</strong>",
                "<strong>all</strong> of the objects are <strong>carrots</strong>",
                "<strong>some</strong> of the objects are <strong>clowns</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "all",
            number: "35",
            picture: "images/35ALL.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>all</strong> of the objects are <strong>blue</strong>",
                "<strong>all</strong> of the objects are <strong>pink</strong>",
                "<strong>some</strong> of the objects are <strong>clowns</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "all",
            number: "36",
            picture: "images/36ALL.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>all</strong> of the objects are <strong>bottles</strong>",
                "<strong>all</strong> of the objects are <strong>bikes</strong>",
                "<strong>some</strong> of the objects are <strong>clowns</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        }
    ],
    truth_value_judgements:
    [
     {
       "sentence_nr": 1,
       "question": "All birds have telephones.",
       "condition": "bizarre",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 2,
       "question": "All crayons have noses.",
       "condition": "bizarre",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 3,
       "question": "All chairs tell time.",
       "condition": "bizarre",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 4,
       "question": "All garages sing.",
       "condition": "bizarre",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 5,
       "question": "All couches have windows.",
       "condition": "bizarre",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 1,
       "question": "Some fish are made of leaves.",
       "condition": "bizarre",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 2,
       "question": "Some fruits have computers.",
       "condition": "bizarre",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 3,
       "question": "Some books are good to eat.",
       "condition": "bizarre",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 4,
       "question": "Some stores are made of bubbles.",
       "condition": "bizarre",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 5,
       "question": "Some children are made of feathers.",
       "condition": "bizarre",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 1,
       "question": "Most elephants have glasses.",
       "condition": "bizarre",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 2,
       "question": "Most chairs are hungry.",
       "condition": "bizarre",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 3,
       "question": "Most motorcycles like music.",
       "condition": "bizarre",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 4,
       "question": "Most sofas are friendly.",
       "condition": "bizarre",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 5,
       "question": "Most tigers are literate.",
       "condition": "bizarre",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 1,
       "question": "The moon has two ears.",
       "condition": "bizarre",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 2,
       "question": "Guitars have four legs.",
       "condition": "bizarre",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 3,
       "question": "Forests last three nights.",
       "condition": "bizarre",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 4,
       "question": "A week consists of five people.",
       "condition": "bizarre",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 5,
       "question": "The earth owns seven books.",
       "condition": "bizarre",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 1,
       "question": "Some trouts are fish.",
       "condition": "implicature",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 2,
       "question": "Some lizards are reptiles.",
       "condition": "implicature",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 3,
       "question": "Some owls are birds.",
       "condition": "implicature",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 4,
       "question": "Some ants are insects.",
       "condition": "implicature",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 5,
       "question": "Some cats are mammals.",
       "condition": "implicature",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 1,
       "question": "Most sharks are fish.",
       "condition": "implicature",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 2,
       "question": "Most horses are mammals.",
       "condition": "implicature",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 3,
       "question": "Most snakes are reptiles.",
       "condition": "implicature",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 4,
       "question": "Most pigeons are birds.",
       "condition": "implicature",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 5,
       "question": "Most elephants are mammals.",
       "condition": "implicature",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 1,
       "question": "Modern cars have three wheels.",
       "condition": "implicature",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 2,
       "question": "A human hand has two fingers.",
       "condition": "implicature",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 3,
       "question": "The universe contains three planets.",
       "condition": "implicature",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 4,
       "question": "A year has 245 days.",
       "condition": "implicature",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 5,
       "question": "Monkeys have three bones.",
       "condition": "implicature",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 1,
       "question": "All books have pages.",
       "condition": "true",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 2,
       "question": "All hammers have a handle.",
       "condition": "true",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 3,
       "question": "All robins have wings.",
       "condition": "true",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 4,
       "question": "All elephants have trunks.",
       "condition": "true",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 5,
       "question": "All refrigerators have doors.",
       "condition": "true",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 6,
       "question": "All salmon are fish.",
       "condition": "true",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 7,
       "question": "All crocodiles are reptiles.",
       "condition": "true",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 8,
       "question": "All eagles are birds.",
       "condition": "true",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 9,
       "question": "All dogs are mammals.",
       "condition": "true",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 10,
       "question": "All beetles are insects.",
       "condition": "true",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 1,
       "question": "Some flowers are yellow.",
       "condition": "true",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 2,
       "question": "Some dresses have pockets.",
       "condition": "true",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 3,
       "question": "Some tools are made of wood..",
       "condition": "true",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 4,
       "question": "Some children are blond.",
       "condition": "true",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 5,
       "question": "Some drinks are made from chocolate.",
       "condition": "true",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 1,
       "question": "Most people know their parents.",
       "condition": "true",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 2,
       "question": "Most birds can fly.",
       "condition": "true",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 3,
       "question": "Most days in a year are working days.",
       "condition": "true",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 4,
       "question": "Most people know more than one language.",
       "condition": "true",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 5,
       "question": "Most horses are tame.",
       "condition": "true",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 1,
       "question": "A normal motorcycle has two wheels.",
       "condition": "true",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 2,
       "question": "Monkeys have five fingers on each hand.",
       "condition": "true",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 3,
       "question": "A week has seven days.",
       "condition": "true",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 4,
       "question": "Cats have four legs.",
       "condition": "true",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 5,
       "question": "Humans have two eyes.",
       "condition": "true",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     }
    ]  
}

