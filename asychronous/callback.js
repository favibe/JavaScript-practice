// function a () {
//     console.log("Hello");
// }

// function b () {
//     console.log("Bye");
// };

// a();
// b();

function a (wrapper) {
    console.log("Hello");
    wrapper();
}

function b () {
    console.log("Bye");
};

a(b);


//example
console.log("Hi there..");

setTimeout(function callback () {
    console.log("Executed sucessfully");
}, 4000);