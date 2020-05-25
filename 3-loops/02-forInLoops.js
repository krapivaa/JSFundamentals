/*
FOR IN LOOPS
*/

// for in  loops - does not require that  the 'thing' you loop through be numbered

let student = {name: 'Peter', awesome: true,  degree: 'javascript', week: 1};

for (item in student) {    //item represent keys in our object (name, awesome, etc)
    console.log(item);             //name, awesome, degree, week
    console.log(student[item]);    //Peter, tue, javascript, 1)
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
 for (cat in catArray) { //cat represesnts the numbers of the values (tabby,..burmise,..)
     console.log(cat);     // 0 1 2 3 4
     console.log(catArray[cat]); 
 }

 //let's write for-in loop  that capitalizes the first letter of a name
let instructor = 'pAul';
let capName;

for (n in instructor) { //n represent numbers of the positions of the letters in  word pAul (you can treat strings as an arrays)
    if (n == 0) {
        capName = instructor[n].toUpperCase();
    } else {
        capName +=instructor[n].toLowerCase();
    }
}
console.log(capName);



