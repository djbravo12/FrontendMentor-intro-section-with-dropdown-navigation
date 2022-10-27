"use strtict";
const navOpen = document.querySelector("#icon-menu");
const navClose = document.querySelector("#icon-close-menu");
const navBar = document.querySelector(".nav-bar");
const listItem = document.querySelectorAll(".cl-nav-ul-li-item");
const feturesItem = document.querySelectorAll(".cl-ul-features");

// navbar for mobile viewport

navOpen.addEventListener("click", () => {
  navBar.classList.add("display");
});

navClose.addEventListener("click", () => {
  navBar.classList.remove("display");
});

// navbar for mobile viewport

listItem.forEach((e) => {
  e.addEventListener("click", function () {
    console.log(this.querySelector(".arrow-up"));
    this.querySelector(".arrow-up").classList.toggle("arrow-rotate");
    this.nextElementSibling.classList.toggle("display");
    console.log(this.nextElementSibling);
  });
});

//function for remove the open nav-list

const removeFunction = (classOfItem, removingClass) => {
  const aItemToCheck = document.getElementsByClassName(classOfItem);

  Object.keys(aItemToCheck).forEach(function (items) {
    if (aItemToCheck[items].classList.contains(removingClass)) {
      console.log("hello");
      aItemToCheck[items].classList.remove(removingClass);
    }
  });
};


window.addEventListener("click", (e) => {
  if (!e.target.matches(".cl-nav-ul-li-item")) {
    removeFunction("cl-ul-features", "display");
    removeFunction("arrow-up", "arrow-rotate");
  }
});
