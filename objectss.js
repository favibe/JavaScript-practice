//property value shorthand
/* Another way to  create objects in javavscript, using function and
property shorthand*/
function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
}
let user =  makeUser("john", 30);
console.log(user);
//can be written shorter
/* function makeUser(name, age) {
     return {
         name,
         age,
     };   
} 
*/

//property names limaitations
/* variables cant have names used for the reserved words like ("for", "let", "return") 
for an objects there is no such restriction */
let obj = {for: 1, let: 2, return: 3};
console.log(obj.for + obj.let + obj.return); //6

// property existance using the "in" operator
let person = {name: "paul", age: 23, color: "pink"};
console.log("age" in person); // returns true cause age exist
console.log("blue" in person); //false cause such property name do not exist in person variable.
// safer than using obj.prop. the "in" prevbts bugs if property exist but are undefined.

//The for...in Loop
//e.g lets output all the properties in the "person" variable

for (let key in person) {
    console.log(key);
    console.log(person[key]);
}
//can use another varible name insted of "key" let key.


//ordered like an object
//objects follow there special order. integers are converted to string without change & are in ascending order
//numbers converted to numbers
//eg
let codes = {"49":  "Germany", "41": "Switzerland", "44": "Great Britain", "1": "USA"};
for(let code in codes) {
    console.log(code);
}
//non-integer properties are listed in creation order.
console.log("--creation order---")
let codess = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  "+1": "USA"
};

for (let code in codess) {
  console.log(code);   // +49, +41, +44, +1
  console.log(+code);  // 49, 41, 44, 1 (numeric form again)
}
//
let person1 = {};
person1.name = "john";
person1.surname = "smith";
person1.name = "pete";
delete person1.name;
// excercuise
//1. Map to names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names =  users.map(name => name.name);
console.log(names)
//map to objects
let johns = { name: "John", surname: "Smith", id: 1 };
let petes = { name: "Pete", surname: "Hunt", id: 2 };
let marys = { name: "Mary", surname: "Key", id: 3 };

let userx = [ johns, petes, marys ];
let userMapped = userx.map(userx => ({
    fullname: `${userx.name} ${userx.surname}`,
    id : userx.id
}));
