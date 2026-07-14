/*=========================================
 FAIZ SERVICES PREMIUM SCRIPT
=========================================*/

// =====================
// MOBILE MENU
// =====================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("show");

});

}

// =====================
// STICKY HEADER
// =====================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

// =====================
// HERO SLIDER
// =====================

const slides=document.querySelectorAll(".slide");

let currentSlide=0;

function showSlide(index){

slides.forEach((slide)=>{

slide.classList.remove("active");

});

slides[index].classList.add("active");

}

function nextSlide(){

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

showSlide(currentSlide);

}

setInterval(nextSlide,5000);

// =====================
// SCROLL ANIMATION
// =====================

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show-item");

}

});

},
{
threshold:.15
});

document.querySelectorAll(

".about,.feature,.counter-box,.service-card,.why-card,.cta"

).forEach((el)=>{

el.classList.add("hidden-item");

observer.observe(el);

});

// =====================
// SCROLL TO TOP
// =====================

const topBtn=document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// =====================
// SMOOTH SCROLL
// =====================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// =====================
// CLOSE MOBILE MENU
// =====================

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("show");

});

});

console.log("Faiz Services Premium Website Loaded Successfully");
