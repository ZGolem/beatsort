dataSetVersion = "2018-03-01"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
//  {
//    name: "Filter by Series Entry",
//    key: "series",
//    tooltip: "Check this to restrict to certain series.",
//    checked: false,
//    sub: [
//      { name: "Books and CDs", key: "book" },
//      { name: "Hidden Star in Four Seasons", tooltip: "16 - Tenkuushou", key: "HSiFS" }
//    ]
//  },
  {
    name: "Filter by Artist",
    key: "stage",
    tooltip: "Check this to restrict to specific artists.",
    checked: false,
    sub: [ { name: "Beatles Albums", key: "Beatles"}, { name: "John Albums", key: "John"}, { name: "Paul Albums", key: "Paul" }, { name: "George Albums", key: "George"}, { name: "Traveling Wilburys Albums", key: "Wilb" }, { name: "Ringo Albums", key: "Ringo" }, { name: "Ringo EPs", key: "RingoEP" }, { name: "Past Masters", key: "PM" }, { name: "Unfinished Music", key: "UM" }, { name: "Wonderwall Music / Electronic Sound", key: "GHA" }                            
    ]
  },
//  {
//    name: "Remove PC-98 Duplicates",
//    key: "pc98",
//    tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
// },
//  {
//    name: "Remove Non-Girls",
//    key: "notgirl",
//    tooltip: "Check this to remove all non-female characters."
//  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "McCartney",
    img: "MeeLceS.jpg",
    opts: {
      series: [ "book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "MoF", "SA", "UFO", "soku", "DS", "TD", "HM", "DDC", "ISC", "ULiL", "LoLK", "AoCF", "HSiFS" ],
      stage: ["Paul"]
    }
  },
  {
    name: "RAM",
    img: "ZXmqksk.jpg",
    opts: {
      series: [ "book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "MoF", "SA", "UFO", "soku", "DS", "GFW", "TD", "HM", "DDC", "ISC", "ULiL", "LoLK", "AoCF", "HSiFS" ],
      stage: ["Paul"]
    }
  },
  {
    name: "Wild Life",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "EoSD", "StB", "HM"],
      stage: ["Paul"]
    }
  },
  {
    name: "Red Rose Speedway",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "EoSD"],
      stage: ["Paul"]
    }
  },
  {
    name: "Band on the Run",
    img: "ZXmqksk.jpg",
    opts: {
      series: [ "book", "EoSD", "PCB", "PoFV", "StB", "soku", "GFW", "HM", "DDC", "ISC", "HSiFS" ],
      stage: ["Paul"]
    }
  },
  {
    name: "Venus and Mars",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "soku"],
      stage: ["Paul"]
    }
  },
  {
    name: "Wings at the Speed of Sound",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "EoSD"],
      stage: ["Paul"]
    }
  },
  {
    name: "London Town",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "SWR", "soku", "HM"],
      stage: ["Paul"]
    }
  },
  {
    name: "Back to the Egg",
    img: "ZXmqksk.jpg",
    opts: {
      series: [ "book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "soku", "HM", "DDC", "ISC" ],
      stage: ["Paul"]
    }
  },
  {
    name: "McCartney II",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "EoSD", "IaMP", "IN", "StB", "SWR", "soku", "HM", "ISC"],
      stage: ["Paul"]
    }
  },
  {
    name: "Tug of War",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "EoSD", "StB"],
      stage: ["Paul"]
    }
  },
  {
    name: "Pipes of Peace",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "PCB", "StB", "HM"],
      stage: ["Paul"]
    }
  },
  {
    name: "Give My Regards to Broad Street",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "PCB", "IaMP", "StB", "SWR", "soku", "HM"],
      stage: ["Paul"]
    }
  },
  {
    name: "Press to Play",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "PCB", "IaMP", "IN", "StB", "SWR", "soku", "HM"],
      stage: ["Paul"]
    }
  },
  {
    name: "Choba B CCCP",
	img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "PCB", "PoFV", "HM", "HSiFS"],
      stage: ["Paul"]
    }
  },
  {
    name: "Flowers in the Dirt",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "PCB", "PoFV", "HM", "AoCF"],
      stage: ["Paul"]
    }
  },
  {
    name: "Off the Ground",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "PCB", "PoFV", "HM", "AoCF"],
      stage: ["Paul"]
    }
  },
  {
    name: "Flaming Pie",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "PCB", "PoFV", "HM", "AoCF"],
      stage: ["Paul"]
    }
  },
  {
    name: "Run Devil Run",
    img: "ZXmqksk.jpg",
    opts: {
      series: [ "book", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "soku", "TD", "HM", "ISC" ],
      stage: ["Paul"]
    }
  },
  {
    name: "Driving Rain",
    img: "ZXmqksk.jpg",
    opts: {
      series: [ "book", "PCB", "IaMP", "IN", "StB", "SWR", "soku", "TD", "HM", "ISC" ],
      stage: ["Paul"]
    }
  },
  {
    name: "Chaos and Creation in the Backyard",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "PCB", "IaMP", "IN", "StB", "SWR", "soku", "HM"],
      stage: ["Paul"]
    }
  },
  {
    name: "Memory Almost Full",
    img: "ZXmqksk.jpg",
    opts: {
      series: [ "book", "PCB", "IaMP", "IN", "StB", "SWR", "soku", "HM", "ISC", "AoCF" ],
      stage: ["Paul"]
    }
  },
  {
    name: "Kisses on the Bottom",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IaMP", "StB", "SWR", "soku", "DS", "HM", "ISC"],
      stage: ["Paul"]
    }
  },
  {
    name: "New",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM"],
      stage: ["Paul"]
    }
  },
  {
    name: "Egypt Station",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "PoFV", "StB", "HM"],
      stage: ["Paul"]
    }
  },
  {
    name: "McCartney III",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Paul"]
    }
  },
  {
    name: "Plastic Ono Band",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["John"]
    }
  },
  {
    name: "Imagine",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["John"]
    }
  },
  {
    name: "Sometime In New York City",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["John"]
    }
  },
  {
    name: "Mind Games",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["John"]
    }
  },
  {
    name: "Walls and Bridges",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["John"]
    }
  },
  {
    name: "Rock n Roll",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["John"]
    }
  },
  {
    name: "Double Fantasy",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["John"]
    }
  },
  {
    name: "Milk and Honey",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["John"]
    }
  },
  {
    name: "All Things Must Pass",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["George"]
    }
  },
  {
    name: "Living in the Material World",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["George"]
    }
  },
  {
    name: "Dark Horse",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["George"]
    }
  },
  {
    name: "Extra Texture (Read All About It)",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["George"]
    }
  },  
  {
    name: "Thirty Three & 1/3",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["George"]
    }
  },
  {
    name: "George Harrison",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["George"]
    }
  },
  {
    name: "Somewhere in England",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["George"]
    }
  },
  {
    name: "Gone Troppo",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["George"]
    }
  },  
  {
    name: "Cloud Nine",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["George"]
    }
  },
  {
    name: "Brainwashed",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["George"]
    }
  },
  {
    name: "Traveling Wilburys Vol. 1",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Wilb"]
    }
  },
  {
    name: "Traveling Wilburys Vol. 3",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Wilb"]
    }
  },
  {
    name: "Sentimental Journey",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },
  {
    name: "Beaucoups of Blues",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  }, 
  {  
    name: "Ringo",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },  
  {
    name: "Goodnight Vienna",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },
  {  
    name: "Ringo's Rotogravure",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },
  {  
    name: "Ringo the 4th",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },  
  {
    name: "Bad Boy",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },
  {
    name: "Stop and Smell the Roses",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },  
  {
    name: "Old Wave",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  }, 
  {  
    name: "Times Takes Time",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  }, 
  {  
    name: "Vertical Man",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },  
  {
    name: "I Wanna Be Santa Claus",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },  
  {
    name: "Ringo Rama",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },
  {
    name: "Choose Love",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },
  {
    name: "Liverpool 8",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },  
  {
    name: "Y Not",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },  
  {
    name: "Ringo 2012",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },  
  {
    name: "Postcards From Paradise",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },  
  {
    name: "Give More Love",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },
  {
    name: "Whats My Name",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  }, 
  {
    name: "Zoom In",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["RingoEP"]
    }
  },  
  {
    name: "Change the World",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["RingoEP"]
    }
  },  
  {
    name: "EP3",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["RingoEP"]
    }
   },
  {
    name: "Please Please Me",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },
  {
    name: "With the Beatles",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },
  {
    name: "A Hard Days Night",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },
  {
    name: "Beatles For Sale",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },
  {
    name: "Help!",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },
  {
    name: "Rubber Soul",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },
  {
    name: "Revolver",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },
  {
    name: "Sgt Peppers Lonely Hearts Club Band",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },
   {
    name: "Magical Mystery Tour",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },
  {
    name: "The Beatles (The White Album)",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },       
  {
    name: "Abbey Road",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },
   {
    name: "Let it Be",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   }, 
   {
    name: "Yellow Submarine",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },
   {
    name: "Two Virgins",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["UM"]
    }
   },
   {
    name: "Life With The Lions",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["UM"]
    }
   },
   {
    name: "The Wedding Album",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["UM"]
    }
   },
   {
    name: "Wonderwall Music",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["GHA"]
    }
   },
   {
    name: "Electronic Sound",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["GHA"]
    }
   },
   {
    name: "Past Masters",
    img: "ZXmqksk.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["PM"]
    }
   }
];
