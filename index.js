const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is a new content";
const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";
const h3 = document.createElement("h3");
h3.textContent = "Hey I'm blue!";
h3.style.color = "blue";
const border = document.createElement("div");
border.style.cssText = "border:1px solid black; background: pink;"

container.appendChild(content);
container.appendChild(para);
container.appendChild(h3);