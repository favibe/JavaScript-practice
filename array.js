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

