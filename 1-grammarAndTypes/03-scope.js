/*
SCOPE

1-grammarAndTypes
  03-scope.js
*/

/*
What is scope?

JS has both LOCAL and GLOBAL scope
*/

//example 1
var x = 12; //GLOBAL

function scope(){
    var x = 33; //LOCAL
    //var y = 10; //LOCAL
    console.log(x);
 }
scope(); // logs 33
//console.log(y); // y is not defined
console.log(x); // logs 12

//example 2
var x = 12;

function scope() {
    x = 33;
    console.log(x);
}

scope(); //33
console.log(x); //33

//example 3
var x = 1;

function scope(){
    var x = 2;
    function scopeInner() {
        var x = 3;
        console.log(x); // 1) 3
    }
    scopeInner();
    console.log(x); // 2) 2
}
scope(); 
console.log(x); // 3) 1

//example 4 contrasts with 5:
var x = 12; // 3) 12

function scope() {
    var x = 33;
    if (true) {
        let x = 45;
        console.log(x); // 1) 45
    }
    console.log(x); // 2) 33
}
scope();
console.log(x);

//example 5 contrasts with 4:
var x = 12; // 3) 12

function scope() {
    var x = 33;
    if (true) {
        var x = 45;
        console.log(x); // 1) 45
    }
    console.log(x); // 2) 45 -> var doesn't obey 'block' scope
}
scope();
console.log(x); //12

