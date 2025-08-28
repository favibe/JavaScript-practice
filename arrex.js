//excercises
//Translate border-left-width to borderLeftWidth
function camelize(str) {
  return str
    .split("-") //to split the words
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1),
    )
    .join("");
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));

//or can write it like this
/*
function camelize(str) {
  return str
    .split("-")
  .map ((word, index) => {
    if (index == 0) {
      return word;
    } else {
      return word[0].toUpperCase() + word.slice(1);
    }
  })
  .join("")
}
*/

// Filter range
function filterRange(arr, a, b) {
  return arr.filter((element) => element >= a && element <= b);
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered); // 3,1 (matching values)
console.log(arr);

//Filter range "in place"
function filterRangeInPlace(arr, a, b) {}

//Sort in decreasing order
let arry = [5, 2, 1, -10, 8];
arry.sort((a, b) => b - a);
console.log(arry);

//Copy and sort array
function copySorted(arrs) {
  return arrs.slice().sort();
}
let arrs = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(sorted);
console.log(arrs);

//Shuffle an array
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
let arr1 = [1, 2, 3];
shuffle(arr1);
console.log(arr1);
//or can do it like this

function shuffles(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//Filter unique array members
function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}
let strings = [
  "book",
  "cup",
  "cup",
  "at",
  "book",
  "flat",
  "aat",
  "book",
  "cup",
];
let str = unique(strings);
console.log(str);

