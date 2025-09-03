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

for (let key in person)
