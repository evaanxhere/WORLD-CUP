/* ==========================================================
   WORLD PULSE
   APP.JS
   PART 1
   CORE ENGINE
========================================================== */

"use strict";

/* ==========================================================
   DOM
========================================================== */

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);

/* ==========================================================
   ELEMENTS
========================================================== */

const loader = $(".page-loader");

const liveClock = $("#liveClock");

const matchCounter = $("#matchCounter");

const goalCounter = $("#goalCounter");

const searchInput = $("#search");

const themeToggle = $("#themeToggle");

const cardsContainer = $("#liveCards");

const fixtureContainer = $("#fixturesList");

/* ==========================================================
   GLOBAL STATE
========================================================== */

const state = {

theme: localStorage.getItem("theme") || "dark",

matches: [],

fixtures: [],

filtered: []

};

/* ==========================================================
   INIT
========================================================== */

window.addEventListener("DOMContentLoaded", init);

function init(){

loadTheme();

createBackgroundParticles();

startClock();

animateNumbers();

loadData();

setupEvents();

hideLoader();

}

/* ==========================================================
   LOADER
========================================================== */

function hideLoader(){

setTimeout(()=>{

loader.style.opacity="0";

loader.style.pointerEvents="none";

setTimeout(()=>{

loader.remove();

},800);

},1200);

}

/* ==========================================================
   THEME
========================================================== */

function loadTheme(){

document.body.classList.remove("light","oled");

document.body.classList.add(state.theme);

}

themeToggle?.addEventListener("click",()=>{

if(state.theme==="dark"){

state.theme="light";

themeToggle.textContent="☀️";

}

else if(state.theme==="light"){

state.theme="oled";

themeToggle.textContent="🖤";

}

else{

state.theme="dark";

themeToggle.textContent="🌙";

}

document.body.classList.remove("light","oled");

if(state.theme!=="dark"){

document.body.classList.add(state.theme);

}

localStorage.setItem("theme",state.theme);

});

/* ==========================================================
   LIVE CLOCK
========================================================== */

function startClock(){

updateClock();

setInterval(updateClock,1000);

}

function updateClock(){

const now=new Date();

liveClock.textContent=now.toLocaleTimeString([],{

hour:"2-digit",

minute:"2-digit"

});

}

/* ==========================================================
   COUNT UP
========================================================== */

function animateValue(el,end,duration=1800){

let start=0;

const step=end/(duration/16);

const timer=setInterval(()=>{

start+=step;

if(start>=end){

start=end;

clearInterval(timer);

}

el.textContent=Math.floor(start).toLocaleString();

},16);

}

function animateNumbers(){

if(matchCounter)

animateValue(matchCounter,104);

if(goalCounter)

animateValue(goalCounter,128);

}

/* ==========================================================
   SAMPLE DATA
========================================================== */

state.matches=[

{

home:"Argentina",

away:"France",

homeFlag:"assets/flags/argentina.svg",

awayFlag:"assets/flags/france.svg",

homeScore:2,

awayScore:1,

minute:"84'",

stadium:"MetLife Stadium",

status:"LIVE"

},

{

home:"Brazil",

away:"Japan",

homeFlag:"assets/flags/brazil.svg",

awayFlag:"assets/flags/japan.svg",

homeScore:3,

awayScore:0,

minute:"72'",

stadium:"SoFi Stadium",

status:"LIVE"

},

{

home:"England",

away:"Portugal",

homeFlag:"assets/flags/england.svg",

awayFlag:"assets/flags/portugal.svg",

homeScore:1,

awayScore:0,

minute:"61'",

stadium:"AT&T Stadium",

status:"LIVE"

}

];

state.fixtures=[

{

home:"Spain",

away:"Germany",

date:"Tomorrow",

time:"20:30",

stadium:"BC Place"

},

{

home:"USA",

away:"Mexico",

date:"Friday",

time:"19:00",

stadium:"Azteca"

},

{

home:"Italy",

away:"Netherlands",

date:"Saturday",

time:"22:00",

stadium:"Mercedes-Benz"

}

];

/* ==========================================================
   LOAD
========================================================== */

function loadData(){

renderMatches(state.matches);

renderFixtures(state.fixtures);

}

/* ==========================================================
   EVENTS
========================================================== */

function setupEvents(){

searchInput?.addEventListener("input",searchMatches);

window.addEventListener("scroll",handleScroll);

}

/* ==========================================================
   SCROLL NAVBAR
========================================================== */

function handleScroll(){

const nav=document.querySelector(".navbar");

if(window.scrollY>50){

nav.classList.add("scrolled");

}else{

nav.classList.remove("scrolled");

}

}

/* ==========================================================
   PARTICLES
========================================================== */

function createBackgroundParticles(){

const container=document.createElement("div");

container.className="particles";

document.body.append(container);

for(let i=0;i<45;i++){

const p=document.createElement("span");

p.className="particle";

p.style.left=Math.random()*100+"%";

p.style.animationDuration=

12+Math.random()*18+"s";

p.style.animationDelay=

Math.random()*10+"s";

p.style.opacity=Math.random();

container.appendChild(p);

}

  }
/* ==========================================================
   APP.JS
   PART 2
   RENDER ENGINE
========================================================== */

/* ==========================================================
   RENDER LIVE MATCHES
========================================================== */

function renderMatches(matches){

if(!cardsContainer) return;

cardsContainer.innerHTML="";

matches.forEach(match=>{

const card=document.createElement("article");

card.className="match-card reveal";

card.innerHTML=`

<div class="match-glow"></div>

<div class="card-status">

<div class="live-pill">

${match.status}

</div>

<div class="match-time">

${match.minute}

</div>

</div>

<div class="card-teams">

<div class="card-team">

<img src="${match.homeFlag}" alt="${match.home}">

<h3>

${match.home}

</h3>

</div>

<div class="card-score">

<span>${match.homeScore}</span>

-

<span>${match.awayScore}</span>

</div>

<div class="card-team">

<img src="${match.awayFlag}" alt="${match.away}">

<h3>

${match.away}

</h3>

</div>

</div>

<div class="card-footer">

<div class="info-box">

<h4>

${match.minute}

</h4>

<p>

Minute

</p>

</div>

<div class="info-box">

<h4>

LIVE

</h4>

<p>

Status

</p>

</div>

<div class="info-box">

<h4>

${match.stadium}

</h4>

<p>

Venue

</p>

</div>

</div>

`;

cardsContainer.appendChild(card);

});

activateReveal();

}

/* ==========================================================
   FIXTURES
========================================================== */

function renderFixtures(fixtures){

if(!fixtureContainer) return;

fixtureContainer.innerHTML="";

fixtures.forEach(match=>{

const card=document.createElement("article");

card.className="fixture-card reveal";

card.innerHTML=`

<div class="fixture-top">

<div class="fixture-date">

${match.date}

</div>

<div class="fixture-stadium">

${match.stadium}

</div>

</div>

<div class="fixture-teams">

<div class="fixture-team">

<h3>

${match.home}

</h3>

</div>

<div class="fixture-vs">

VS

</div>

<div class="fixture-team">

<h3>

${match.away}

</h3>

</div>

</div>

<div class="fixture-bottom">

<div class="fixture-countdown">

Kick Off

${match.time}

</div>

<button class="fixture-watch">

Details

</button>

</div>

`;

fixtureContainer.appendChild(card);

});

activateReveal();

}

/* ==========================================================
   SEARCH
========================================================== */

function searchMatches(e){

const keyword=e.target.value.toLowerCase();

const filtered=state.matches.filter(match=>{

return(

match.home.toLowerCase().includes(keyword)

||

match.away.toLowerCase().includes(keyword)

||

match.stadium.toLowerCase().includes(keyword)

);

});

renderMatches(filtered);

}

/* ==========================================================
   SCROLL REVEAL
========================================================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{

threshold:.15

});

function activateReveal(){

document

.querySelectorAll(".reveal")

.forEach(el=>{

observer.observe(el);

});

}

/* ==========================================================
   LIVE SCORE ANIMATION
========================================================== */

setInterval(()=>{

const scores=document.querySelectorAll(".card-score");

scores.forEach(score=>{

score.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.08)"

},

{

transform:"scale(1)"

}

],{

duration:600

});

});

},5000);

/* ==========================================================
   RANDOM LIVE MINUTES
========================================================== */

setInterval(()=>{

state.matches.forEach(match=>{

let minute=parseInt(match.minute);

if(minute<90){

minute++;

match.minute=minute+"'";

}

});

renderMatches(state.matches);

},60000);

/* ==========================================================
   APP.JS
   PART 3
   GROUPS • MODALS • BACK TO TOP • UI ENGINE
========================================================== */

/* ==========================================================
   GROUP DATA
========================================================== */

const groups={

A:[

{team:"Argentina",flag:"🇦🇷",p:3,w:3,d:0,l:0,gf:8,ga:2,pts:9,form:["W","W","W"]},

{team:"Mexico",flag:"🇲🇽",p:3,w:2,d:0,l:1,gf:5,ga:3,pts:6,form:["W","L","W"]},

{team:"Japan",flag:"🇯🇵",p:3,w:1,d:0,l:2,gf:3,ga:5,pts:3,form:["L","W","L"]},

{team:"Egypt",flag:"🇪🇬",p:3,w:0,d:0,l:3,gf:1,ga:7,pts:0,form:["L","L","L"]}

],

B:[

{team:"France",flag:"🇫🇷",p:3,w:3,d:0,l:0,gf:9,ga:1,pts:9,form:["W","W","W"]},

{team:"Belgium",flag:"🇧🇪",p:3,w:2,d:0,l:1,gf:7,ga:4,pts:6,form:["W","L","W"]},

{team:"Canada",flag:"🇨🇦",p:3,w:1,d:0,l:2,gf:2,ga:5,pts:3,form:["L","W","L"]},

{team:"Morocco",flag:"🇲🇦",p:3,w:0,d:0,l:3,gf:2,ga:10,pts:0,form:["L","L","L"]}

]

};

/* ==========================================================
   GROUP TABLE
========================================================== */

const groupTabs=$("#groupTabs");

const groupPanel=$("#groupPanel");

function initGroups(){

if(!groupTabs||!groupPanel)return;

groupTabs.innerHTML="";

Object.keys(groups).forEach((group,index)=>{

const btn=document.createElement("button");

btn.textContent="Group "+group;

if(index===0)btn.classList.add("active");

btn.onclick=()=>{

$$(".group-tabs button").forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

renderGroup(group);

};

groupTabs.appendChild(btn);

});

renderGroup("A");

}

function renderGroup(letter){

const teams=groups[letter];

groupPanel.innerHTML=`

<table>

<thead>

<tr>

<th>Team</th>

<th>P</th>

<th>W</th>

<th>D</th>

<th>L</th>

<th>GF</th>

<th>GA</th>

<th>Pts</th>

<th>Form</th>

</tr>

</thead>

<tbody>

${teams.map(team=>`

<tr>

<td class="team-cell">

<span>${team.flag}</span>

${team.team}

</td>

<td>${team.p}</td>

<td>${team.w}</td>

<td>${team.d}</td>

<td>${team.l}</td>

<td>${team.gf}</td>

<td>${team.ga}</td>

<td><strong>${team.pts}</strong></td>

<td>

<div class="form">

${team.form.map(result=>`

<span class="${

result==="W"

?"win"

:result==="D"

?"draw"

:"loss"

}">

</span>

`).join("")}

</div>

</td>

</tr>

`).join("")}

</tbody>

</table>

`;

}

/* ==========================================================
   MATCH MODAL
========================================================== */

const modal=document.createElement("div");

modal.className="match-modal";

modal.innerHTML=`

<div class="modal-box">

<button class="close-modal">

✕

</button>

<div id="modalContent"></div>

</div>

`;

document.body.appendChild(modal);

document.addEventListener("click",e=>{

const card=e.target.closest(".match-card");

if(card){

const team=

card.querySelector("h3").textContent;

openModal(team);

}

});

function openModal(team){

$("#modalContent").innerHTML=`

<h2>

${team}

</h2>

<p>

Detailed statistics coming in future updates.

</p>

<div class="player-row">

<span>

Possession

</span>

<strong>

61%

</strong>

</div>

<div class="player-row">

<span>

Shots

</span>

<strong>

14

</strong>

</div>

<div class="player-row">

<span>

Corners

</span>

<strong>

8

</strong>

</div>

`;

modal.classList.add("show");

}

modal.addEventListener("click",e=>{

if(

e.target===modal||

e.target.classList.contains("close-modal")

){

modal.classList.remove("show");

}

});

/* ==========================================================
   BACK TO TOP
========================================================== */

const backTop=document.createElement("div");

backTop.className="back-top";

backTop.innerHTML="↑";

document.body.appendChild(backTop);

window.addEventListener("scroll",()=>{

if(window.scrollY>700){

backTop.classList.add("show");

}else{

backTop.classList.remove("show");

}

});

backTop.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* ==========================================================
   NAV ACTIVE
========================================================== */

const sections=document.querySelectorAll("section[id]");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(scrollY>=top){

current=section.id;

}

});

document

.querySelectorAll("nav a")

.forEach(link=>{

link.classList.remove("active");

if(

link.getAttribute("href")==="#"+current

){

link.classList.add("active");

}

});

});

/* ==========================================================
   START
========================================================== */

initGroups();

/* ==========================================================
   APP.JS
   PART 4
   PREMIUM INTERACTIONS
========================================================== */

/* ==========================================================
   CUSTOM CURSOR
========================================================== */

const cursor=$(".cursor");

const cursorBlur=$(".cursor-blur");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

cursorBlur.animate({

left:e.clientX-120+"px",

top:e.clientY-120+"px"

},{

duration:350,

fill:"forwards"

});

});

document.querySelectorAll(

"a,button,.match-card,.fixture-card,.player-card,.news-card,.stadium-card,.city-item"

).forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.style.transform="scale(2)";

});

item.addEventListener("mouseleave",()=>{

cursor.style.transform="scale(1)";

});

});

/* ==========================================================
   MAGNET BUTTON
========================================================== */

document.querySelectorAll(

".primary-btn,.secondary-btn,.fixture-watch"

).forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect=button.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;

button.style.transform=

`translate(${x*.15}px,${y*.15}px)`;

});

button.addEventListener("mouseleave",()=>{

button.style.transform="";

});

});

/* ==========================================================
   RIPPLE
========================================================== */

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(

this.clientWidth,

this.clientHeight

);

const rect=this.getBoundingClientRect();

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=

e.clientX-rect.left-size/2+"px";

ripple.style.top=

e.clientY-rect.top-size/2+"px";

this.classList.add("btn-ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});

/* ==========================================================
   PARALLAX HERO
========================================================== */

const hero=$(".hero");

window.addEventListener("mousemove",(e)=>{

if(!hero)return;

const x=(e.clientX/window.innerWidth-.5)*20;

const y=(e.clientY/window.innerHeight-.5)*20;

hero.style.backgroundPosition=

`${50+x}% ${50+y}%`;

});

/* ==========================================================
   FLOATING HERO LIGHTS
========================================================== */

document.querySelectorAll(".hero-light")

.forEach((light,index)=>{

setInterval(()=>{

const x=Math.random()*60-30;

const y=Math.random()*60-30;

light.animate([

{

transform:"translate(0,0)"

},

{

transform:`translate(${x}px,${y}px)`

},

{

transform:"translate(0,0)"

}

],{

duration:12000+(index*2000),

fill:"forwards"

});

},12000);

});

/* ==========================================================
   LIVE MATCH RANDOMIZER
========================================================== */

setInterval(()=>{

state.matches.forEach(match=>{

if(Math.random()>.75){

if(Math.random()>.5){

match.homeScore++;

}else{

match.awayScore++;

}

}

});

renderMatches(state.matches);

},45000);

/* ==========================================================
   TICKER DUPLICATE
========================================================== */

const ticker=$(".ticker-track");

if(ticker){

ticker.innerHTML+=ticker.innerHTML;

}

/* ==========================================================
   STAT CARD COUNT
========================================================== */

const statObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(!entry.isIntersecting)return;

const number=

entry.target.querySelector("h3");

if(!number)return;

const end=

parseInt(

number.textContent.replace(/\D/g,"")

);

if(isNaN(end))return;

let value=0;

const speed=end/90;

const timer=setInterval(()=>{

value+=speed;

if(value>=end){

value=end;

clearInterval(timer);

}

number.textContent=

Math.floor(value).toLocaleString();

},15);

statObserver.unobserve(entry.target);

});

});

document

.querySelectorAll(".stat-card")

.forEach(card=>{

statObserver.observe(card);

});

/* ==========================================================
   PAGE PROGRESS BAR
========================================================== */

const progress=document.createElement("div");

progress.className="page-progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const height=

document.documentElement.scrollHeight-

window.innerHeight;

const value=

window.scrollY/height*100;

progress.style.width=value+"%";

});

/* ==========================================================
   KEYBOARD SHORTCUTS
========================================================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="/"){

e.preventDefault();

searchInput?.focus();

}

if(e.key==="t"){

themeToggle?.click();

}

if(e.key==="Escape"){

modal.classList.remove("show");

}

});

/* ==========================================================
   CONSOLE MESSAGE
========================================================== */

console.clear();

console.log(

"%cWORLD PULSE",

"font-size:34px;font-weight:bold;color:#00d8ff;"

);

console.log(

"%cDesigned with ❤️ for football fans.",

"font-size:16px;color:white;"

);

/* ==========================================================
   APP.JS
   PART 5
   ADVANCED FEATURES
========================================================== */

/* ==========================================================
   FAVORITE TEAM
========================================================== */

const favoriteKey="favoriteTeam";

function saveFavorite(team){

localStorage.setItem(favoriteKey,team);

showToast(team+" added to favourites");

}

function getFavorite(){

return localStorage.getItem(favoriteKey);

}

document.addEventListener("dblclick",(e)=>{

const card=e.target.closest(".match-card");

if(!card)return;

const team=

card.querySelector(".card-team h3").textContent;

saveFavorite(team);

});

/* ==========================================================
   TOAST
========================================================== */

const toast=document.createElement("div");

toast.className="toast";

document.body.appendChild(toast);

function showToast(message){

toast.textContent=message;

toast.classList.add("show");

clearTimeout(toast.timer);

toast.timer=setTimeout(()=>{

toast.classList.remove("show");

},2500);

}

/* ==========================================================
   COPY SCORE
========================================================== */

document.addEventListener("click",(e)=>{

const score=e.target.closest(".card-score");

if(!score)return;

navigator.clipboard.writeText(score.innerText);

showToast("Score copied");

});

/* ==========================================================
   MATCH FILTER
========================================================== */

function filterLive(){

renderMatches(

state.matches.filter(match=>

match.status==="LIVE"

)

);

}

function filterFinished(){

renderMatches(

state.matches.filter(match=>

match.status==="FT"

)

);

}

/* ==========================================================
   RANDOM NEWS
========================================================== */

const news=[

"Mbappé scores another brace.",

"Attendance breaks tournament record.",

"Brazil qualify for Quarter Finals.",

"England remain unbeaten.",

"Argentina dominate possession rankings.",

"Spain record highest passing accuracy."

];

function randomNews(){

const cards=document.querySelectorAll(".news-card");

cards.forEach(card=>{

const p=card.querySelector("p");

if(!p)return;

p.textContent=

news[Math.floor(Math.random()*news.length)];

});

}

setInterval(randomNews,20000);

/* ==========================================================
   LIVE TICKER UPDATE
========================================================== */

const tickerItems=[

"🇦🇷 Argentina 2-1 France",

"🇧🇷 Brazil 3-0 Japan",

"🇪🇸 Spain 2-2 Germany",

"🏴 England 1-0 Portugal",

"🇺🇸 USA 0-0 Mexico",

"🇮🇹 Italy 1-0 Netherlands",

"🏆 FIFA World Cup 2026"

];

function updateTicker(){

const ticker=document.querySelector(".ticker-track");

if(!ticker)return;

ticker.innerHTML="";

tickerItems.forEach(item=>{

const span=document.createElement("span");

span.textContent=item;

ticker.appendChild(span);

});

ticker.innerHTML+=ticker.innerHTML;

}

updateTicker();

/* ==========================================================
   LIVE STATS
========================================================== */

function randomStats(){

document

.querySelectorAll(".info-box h4")

.forEach(stat=>{

if(Math.random()>.6){

const value=

parseInt(stat.textContent);

if(!isNaN(value))

stat.textContent=value+1;

}

});

}

setInterval(randomStats,15000);

/* ==========================================================
   PLAYER IMAGE PARALLAX
========================================================== */

document

.querySelectorAll(".player-card")

.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const img=card.querySelector("img");

if(!img)return;

const rect=card.getBoundingClientRect();

const x=(e.clientX-rect.left)/rect.width-.5;

const y=(e.clientY-rect.top)/rect.height-.5;

img.style.transform=

`scale(1.08)

rotateY(${x*18}deg)

rotateX(${-y*18}deg)`;

});

card.addEventListener("mouseleave",()=>{

const img=card.querySelector("img");

if(img)

img.style.transform="";

});

});

/* ==========================================================
   LOADING SKELETON
========================================================== */

function showSkeleton(container){

container.innerHTML="";

for(let i=0;i<6;i++){

const div=document.createElement("div");

div.className="skeleton-card";

container.appendChild(div);

}

}

function hideSkeleton(){

renderMatches(state.matches);

}

/* ==========================================================
   INITIAL LOAD
========================================================== */

showSkeleton(cardsContainer);

setTimeout(hideSkeleton,1200);

/* ==========================================================
   NETWORK STATUS
========================================================== */

window.addEventListener("offline",()=>{

showToast("You are offline");

});

window.addEventListener("online",()=>{

showToast("Back online");

});

/* ==========================================================
   PERFORMANCE
========================================================== */

window.requestIdleCallback?.(()=>{

console.log(

"Background tasks completed."

);

});

/* ==========================================================
   END OF PART 5
========================================================== */

/* ==========================================================
   APP.JS
   PART 6
   ADVANCED UI ENGINE
========================================================== */

/* ==========================================================
   STADIUM EXPLORE
========================================================== */

document.querySelectorAll(".stadium-card button")

.forEach(button=>{

button.addEventListener("click",()=>{

const card=button.closest(".stadium-card");

const name=card.querySelector("h3").textContent;

const city=card.querySelector("p").textContent;

$("#modalContent").innerHTML=`

<h2>

${name}

</h2>

<p>

${city}

</p>

<div class="player-row">

<span>

Capacity

</span>

<strong>

82,500

</strong>

</div>

<div class="player-row">

<span>

Pitch

</span>

<strong>

Natural Grass

</strong>

</div>

<div class="player-row">

<span>

Opened

</span>

<strong>

2010

</strong>

</div>

<div class="player-row">

<span>

Matches

</span>

<strong>

8

</strong>

</div>

`;

modal.classList.add("show");

});

});

/* ==========================================================
   NEWS AUTO SLIDER
========================================================== */

let activeNews=0;

function rotateNews(){

const cards=document.querySelectorAll(".news-card");

if(cards.length===0)return;

cards.forEach(card=>{

card.style.opacity=".35";

card.style.transform="scale(.96)";

});

cards[activeNews].style.opacity="1";

cards[activeNews].style.transform="scale(1.03)";

activeNews++;

if(activeNews>=cards.length)

activeNews=0;

}

rotateNews();

setInterval(rotateNews,4500);

/* ==========================================================
   RANDOM HERO SCORE
========================================================== */

function updateHeroScore(){

const score=document.querySelector(".score");

if(!score)return;

const home=Math.floor(Math.random()*5);

const away=Math.floor(Math.random()*5);

score.innerHTML=`

<span>

${home}

</span>

-

<span>

${away}

</span>

`;

}

setInterval(updateHeroScore,30000);

/* ==========================================================
   LIVE CLOCK COLOR
========================================================== */

setInterval(()=>{

const hour=new Date().getHours();

if(hour>=18||hour<=6){

liveClock.style.color="#00d8ff";

}else{

liveClock.style.color="#ffffff";

}

},5000);

/* ==========================================================
   HERO NUMBER ANIMATION
========================================================== */

document.querySelectorAll(".number-card")

.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.animate([

{

transform:"translateY(0)"

},

{

transform:"translateY(-12px) scale(1.05)"

},

{

transform:"translateY(-8px)"

}

],{

duration:500,

fill:"forwards"

});

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

/* ==========================================================
   STAT CARD HOVER GLOW
========================================================== */

document.querySelectorAll(".stat-card")

.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,

rgba(0,216,255,.18),

rgba(255,255,255,.05) 65%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="";

});

});

/* ==========================================================
   HERO PARALLAX IMAGE
========================================================== */

window.addEventListener("scroll",()=>{

const y=window.scrollY;

const hero=document.querySelector(".hero");

if(hero){

hero.style.transform=

`translateY(${y*.18}px)`;

}

});

/* ==========================================================
   RANDOM ATTENDANCE
========================================================== */

const attendance=document.querySelectorAll(".stat-card h3")[3];

if(attendance){

setInterval(()=>{

const number=

(3000000+

Math.floor(Math.random()*100000))

.toLocaleString();

attendance.textContent=number;

},8000);

}

/* ==========================================================
   CONFETTI
========================================================== */

function launchConfetti(){

for(let i=0;i<120;i++){

const piece=document.createElement("span");

piece.className="confetti";

piece.style.left=Math.random()*100+"vw";

piece.style.background=

`hsl(${Math.random()*360},100%,60%)`;

piece.style.animationDuration=

2+Math.random()*3+"s";

document.body.appendChild(piece);

setTimeout(()=>{

piece.remove();

},5000);

}

}

/* ==========================================================
   SECRET CODE
========================================================== */

let keys="";

document.addEventListener("keydown",(e)=>{

keys+=e.key.toLowerCase();

keys=keys.slice(-5);

if(keys==="fifa!"){

launchConfetti();

showToast("🏆 World Champions!");

}

});

/* ==========================================================
   LAZY IMAGE FADE
========================================================== */

const imageObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

imageObserver.unobserve(entry.target);

}

});

});

document.querySelectorAll("img")

.forEach(img=>{

imageObserver.observe(img);

});

/* ==========================================================
   FINAL INITIALIZATION
========================================================== */

window.addEventListener("load",()=>{

activateReveal();

initGroups();

updateTicker();

});

/* ==========================================================
   END OF PART 6
========================================================== */
/* ==========================================================
   APP.JS
   PART 7
   PREMIUM UX ENGINE
========================================================== */

/* ==========================================================
   PAGE VISIBILITY
========================================================== */

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

document.title="⚽ Come back! Live matches are waiting.";

}else{

document.title="World Pulse | FIFA World Cup 2026";

}

});

/* ==========================================================
   SMOOTH SECTION SCROLL
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault();

const target=document.querySelector(

link.getAttribute("href")

);

if(!target)return;

window.scrollTo({

top:target.offsetTop-90,

behavior:"smooth"

});

});

});

/* ==========================================================
   ACTIVE HERO BUTTON
========================================================== */

document.querySelectorAll(

".primary-btn,.secondary-btn"

).forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.animate([

{

transform:"translateY(0)"

},

{

transform:"translateY(-8px) scale(1.05)"

},

{

transform:"translateY(-5px)"

}

],{

duration:300,

fill:"forwards"

});

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="";

});

});

/* ==========================================================
   CARD TILT
========================================================== */

document.querySelectorAll(

".match-card,.fixture-card,.player-card,.stadium-card,.news-card"

).forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rx=((y/rect.height)-.5)*-12;

const ry=((x/rect.width)-.5)*12;

card.style.transform=

`perspective(1000px)

rotateX(${rx}deg)

rotateY(${ry}deg)

translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

/* ==========================================================
   RANDOM MATCH SHUFFLE
========================================================== */

function shuffleMatches(){

state.matches.sort(()=>Math.random()-.5);

renderMatches(state.matches);

}

setInterval(shuffleMatches,120000);

/* ==========================================================
   LIVE COUNTER
========================================================== */

let liveMatches=

document.querySelectorAll(".match-card").length;

setInterval(()=>{

matchCounter.textContent=liveMatches;

},3000);

/* ==========================================================
   MATCH HIGHLIGHT
========================================================== */

setInterval(()=>{

const cards=document.querySelectorAll(".match-card");

cards.forEach(card=>{

card.classList.remove("featured");

});

if(cards.length){

cards[

Math.floor(Math.random()*cards.length)

].classList.add("featured");

}

},6000);

/* ==========================================================
   NEWS HOVER
========================================================== */

document.querySelectorAll(".news-card")

.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.borderColor="#00d8ff";

});

card.addEventListener("mouseleave",()=>{

card.style.borderColor="";

});

});

/* ==========================================================
   SCROLL DEPTH
========================================================== */

let highest=0;

window.addEventListener("scroll",()=>{

const depth=Math.round(

(window.scrollY/

(document.body.scrollHeight-

window.innerHeight))*100

);

if(depth>highest){

highest=depth;

console.log(

"Scroll Progress:",highest+"%"

);

}

});

/* ==========================================================
   KEYBOARD NAVIGATION
========================================================== */

document.addEventListener("keydown",e=>{

if(e.key==="ArrowDown"){

window.scrollBy({

top:window.innerHeight,

behavior:"smooth"

});

}

if(e.key==="ArrowUp"){

window.scrollBy({

top:-window.innerHeight,

behavior:"smooth"

});

}

});

/* ==========================================================
   PERFORMANCE FPS
========================================================== */

let frames=0;

let last=performance.now();

function fpsCounter(now){

frames++;

if(now-last>=1000){

console.log("FPS:",frames);

frames=0;

last=now;

}

requestAnimationFrame(fpsCounter);

}

requestAnimationFrame(fpsCounter);

/* ==========================================================
   RANDOM GLOW
========================================================== */

setInterval(()=>{

document.querySelectorAll(".hero-light")

.forEach(light=>{

light.style.opacity=

(.25+Math.random()*.35);

});

},4000);

/* ==========================================================
   PRELOAD IMAGES
========================================================== */

document.querySelectorAll("img")

.forEach(img=>{

const preload=new Image();

preload.src=img.src;

});

/* ==========================================================
   APP READY
========================================================== */

console.log(

"%cWorld Pulse Engine Loaded Successfully",

"color:#00d8ff;font-size:18px;font-weight:bold;"

);

/* ==========================================================
   END OF PART 7
========================================================== */
/* ==========================================================
   APP.JS
   PART 8
   ADVANCED EXPERIENCE ENGINE
========================================================== */

/* ==========================================================
   WEATHER SIMULATION
========================================================== */

const weatherTypes=[

"☀️ Clear",

"🌤 Partly Cloudy",

"☁️ Cloudy",

"🌧 Light Rain"

];

function updateWeather(){

document.querySelectorAll(".stadium-card")

.forEach(card=>{

let weather=card.querySelector(".weather");

if(!weather){

weather=document.createElement("div");

weather.className="weather";

card.querySelector(".stadium-content")

.appendChild(weather);

}

weather.textContent=

weatherTypes[

Math.floor(

Math.random()*weatherTypes.length

)

];

});

}

updateWeather();

setInterval(updateWeather,30000);

/* ==========================================================
   LIVE CLOCK GLOW
========================================================== */

setInterval(()=>{

liveClock.animate([

{

opacity:1,

transform:"scale(1)"

},

{

opacity:.65,

transform:"scale(1.15)"

},

{

opacity:1,

transform:"scale(1)"

}

],{

duration:1000

});

},1000);

/* ==========================================================
   RANDOM SCORE FLASH
========================================================== */

function flashRandomCard(){

const cards=document.querySelectorAll(".match-card");

if(!cards.length)return;

const card=

cards[Math.floor(Math.random()*cards.length)];

card.animate([

{

boxShadow:"0 0 0 transparent"

},

{

boxShadow:"0 0 50px rgba(0,216,255,.55)"

},

{

boxShadow:"0 0 0 transparent"

}

],{

duration:1400

});

}

setInterval(flashRandomCard,8000);

/* ==========================================================
   HERO PARTICLES
========================================================== */

const heroParticles=document.createElement("div");

heroParticles.className="hero-particles";

document.querySelector(".hero")

.appendChild(heroParticles);

for(let i=0;i<28;i++){

const p=document.createElement("span");

p.className="hero-particle";

p.style.left=Math.random()*100+"%";

p.style.animationDelay=

Math.random()*8+"s";

p.style.animationDuration=

8+Math.random()*8+"s";

heroParticles.appendChild(p);

}

/* ==========================================================
   STADIUM CARD SHINE
========================================================== */

document.querySelectorAll(".stadium-card")

.forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.setProperty("--x",x+"px");

card.style.setProperty("--y",y+"px");

});

});

/* ==========================================================
   COPY TEAM NAME
========================================================== */

document.querySelectorAll(".card-team h3")

.forEach(team=>{

team.style.cursor="pointer";

team.title="Click to copy";

team.addEventListener("click",()=>{

navigator.clipboard.writeText(

team.textContent

);

showToast(

team.textContent+

" copied"

);

});

});

/* ==========================================================
   LIVE VIEWERS
========================================================== */

const viewers=document.createElement("div");

viewers.className="live-viewers";

viewers.innerHTML=`

👥

<span>

128,542

</span>

Watching Live

`;

document.body.appendChild(viewers);

setInterval(()=>{

const number=

120000+

Math.floor(Math.random()*15000);

viewers.querySelector("span")

.textContent=

number.toLocaleString();

},2500);

/* ==========================================================
   HERO BACKGROUND SHIFT
========================================================== */

let hue=0;

setInterval(()=>{

hue++;

document.documentElement.style.setProperty(

"--heroHue",

hue+"deg"

);

},120);

/* ==========================================================
   CARD STAGGER
========================================================== */

function staggerCards(){

document.querySelectorAll(

".match-card,.fixture-card,.player-card,.stadium-card,.news-card"

).forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

setTimeout(()=>{

card.style.transition=".8s";

card.style.opacity="1";

card.style.transform="none";

},index*80);

});

}

window.addEventListener("load",staggerCards);

/* ==========================================================
   QUICK SEARCH
========================================================== */

document.addEventListener("keydown",e=>{

if(e.ctrlKey&&e.key==="k"){

e.preventDefault();

searchInput.focus();

searchInput.select();

showToast("Quick Search");

}

});

/* ==========================================================
   MEMORY
========================================================== */

window.addEventListener("beforeunload",()=>{

localStorage.setItem(

"scrollPosition",

window.scrollY

);

});

window.addEventListener("load",()=>{

const pos=

localStorage.getItem(

"scrollPosition"

);

if(pos){

window.scrollTo({

top:Number(pos)

});

}

});

/* ==========================================================
   RANDOM MOTIVATION
========================================================== */

const quotes=[

"Football is more than a game.",

"Dream. Believe. Achieve.",

"Every Goal Creates History.",

"Champions Never Stop.",

"The World Watches."

];

setInterval(()=>{

console.log(

quotes[

Math.floor(Math.random()*quotes.length)

]

);

},15000);

/* ==========================================================
   END OF PART 8
========================================================== */

/* ==========================================================
   APP.JS
   PART 9
   PRO FEATURES ENGINE
========================================================== */

/* ==========================================================
   ADVANCED SEARCH
========================================================== */

const searchIndex=[];

function buildSearchIndex(){

searchIndex.length=0;

state.matches.forEach(match=>{

searchIndex.push({

type:"Match",

title:match.home+" vs "+match.away,

search:

(match.home+

" "+

match.away+

" "+

match.stadium).toLowerCase(),

data:match

});

});

state.fixtures.forEach(match=>{

searchIndex.push({

type:"Fixture",

title:match.home+" vs "+match.away,

search:

(match.home+

" "+

match.away+

" "+

match.stadium).toLowerCase(),

data:match

});

});

}

buildSearchIndex();

const resultBox=document.createElement("div");

resultBox.className="search-results";

searchInput.parentElement.appendChild(resultBox);

searchInput.addEventListener("input",e=>{

const value=e.target.value.toLowerCase().trim();

resultBox.innerHTML="";

if(value===""){

resultBox.style.display="none";

renderMatches(state.matches);

return;

}

const results=

searchIndex.filter(item=>

item.search.includes(value)

);

results.slice(0,6).forEach(item=>{

const div=document.createElement("div");

div.className="search-item";

div.innerHTML=`

<strong>

${item.type}

</strong>

<span>

${item.title}

</span>

`;

div.onclick=()=>{

searchInput.value=item.title;

resultBox.style.display="none";

showToast(item.title);

};

resultBox.appendChild(div);

});

resultBox.style.display=

results.length?"block":"none";

});

/* ==========================================================
   SHARE MATCH
========================================================== */

document.addEventListener("contextmenu",e=>{

const card=e.target.closest(".match-card");

if(!card)return;

e.preventDefault();

const teams=

card.querySelectorAll(".card-team h3");

const score=

card.querySelector(".card-score").innerText;

const text=

`${teams[0].innerText} ${score} ${teams[1].innerText}`;

if(navigator.share){

navigator.share({

title:"World Pulse",

text:text

});

}else{

navigator.clipboard.writeText(text);

showToast("Match copied");

}

});

/* ==========================================================
   SAVE SETTINGS
========================================================== */

const settings={

theme:state.theme,

favorite:getFavorite(),

animations:true

};

function saveSettings(){

localStorage.setItem(

"worldPulse",

JSON.stringify(settings)

);

}

function loadSettings(){

const data=

JSON.parse(

localStorage.getItem("worldPulse")

);

if(!data)return;

settings.theme=data.theme;

settings.favorite=data.favorite;

settings.animations=data.animations;

}

loadSettings();

/* ==========================================================
   FPS OPTIMIZATION
========================================================== */

let ticking=false;

window.addEventListener("scroll",()=>{

if(!ticking){

window.requestAnimationFrame(()=>{

handleScroll();

ticking=false;

});

ticking=true;

}

});

/* ==========================================================
   NETWORK SPEED
========================================================== */

if(navigator.connection){

const speed=

navigator.connection.effectiveType;

console.log(

"Connection:",speed

);

}

/* ==========================================================
   MATCH TIMER
========================================================== */

setInterval(()=>{

document

.querySelectorAll(".match-time")

.forEach(time=>{

let value=parseInt(time.innerText);

if(!isNaN(value)&&value<90){

time.innerText=(value+1)+"'";

}

});

},60000);

/* ==========================================================
   KEYBOARD COMMANDS
========================================================== */

document.addEventListener("keydown",e=>{

switch(e.key.toLowerCase()){

case "l":

launchConfetti();

break;

case "m":

shuffleMatches();

break;

case "f":

searchInput.focus();

break;

case "g":

window.location.hash="#groups";

break;

case "h":

window.location.hash="#hero";

break;

}

});

/* ==========================================================
   RANDOM BACKGROUND COLORS
========================================================== */

const heroLights=

document.querySelectorAll(".hero-light");

setInterval(()=>{

heroLights.forEach(light=>{

light.style.filter=

`blur(130px)

hue-rotate(${Math.random()*360}deg)`;

});

},10000);

/* ==========================================================
   PERFORMANCE MONITOR
========================================================== */

setInterval(()=>{

const used=

performance.memory?

Math.round(

performance.memory.usedJSHeapSize/

1048576

)+" MB"

:"N/A";

console.log(

"Memory:",used

);

},30000);

/* ==========================================================
   AUTO SAVE
========================================================== */

setInterval(()=>{

saveSettings();

},10000);

/* ==========================================================
   END OF PART 9
========================================================== */

/* ==========================================================
   APP.JS
   PART 10 (FINAL)
   WORLD PULSE ENGINE v1.0
========================================================== */

/* ==========================================================
   ACCESSIBILITY
========================================================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="Tab"){

document.body.classList.add("keyboard-user");

}

});

document.addEventListener("mousedown",()=>{

document.body.classList.remove("keyboard-user");

});

/* ==========================================================
   LAZY REVEAL
========================================================== */

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

revealObserver.unobserve(entry.target);

}

});

},{

threshold:.18

});

document.querySelectorAll(

".fade-up,.match-card,.fixture-card,.player-card,.news-card,.stadium-card,.city-item"

).forEach(el=>{

revealObserver.observe(el);

});

/* ==========================================================
   LIVE DATE
========================================================== */

function updateDate(){

const date=document.querySelector("#todayDate");

if(!date)return;

date.textContent=

new Date().toLocaleDateString(

undefined,

{

weekday:"long",

day:"numeric",

month:"long",

year:"numeric"

}

);

}

updateDate();

/* ==========================================================
   FULLSCREEN
========================================================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="F11")return;

if(e.key.toLowerCase()==="x"){

if(!document.fullscreenElement){

document.documentElement.requestFullscreen();

}else{

document.exitFullscreen();

}

}

});

/* ==========================================================
   CARD SOUND
========================================================== */

const hoverAudio=new Audio();

hoverAudio.src="assets/audio/hover.mp3";

hoverAudio.volume=.15;

document.querySelectorAll(

".match-card,.player-card,.stadium-card"

).forEach(card=>{

card.addEventListener("mouseenter",()=>{

hoverAudio.currentTime=0;

hoverAudio.play().catch(()=>{});

});

});

/* ==========================================================
   RANDOM MATCH OF THE DAY
========================================================== */

function matchOfTheDay(){

const cards=document.querySelectorAll(".match-card");

if(!cards.length)return;

cards.forEach(card=>{

card.classList.remove("match-of-day");

});

cards[

Math.floor(Math.random()*cards.length)

].classList.add("match-of-day");

}

matchOfTheDay();

/* ==========================================================
   ESTIMATED READING TIME
========================================================== */

document.querySelectorAll(".news-card")

.forEach(card=>{

const words=

card.innerText.split(/\s+/).length;

const minutes=

Math.max(1,

Math.ceil(words/200)

);

const time=document.createElement("small");

time.className="reading-time";

time.textContent=

`${minutes} min read`;

card.appendChild(time);

});

/* ==========================================================
   CONNECTION STATUS
========================================================== */

const status=document.createElement("div");

status.className="connection-status";

document.body.appendChild(status);

function networkStatus(){

if(navigator.onLine){

status.textContent="🟢 Online";

status.className="connection-status online";

}else{

status.textContent="🔴 Offline";

status.className="connection-status offline";

}

}

window.addEventListener("online",networkStatus);

window.addEventListener("offline",networkStatus);

networkStatus();

/* ==========================================================
   LOCAL STORAGE CLEANUP
========================================================== */

function cleanStorage(){

const keys=[

"theme",

"favoriteTeam",

"scrollPosition",

"worldPulse"

];

keys.forEach(key=>{

if(localStorage.getItem(key)==="undefined"){

localStorage.removeItem(key);

}

});

}

cleanStorage();

/* ==========================================================
   PERFORMANCE REPORT
========================================================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

const report={

matches:state.matches.length,

fixtures:state.fixtures.length,

theme:state.theme,

online:navigator.onLine,

language:navigator.language,

platform:navigator.platform,

resolution:

window.innerWidth+

"x"+

window.innerHeight

};

console.table(report);

},1200);

});

/* ==========================================================
   DEVELOPER MODE
========================================================== */

window.WorldPulse={

version:"1.0",

state,

renderMatches,

renderFixtures,

shuffleMatches,

launchConfetti,

showToast

};

/* ==========================================================
   EASTER EGG
========================================================== */

let code="";

document.addEventListener("keydown",e=>{

code+=e.key.toLowerCase();

code=code.slice(-10);

if(code==="worldpulse"){

launchConfetti();

document.body.animate([

{

filter:"hue-rotate(0deg)"

},

{

filter:"hue-rotate(360deg)"

}

],{

duration:2500

});

showToast("🏆 Welcome to World Pulse Developer Mode!");

}

});

/* ==========================================================
   FINAL STARTUP
========================================================== */

(function(){

console.clear();

console.log(

"%cWORLD PULSE",

"color:#00d8ff;font-size:42px;font-weight:900;"

);

console.log(

"%cPremium FIFA World Cup Dashboard",

"color:white;font-size:18px;"

);

console.log(

"%cVersion 1.0 Ready",

"color:#2cff72;font-size:16px;font-weight:bold;"

);

networkStatus();

matchOfTheDay();

updateTicker();

updateWeather();

})();

/* ==========================================================
   END OF FILE
========================================================== */



