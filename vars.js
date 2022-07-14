var game = {
    money: 100,
}

var gameTDM = {
    weatheroptions: [
        'Sunny', /* 0 */
        'Cloudy',
        'Rainy',
        'Night' /* 3 */
    ],
    currentweather: 0,
    hour: 6,
    minute: 00,
    displayminute: 00,
    weatherset: false,
    weathernotifactions: true,
}

var fish = {
    name: [
        'cod',
        'bass',
    ],
    id: [
        0,
        1,
    ],
    pond: [ /* ponds.id */
        0,
        1,
    ],
    owned: [
        0,
        0,
    ],
    sellprice: [
        1,
        10,
    ],
    sellmulti: 1,
}

var pondtab = {
    name: [
        'pond-select',
        'pond-fishing',
    ],
    active: [
        true,
        false,
    ],
}

var shoptab = {
    name: [
        'buy',
        'sell',
        'shipments',
    ],
    active: [
        true,
        false,
        false,
    ],
}

var infotab = {
    name: [
        'inventory',
        'weather',
        'stats',
    ],
    active: [
        true,
        false,
        false,
    ]
}
var ponds = {
    name: [
        'shallow-pond',
        'calm-pond',
    ],
    id: [
        0,
        1,
    ],
    active: [
        false,
        false,
    ],
    fishper: [
        1,
        1,
    ],
    unlocked: [
        true, /* DO NOT CHANGE */
        false,
    ],
    nextpondprice: 150,
    nextpondid: 1,

    activeponds: 0,
    pondslimit: 1,
    interval: 1,
}