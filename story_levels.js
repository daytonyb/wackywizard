// --- DUNGEON MODE LEVELS ---
// This file is separate from rpg.js but uses the exact same format.

const STORY_CAMPAIGN = {

    
        '0D': { 
        name: "Dungeon Floor Selection", 
        walls: [], 
        hazards: [],
        enemies: [
        ],
        portals: [ 
            { pos: "E9", targetLevel: 'O', targetPos: "E6", type: "door" } ,
            { pos: "C1", targetLevel: '1-1D', targetPos: "A1", type: "portal", label: "1"},
            { pos: "G1", targetLevel: '3-1D', targetPos: "A1", type: "portal", label: "2"},
        ] 
    },
    
    '1-CD':{
        name: "Floor 1 Complete",
        speaker: "Dungeon Master",
                walls: [], 
        hazards: [],
        text: [
            "Congratulations, hero!",
            "This is just the beginning of your adventure!",
            "You have two choices in front of you... be boring and go back to the main menu...",
            "Or... continue down this epic path to fame and venture deeper into the dungeon!",
            "Good luck making a choice... this is only the beginning of your pain and suffering..."
        ],
        portals: [
            { pos: "A1", targetLevel: '0D', targetPos: "E6", type: "door", label: "D" },
            { pos: "I1", targetLevel: '2-1D', targetPos: "A1", type: "portal", label: "C" }
        ],
    },
    '1-1D': { 
        name: "Room 1", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '1-5D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '1-2D', targetPos: "A5", type: "portal", label: ">"},
        ]
    },
        '1-2D': { 
        name: "Room 2", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '1-6D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '1-3D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '1-1D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '1-3D': { 
        name: "Room 3", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '1-7D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '1-4D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '1-2D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '1-4D': { 
        name: "Room 4", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '1-8D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "A5", targetLevel: '1-3D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '1-5D': { 
        name: "Room 5", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '1-9D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '1-6D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '1-1D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
        '1-6D': { 
        name: "Room 6", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '1-10D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '1-7D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '1-2D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '1-5D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '1-7D': { 
        name: "Room 7", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '1-11D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '1-8D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '1-3D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '1-6D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '1-8D': { 
        name: "Room 8", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '1-12D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '1-4D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '1-7D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '1-9D': { 
        name: "Room 9", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '1-13D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '1-10D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '1-5D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
        '1-10D': { 
        name: "Room 10", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '1-14D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '1-11D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '1-6D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '1-9D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '1-11D': { 
        name: "Room 11", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '1-15D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '1-12D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '1-7D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '1-10D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '1-12D': { 
        name: "Room 12", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '1-16D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '1-8D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '1-11D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '1-13D': { 
        name: "Room 13", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '1-14D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '1-9D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
        '1-14D': { 
        name: "Room 14", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '1-15D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '1-10D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '1-13D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '1-15D': { 
        name: "Room 15", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '1-16D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '1-11D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '1-14D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '1-16D': { 
        name: "Room 16", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E1", targetLevel: '1-12D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '1-15D', targetPos: "I5", type: "portal", label: "<"},
            { pos: "I9", targetLevel: '1-CD', targetPos: "E6", type: "door", label: "C"}
        ]
    },

        '2-CD':{
        name: "Floor 2 Complete",
        speaker: "Dungeon Master",
                walls: [], 
        hazards: [],
        text: [
            "Congratulations, hero!",
            "You have completed the first dungeon!",
            "Go ahead and check out floor 1 of our second dungeon!",
            "Congratulations on making it this far, and have fun adventuring!",
        ],
        portals: [
            { pos: "E1", targetLevel: '0D', targetPos: "E6", type: "door", label: "D" },
        ],
    },
    '2-1D': { 
        name: "Room 1", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '2-5D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '2-2D', targetPos: "A5", type: "portal", label: ">"},
        ]
    },
        '2-2D': { 
        name: "Room 2", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '2-6D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '2-3D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '2-1D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '2-3D': { 
        name: "Room 3", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '2-7D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '2-4D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '2-2D', targetPos: "I5", type: "portal", label: "<"},
            { pos: "E1", targetLevel: '2-17D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
        '2-4D': { 
        name: "Room 4", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '2-8D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "A5", targetLevel: '2-3D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '2-5D': { 
        name: "Room 5", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '2-9D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '2-6D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '2-1D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
        '2-6D': { 
        name: "Room 6", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '2-10D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '2-7D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '2-2D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '2-5D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '2-7D': { 
        name: "Room 7", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '2-11D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '2-8D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '2-3D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '2-6D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '2-8D': { 
        name: "Room 8", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '2-12D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '2-4D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '2-7D', targetPos: "I5", type: "portal", label: "<"},
            { pos: "I5", targetLevel: '2-19D', targetPos: "A5", type: "portal", label: ">"},

        ]
    },
        '2-9D': { 
        name: "Room 9", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '2-13D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '2-10D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '2-5D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '2-18D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '2-10D': { 
        name: "Room 10", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '2-14D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '2-11D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '2-6D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '2-9D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '2-11D': { 
        name: "Room 11", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '2-15D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '2-12D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '2-7D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '2-10D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '2-12D': { 
        name: "Room 12", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '2-16D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '2-8D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '2-11D', targetPos: "I5", type: "portal", label: "<"},
            { pos: "I5", targetLevel: '2-20D', targetPos: "A5", type: "portal", label: ">"},
        ]
    },
        '2-13D': { 
        name: "Room 13", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '2-14D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '2-9D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
        '2-14D': { 
        name: "Room 14", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '2-15D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '2-10D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '2-13D', targetPos: "I5", type: "portal", label: "<"},
            { pos: "E9", targetLevel: '2-22D', targetPos: "E1", type: "portal", label: "v" },
        ]
    },
        '2-15D': { 
        name: "Room 15", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '2-16D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '2-11D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '2-14D', targetPos: "I5", type: "portal", label: "<"},
            { pos: "E9", targetLevel: '2-23D', targetPos: "E1", type: "portal", label: "v" } ,
        ]
    },
        '2-16D': { 
        name: "Room 16", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E1", targetLevel: '2-12D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '2-15D', targetPos: "I5", type: "portal", label: "<"},
            { pos: "E9", targetLevel: '2-24D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '2-21D', targetPos: "A5", type: "portal", label: ">"},
        ]
    },
        '2-17D': { 
        name: "Room 17", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '2-3D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '2-27D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
        '2-18D': { 
        name: "Room 18", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '2-9D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '2-26D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '2-19D': { 
        name: "Room 19", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '2-20D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "A5", targetLevel: '2-8D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '2-20D': { 
        name: "Room 20", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '2-21D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '2-26D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '2-19D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '2-12D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '2-21D': { 
        name: "Room 21", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '2-25D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '2-20D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '2-16D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '2-22D': { 
        name: "Room 22", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '2-23D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '2-14D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
        '2-23D': { 
        name: "Room 23", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '2-27D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '2-24D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '2-15D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '2-22D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '2-24D': { 
        name: "Room 24", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '2-25D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '2-16D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '2-23D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '2-25D': { 
        name: "Room 25", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '2-29D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '2-28D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '2-21D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '2-24D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '2-26D': { 
        name: "Room 26", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '2-18D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '2-20D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '2-27D': { 
        name: "Room 27", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '2-17D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '2-23D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
        '2-28D': { 
        name: "Room 28", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '2-30D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "A5", targetLevel: '2-25D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
        '2-29D': { 
        name: "Room 29", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '2-30D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '2-25D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
        '2-30D': { 
        name: "Room 30", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E1", targetLevel: '2-28D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '2-29D', targetPos: "I5", type: "portal", label: "<"},
            { pos: "I9", targetLevel: '2-CD', targetPos: "E6", type: "door", label: "C"}
        ]
    },
            '3-1D': { 
        name: "Room 1", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '3-6D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '3-2D', targetPos: "A5", type: "portal", label: ">"},
        ]
    },
                '3-2D': { 
        name: "Room 2", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '3-3D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '3-1D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                '3-3D': { 
        name: "Room 3", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '3-7D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '3-4D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '3-2D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                '3-4D': { 
        name: "Room 4", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '3-5D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '3-3D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                '3-5D': { 
        name: "Room 5", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '3-8D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "A5", targetLevel: '3-4D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                '3-6D': { 
        name: "Room 6", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '3-9D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '3-1D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
                '3-7D': { 
        name: "Room 7", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '3-11D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '3-3D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
                '3-8D': { 
        name: "Room 8", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '3-13D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '3-5D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
                '3-9D': { 
        name: "Room 9", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '3-14D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '3-10D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '3-6D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
                '3-10D': { 
        name: "Room 10", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '3-11D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '3-9D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                '3-11D': { 
        name: "Room 11", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '3-15D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '3-12D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '3-7D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '3-10D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                '3-12D': { 
        name: "Room 12", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '3-13D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '3-11D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                '3-13D': { 
        name: "Room 13", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '3-16D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '3-8D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '3-12D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                '3-14D': { 
        name: "Room 14", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '3-17D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '3-9D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
                '3-15D': { 
        name: "Room 15", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '3-19D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '3-11D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
                '3-16D': { 
        name: "Room 16", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '3-21D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '3-13D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
                '3-17D': { 
        name: "Room 17", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '3-18D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '3-14D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
                '3-18D': { 
        name: "Room 18", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '3-19D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '3-17D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                '3-19D': { 
        name: "Room 19", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '3-20D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '3-15D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '3-18D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                '3-20D': { 
        name: "Room 20", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '3-21D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '3-19D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                '3-21D': { 
        name: "Room 21", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E1", targetLevel: '3-16D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '3-20D', targetPos: "I5", type: "portal", label: "<"},
            { pos: "I9", targetLevel: '3-CD', targetPos: "E6", type: "door", label: "C"}
        ]
    },
            '3-CD':{
        name: "Floor 1 Complete",
        speaker: "Dungeon Master",
                walls: [], 
        hazards: [],
        text: [
            "Congratulations, hero!",
            "This is the first part of the second dungeon!",
            "Feel free to continue on, or head back to the menu!",
        ],
        portals: [
            { pos: "A1", targetLevel: '0D', targetPos: "E6", type: "door", label: "D" },
            { pos: "I1", targetLevel: '4-1D', targetPos: "A1", type: "portal", label: "C" }
        ],
    },
                '4-1D': { 
        name: "Room 1", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-6D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '4-2D', targetPos: "A5", type: "portal", label: ">"},
        ]
    },
                '4-2D': { 
        name: "Room 2", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '4-3D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '4-1D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                '4-3D': { 
        name: "Room 3", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E1", targetLevel: '4-25D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "E9", targetLevel: '4-7D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '4-4D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '4-2D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                '4-4D': { 
        name: "Room 4", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '4-5D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '4-3D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                '4-5D': { 
        name: "Room 5", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-8D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "A5", targetLevel: '4-4D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                '4-6D': { 
        name: "Room 6", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-9D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '4-1D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
                '4-7D': { 
        name: "Room 7", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-11D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '4-3D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
                '4-8D': { 
        name: "Room 8", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-13D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '4-5D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
                '4-9D': { 
        name: "Room 9", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-14D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '4-10D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '4-6D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '4-29D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                '4-10D': { 
        name: "Room 10", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '4-11D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '4-9D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                '4-11D': { 
        name: "Room 11", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-15D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '4-12D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '4-7D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '4-10D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                '4-12D': { 
        name: "Room 12", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '4-13D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '4-11D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                '4-13D': { 
        name: "Room 13", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-16D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '4-8D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '4-12D', targetPos: "I5", type: "portal", label: "<"},
            { pos: "I5", targetLevel: '4-30D', targetPos: "A5", type: "portal", label: ">"},
        ]
    },
                '4-14D': { 
        name: "Room 14", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-17D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '4-9D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
                '4-15D': { 
        name: "Room 15", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-19D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '4-11D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
                '4-16D': { 
        name: "Room 16", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-21D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '4-13D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
                '4-17D': { 
        name: "Room 17", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '4-18D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '4-14D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
                '4-18D': { 
        name: "Room 18", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '4-19D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '4-17D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                '4-19D': { 
        name: "Room 19", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-34D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '4-20D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '4-15D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '4-18D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                '4-20D': { 
        name: "Room 20", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '4-21D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '4-19D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                '4-21D': { 
        name: "Room 21", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E1", targetLevel: '4-16D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '4-20D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                    '4-22D': { 
        name: "Room 22", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '4-23D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '4-26D', targetPos: "E1", type: "portal", label: "<"},
        ]
    },
                        '4-23D': { 
        name: "Room 23", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-25D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '4-24D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '4-38D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '4-22D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                        '4-24D': { 
        name: "Room 24", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '4-27D', targetPos: "E1", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '4-23D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                        '4-25D': { 
        name: "Room 25", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-3D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '4-23D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
                        '4-26D': { 
        name: "Room 26", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-28D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '4-22D', targetPos: "A5", type: "portal", label: "^"},
        ]
    },
                        '4-27D': { 
        name: "Room 27", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-31D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '4-24D', targetPos: "I5", type: "portal", label: "^"},
        ]
    },
                        '4-28D': { 
        name: "Room 28", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-32D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '4-29D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '4-26D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '4-38D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                        '4-29D': { 
        name: "Room 29", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '4-9D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '4-28D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                        '4-30D': { 
        name: "Room 30", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '4-31D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '4-13D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                        '4-31D': { 
        name: "Room 31", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-33D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '4-38D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '4-27D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '4-30D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                        '4-32D': { 
        name: "Room 32", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-35D', targetPos: "A5", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '4-28D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
                        '4-33D': { 
        name: "Room 33", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-37D', targetPos: "I5", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '4-31D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
                        '4-34D': { 
        name: "Room 34", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-36D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "E1", targetLevel: '4-19D', targetPos: "E9", type: "portal", label: "^"},
        ]
    },
                        '4-35D': { 
        name: "Room 35", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '4-36D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '4-32D', targetPos: "E9", type: "portal", label: "<"},
        ]
    },
                        '4-36D': { 
        name: "Room 36", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-38D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '4-37D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '4-34D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '4-35D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                        '4-37D': { 
        name: "Room 37", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "I5", targetLevel: '4-33D', targetPos: "E9", type: "portal", label: ">"},
            { pos: "A5", targetLevel: '4-36D', targetPos: "I5", type: "portal", label: "<"},
        ]
    },
                        '4-38D': { 
        name: "Room 38", 
        walls: [],
        hazards: [],
        enemies: [],
        portals: [
            { pos: "E9", targetLevel: '4-23D', targetPos: "E1", type: "portal", label: "v" } ,
            { pos: "I5", targetLevel: '4-28D', targetPos: "A5", type: "portal", label: ">"},
            { pos: "E1", targetLevel: '4-36D', targetPos: "E9", type: "portal", label: "^"},
            { pos: "A5", targetLevel: '4-31D', targetPos: "I5", type: "portal", label: "<"},        
            { pos: "E5", targetLevel: '4-CD', targetPos: "E6", type: "door", label: "C"}
        ]
    },
            '4-CD':{
        name: "Floor 2 Complete",
        speaker: "Dungeon Master",
                walls: [], 
        hazards: [],
        text: [
            "Congratulations, hero!",
            "You have cleared the second floor!",
            "Congratulations on beating the second dungeon!",
            "Unfortunately, this is the last dungeon in the game, but feel free to explore the rest of this game!",
        ],
        portals: [
            { pos: "E1", targetLevel: '0D', targetPos: "E6", type: "door", label: "D" },
        ],
    },
}
