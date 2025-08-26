//Arrays
let all = ["Shade", "fred", 1, 2, [" A", "B", {studentNUm : 12435, studentName: " Shade"}]];
console.log(all);
// Array can take in any data type, including an array. 
console.log("--- let");
 let students = ["Fred", "Shade", " Vanessa", "Jay", "Lola"];
console.log(students[2]);
// you can access an array using index. or can use a for loop
let arLength = students.length;
console.log(arLength);
for (let i = 0; i < arLength; i++) {
  console.log(students [i])
}
console.log('----for');
//you can also use for of loop
for (let name of students) {
  console.log(name);
}
console.log('---in');
// you can use for in loop
for (let index in students) {
  console.log(students[index]);
  console.log(index);
}



// Array Methods
// push(): it adds a  element at the end of an array
// concat ():  it merges/add two arrays together. 
let colors = ["white", "pink", " blue",];
colors.push("yellow")
console.log(colors);
colors.push("green", "black", " beige");
console.log(colors);

let arr1  = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let arr4 = arr1.concat(arr2)
console.log(arr4);
let arr5 = arr1.concat(arr2, arr3)
console.log(arr5);

// pop(): it removee the last element from an array.it doesn't take an argument. 
// slice(): it takes two argument (start index, end index) and return a new array without modifying the original one, the end index is not included. 
//splice (): it takes three argument (start index, number of element to remove, element to add) and it modifies the original array. it can be used to remove, add or replace element in an array. 
console.log("pop method-");
let course = ["maths", "english", " physics", "chemistry"];
course.pop();
console.log("after pop-1:" + course);
course.pop();
console.log("after pop-2:" + course);
//slice()
console.log("slice method-::");
let courses = ["french", "spanish", "german", "italian"];
 let val = courses.slice(1, 3);
console.log(val);

let user = " Janet";
console.log(user.slice(1)); // it will start from index 1 and go to the end of the string. output: anet
console.log("slice");

user = "jAnet";
let firstChar = user[0].toUpperCase();
let capitalize = firstChar + user.slice(1).toLowerCase(); // it will start from index 1 and go to the end of the string. output: Janet
console.log(capitalize);

//using function
console.log("capitalize using function");
function capitalizeName(name) {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
console.log(capitalizeName("jAnet"));  // Janet
console.log(capitalizeName("PETER"));  // Peter
console.log(capitalizeName("lucas"));  // Lucas


//splice()
console.log(" splice-method::");

let coursess = ["Igbo", "Youruba","Hausa", "English", " French", "German"];
coursess.splice(3, 10); // it star from index 3. the 10 represent the length, so it will remove 10 element, and return:: Igbo youruba and Hausa. The original array will be modified. 

coursess.splice(3, 0, "Spanish"); // it will add Spanish at index 3.

coursess.splice(3, 1, "Spanish", " Italian"); // it will replace English at index 3 with Spanish and Italian. 







// map and filter() method
const fruits = ["apple", "mango", "pear", "orange", "banana"];
function ordered(fruit) {  
return fruit.toUpperCase();
}
const sorted = fruits.map(ordered);
console.log(sorted);
//doing this with the array function would be like this:
/*const fruits = ["apple", "mango", "pear", "orange", "banana"];
cinst sorted = fruits.map(fruit) => fruit.toUpperCase() */
//doing it with the while loop
const numbers =[1, 2,3,4,5];
const even = [];
let i = 0;
while(i < numbers.length) {  
if (numbers[i] % 2 === 0) {    
even.push(numbers [i])  
}  
i++;
}
console.log(even);
console.log("filter method---");
const num = [1,2,3,4,5,6,7,8,9];
function double (number) {  
return number % 2 === 0;
}
const doubled = num.filter(double);
console.log(doubled);
// doing it with arrow function
/*
const doubled = num.filter(double)  => number % 2 === 0; */
//doing it with the do-while loop
const numb = [10, 23,34,47,56,63,70,81,90];
const evs = [];
let j = 0;
do {  
if (numb[j] % 2 === 0) {    
evs.push(numb[j])  
}  
j++;
} while (j < numb.length);
console.log(evs);

//more methods

//unshift(): it's add element at the beginning of an array. it modifies the original array and return the new array...
let color = ["red", "blue", "green"];
color.unshift("yellow");
console.log(color);

//shift(): it removed the first element of an arrry at the beginning. it modifies the array.
color.shift();
console.log(color);

// slice(): takes two arguments. the start index and the end index. it doesn't modify the original array. it returns a new array. The end index is not included.

//concat(): it merges two arry together. it returns a new arry, without modifying the original array.
let concat = color.concat(["purple ", " orange"], "grey");
console.log(concat);

//iterate: forEach method: it takes a function and iterate through an array.
let num = [1, 2, 3, 4, 5];
num.forEach(function (num, index) {
  console.log(num + "|" + index);
});
//using the complete forEach syntax.
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});
//searching in an array
//indexOf(): it returns the index of the specific elememt in the array. if it dosen't exist it returns -1.
/* using this as an example:
let num = [1, 2, 3, 4, 5];  */
console.log(num.indexOf(3)); //2
console.log(num.indexOf(6)); //-1
//inccludes(): it returns true if elememts  exist in the array, else it reteuns false.
console.log(num.includes(4)); // true
console.log(num.includes(6)); // false
//lastIndexOf(): it returns the last element in the arry, if it does not exist, returns -1
console.log(num.lastIndexOf(5)); //4

//find(): it returns the element that satisfies the condition; else, it returns undefined.
let user = [
  { id: 1, name: "john" },
  { id: 2, name: "scar" },
  { id: 3, name: "Philip" },
  { id: 4, name: "john" },
];
let reusult = user.find(function (item) {
  return item.id == 1;
});
console.log(reusult);
//or
let result = user.find((item) => item.id == 1);
console.log(result);
//findIndex(): it retunns the index of the elemrnts if the condions are satisfied else it returns -1
//findLasstIndex(): returns last index of the element else -1.
let last = user.findLastIndex((item) => item.name == "john");
console.log(last); // 3
//filter(): it retuns an array if condition is satisfied, e;se an empty array.
let fil = user.filter(function (item) {
  return item.id < 4;
});
console.log(fil);

//transform an array
//map(): it transforms an array. takes a function iterates through the arry and returns a new array.
console.log("--Basic  transformation");
let num1 = [1, 2, 3, 4, 5];
let douNum = num.map(function (num) {
  return num * 2;
});
/* using arrow function 
let douNum = num.map(num => num *2); 
*/
console.log(douNum);
console.log("---sExtracting properties from objects ---");
let names = user.map((user) => user.name);
console.log(names);
console.log("--Convert Data types---");
let strNum = ["1", "2", "3", "4", "5", "6"];
let numNum = strNum.map((str) => Number(str));
console.log(numNum);
console.log("--format dtata---");
let fruitx = ["apple", "banana", "cherry"];
let upperFruits = fruitx.map((fruitx) => fruitx.toUpperCase());

console.log(upperFruits); // ["APPLE", "BANANA", "CHERRY"]
//sort(): it modifies the original array and returns the sorted array.
/* Default behavior: it converts everything into strings and sorts lexicographically (dictionary order).
 */



//sort(): it modifies the original array and returns the sorted array.
/* Default behavior: it converts everything into strings and sorts lexicographically (dictionary order).
 */

//sort
let randomWords = ["sugar", "cone", "alpha", "zebra", "eggs", "air", "aae", "bear", "zipper", "song"];
randomWords.sort();
console.log(randomWords);
let randomNumbers = [1, 122, 102, 12, 23, 56, 47, 4, 6, 7, 98, 5,44, 4, 55, 66, 7, 0, 3, 4, 2, 45,37,23];
randomNumbers.sort()
console.log(randomNumbers);
//this is sorted in lexicographical order, not numerical order.
//Instead, we do this:
randomNumbers.sort((a,b) => a - b);
console.log(randomNumbers);
// we can do this in reverse order to, this is the way to sort number in ascending order.
randomNumbers.sort((a,b) => b - a);
console.log(randomNumbers);
 // lets sort for an objects
let randomObjects = [
  {name: "Fizz", age: 23, gpa: 3.0},
  {name: "Buzz", age: 27, gpa: 2.0},
  {name: "Gizz", age: 20, gpa: 1.5},
  {name: "Duzz", age: 28, gpa: 2.5},
  {name: "Cizz", age: 25, gpa: 4.0},
  {name: "Suzz", age: 30, gpa: 3.5}
];
//Let sort  by age
console.log("---age sort---");
randomObjects.sort((a,b) => a.age - b.age);
console.log(randomObjects);
//Let sort  by gpa
console.log("---gpa sort---");
randomObjects.sort((a,b) => a.gpa - b.gpa);
console.log(randomObjects);
//Let sort  by age in reverse order/ descending order.
console.log("---age sort reverse---");
randomObjects.sort((a,b) => b.age - a.age);
console.log(randomObjects);
//Let sort  by name
console.log("---error for name sort---")
randomObjects.sort((a,b) => a.name - b.name);
console.log(randomObjects);
console.log("---correct for name sort---");
//Let sort  by name
randomObjects.sort((a,b) => a.name.localeCompare(b.name));
console.log(randomObjects);
// language specific sorting
console.log("--language specific sorting--");
let wordsx = ["résumé", "resume", "café", "cafe"];
wordsx.sort((a, b) => a.localeCompare(b));
console.log(wordsx);
// ["cafe", "café", "resume", "résumé"]
//case sensitive sorting
console.log("--case sensitive sorting---");
let casse = ["Milk", "boBa", "mango", "apple", "Orange"];
casse.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(casse);

//split(): it split a string into an array of substrings, takes a seperator as an argument and returns an array.
let str2 = "apple, banana, cherry";
//split by  comma
console.log(str2.split(","));
//split by space
console.log("I love Javascript".split(" "));
//limit results
console.log("one,two,three,four".split(",", 2));
// Split into characters
console.log("hello".split(""));

//join(): it joins an array and convert to a string.
let amount = ["one", "hundred", "thousand","million","billion"];
//default join
console.log(amount.join());
//custom seperator
console.log(amount.join(" - "));
//No seperator
console.log(amount.join(""));
//new line
console.log(amount.join("\n"));
//more examples
console.log(amount.join("  "));


//reduce(): it takes a callback function and an inititial value(optional) and return a single value.
let num4 = [1,2, 3, 4, 5];
let sum = num4.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
//product
let product = num4.reduce((acc, curr) => acc * curr, 0);
console.log(product);
//reduceRight(): it like reduce () but works from right to left.
let word1 = ["a", "b", "c", "d"];
let letters1 = word1. reduce((acc, curr) => acc + curr, "");
console.log(letters1);
//usong reduceRight
let letters2 = word1. reduceRight((acc, curr) => acc + curr, "");
console.log(letters2);
