// alert 1
// let buttons = document.querySelectorAll(".submit");
// function onclickbutton() {
//   alert("hello");
// }
// buttons.forEach(function (item) {
//   item.addEventListener("click", onclickbutton);
// });

// alert 2
// let buttons = document.querySelector(".button-wrapper");
// function onclickbutton() {
//   alert("hello");
// }
// buttons.addEventListener("click", onclickbutton);

// focus
// let input = document.getElementById("username");
// input.addEventListener("focus", function () {
//   username.style.border = "2px solid red";
// });

// let input = document.getElementById("username");
// input.addEventListener("focus", function (event) {
//   event.target.style.border = "2px solid red";
// });

// keydown event

// let keydown = document.getElementById("username");
// keydown.addEventListener("keydown", function (event) {
//   if (event.which == 13) {
//     alert("you pressed enter");
//   } else {
//     console.log("durak");
//   }
// });
// document
//   .getElementById("username")
//   .addEventListener("keydown", function (eventfunction) {
//     eventfunction.target.classList.add("newclass");
//   });

// prevent default
// document.getElementById("link").addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("hellofrrr");
// });

// practice

// let ul = document.querySelector(".ul-list");
// let li = document.createElement("li");
// li.textContent = "javascript";
// ul.appendChild(li);

// practice 2

let inputblock = document.querySelector(".input-form");
let addbutton = document.querySelector(".btn-add");
let ulitems = document.querySelector(".ul-items");
let deleteallli = document.querySelector(".clearall");
let form = document.getElementById("form-wrapper");

form.addEventListener("submit", function () {
  event.preventDefault();
  // 1. get input value
  let value = inputblock.value;
  // 2. input value in li tag
  let li = document.createElement("li");
  li.textContent = value;
  li.classList.add("to-do-items");
  ulitems.appendChild(li);
  let deletebutton = document.createElement("i");
  deletebutton.classList.add("fa-solid", "fa-x");
  li.appendChild(deletebutton);
  deletebutton.addEventListener("click", function () {
    li.remove();
  });
  // 3.clear input
  inputblock.value = " ";
});
deleteallli.addEventListener("click", function () {
  ulitems.textContent = " ";
});
