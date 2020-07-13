/*
OBJECTS
*/

let netflix = {
    id: 9,
    name: 'Super Store',
    season1: {
        seasonInfo: {
            episodeInfo: [
                {episode: 1, episodeName: 'Pilot'},
                {episode: 2, episodeName: 'Magazine Profile'},
                {episode: 3, episodeName: 'Shots and Salsa'},
                {episode: 4, episodeName: 'Mannequin'},
                {episode: 5, episodeName: 'Shoplifter'},
                {episode: 6, episodeName: 'Secret Shopper'},
                {episode: 7, episodeName: 'Color Wars'},
                {episode: 8, episodeName: 'Wedding Day Sale'},
                {episode: 9, episodeName: 'All-Nighter'},
                {episode: 10, episodeName: 'Demotion'},
                {episode: 11, episodeName: 'Labor'}
            ]
        }
    },
    season2: {},
    season3: {}
}
console.log(netflix);               //season1: { seasonInfo: { edisodeInfo: [Array] } }
console.log(netflix.season1);       //seasonInfo: {episodeInfo: [[Object], [Object],etc}
console.log(netflix.season1.seasonInfo); //now we can get into episodeInfo folder 
console.log(netflix.season1.seasonInfo.episodeInfo[3]); //get an item in array-use [] bracket notation
console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName); //to get just episode name

//Pick an episode to log in the terminal
//Using dot notation, walk through the netflix object and print off both the episode number
//and episode name
console.log(netflix.season1.seasonInfo.episodeInfo[10].episode, netflix.season1.seasonInfo.episodeInfo[10].episodeName);

//objects acessed with .
//arrays acessed with []

//JSON ->JavaScript Object Notation
/*when we send and receive info through web we need standard form of doing that
JSON -take JS object - convert it into the text format- when the recipient receive JS text(or as string) -it converts back to JS object
*/
//strinified JSON format below (notice: when you are working with number 
// or boolean, there is quote marks around that key or value):
var json= {
    "workbench.colorTheme":"One Dark+ (Sublime)",
    "window.zoomLevel":3,
    "files.exclude": {
        "**/.git":true,
        "**/.DS_Store":true,
        "**/*.js": {
          "when":"$(basename).ts"
        },
        "**/*.js.map": {
         "when":"$(basename)"
        }
    },
    "editor.fontFamily":"Monaco, 'Courier New', monospace",
    "editor.detectIndentation":false,
    "editor.letterSpacing":0,
    "editor.tabSize":2,
    "files.autoSave":"off",
    "editor.wordWrap":"on",
    "extensions.ignoreRecommendations":true,
    "[html]": {},
    "files.associations": {
        "*.html":"html",
        "*.js":"javascriptreact"
    },
    "html.format.indentInnerHtml":true,
    "editor.fontSize":11,
    "liveServer.settings.donotShowInfoMsg":true,
    "liveServer.settings.port":3500,
    "[javascriptreact]": {}
    }
    
//spacejam object:
let spaceJam= {
 toonSquad: {
    human:'Michael Jordan',
    rabbit1:'Bugs Bunny',
    rabbit2:'Lola Bunny',
    duck:'Daffy Duck',
    tDevil:'Tasmanian Devil',
    bird:'Tweety',
    cat:'Sylvester',
    pig:'Porky Pig'
 },
 monstars: {
    0:'Bupkus',
    1:'Bang',
    2:'Nawt',
    3:'Pound',
    4:'Blanko'
 },
 nbaPlayers: {
    phoenixSuns:'Charles Barkley',
    newJerseyNets:'Shawn Bradley',
    newYorkNicks:'Patrick Ewing',
    charlotteHornets1:'Larry Johnson',
    charlotteHornets2:'Muggsy Bogues'
 }
}

console.log(Object.keys(spaceJam));  //[ 'toonSquad', 'monstars', 'nbaPlayers' ]
//Objects.keys returns an array consisting of the keys in our object

console.log(Object.keys(spaceJam.toonSquad)); //grabbing keys of the object as an array of the strings ['human',   'rabbit1',...]

console.log(Object.keys(spaceJam.toonSquad).toString()); //convert to the string
// human,rabbit1,rabbit2,duck,tDevil,bird,cat,pig
//.toString() works for objects and arrays


console.log(Object.values(spaceJam); //gives you an array of the values back in an array format
console.log(Object.values(spaceJam.toonSquad)); //values of toonSquad object

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}
console.log(garden.vegetable);

let inc = 'vegetable';
console.log(garden.inc); //undefined
console.log(garden[inc]); //zucchini //square bracket [] -whatever inside I am treating it string (converting)

let baking = {};  //variable equal to empty object
baking['zucchini'] = 'better make some bread!'; //added property to baking called zucchini with value 'better...'
//you don't have to use [] bracket notation to add property into the object
//. can be used to add key-values pair objects
baking.bestKeyEver = 'zucchini';

console.log(baking.zucchini); //better make some bread!
console.log(baking.bestKeyEver); //zucchini
console.log(baking[baking.bestKeyEver]); //better make some bread!
//zucchini is a string and it allows us to find a key up to let zucchini = 



let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}
let g = 'water';

Object.keys(garden).forEach(key => {
    if (key == g) {
        console.log(garden[key]);
    }
}) //true 









 