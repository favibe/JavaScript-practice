//Method two js
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Helloo");
//mrthod 3 js
const btn = document.querySelector("#btns");
btn.addEventListener("click", () =>{
    alert("heloo babay");
});
const title = document.querySelector("#title");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

btn1.addEventListener("click", ()=> {
    title.textContent = "The text is changed";
});
btn2.addEventListener("click", () => {
    title.style.color = "red";
});
btn3.addEventListener("click", () => {
    title.textContent = "HI THERE!";
    title.style.color = "black";
});

btn4.addEventListener("click", function (e) {
  alert("Hello World");
  e.target.style.background = "blue";
});
//attaching listeners to  groups of nodes
const buttons = document.querySelectorAll("button");
// using forEach Mmethod to iterrate through the button
buttons.forEach ((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});