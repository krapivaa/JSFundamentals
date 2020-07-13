/*
ARRAYS
*/

//what is an array?
    //has [] brackets
    //can hold miltiple datatypes 
    //arrays can lists datatypes in an ordred, numbered way

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
//hidden keys:      0       1           2      3    4   5           6
console.log(typeof students); //object
//type of doen't tell me my varibale is an array, it returns as an object
console.log(students instanceof Array); //true
//instanceof tells me my array is an array 
//(if I expect it as an array and I want it to check, I can use instanceof) 

console.log(students[2]); //Rhys
console.log(students[1]); //Marshall
console.log(students[6]); //['Ryan', 'Iesha']

//if I want to grab only Iesha
//['Ryan', 'Iesha']
//     0       1
let name =  students[6] [1]; //square brackets notations
console.log(name);  //Iesha
console.log(`Hello ${name}, you look nice today.`); 

//recall for-of loop --> gives the values of the array
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for (f of food) {  //f represent the actual values (for in loop would give as numbered position of the elements in the array)
    console.log(f + ' is amazing!');
}

// array methods - 
// are build in functions to JS that we can use as long as we have an appropriate type
food.push('Pizza'); //adds elements to the end of the array that alrwady exists
console.log(food);

food.splice(1, 1, 'Bananas'); // insert, remove, replace / asks for an insertion point, how many things to remove, then the item or items to add
console.log(food);
food.splice(2, 0, 'Sweet Potato Pie'); //0 do not remove anything
console.log(food);
food.splice(0, 1, "Apple");
console.log(food);

food.pop(); //remove the last element in an array
console.log(food);

food = food.slice(2, 5); //the first number is the first item(element) to slice from the array, 
//while the second number is the stop position (not to be included)
console.log(food);

//forEach allows us to iterate with loops specifically, 
//and we can directly grab both the elements and their index numbers

food.forEach((f) => console.log(f));
//f represent every element in the array

food.forEach((food, index) => {
    console.log(food);
    console.log(index);
})

//code to be repeated is inside the parentesis following forEach, code to be repeteaded is a fact an arrow function, grabbing index numbers

food.forEach((food, index) => {
    console.log(`The ${food} food in our array is at position ${index}.`);
})

let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music'];
movies.push('The Force Awakens');
console.log(movies);
movies.splice(3, 1, 'The League of Extraordinary Gentlemen');
console.log(movies);

movies.forEach(movie =>console.log(movie));
console.log(movies.length);

//let's do the following with an array:
//we will check if we are working with an array
//flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc)
//using a method only, let's print the value of the newly arranged array

let arr = new Array(1, 2, 3, 4, 5);
console.log(arr);

if (arr instanceof Array) {
    let revArr = arr.reverse();
    console.log(revArr);
    // revArr.forEach(numbers => console.log(numbers));
}














