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
    el: document.querySelector('.fullScroll'),
    smooth: true
});

const page = document.querySelectorAll('.scrolly')

page.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.id == 0 || item.id == 1) {
            console.log(item.id)
            scroll.scrollTo('#main');
        }
        else if (item.id == 2) {
            scroll.scrollTo('#trending');
        }
        else if (item.id == 3) {
            scroll.scrollTo('#FAQ');
        }
    })
})
// Scroll Reveal
// const sr = document.querySelector('.content');

// sr.addEventListener('scroll', reveal);

// function reveal() {
//     var reveals = document.querySelectorAll('.reveal');

//     for (var i = 0; i < reveals.length; i++) {

//         var windowheight = window.innerHeight;
//         var revealtop = reveals[i].getBoundingClientRect().top;
//         var revealpoint = 150;

//         if (revealtop < windowheight - revealpoint) {
//             reveals[i].classList.add('active');
//         }
//         else {
//             reveals[i].classList.remove('active');
//         }
//     }
// }

// faq
const plus = document.querySelectorAll('.plus');
const que = document.querySelectorAll('.ques');
const ans = document.querySelectorAll('.answer');
let flag = true;
plus.forEach((item) => {
    item.addEventListener('click', () => {
        console.log(item.id);
        if (flag) {
            // open
            item.style.transform = "rotate(45deg)";
            que[item.id].style.height = "120px";
            ans[item.id].style.borderTop = "1px solid #414141";
            ans[item.id].style.display = "block";
            flag = false;
        }
        else {
            item.style.transform = "rotate(0deg)";
            que[item.id].style.height = "50px";
            ans[item.id].style.borderTop = "1px solid #212121";
            ans[item.id].style.display = "none";
            flag = true;
        }
    });
})


const menu = document.querySelector('.menu');
let fl= true;
menu.addEventListener('click', () => {
    const path1 = document.querySelector('.plus1');
    const path2 = document.querySelector('.plus2');
    if(fl){
        path1.classList.add('active1');
        path2.classList.add('active2');
        fl=false;
    }
    else{
        path1.classList.remove('active1');
        path2.classList.remove('active2');
        fl=true;
    }
})