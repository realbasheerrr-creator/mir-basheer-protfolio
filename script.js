const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
window.addEventListener("load",()=>setTimeout(()=>$("#loader").classList.add("done"),1600));
$("#year").textContent=new Date().getFullYear();

const cursor=$(".cursor"), ring=$(".cursor-ring");
let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;
addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;cursor.style.transform=`translate(${mx-4}px,${my-4}px)`});
function cursorLoop(){rx+=(mx-rx)*.13;ry+=(my-ry)*.13;ring.style.transform=`translate(${rx-17}px,${ry-17}px)`;requestAnimationFrame(cursorLoop)}cursorLoop();
$$("a,.magnetic,button,.skill-card").forEach(el=>{el.addEventListener("mouseenter",()=>{ring.style.width="55px";ring.style.height="55px";ring.style.background="rgba(202,255,69,.08)"});el.addEventListener("mouseleave",()=>{ring.style.width="34px";ring.style.height="34px";ring.style.background="transparent"})});

$$(".magnetic").forEach(el=>{el.addEventListener("mousemove",e=>{let r=el.getBoundingClientRect();let x=(e.clientX-r.left-r.width/2)*.16,y=(e.clientY-r.top-r.height/2)*.16;el.style.transform=`translate(${x}px,${y}px)`});el.addEventListener("mouseleave",()=>el.style.transform="")});

addEventListener("scroll",()=>{
  let h=document.documentElement.scrollHeight-innerHeight;
  $(".scroll-progress").style.width=(scrollY/h*100)+"%";
});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("inview");e.target.style.opacity=1;e.target.style.transform="none"}}),{threshold:.18});
$$(".skill-card,.edu-card,.experience-card").forEach(x=>observer.observe(x));

$$(".tilt").forEach(card=>{card.addEventListener("mousemove",e=>{if(innerWidth<900)return;let r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(700px) rotateX(${y*-7}deg) rotateY(${x*7}deg) translateY(-5px)`});card.addEventListener("mouseleave",()=>card.style.transform="")});

const menu=$(".hamburger"),nav=$(".nav nav");
menu.addEventListener("click",()=>{nav.classList.toggle("mobile-open")});
$$(".nav nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("mobile-open")));

let last=0;
addEventListener("scroll",()=>{let s=scrollY;document.documentElement.style.setProperty("--scroll",s);last=s});
