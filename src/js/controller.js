import "core-js/stable";
import "regenerator-runtime/runtime";
import "bootstrap/dist/js/bootstrap.bundle";

const menu = document.querySelector(".menu-collapse-container");
const hamburger = document.querySelector(".hamburger-icon");
const closeBtn = document.querySelector(".crossed");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
  closeBtn.style.display = "block";
  hamburger.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  hamburger.style.display = "block";
  closeBtn.style.display = "none";
});

const searchDropdown = document.querySelector(".search-dropdown");
const searchIcon = document.querySelector(".search-icon");
const closeBtnTwo = document.querySelector(".crossed-two");

searchIcon.addEventListener("click", () => {
  searchDropdown.classList.add("active");
  closeBtnTwo.style.display = "block";
  searchIcon.style.display = "block";
});

closeBtnTwo.addEventListener("click", () => {
  searchDropdown.classList.remove("active");
  searchIcon.style.display = "block";
  closeBtnTwo.style.display = "none";
});
