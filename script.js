// Show and hide cursor
const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");
const body = document.querySelector("body");

body.addEventListener("mouseleave", function () {
    cursor.classList.add("mouse-hidden");
  });
  
  body.addEventListener("mouseenter", function () {
    cursor.classList.remove("mouse-hidden");
  });
  
  // cursor
  window.addEventListener("mousedown", () => {
    cursor.classList.add("clicks");
  });
  
  window.addEventListener("mouseup", () => {
    cursor.classList.remove("clicks");
  });
  
  window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });
  
  body.addEventListener("mouseover", (e) => {
    if (e.target.tagName.toLowerCase() === "a") {
      cursor.classList.add("hover");
    }
  });
  
  body.addEventListener("mouseout", (e) => {
    if (e.target.tagName.toLowerCase() === "a") {
      cursor.classList.remove("hover");
    }
  });