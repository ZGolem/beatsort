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
    sub: [ { name: "Beatles Albums", key: "Beatles"}, { name: "John Albums", key: "John"}, { name: "Paul Albums", key: "Paul" }, { name: "George Albums", key: "George"}, { name: "Traveling Wilburys Albums", key: "Wilb" }, { name: "Ringo Albums", key: "Ringo" }, { name: "Ringo EPs", key: "RingoEP" }, { name: "Past Masters", key: "PM" }, { name: "Unfinished Music", key: "UM" }, { name: "Electric Arguments", key: "EA" }, { name: "The Family Way", key: "FW" }, { name: "Wonderwall Music / Electronic Sound", key: "GHA" }                            
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
    img: "eGD74UV.jpg",
    opts: {
      series: [ "book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "MoF", "SA", "UFO", "soku", "DS", "GFW", "TD", "HM", "DDC", "ISC", "ULiL", "LoLK", "AoCF", "HSiFS" ],
      stage: ["Paul"]
    }
  },
  {
    name: "Wild Life",
    img: "8fPaEWO.jpg",
    opts: {
      series: ["book", "EoSD", "StB", "HM"],
      stage: ["Paul"]
    }
  },
  {
    name: "Red Rose Speedway",
    img: "Rietq4k.jpg",
    opts: {
      series: ["book", "EoSD"],
      stage: ["Paul"]
    }
  },
  {
    name: "Band on the Run",
    img: "f978vxL.jpg",
    opts: {
      series: [ "book", "EoSD", "PCB", "PoFV", "StB", "soku", "GFW", "HM", "DDC", "ISC", "HSiFS" ],
      stage: ["Paul"]
    }
  },
  {
    name: "Venus and Mars",
    img: "d15Xcix.jpg",
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "soku"],
      stage: ["Paul"]
    }
  },
  {
    name: "Wings at the Speed of Sound",
    img: "T8mkOAX.jpg",
    opts: {
      series: ["book", "EoSD"],
      stage: ["Paul"]
    }
  },
  {
    name: "London Town",
    img: "LoOCZHD.jpg",
    opts: {
      series: ["book", "EoSD", "IaMP", "StB", "SWR", "soku", "HM"],
      stage: ["Paul"]
    }
  },
  {
    name: "Back to the Egg",
    img: "RrE8gwc.jpg",
    opts: {
      series: [ "book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "soku", "HM", "DDC", "ISC" ],
      stage: ["Paul"]
    }
  },
  {
    name: "McCartney II",
    img: "QOOS990.jpg",
    opts: {
      series: ["book", "EoSD", "IaMP", "IN", "StB", "SWR", "soku", "HM", "ISC"],
      stage: ["Paul"]
    }
  },
  {
    name: "Tug of War",
    img: "zf4lvwi.jpg",
    opts: {
      series: ["book", "EoSD", "StB"],
      stage: ["Paul"]
    }
  },
  {
    name: "Pipes of Peace",
    img: "D1LbixZ.jpg",
    opts: {
      series: ["book", "PCB", "StB", "HM"],
      stage: ["Paul"]
    }
  },
  {
    name: "Give My Regards to Broad Street",
    img: "TUl0k1I.jpg",
    opts: {
      series: ["book", "PCB", "IaMP", "StB", "SWR", "soku", "HM"],
      stage: ["Paul"]
    }
  },
  {
    name: "Press to Play",
    img: "WazXU5i.jpg",
    opts: {
      series: ["book", "PCB", "IaMP", "IN", "StB", "SWR", "soku", "HM"],
      stage: ["Paul"]
    }
  },
  {
    name: "Choba B CCCP",
	img: "Ek7M1J6.jpg",
    opts: {
      series: ["book", "PCB", "PoFV", "HM", "HSiFS"],
      stage: ["Paul"]
    }
  },
  {
    name: "Flowers in the Dirt",
    img: "lpBs1UV.jpg",
    opts: {
      series: ["book", "PCB", "PoFV", "HM", "AoCF"],
      stage: ["Paul"]
    }
  },
  {
    name: "Off the Ground",
    img: "MMRNepN.jpg",
    opts: {
      series: ["book", "PCB", "PoFV", "HM", "AoCF"],
      stage: ["Paul"]
    }
  },
  {
    name: "Flaming Pie",
    img: "1kpznpb.jpg",
    opts: {
      series: ["book", "PCB", "PoFV", "HM", "AoCF"],
      stage: ["Paul"]
    }
  },
  {
    name: "Run Devil Run",
    img: "U4Yg3L3.jpg",
    opts: {
      series: [ "book", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "soku", "TD", "HM", "ISC" ],
      stage: ["Paul"]
    }
  },
  {
    name: "Driving Rain",
    img: "UsGqSs9.jpg",
    opts: {
      series: [ "book", "PCB", "IaMP", "IN", "StB", "SWR", "soku", "TD", "HM", "ISC" ],
      stage: ["Paul"]
    }
  },
  {
    name: "Chaos and Creation in the Backyard",
    img: "RCeiXwZ.jpg",
    opts: {
      series: ["book", "PCB", "IaMP", "IN", "StB", "SWR", "soku", "HM"],
      stage: ["Paul"]
    }
  },
  {
    name: "Memory Almost Full",
    img: "LrCyfOR.jpg",
    opts: {
      series: [ "book", "PCB", "IaMP", "IN", "StB", "SWR", "soku", "HM", "ISC", "AoCF" ],
      stage: ["Paul"]
    }
  },
  {
    name: "Kisses on the Bottom",
    img: "0I4oa08.jpg",
    opts: {
      series: ["book", "IaMP", "StB", "SWR", "soku", "DS", "HM", "ISC"],
      stage: ["Paul"]
    }
  },
  {
    name: "New",
    img: "2MRIc4n.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM"],
      stage: ["Paul"]
    }
  },
  {
    name: "Egypt Station",
    img: "F3lFeq4.jpg",
    opts: {
      series: ["book", "IN", "PoFV", "StB", "HM"],
      stage: ["Paul"]
    }
  },
  {
    name: "McCartney III",
    img: "0Xk9gSI.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Paul"]
    }
  },
  {
    name: "Plastic Ono Band",
    img: "YFUymZU.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["John"]
    }
  },
  {
    name: "Imagine",
    img: "9ksNnou.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["John"]
    }
  },
  {
    name: "Sometime In New York City",
    img: "BW5ERc8.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["John"]
    }
  },
  {
    name: "Mind Games",
    img: "OdDAnhH.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["John"]
    }
  },
  {
    name: "Walls and Bridges",
    img: "whSmcLv.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["John"]
    }
  },
  {
    name: "Rock n Roll",
    img: "mPXMZSE.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["John"]
    }
  },
  {
    name: "Double Fantasy",
    img: "TSRqDSl.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["John"]
    }
  },
  {
    name: "Milk and Honey",
    img: "fGlxytQ.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["John"]
    }
  },
  {
    name: "All Things Must Pass",
    img: "gfASGre.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["George"]
    }
  },
  {
    name: "Living in the Material World",
    img: "Wxi5coM.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["George"]
    }
  },
  {
    name: "Dark Horse",
    img: "hPy5kAd.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["George"]
    }
  },
  {
    name: "Extra Texture (Read All About It)",
    img: "iKGXzwC.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["George"]
    }
  },  
  {
    name: "Thirty Three & 1/3",
    img: "o8an7tz.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["George"]
    }
  },
  {
    name: "George Harrison",
    img: "KQMDK2C.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["George"]
    }
  },
  {
    name: "Somewhere in England",
    img: "3EqX6fj.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["George"]
    }
  },
  {
    name: "Gone Troppo",
    img: "IC8229i.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["George"]
    }
  },  
  {
    name: "Cloud Nine",
    img: "qvfFD0i.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["George"]
    }
  },
  {
    name: "Brainwashed",
    img: "3hKiLCI.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["George"]
    }
  },
  {
    name: "Traveling Wilburys Vol. 1",
    img: "dJFgwai.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Wilb"]
    }
  },
  {
    name: "Traveling Wilburys Vol. 3",
    img: "VKL13wz.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Wilb"]
    }
  },
  {
    name: "Sentimental Journey",
    img: "bWPjv3q.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },
  {
    name: "Beaucoups of Blues",
    img: "zFI2GIG.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  }, 
  {  
    name: "Ringo",
    img: "phgNtpF.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },  
  {
    name: "Goodnight Vienna",
    img: "aGfpJH4.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },
  {  
    name: "Ringo's Rotogravure",
    img: "3M6IgBC.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },
  {  
    name: "Ringo the 4th",
    img: "77SW8G1.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },  
  {
    name: "Bad Boy",
    img: "5UeJGSD.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },
  {
    name: "Stop and Smell the Roses",
    img: "KPB9dFo.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },  
  {
    name: "Old Wave",
    img: "kiYsmHy.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  }, 
  {  
    name: "Times Takes Time",
    img: "4ojaE67.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  }, 
  {  
    name: "Vertical Man",
    img: "5kF9X47.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },  
  {
    name: "I Wanna Be Santa Claus",
    img: "5YvMPtN.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },  
  {
    name: "Ringo Rama",
    img: "eedtnwa.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },
  {
    name: "Choose Love",
    img: "hjTr4j9.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },
  {
    name: "Liverpool 8",
    img: "d9ecViD.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },  
  {
    name: "Y Not",
    img: "MEnxyFV.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },  
  {
    name: "Ringo 2012",
    img: "gyNPmgZ.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },  
  {
    name: "Postcards From Paradise",
    img: "TlzKnvI.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },  
  {
    name: "Give More Love",
    img: "HxNKJu1.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  },
  {
    name: "Whats My Name",
    img: "iXTisVX.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Ringo"]
    }
  }, 
  {
    name: "Zoom In",
    img: "KQ5EDb7.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["RingoEP"]
    }
  },  
  {
    name: "Change the World",
    img: "pSKUE7Y.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["RingoEP"]
    }
  },  
  {
    name: "EP3",
    img: "cdUeKVP.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["RingoEP"]
    }
   },
  {
    name: "Please Please Me",
    img: "jXKz6pu.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },
  {
    name: "With the Beatles",
    img: "JS46UGr.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },
  {
    name: "A Hard Days Night",
    img: "rCEfHGI.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },
  {
    name: "Beatles For Sale",
    img: "sBashnw.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },
  {
	  
    name: "Help!",
    img: "Fg8uNgu.jpg",
	opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },
  {
    name: "Rubber Soul",
    img: "4MRVc1W.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },
  {
    name: "Revolver",
    img: "TeOBBOB.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },
  {
    name: "Sgt Peppers Lonely Hearts Club Band",
    img: "YuKdtDQ.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },
   {
    name: "Magical Mystery Tour",
    img: "omvAO8f.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },
  {
    name: "The Beatles",
    img: "gEcLrbx.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },       
  {
    name: "Abbey Road",
    img: "OtltETe.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },
   {
    name: "Let it Be",
    img: "anUA4nn.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   }, 
   {
    name: "Yellow Submarine",
    img: "GeqaiWt.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["Beatles"]
    }
   },
   {
    name: "Two Virgins",
    img: "IuWPhQL.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["UM"]
    }
   },
   {
    name: "Life With The Lions",
    img: "5bGpeI9.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["UM"]
    }
   },
   {
    name: "The Wedding Album",
    img: "f6Dh9bG.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["UM"]
    }
   },
   {
    name: "Wonderwall Music",
    img: "7MIZoJW.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["GHA"]
    }
   },
   {
    name: "Electronic Sound",
    img: "kyYzHZq.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["GHA"]
    }
   },
   {
    name: "Past Masters",
    img: "dK9U1Pt.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["PM"]
    }
   },
      {
    name: "Electric Arguments",
    img: "n3jLUwr.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["EA"]
    }
   },
         {
    name: "The Family Way",
    img: "ij54vLl.jpg",
    opts: {
      series: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["FW"]
    }
   }
];
