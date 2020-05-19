/*
COMPARISON OPERATORS

5-expressionsAndOperators
  02-comparionsOperators.js
 */

 //equality comparison operator
 console.log('3' == 3); //true
 console.log(4 == 4); //true
 console.log(3 == '4'); //false

 //strict equality comparison operator
 console.log(3 === 3); //true
 console.log('3' === 3); //false

 //not equal comparison operator
 console.log('3' !=4); //true
 console.log('3' != 3); //fulse

 //strict not equal comparison operator
 console.log('3' !== 3); //true
 console.log(3 !== 3); //false

 //greater than 
 console.log(3 > 2); //true
 console.log(2 >3); //false

 //less than
 console.log (2 > 3); //true
 console.log (3 < 2); //false

//greater than or equal
console.log(3 >= 2); //true
console.log(3 >=3); //true

//less than or equal to
console.log(2 <= 3); //true
console.log(3 <=2); //false

//and && (both expressions on either side of operator must be true for 'and' to return true) 
console.log(1 < 2 && 3 > 0); //true
console.log (2 < 1 && 3 > 0); //false

//or || (either expression on one side of the operator must be true for 'or' to return true)
console.log(1 < 2 || 3 < 0); //true
console.log(2 < 1 || 3 < 0); //false


//complex  - is it exact the same?
let obj = {key: 'test'};
console.log(obj == {key: 'test'}); //false

console.log(obj == obj); //true

let arr = [1, 2, 3, 4];
console.log(arr == [1, 2, 3, 4]); //false
console.log(arr == arr); //true





