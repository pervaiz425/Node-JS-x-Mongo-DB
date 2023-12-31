console.clear();
let students = ["Usman", "Muhammad","Ahsan", "Ali","Naeem","Umar", "Pervaiz", "Ahmad"]
students[8] = "Abdullah";
// console.log(students);

//Searching in Arrays
let searchedStudent = students.find(function(student){return student === "Umar"});

console.log(searchedStudent);

//Finding the index of a perticular element in array
let indexOfStudent = students.findIndex(function(student){return student === "Umar"});

console.log(indexOfStudent);

//Array Splice method
//The first argument specipy how many element to remove from that index and the second argument specifies the index from where to start
students.splice(1,2,...["Zahid","Anwar"]);
//The Spread operator allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. It allows us the privilege to obtain a list of parameters from an array. 

console.log(students);

console.log(...students); 

//Sorting the students Array
students.sort();

console.log(students);

//Custom Sort

function customSort(a,b)
{
    if(a>b) return -1;
    if(a<b) return 1;
    if(a===b) return 0;
}
//How the customSort works?
//If the function returns a value less than 0, then a is sorted before b. If the function returns a value greater than 0, then b is sorted before a. If the function returns 0, then the order of a and b remains unchanged.

students.sort(customSort);

console.log(students); 