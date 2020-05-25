/*
ARROW FUNCTIONS
*/

//normal function declaration   it is for named functions
function coffee(){
    return 'coffee is good';
}

//normal function expression - function expression is unnamed function - annonymos function
// it is for unnamed functions, commonly but not always is equal to variable
let tea = function(){
    return 'tea is healthy';
}

console.log(coffee());
console.log(tea());

//arrow function are *always anonymous
//arrow function expression
let hotChocolate = () => {
    return 'hot chocolate is king';
} 
console.log(hotChocolate());



//arrow functions do not get hoisted
//console.log(animals(5,4)); //animals is not defined

let animals = (kittens, puppies) => {return `I have ${kittens} cats(s) and ${puppies} dog(s).`};
console.log(animals(3, 2));
console.log(animals(0,0)); 


//concise (краткийб сжатый) v. block body
//concise body arrow function
let apples = x => `There are ${x} apples.`;  // when you have a single argument (ex. x) you can exclude the parentesis and also if you have smth. quick that you want to return  right away you include it in the same line as  arrow without use of return key word and curly braces.
console.log(apples(10));

//block body arrow function
let bananas = (x) => {  // x can be without parentesis as it is a single argument
    return `There are ${x} bananas.`;
}
console.log(bananas(5));

//return must be explicitly written in a block-body arrow function

let func = () => 'hi';
console.log(func());

// let secondFunc = ()
// =>
// 'hi';
// console.log(secondFunc());   //SyntaxError: Unexpected token
//your arrow needs to follow directly after your parentesis 








