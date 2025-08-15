// practicing the string methods. 

// Learning strings method. 
let display = "I am grateful";
//let's try to iterate through this string and acres each character. 
//Method 1
for (let char of display) {
  console.log(char);
}
console.log(" Next is char ---");
//Assuming you want to get a particular character and stop at it, you do this:
for ( let char of display) {
  if (char ===  "g") {
    break;
  } else {
    console.log(char);
  }
}
console.log("next is ------");
// Method 2
for (let i = 0; i < display. length; i++) {
  console.log(display [i]);
}
console.log("get particular char-");
for(let i =0; i < display.length; i++) {
  if (display[i] === "g") {
    break;
  } else {
    console.log(display[i]);
  }
}
// To get the index of a character
for (let i = 0; i < display.length; i++) {
  if (display[i] === "a") {
    console.log(`The index of a is ${i}`)
  }
}
//method charAt()
const index = 1;
const char = display.charAt(index);
console.log(`The character at ${index} is ${char}`);
//method charCodeAt()
const asciiCode = display.charCodeAt(index);
console.log(`The ASCII code of ${char} is ${asciiCode}`);

// Exercise encode a string
// so basically I am trying to encode a string, by moving it by 2 postouon so the work is  to encode "geeks" to get "iggmu" 

let word = "geeks";
let encode = "";
for (let i = 0; i < word.length; i++) {
  let char = word[i];
  let wordCode = char.charCodeAt(0);
  let newCode = wordCode + 2;
   let newWord  = String.fromCharCode(newCode);
  encode = encode + newWord;

}
console.log(encode);
// if you want to reverse it; 
let encodedWord = "iggmu";
let decoded = "";
for (let i = 0; i < encodedWord.length; i++) {
  let char = encodedWord[i];
  let charCode = char.charCodeAt(0);  // get ASCII code
  let newCode = charCode - 2;         // subtract 2
  let newChar = String.fromCharCode(newCode); // convert back to character
  decoded += newChar;                 // build the word
}
console.log(decoded); // Output: geeks

//indexOf()

// indexOf()
const displayW = "i love being a full stack developer";
console.log(displayW.indexOf("l"));
// what if I wanted the second log at full. 

console.log(displayW.indexOf("l", 5));
//using function
function findCharacter(word, char) {
  const index = word.indexOf(char);
  if (index === -1) {
    return "character not found"
  } else {
    return "character found in the string"
  }
}
const report  = findCharacter("I love being a full stack devoploper", "#");
console.log(report);

// doing it with arrow function 
const notChar = (words, chars) => words.indexOf(chars) === -1 ? " character not found" : "character found in the string";

const reports  = notChar("I love being a full stack devoploper", "d");
console.log(reports);



