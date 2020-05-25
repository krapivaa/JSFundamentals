/*
HOISTING

1-grammarAndTypes
  04-hoisting.js
*/

//example 1:
console.log(scissors);
var scissors = 'blue'; //underfined

//example 1 breakdown:
var scissors;
console.log(scissors);
scissors = 'blue'; //undefined

//example 2:
function hoistTest(){
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}
hoistTest();

//example 2 breakdown:
function hoistTest() {
    var testVar;
    console.log(testVar); //undefined
    testVar = 10;
    console.log(testVar); // 10
}
hoistTest();


