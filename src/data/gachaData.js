//old ver
export const gachaData = [
    {
        name: 'KAIJU',
        img: './images/KAIJU.png',
        rarity: '★★',
        rarityVal: 2,
        value: '5'
    },
    {
        name: 'NEO-TOKYO',
        img: './images/NEOTOKYO.png',
        rarity: '★★★',
        rarityVal: 3,
        value: '10'
    },
    {
        name: 'WIND VALLEY',
        img: './images/OHMU.png',
        rarity: '★★★★',
        rarityVal: 4,
        value: '15'
    },
    {
        name: 'ROYALE',
        img: './images/ROYALE.png',
        rarity: '★★★★★',
        rarityVal: 5,
        value: '15'
    },
    {
        name: 'TEST TYPE',
        img: './images/UNIT.png',
        rarity: '★★★★★',
        rarityVal: 5,
        value: '15'
    }
];
//updated ver
export const gachaCategories = {
    "1Star":[

    ],
    "2Star":[{
        name: 'KAIJU',
        img: './images/KAIJU.png',
        rarity: '★★',
        rarityVal: 2,
        value: '5'
    }],
    "3Star":[{
        name: 'NEO-TOKYO',
        img: './images/NEOTOKYO.png',
        rarity: '★★★',
        rarityVal: 3,
        value: '10'
    }],
    "4Star":[{
        name: 'WIND VALLEY',
        img: './images/OHMU.png',
        rarity: '★★★★',
        rarityVal: 4,
        value: '15'
    }],
    "5Star":[{
        name: 'ROYALE',
        img: './images/ROYALE.png',
        rarity: '★★★★★',
        rarityVal: 5,
        value: '15'
    },
    {
        name: 'TEST TYPE',
        img: './images/UNIT.png',
        rarity: '★★★★★',
        rarityVal: 5,
        value: '15'
    }] 
};

export const OneStar = [];

export const TwoStar = [{
    name: 'KAIJU',
    img: './images/KAIJU.png',
    rarity: '★★',
    rarityVal: 2,
    value: '5'
}];

export const ThreeStar = [{
    name: 'NEO-TOKYO',
    img: './images/NEOTOKYO.png',
    rarity: '★★★',
    rarityVal: 3,
    value: '10'
}];

export const FourStar = [{
    name: 'WIND VALLEY',
    img: './images/OHMU.png',
    rarity: '★★★★',
    rarityVal: 4,
    value: '15'
}];

export const FiveStar = [{
    name: 'ROYALE',
    img: './images/ROYALE.png',
    rarity: '★★★★★',
    rarityVal: 5,
    value: '15'
},
{
    name: 'TEST TYPE',
    img: './images/UNIT.png',
    rarity: '★★★★★',
    rarityVal: 5,
    value: '15'
}
];


// export const gachaWeight = {0:0.6, 1:0.2, 2:0.15, 3:0.025, 4:0.025};

//0 = 1 star, 1 = 2 star,..., 4 = 5 star
export const dropRates = {0:[0.0, "1Star"], 1:[0.6, "2Star"], 2:[0.2, "3Star"], 3:[0.15, "4Star"], 4:[0.05, "5Star"]};

// export const dropBuckets ={0:"1Star", 1:"2Star", 2:"3Star", 3:"4Star", 4:"5Star"};