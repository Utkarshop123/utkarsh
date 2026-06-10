/* ===================================
   KASHMIR PACKAGING INDUSTRIES
   PREMIUM WEBSITE SCRIPT
=================================== */

// Reveal Animation

const revealElements = document.querySelectorAll(
".stat-card, .intro-card, .product-box, .section-heading"
);

function revealOnScroll() {

revealElements.forEach((el) => {

const top = el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

el.classList.add("show");

}

});

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);



/* ===================================
   NAVBAR BACKGROUND EFFECT
=================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

navbar.style.background =
"rgba(15,20,28,0.95)";

navbar.style.boxShadow =
"0 10px 30px rgba(0,0,0,.45)";

}
else{

navbar.style.background =
"rgba(20,25,35,.85)";

navbar.style.boxShadow =
"0 10px 30px rgba(0,0,0,.25)";

}

});



/* ===================================
   COUNTER ANIMATION
=================================== */

const counters =
document.querySelectorAll(".stat-card h2");

let counterStarted = false;

function startCounters() {

if(counterStarted) return;

const statsSection =
document.querySelector(".stats");

if(!statsSection) return;

const top =
statsSection.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

counterStarted = true;

counters.forEach(counter => {

const value =
counter.innerText;

if(
value.includes("24") ||
value.includes("100")
){

let target =
parseInt(value);

let current = 0;

let increment =
target / 50;

const update = () => {

current += increment;

if(current < target){

counter.innerText =
Math.floor(current);

requestAnimationFrame(update);

}
else{

counter.innerText = value;

}

};

update();

}

});

}

}

window.addEventListener(
"scroll",
startCounters
);

window.addEventListener(
"load",
startCounters
);



/* ===================================
   3D PRODUCT CARD EFFECT
=================================== */

const cards =
document.querySelectorAll(
".product-box"
);

cards.forEach(card => {

card.addEventListener(
"mousemove",
(e) => {

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const centerX =
rect.width / 2;

const centerY =
rect.height / 2;

const rotateY =
((x - centerX) / centerX) * 8;

const rotateX =
((centerY - y) / centerY) * 8;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener(
"mouseleave",
() => {

card.style.transform =
"translateY(0px)";

});

});



/* ===================================
   SMOOTH BUTTON GLOW
=================================== */

const buttons =
document.querySelectorAll(
".btn-primary"
);

buttons.forEach(btn => {

btn.addEventListener(
"mouseenter",
() => {

btn.style.boxShadow =
"0 0 25px rgba(255,107,0,.6)";

});

btn.addEventListener(
"mouseleave",
() => {

btn.style.boxShadow =
"none";

});

});



/* ===================================
   PAGE LOADER EFFECT
=================================== */

window.addEventListener(
"load",
() => {

document.body.style.opacity = "0";

setTimeout(() => {

document.body.style.transition =
"opacity .7s ease";

document.body.style.opacity = "1";

},100);

});