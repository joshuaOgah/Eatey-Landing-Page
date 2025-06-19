"use strict";

const signUpModal = document.querySelector(".signup-modal");
const signInModal = document.querySelector(".signin-modal");

const overlay = document.querySelector(".overlay");

const signUpBtns = document.querySelectorAll(".signup-btn");
const signInBtn = document.querySelector(".sign-in");

const submitBtn = document.querySelector(".submit-btn");
const submitSignUpBtn = document.querySelector(".submit--sign-up");

const closeBtn = document.querySelector(".close");
const closeSignInBtn = document.querySelector(".close--sign-in");

const showModal = function () {
  signUpModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  signUpModal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < signUpBtns.length; i++) {
  signUpBtns[i].addEventListener("click", showModal);
  closeBtn.addEventListener("click", closeModal);
}

signInBtn.addEventListener("click", function () {
  signInModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeSignInBtn.addEventListener("click", function () {
  signInModal.classList.add("hidden");
  overlay.classList.add("hidden");
});
