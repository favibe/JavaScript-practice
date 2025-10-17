//Promise API
//we have promise.all(), .any(), .race().
//  https://api.github.com/users/prakashsakari

let promise1 = new Promise((resolved) => setTimeout(() => resolved("Promised Resolved"),1000));
let promise2 = new Promise((resolved) => setTimeout(() => resolved("Promised Resolved"),2000));
let promise3 = new Promise((resolved) => setTimeout(() => resolved("Promised Resolved"),3000));

promise1
    .then((res) => console.log(res));

promise2
    .then((res) => console.log(res));

promise3
    .then((res) => console.log(res));

let arrOfPromises = [promise1,promise2,promise3];

let promise = Promise.all(arrOfPromises);
promise.then((res) => console.log(res));



    //instead of writting promise1.then (), do for 2 and 3... we can use promise.all()
/* Downsides of .all():  is that once one of the promise has an error(reject) it
will stop and not run the rest of the promise*/
let users = ["babyyy", "boooo"]
let arrsOfPromises = users.map((users) =>
    fetch(`https://api.github.com/users/${users}`));

console.log(arrsOfPromises);
//can asssws this with for each


//promiseallSettled()

let promise5 = new Promise((resolved) => setTimeout(() => resolved("Promised Resolved"),1000));
let promise6 = new Promise((_, reject) => setTimeout(() => reject(new Error("Promise 2 rejected")),2000));
let promise7 = new Promise((resolved) => setTimeout(() => resolved("Promised Resolved"),3000));


let arrOfPromises1 = [promise5, promise6, promise7];
let promises = Promise.allSettled(arrOfPromises1);
promises.then((response) => console.log(response));

//can also do this
promises.then((response) => response.forEach((data) => console.log(data)));


/* The promise.allsettled() works in case where we have a reject instesd of just
ignoring the rest of the promise like thre promose.all, this ones ruins each one of
 them show you the promise that was fulfilled and the one rejected */

//PROMISE.RACE(): for the first settled  promise(either fulfilled or rejected)
/* so like which one settled first; supposwe we uswe setTimeout; 
we would get the promise that settle first like in 1s, 2s(2000)-- like that
*/

let apromise  = Promise.race(arrOfPromises1);
console.log(apromise);
//For any: it display the first promise that gets fulfilled first



let promise8 = new Promise((resolved) => setTimeout(() => resolved("Promised Resolved"),3000));
let promise9 = new Promise((_, reject) => setTimeout(() => reject(new Error("Promise 2 rejected")),2000));
let promise01 = new Promise((resolved) => setTimeout(() => resolved("Promised Resolved"),1000));


let arrOfPromises11 = [promise5, promise6, promise7];

let apromise1  = Promise.any(arrOfPromises11);
console.log(apromise1);