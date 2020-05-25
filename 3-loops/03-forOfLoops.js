/*
FOR OF LOOPS
*/

//for of loops -  requires that your 'thing' you are looping through be iterable -- 
//that means it needs to be numbered

// let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1};

//  for (item of student) {
//      console.log(item); //Error: student is not iterable
// }


let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
 for (cat of catArray) {  // cat here represents actual value (not a number in the position as in for in loop)
     console.log(cat, 'says meow');
 }

