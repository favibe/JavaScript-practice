const container = document.querySelector("#container");
const h1 = document.querySelector("#title");
h1.style.color = "blue";

// Insert Box 0
const firstBox = document.querySelector(".box");
const box0 = document.createElement("div");
box0.classList.add("box0");
box0.textContent = "Box 0";
container.insertBefore(box0, firstBox);

// Image attributes
const img = document.querySelector("#myImage");
console.log(img.getAttribute("alt"));  
img.setAttribute("src", "new-image.jpg");

// InnerHTML
container.innerHTML += "<p>This was added with innerHTML</p>";

// AppendChild
const para = document.createElement("p");
para.textContent = "This was added with appendChild";
container.appendChild(para);

// Button (for future)
const btn = document.querySelector("#btn");
