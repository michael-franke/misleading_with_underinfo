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
                question: "What kind of descriptions should you select? Is your goal to help the guesser find the bonus card, or should you mislead the guesser to pick the other card instead?",
                option1: "help",
                option2: "mislead"
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

    sentence_completion: [
        // condition ::: MOST
        {
            condition: "number",
            number: "01",
            picture: "images/01NUM.PNG",
            sentence_fragment: "On the bonus card five of the objects are",
            completions: [
                "pumpkins", // pragmatic bonus    
                "blue",     // pragmatic no-bonus 
                "mugs",     // false              
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
                "boats",     // false              
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
        // condition ::: MOST
        {
            condition: "most",
            number: "07",
            picture: "images/07MOST.PNG",
            sentence_fragment: "On the bonus card most of the objects are",
            completions: [
                "pink",      // pragmatic bonus    
                "keys",      // pragmatic no-bonus 
                "bowties",   // false              
                "green",     // false              
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
            condition: "most",
            number: "08",
            picture: "images/08MOST.PNG",
            sentence_fragment: "On the bonus card most of the objects are",
            completions: [
                "lamps",      // pragmatic bonus    
                "yellow",     // pragmatic no-bonus 
                "green",      // false              
                "phones",     // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
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
            condition: "most",
            number: "09",
            picture: "images/09MOST.PNG",
            sentence_fragment: "On the bonus card most of the objects are",
            completions: [
                "yellow",     // pragmatic bonus    
                "flags",      // pragmatic no-bonus 
                "pink",       // false              
                "sandwiches", // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
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
            condition: "most",
            number: "10",
            picture: "images/10MOST.PNG",
            sentence_fragment: "On the bonus card most of the objects are",
            completions: [
                "beds",       // pragmatic bonus    
                "blue",       // pragmatic no-bonus 
                "donuts",     // false              
                "green",      // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
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
            condition: "most",
            number: "11",
            picture: "images/11MOST.PNG",
            sentence_fragment: "On the bonus card most of the objects are",
            completions: [
                "pink",       // pragmatic bonus    
                "books",      // pragmatic no-bonus 
                "hammers",    // false              
                "blue",       // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
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
            condition: "most",
            number: "12",
            picture: "images/12MOST.PNG",
            sentence_fragment: "On the bonus card most of the objects are",
            completions: [
                "flowers",    // pragmatic bonus    
                "blue",       // pragmatic no-bonus 
                "yellow",     // false              
                "scissors",   // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
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
        // condition :: AD HOC
        {
            condition: "ad_hoc",
            number: "13",
            picture: "images/13HOC.PNG",
            sentence_fragment: "On the bonus card the objects in the top row are",
            completions: [
                "blue",       // pragmatic bonus    
                "kites",      // pragmatic no-bonus 
                "green",      // false              
                "benches",    // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
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
            condition: "ad_hoc",
            number: "14",
            picture: "images/14HOC.PNG",
            sentence_fragment: "On the bonus card the objects in the middle row are",
            completions: [
                "crowns",     // pragmatic bonus    
                "blue",       // pragmatic no-bonus 
                "pink",       // false              
                "pistols",    // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
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
            condition: "ad_hoc",
            number: "15",
            picture: "images/15HOC.PNG",
            sentence_fragment: "On the bonus card the objects in the bottom row are",
            completions: [
                "yellow",     // pragmatic bonus    
                "forks",      // pragmatic no-bonus 
                "blue",       // false              
                "leaves",     // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
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
            condition: "ad_hoc",
            number: "16",
            picture: "images/16HOC.PNG",
            sentence_fragment: "On the bonus card the objects in the top row are",
            completions: [
                "vases",      // pragmatic bonus    
                "pink",       // pragmatic no-bonus 
                "green",      // false              
                "diamonds",   // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
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
            condition: "ad_hoc",
            number: "17",
            picture: "images/17HOC.PNG",
            sentence_fragment: "On the bonus card the objects in the middle row are",
            completions: [
                "green",      // pragmatic bonus    
                "apple",      // pragmatic no-bonus 
                "guitar",     // false              
                "yellow",     // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
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
            condition: "ad_hoc",
            number: "18",
            picture: "images/18HOC.PNG",
            sentence_fragment: "On the bonus card the objects in the bottom row are",
            completions: [
                "pink",        // pragmatic bonus    
                "bells",       // pragmatic no-bonus 
                "yellow",      // false              
                "hourglasses", // false              
                "objects",     // tautology          
                "clowns"       // non-sense          
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
        // condition ::: NONE
        {
            condition: "none",
            number: "19",
            picture: "images/19NONE.PNG",
            sentence_fragment: "On the bonus card none of the objects are",
            completions: [
                "green",        // pragmatic bonus    
                "pink",         // pragmatic no-bonus 
                "mail boxes",   // false              
                "light bulbs", // false              
                "objects",      // tautology          
                "clowns"        // non-sense          
            ],
            answer_category: [
                "semantic_bonus",
                "semantic_no-bonus",
                "false",
                "false",
                "contradiction",
                "nonsense"
            ]
        },
        {
            condition: "none",
            number: "20",
            picture: "images/20NONE.PNG",
            sentence_fragment: "On the bonus card none of the objects are",
            completions: [
                "cakes",        // pragmatic bonus    
                "teapots",      // pragmatic no-bonus 
                "green",        // false              
                "yellow",       // false              
                "objects",      // tautology          
                "clowns"        // non-sense          
            ],
            answer_category: [
                "semantic_bonus",
                "semantic_no-bonus",
                "false",
                "false",
                "contradiction",
                "nonsense"
            ]
        },
        {
            condition: "none",
            number: "21",
            picture: "images/21NONE.PNG",
            sentence_fragment: "On the bonus card none of the objects are",
            completions: [
                "pink",        // pragmatic bonus    
                "yellow",      // pragmatic no-bonus 
                "onions",      // false              
                "rackets",     // false              
                "objects",     // tautology          
                "clowns"       // non-sense          
            ],
            answer_category: [
                "semantic_bonus",
                "semantic_no-bonus",
                "false",
                "false",
                "contradiction",
                "nonsense"
            ]
        },
        {
            condition: "none",
            number: "22",
            picture: "images/22NONE.PNG",
            sentence_fragment: "On the bonus card none of the objects are",
            completions: [
                "kettles",    // pragmatic bonus    
                "bananas",    // pragmatic no-bonus 
                "blue",       // false              
                "kettles",    // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
            ],
            answer_category: [
                "semantic_bonus",
                "semantic_no-bonus",
                "false",
                "false",
                "contradiction",
                "nonsense"
            ]
        },
        {
            condition: "none",
            number: "23",
            picture: "images/23NONE.PNG",
            sentence_fragment: "On the bonus card none of the objects are",
            completions: [
                "blue",       // pragmatic bonus    
                "pink",       // pragmatic no-bonus 
                "trucks",     // false              
                "saxophones", // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
            ],
            answer_category: [
                "semantic_bonus",
                "semantic_no-bonus",
                "false",
                "false",
                "contradiction",
                "nonsense"
            ]
        },
        {
            condition: "none",
            number: "24",
            picture: "images/24NONE.PNG",
            sentence_fragment: "On the bonus card none of the objects are",
            completions: [
                "pans",       // pragmatic bonus    
                "jars",       // pragmatic no-bonus 
                "yellow",     // false              
                "blue",       // false              
                "objects",    // tautology          
                "clowns"      // non-sense          
            ],
            answer_category: [
                "semantic_bonus",
                "semantic_no-bonus",
                "false",
                "false",
                "contradiction",
                "nonsense"
            ]
        },
        {
            condition: "none",
            number: "25",
            picture: "images/25NONE.PNG",
            sentence_fragment: "On the bonus card none of the objects are",
            completions: [
                "blue",         // pragmatic bonus    
                "green",        // pragmatic no-bonus 
                "envelopes",    // false              
                "helicopters",  // false              
                "objects",      // tautology          
                "clowns"        // non-sense          
            ],
            answer_category: [
                "semantic_bonus",
                "semantic_no-bonus",
                "false",
                "false",
                "contradiction",
                "nonsense"
            ]
        },
        {
            condition: "none",
            number: "26",
            picture: "images/26NONE.PNG",
            sentence_fragment: "On the bonus card none of the objects are",
            completions: [
                "cars",      // pragmatic bonus    
                "sofas",     // pragmatic no-bonus 
                "blue",      // false              
                "pink",      // false              
                "objects",   // tautology          
                "clowns"     // non-sense          
            ],
            answer_category: [
                "semantic_bonus",
                "semantic_no-bonus",
                "false",
                "false",
                "contradiction",
                "nonsense"
            ]
        },
        {
            condition: "none",
            number: "27",
            picture: "images/27NONE.PNG",
            sentence_fragment: "On the bonus card none of the objects are",
            completions: [
                "blue",      // pragmatic bonus    
                "yellow",    // pragmatic no-bonus 
                "acorns",    // false              
                "boots",     // false              
                "objects",   // tautology          
                "clowns"     // non-sense          
            ],
            answer_category: [
                "semantic_bonus",
                "semantic_no-bonus",
                "false",
                "false",
                "contradiction",
                "nonsense"
            ]
        },
        // condition ::: ALL
        {
            condition: "all",
            number: "28",
            picture: "images/28ALL.PNG",
            sentence_fragment: "On the bonus card all of the objects are",
            completions: [
                "umbrellas", // semantic bonus     
                "rockets",   // semantic no-bonus  
                "green",     // false              
                "pink",      // false              
                "objects",   // contradiction      
                "clowns"     // nonsense               
            ],
            answer_category: [
                "semantic_bonus",
                "semantic_no-bonus",
                "false",
                "false",
                "contradiction",
                "nonsense"
            ]
        },
        {
            condition: "all",
            number: "29",
            picture: "images/29ALL.PNG",
            sentence_fragment: "On the bonus card all of the objects are",
            completions: [
                "green",     // semantic bonus     
                "yellow",    // semantic no-bonus  
                "brooms",    // false              
                "brushes",   // false              
                "objects",   // contradiction      
                "clowns"     // nonsense               
            ],
            answer_category: [
                "semantic_bonus",
                "semantic_no-bonus",
                "false",
                "false",
                "contradiction",
                "nonsense"
            ]
        },
        {
            condition: "all",
            number: "30",
            picture: "images/30ALL.PNG",
            sentence_fragment: "On the bonus card all of the objects are",
            completions: [
                "shoes",     // semantic bonus     
                "trophies",  // semantic no-bonus  
                "pink",      // false              
                "yellow",    // false              
                "objects",   // contradiction      
                "clowns"     // nonsense               
            ],
            answer_category: [
                "semantic_bonus",
                "semantic_no-bonus",
                "false",
                "false",
                "contradiction",
                "nonsense"
            ]
        },
        {
            condition: "all",
            number: "31",
            picture: "images/31ALL.PNG",
            sentence_fragment: "On the bonus card all of the objects are",
            completions: [
                "pink",     // semantic bonus     
                "green",  // semantic no-bonus  
                "TVs",      // false              
                "fans",    // false              
                "objects",   // contradiction      
                "clowns"     // nonsense               
            ],
            answer_category: [
                "semantic_bonus",
                "semantic_no-bonus",
                "false",
                "false",
                "contradiction",
                "nonsense"
            ]
        },
        {
            condition: "all",
            number: "32",
            picture: "images/32ALL.PNG",
            sentence_fragment: "On the bonus card all of the objects are",
            completions: [
                "drums",    // semantic bonus     
                "tents",    // semantic no-bonus  
                "green",      // false              
                "yellow",     // false              
                "objects",   // contradiction      
                "clowns"     // nonsense               
            ],
            answer_category: [
                "semantic_bonus",
                "semantic_no-bonus",
                "false",
                "false",
                "contradiction",
                "nonsense"
            ]
        },
        {
            condition: "all",
            number: "33",
            picture: "images/33ALL.PNG",
            sentence_fragment: "On the bonus card all of the objects are",
            completions: [
                "yellow",    // semantic bonus     
                "pink",    // semantic no-bonus  
                "combs",      // false              
                "irons",     // false              
                "objects",   // contradiction      
                "clowns"     // nonsense               
            ],
            answer_category: [
                "semantic_bonus",
                "semantic_no-bonus",
                "false",
                "false",
                "contradiction",
                "nonsense"
            ]
        },
        {
            condition: "all",
            number: "34",
            picture: "images/34ALL.PNG",
            sentence_fragment: "On the bonus card all of the objects are",
            completions: [
                "trumpets",    // semantic bonus     
                "carrots",    // semantic no-bonus  
                "green",      // false              
                "blue",     // false              
                "objects",   // contradiction      
                "clowns"     // nonsense               
            ],
            answer_category: [
                "semantic_bonus",
                "semantic_no-bonus",
                "false",
                "false",
                "contradiction",
                "nonsense"
            ]
        },
        {
            condition: "all",
            number: "35",
            picture: "images/35ALL.PNG",
            sentence_fragment: "On the bonus card all of the objects are",
            completions: [
                "blue",    // semantic bonus     
                "pink",    // semantic no-bonus  
                "feathers",      // false              
                "vases",     // false              
                "objects",   // contradiction      
                "clowns"     // nonsense               
            ],
            answer_category: [
                "semantic_bonus",
                "semantic_no-bonus",
                "false",
                "false",
                "contradiction",
                "nonsense"
            ]
        },
        {
            condition: "all",
            number: "36",
            picture: "images/36ALL.PNG",
            sentence_fragment: "On the bonus card all of the objects are",
            completions: [
                "bottles",  // semantic bonus     
                "bikes",    // semantic no-bonus  
                "yellow",   // false              
                "blue",     // false              
                "objects",  // contradiction      
                "clowns"    // nonsense               
            ],
            answer_category: [
                "semantic_bonus",
                "semantic_no-bonus",
                "false",
                "false",
                "contradiction",
                "nonsense"
            ]
        }
    ],
    truth_value_judgements: [
        {
            condition: "presupposition",
            question: "The current King of Germany is called Friedrich.",
            QUD: "Is this sentence true or false?",
            option1: "false",
            option2: "true"
        },
        {
            condition: "presupposition",
            question: "Switzerland left the European Union.",
            QUD: "Is this sentence true or false?",
            option1: "false",
            option2: "true"
        },
        {
            condition: "presupposition",
            question: "Bob Dylan won a Nobel prize again.",
            QUD: "Is this sentence true or false?",
            option1: "false",
            option2: "true"
        },
        {
            condition: "implicature",
            question: "Some elephants are mammals.",
            QUD: "Is this sentence true or false?",
            option1: "false",
            option2: "true"
        },
        {
            condition: "implicature",
            question: "Most flies are insects.",
            QUD: "Is this sentence true or false?",
            option1: "false",
            option2: "true"
        },
        {
            condition: "implicature",
            question: "Modern cars usually have three wheels.",
            QUD: "Is this sentence true or false?",
            option1: "false",
            option2: "true"
        },
        {
            condition: "implicature",
            question: "Most humans have three fingers on each hand.",
            QUD: "Is this sentence true or false?",
            option1: "false",
            option2: "true"
        },
        {
            condition: "control_true",
            question: "The current President of the United States is Donald Trump.",
            QUD: "Is this sentence true or false?",
            option1: "false",
            option2: "true"
        },
        {
            condition: "control_true",
            question: "All mice are mammals.",
            QUD: "Is this sentence true or false?",
            option1: "false",
            option2: "true"
        },
        {
            condition: "control_true",
            question: "Not all mosquitos carry malaria.",
            QUD: "Is this sentence true or false?",
            option1: "false",
            option2: "true"
        },
        {
            condition: "control_true",
            question: "All trees have roots.",
            QUD: "Is this sentence true or false?",
            option1: "false",
            option2: "true"
        }
    ]
}

