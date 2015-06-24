var element_library = {

    "CV1": {
        name: "Uninsulated cavity brick", 
        source:"The Whole House Book p180", 
        uvalue:1.30, 
        kvalue:190,
        tags: ["Wall"]
    },
    "CV2": {
        name: "Uninsulated cavity lightweight block", 
        source:"The Whole House Book p180", 
        uvalue:0.96, 
        kvalue:140,
        tags: ["Wall"]
    },
    "CV3": {
        name: "Uninsulated cavity wall", 
        source:"Historic Scotland in situ measurements p38", 
        uvalue:1.2, 
        kvalue:190,
        tags: ["Wall"]
    },
    "CV4": {
        name: "Insulated cavity wall", 
        source:"Historic Scotland in situ measurements p38", 
        uvalue:0.3, 
        kvalue:190,
        tags: ["Wall"]
    },
    "CV5": {
        name: "Cavity walls involving brick and block with external render (for 1919-1975)",
        source:"Energy Saving Trust (EST) 2004, table 2, via Historic Scotland p38",
        uvalue:1.7,
        kvalue:190,
        tags: ["Wall"]
    },
    "CV6": {
        name: "Brick/block cavity walls with insulation (for 2003-present)",
        source:"Energy Saving Trust (EST) 2004, table 2, via Historic Scotland p38",
        uvalue:0.3,
        kvalue:190,
        tags: ["Wall"]
    },
    "CV7": {
        name: "Brick/brick cavity wall with 105mm brick, 50mm airspace, 105mm brick and 13mm dense plaster",
        source:"CIBSE Guide (Anderson, 2006a, tables 3.49 and 3.50, via Historic Scotland p38",
        uvalue:1.44,
        kvalue:70,
        tags: ["Wall"]
    },
    
    "SLD1": {
        name: "Uninsulated 600mm stone wall finished with 'plaster on laths'",
        source:"Historic Scotland in situ measurements p38",
        uvalue:1.1,
        kvalue:190,
        tags: ["Wall"]
    },
    "SLD2": {
        name: "Uninsulated 600mm stone wall finished with 'plaster on the hard'",
        source:"Historic Scotland in situ measurements p38",
        uvalue:1.6,
        kvalue:190,
        tags: ["Wall"]
    },
    "SLD3": {
        name: "Uninsulated 600mm stone wall finished with plasterboard",
        source:"Historic Scotland in situ measurements p38",
        uvalue:0.9,
        kvalue:190,
        tags: ["Wall"]
    },
    "SLD4": {
        name: "Traditional sandstone or granite dwelling with solid walls: stone thickness typically 600mm with internal lath and plaster finish (for the pre-1919 period)",
        source:"Energy Saving Trust (EST) 2004, table 2, via Historic Scotland p38",
        uvalue:1.7,
        kvalue:190,
        tags: ["Wall"]
    },
    "SLD5": {
        name: "600mm stonewall with a 50mm airspace and finished with 25mm dense plaster on laths",
        source:"CIBSE Guide (Anderson, 2006a, tables 3.49 and 3.50, via Historic Scotland p38",
        uvalue:1.38,
        kvalue:110,
        tags: ["Wall"]
    },
    "TBRF1": {
        name: "Cavity of timber frame wall with 50mm insulation",
        source:"The Whole House Book p180",
        uvalue:0.45,
        kvalue:18,
        tags: ["Wall"]
    },
    "TBRF2": {
        name: "Cavity of timber frame wall with 100mm insulation (2002 UK)",
        source:"The Whole House Book p180",
        uvalue:0.35,
        kvalue:18,
        tags: ["Wall"]
    },
    "TBRF3": {
        name: "Superinsulated timber frame wall with 250mm insulation",
        source:"The Whole House Book p180",
        uvalue:0.14,
        kvalue:18,
        tags: ["Wall"]
    },
    "BRK1": {
        name: "Solid brick 225mm",
        source:"The Whole House Book p180",
        uvalue:2.20,
        kvalue:190,
        tags: ["Wall"]
    },
    "BRK1": {
        name: "220mm solid brick wall with 13mm dense plaster",
        source:"CIBSE Guide (Anderson, 2006a, tables 3.49 and 3.50, via Historic Scotland p38",
        uvalue:2.09,
        kvalue:190,
        tags: ["Wall"]
    },
    "BRK1": {
        name: "220mm solid brick wall with 50mm airspace/battens and 12.5mm plasterboard",
        source:"CIBSE Guide (Anderson, 2006a, tables 3.49 and 3.50, via Historic Scotland p38",
        uvalue:1.41,
        kvalue:150,
        tags: ["Wall"]
    },
    "RF1": {
        name: "Uninsulated loft",
        source:"The Whole House Book p180",
        uvalue:2.0,
        kvalue:9,
        tags: ["Roof"]
    },
    "RF2": {
        name: "Loft with 100mm insulation",
        source:"The Whole House Book p180",
        uvalue:0.3,
        kvalue:9,
        tags: ["Roof"]
    },
    "RF3": {
        name: "Room in the roof 200mm (2002 UK)",
        source:"The Whole House Book p180",
        uvalue:0.2,
        kvalue:9,
        tags: ["Roof"]
    },
    "RF4": {
        name: "Loft with 250mm insulation (2002 UK)",
        source:"The Whole House Book p180",
        uvalue:0.16,
        kvalue:9,
        tags: ["Roof"]
    },
    "RF5": {
        name: "Superinsulated loft with 300mm insulation",
        source:"The Whole House Book p180",
        uvalue:0.12,
        kvalue:9,
        tags: ["Roof"]
    },
    
    "FLR1": {
        name: "Timber floor uninsulated",
        source:"The Whole House Book p180",
        uvalue:0.83,
        kvalue:20,
        tags: ["Floor"]
    },
    "FLR2": {
        name: "Timber floor with 150mm insulation",
        source:"The Whole House Book p180",
        uvalue:0.25,
        kvalue:20,
        tags: ["Floor"]
    },
    "FLR3": {
        name: "Timber floor superinsulated 250mm insulation",
        source:"The Whole House Book p180",
        uvalue:0.14,
        kvalue:20,
        tags: ["Floor"]
    },
    "FLR4": {
        name: "Solid floor uninsulated (average house)",
        source:"The Whole House Book p180",
        uvalue:0.70,
        kvalue:110,
        tags: ["Floor"]
    },
    "FLR5": {
        name: "Solid floor with 100mm insulation (2002 UK)",
        source:"The Whole House Book p180",
        uvalue:0.25,
        kvalue:110,
        tags: ["Floor"]
    },
    "FLR6": {
        name: "Solid floor superinsulated 200mm insulation",
        source:"The Whole House Book p180",
        uvalue:0.15,
        kvalue:110,
        tags: ["Floor"]
    },
    
    "WND1": {
        name: "Single glazed",
        source:"The Whole House Book p180",
        uvalue:4.80,
        g: 0.76,
        gL: 0.8,
        ff: 0.7,
        kvalue:0,
        tags: ["Window"]
    },
    "WND2": {
        name: "Double-low-E 12mm airspace (2002 UK)",
        source:"The Whole House Book p180",
        uvalue:2.00,
        g: 0.76,
        gL: 0.8,
        ff: 0.7,
        kvalue:0,
        tags: ["Window"]
    },
    "WND3": {
        name: "Double-low-E Argon fill 16mm airspace",
        source:"The Whole House Book p180",
        uvalue:1.70,
        g: 0.76,
        gL: 0.8,
        ff: 0.7,
        kvalue:0,
        tags: ["Window"]
    },
    "WND4": {
        name: "Triple-low-E Argon fill or double super low-E",
        source:"The Whole House Book p180",
        uvalue:1.30,
        g: 0.76,
        gL: 0.8,
        ff: 0.7,
        kvalue:0,
        tags: ["Window"]
    }
};

var measures_library = {
    "CV4": {
        name: "Insulated cavity wall", 
        source:"Historic Scotland in situ measurements p38", 
        uvalue:0.3, 
        kvalue:190,
        tags: ["Wall"],
        criteria: ["Wall","CV3"]
    },
    "TBRF3": {
        name: "Superinsulated timber frame wall with 250mm insulation",
        source:"The Whole House Book p180",
        uvalue:0.14,
        kvalue:18,
        tags: ["Wall"],
        criteria: ["Wall","TBRF1"]
    },
    "FLR3": {
        name: "Timber floor superinsulated 250mm insulation",
        source:"The Whole House Book p180",
        uvalue:0.14,
        kvalue:20,
        tags: ["Floor"],
        criteria: ["Floor","FLR3","FLR2"]
    },
    "RF5": {
        name: "Superinsulated loft with 300mm insulation",
        source:"The Whole House Book p180",
        uvalue:0.12,
        kvalue:9,
        tags: ["Roof"],
        criteria: ["Floor","RF2"]
    },
    "WND4": {
        name: "Triple-low-E Argon fill or double super low-E",
        source:"The Whole House Book p180",
        uvalue:1.30,
        g: 0.76,
        gL: 0.8,
        ff: 0.7,
        kvalue:0,
        tags: ["Window"],
        criteria: ["Window","WND1","WND2"]
    }
};
