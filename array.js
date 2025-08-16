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
