/*=========================
FAIZ SERVICES SCRIPT
=========================*/

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Sticky Navbar

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 80){
header.classList.add("sticky");
}
else{
header.classList.remove("sticky");
}

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// Counter Animation

const counters=document.querySelectorAll(".counter-box h2");

const speed=200;

counters.forEach(counter=>{

const updateCount=()=>{

const target=counter.innerText.replace(/\D/g,'');

const count=+counter.getAttribute("data-count")||0;

const inc=target/speed;

if(count<target){

counter.setAttribute("data-count",Math.ceil(count+inc));

counter.innerText=Math.ceil(count+inc)+"+";

setTimeout(updateCount,20);

}else{

counter.innerText=target+"+";

}

}

updateCount();

});

// Scroll To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// Fade Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show-item");

}

});

});

document.querySelectorAll(".service-card,.why-card,.feature,.counter-box").forEach(el=>{

el.classList.add("hidden-item");

observer.observe(el);

});
