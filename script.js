// Show and hide cursor
const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");
const body = document.querySelector("body");

const menuLinks = document.querySelectorAll('.menu-links');
const menu = document.querySelector('.menu');
const menuOptions = document.querySelector('.menu-options');
const menuClose = document.querySelector('.menu-close');
body.addEventListener("mouseleave", function () {
    cursor.classList.add("mouse-hidden");
})
body.addEventListener("mouseenter", function () {
    cursor.classList.remove("mouse-hidden");
})


// cursor
window.addEventListener("mousedown", () => {
    cursor.classList.add("clicks");
})

window.addEventListener("mouseup", () => {
    cursor.classList.remove("clicks");
})


window.addEventListener("mousemove", (e) => {

    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";


    links.forEach(link => {

        link.addEventListener("mouseover", () => {
            cursor.classList.add("hover");
        })
        link.addEventListener("mouseout", () => {
            cursor.classList.remove("hover");
        })
    })
})

//Hamburger Menu
menu.addEventListener('click', function() {
    if (menuOptions.style.display === 'none' || menuOptions.style.display === '') {
        menuOptions.style.display = 'flex'; 
        menuClose.style.display = 'flex'; 
        menu.style.display = "none"
    } else {
        menuOptions.style.display = 'none'; 
        menuClose.style.display = 'none';
        menu.style.display = "flex" 
    }
});
menuClose.addEventListener('click', function() {
    if (menuOptions.style.display === 'none' || menuOptions.style.display === '') {
        menuOptions.style.display = 'flex'; 
        menuClose.style.display = 'flex'; 
        menu.style.display = "none"
    } else {
        menuOptions.style.display = 'none'; 
        menuClose.style.display = 'none';
        menu.style.display = "flex" 
    }
});
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        menuOptions.style.display = 'none'; 
        menuClose.style.display = 'none';
        menu.style.display = "flex" 
    });
});