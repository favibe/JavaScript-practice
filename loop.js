// for loop practice
//in this practice I will print each characterr in a string.
//firstly let's introduce for loop
for (let i = 0; i < 10; i++) {
  console.log (i);
  console.log("Hello!");
}
console.log("End of loop execution.");
// this will print 0 to 9,  and print hello! 10 times. why because the loop prints 0 to 9 and it stops at 10 cause 10 is not less than 10 so it ends there.  THen it prints the last console outside the loop.

// Assuming i = 1; if we run it in our console, it will print 1 to 9 and pront hello total of 9 times instead of 10 times. because I started from index position 1.

// printing each character in a string

const named = "Vanessa Lucas Cheryl";
const namedLength = named.length;
for (let i = 0; i < namedLength; i++) {
  console.log(named [i]);
}

//nested for loop: a for loop inside a for loop

// let try to print the multiplication table, but first let's practice.
for (let i = 1; i <=10; i++) {
  for (let j = 1; j <= 12; j++) {
    console.log(`The value of i is ${i}  and j is ${j}`);
  }
}
//This is a sample that shows how the loop works so I understand as a beginner.

//The multiplication table loop
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 12; j++) {
    let product = i * j;
    console.log(`${i} * ${j} = ${product}`);
  }
  console.log("---------");
}
// this is the multiplication table loopp


// print a right angle triangle
forr(let i=1; i <=5; i++) {
  for(let j=1; j<=i; j++) {
    let i = i * j;     console.log("*");
  }
}



//the continue in loop: trying to practice
for(let i=1; i<=10; i++) {
  if(i % 2 == 0) continue;
  console.log(i);
}
//the continue statements skips the current iteration and continues with the next iteration of the loop. It does not terminate the loop. It only skips the current iteration stated in the if condition. IN this case, t skips even number and print the odd number. 
// I is like a filter. I thought broader by relating it to having an e commerce site and having to filter product using this continue statements would be nice. 

let namess = ["Alice", "", "Bob", "", "Charlie"];

for (let name of namess) {
  if (name === "") continue; // skip empty strings
  console.log(`Hello, ${name}`);
}

//break statements
for(let i=1; i<=10; i++) {
  if(i == 4) break;
  console.log(i);
}
//this will pront 1,2,3 and stop at 4. it will not pront 5 to 10. because the break statement terminate the loop when the condition is met. it does not skip the iteration, it terminates it.

//Label for break and continue
console.log("Label break ----");
outer: for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (i === 3 && j === 3) break outer;
  }
}
console.log("End of loop execution");
// The label helps with breaking out of nested loops 
// for continue
console.log("Label continue ----");
outer: for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (i === 3 && j === 3) continue outer;
    console.log(`i=${i}, j=${j}`);
  }
}
console.log("End of loop execution");



