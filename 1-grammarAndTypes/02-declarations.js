/*
VARIABLES

1-grammarAndTypes
   02-declaration.j    s
*/

//What is variable?
var a = 1;
var b = 2;
console.log(a + b);

//notes on naming variables:
//1) a variable must begin with a letter, underscore, or dollar sign
//2) numbers may follow the above characters, but cannot come first
//3) JavaScript is  case sensative  - 'hello' and 'Hello' are different variables

/*
DECLARATIONS, INITIALIZATIONS, ASSIGNMENT
*/

/*
Decalarations refer to when we 'declare' a variable presense and given it a name (ex. var a)

Initializations refer to when a variable is assigned a value (ex. =1)

Assignment refers to giving a variable a value. This can be after initialization (ex. var a is initialized as 1, but it can assigned a different value later)
*/

var x;
console.log('Declaration 1:', x); //underfined

x = 10; // initialized
console.log('Initialization 1:', x);

x = 33;
console.log('Assignment 1:', x); //33

var y;
console.log(y);

y = 'hello';
console.log(y);

y = 'you are my friend';
console.log(y);

/*
Var, Let, and Const:

var = 'old' keyword for variables
let = 'new' keyword for variables (introduced with ES6)
const = also 'new', declares unchangeable variables
 */

 let tonight = 'great!';
 const elevenFifty = 'Amazing!';
 console.log(tonight, elevenFifty);

 tonight  = 'lovely!';
 console.log(tonight, elevenFifty);

 //elevenFifty = 'Super!'; //error