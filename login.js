"use strict";
const modal = document.querySelector(".content");
const overlay = document.querySelector(".overlay");
const btnsclosebutton = document.querySelector(".close-btn");
const btnsopenbutton = document.querySelector(".rehne");
 if (btnsopenbutton) {
  btnsopenbutton.addEventListener("click", openmodal);
}
 modal.classList.add("hidden");
overlay.classList.add("hidden");
 const openmodal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
 const closemodal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
 const overlay1 = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
 btnsclosebutton.addEventListener("click", closemodal);
overlay.addEventListener("click", overlay1);


const modal = document.querySelector(".content");
const overlay = document.querySelector(".overlay");
const btnsclosebutton = document.querySelector(".close-btn");
const btnsopenbutton = document.querySelector(".open-btn");