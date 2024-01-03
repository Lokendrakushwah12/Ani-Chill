// Show and hide cursor
const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");
const body = document.querySelector("body");

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

// Locomotive Scroll

const scroll = new LocomotiveScroll({
    el: document.querySelector('#full'),
    smooth: true
});

// Scroll Reveal
const sr=document.querySelectorAll('.content');

sr.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}