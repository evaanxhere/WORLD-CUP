// =======================================================
// FIFA WORLD CUP 2026
// app.js (PART 1)
// =======================================================

const API = "https://www.thesportsdb.com/api/v1/json/123/eventsday.php";

const state = {
    matches: [],
    fixtures: [],
    currentGroup: "A"
};

const FLAGS = {
Argentina:"🇦🇷",
Australia:"🇦🇺",
Austria:"🇦🇹",
Belgium:"🇧🇪",
Brazil:"🇧🇷",
Canada:"🇨🇦",
Colombia:"🇨🇴",
Croatia:"🇭🇷",
Czechia:"🇨🇿",
England:"🏴",
France:"🇫🇷",
Germany:"🇩🇪",
Ghana:"🇬🇭",
Haiti:"🇭🇹",
Iran:"🇮🇷",
"Ivory Coast":"🇨🇮",
Japan:"🇯🇵",
Jordan:"🇯🇴",
Mexico:"🇲🇽",
Morocco:"🇲🇦",
Netherlands:"🇳🇱",
New Zealand:"🇳🇿",
Norway:"🇳🇴",
Panama:"🇵🇦",
Paraguay:"🇵🇾",
Portugal:"🇵🇹",
Qatar:"🇶🇦",
"Saudi Arabia":"🇸🇦",
Scotland:"🏴",
Senegal:"🇸🇳",
Spain:"🇪🇸",
Sweden:"🇸🇪",
Switzerland:"🇨🇭",
Tunisia:"🇹🇳",
Türkiye:"🇹🇷",
USA:"🇺🇸",
Uruguay:"🇺🇾"
};

const ABBR={
Argentina:"ARG",
Australia:"AUS",
Austria:"AUT",
Belgium:"BEL",
Brazil:"BRA",
Canada:"CAN",
Colombia:"COL",
Croatia:"CRO",
Czechia:"CZE",
England:"ENG",
France:"FRA",
Germany:"GER",
Ghana:"GHA",
Haiti:"HAI",
Iran:"IRN",
"Ivory Coast":"CIV",
Japan:"JPN",
Jordan:"JOR",
Mexico:"MEX",
Morocco:"MAR",
Netherlands:"NED",
"New Zealand":"NZL",
Norway:"NOR",
Panama:"PAN",
Paraguay:"PAR",
Portugal:"POR",
Qatar:"QAT",
"Saudi Arabia":"KSA",
Scotland:"SCO",
Senegal:"SEN",
Spain:"ESP",
Sweden:"SWE",
Switzerland:"SUI",
Tunisia:"TUN",
Türkiye:"TUR",
USA:"USA",
Uruguay:"URU"
};

function flag(team){

return FLAGS[team]||"🏳";

}

function short(team){

return ABBR[team]||

team.substring(0,3).toUpperCase();

}

const els={

cards:document.getElementById("liveCards"),

fixtures:document.getElementById("fixturesList"),

groups:document.getElementById("groupPanel"),

tabs:document.getElementById("groupTabs"),

status:document.getElementById("statusText"),

pip:document.getElementById("statusPip"),

search:document.getElementById("search")

};

function skeletonCards(){

els.cards.innerHTML="";

for(let i=0;i<6;i++){

const div=document.createElement("div");

div.className="mcard skeleton";

div.innerHTML=`

<div class="sk-line lg"></div>

<div class="sk-score"></div>

<div class="sk-line"></div>

`;

els.cards.appendChild(div);

}

}

function animateScore(el,end){

let start=0;

const speed=Math.max(12,400/end);

const timer=setInterval(()=>{

start++;

el.textContent=start;

if(start>=end){

clearInterval(timer);

}

},speed);

}

function reveal(){

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

},{
threshold:.15
});

document.querySelectorAll(".block").forEach(section=>{

observer.observe(section);

});

}

function renderCards(matches){

els.cards.innerHTML="";

matches.forEach((match,index)=>{

const card=document.createElement("article");

card.className="mcard";

card.style.animationDelay=`${index*90}ms`;

card.innerHTML=`

<div class="mcard__glow"></div>

<div class="mcard__status">

<span class="pip"></span>

${match.status}

</div>

<div class="mcard__row">

<div class="mcard__team">

<div class="mcard__flag">

${flag(match.home)}

</div>

<div class="mcard__abbr">

${short(match.home)}

</div>

</div>

<div class="mcard__score">

<span class="mcard__num home">${match.homeScore}</span>

<span class="mcard__sep">:</span>

<span class="mcard__num away">${match.awayScore}</span>

</div>

<div class="mcard__team">

<div class="mcard__flag">

${flag(match.away)}

</div>

<div class="mcard__abbr">

${short(match.away)}

</div>

</div>

</div>

<div class="mcard__meta">

<span>${match.date}</span>

<span>${match.stadium||"World Cup"}</span>

</div>

`;

els.cards.appendChild(card);

card.querySelectorAll(".mcard__num").forEach(number=>{

animateScore(number,Number(number.textContent));

});

});

}

function filterCards(value){

const cards=document.querySelectorAll(".mcard");

cards.forEach(card=>{

card.style.display=

card.innerText.toLowerCase().includes(value.toLowerCase())

?"block"

:"none";

});

}

if(els.search){

els.search.addEventListener("input",e=>{

filterCards(e.target.value);

});

}


const FALLBACK_MATCHES = [

{
home:"Argentina",
away:"Brazil",
homeScore:2,
awayScore:1,
status:"FULL TIME",
date:"29 JUN",
stadium:"MetLife Stadium"
},

{
home:"France",
away:"Germany",
homeScore:3,
awayScore:2,
status:"FULL TIME",
date:"29 JUN",
stadium:"AT&T Stadium"
},

{
home:"England",
away:"Portugal",
homeScore:1,
awayScore:1,
status:"LIVE 78'",
date:"TODAY",
stadium:"SoFi Stadium"
},

{
home:"Spain",
away:"Japan",
homeScore:2,
awayScore:0,
status:"FULL TIME",
date:"28 JUN",
stadium:"Azteca"
},

{
home:"USA",
away:"Mexico",
homeScore:0,
awayScore:0,
status:"LIVE 31'",
date:"TODAY",
stadium:"Dallas"
},

{
home:"Netherlands",
away:"Belgium",
homeScore:1,
awayScore:0,
status:"FULL TIME",
date:"27 JUN",
stadium:"Toronto"
}

];

const FIXTURES=[

{
home:"Brazil",
away:"Japan",
time:"Today • 8:30 PM"
},

{
home:"France",
away:"Mexico",
time:"Tomorrow • 1:00 AM"
},

{
home:"Germany",
away:"Spain",
time:"Tomorrow • 5:30 AM"
},

{
home:"England",
away:"Argentina",
time:"2 Jul • 8:30 PM"
},

{
home:"Portugal",
away:"Belgium",
time:"3 Jul • 12:30 AM"
}

];

function renderFixtures(){

els.fixtures.innerHTML="";

FIXTURES.forEach((fixture,index)=>{

const row=document.createElement("div");

row.className="frow fade-up";

row.style.animationDelay=`${index*80}ms`;

row.innerHTML=`

<div class="frow__team">

<div class="frow__flag">

${flag(fixture.home)}

</div>

<div>

${fixture.home}

</div>

</div>

<div class="frow__center">

<div class="frow__vs">

VS

</div>

<div class="frow__time">

${fixture.time}

</div>

</div>

<div class="frow__team frow__team--away">

<div>

${fixture.away}

</div>

<div class="frow__flag">

${flag(fixture.away)}

</div>

</div>

`;

els.fixtures.appendChild(row);

});

}

async function fetchLiveMatches(){

try{

const today=new Date().toISOString().slice(0,10);

const url=`${API}?d=${today}&s=Soccer`;

const response=await fetch(url);

if(!response.ok){

throw new Error();

}

const json=await response.json();

if(!json.events){

throw new Error();

}

const worldCup=json.events.filter(event=>{

return event.strLeague?.toLowerCase().includes("world cup");

});

if(worldCup.length===0){

throw new Error();

}

state.matches=worldCup.map(match=>({

home:match.strHomeTeam,

away:match.strAwayTeam,

homeScore:Number(match.intHomeScore||0),

awayScore:Number(match.intAwayScore||0),

status:match.strStatus||"LIVE",

stadium:match.strVenue||"World Cup",

date:match.dateEvent

}));

els.status.textContent="LIVE CONNECTED";

els.pip.classList.remove("offline");

els.pip.classList.add("live");

renderCards(state.matches);

}

catch{

state.matches=FALLBACK_MATCHES;

els.status.textContent="OFFLINE MODE";

els.pip.classList.remove("live");

els.pip.classList.add("offline");

renderCards(state.matches);

}

}

const GROUPS={

A:[
"Argentina",
"Mexico",
"Japan",
"Canada"
],

B:[
"France",
"Germany",
"Brazil",
"Spain"
],

C:[
"Portugal",
"England",
"Belgium",
"USA"
]

};

function renderGroups(){

els.tabs.innerHTML="";

Object.keys(GROUPS).forEach(group=>{

const button=document.createElement("button");

button.className="gtab";

button.innerText=group;

if(group===state.currentGroup){

button.classList.add("active");

}

button.onclick=()=>{

state.currentGroup=group;

document

.querySelectorAll(".gtab")

.forEach(tab=>tab.classList.remove("active"));

button.classList.add("active");

renderGroupTable();

};

els.tabs.appendChild(button);

});

renderGroupTable();

}

function renderGroupTable(){

const teams=GROUPS[state.currentGroup];

els.groups.innerHTML=`

<table class="gtable">

<thead>

<tr>

<th>TEAM</th>

<th>W</th>

<th>D</th>

<th>L</th>

<th>PTS</th>

</tr>

</thead>

<tbody>

${teams.map((team,index)=>`

<tr>

<td>

<div class="gt-team">

<div class="gt-flag">

${flag(team)}

</div>

<div class="gt-name">

${team}

</div>

</div>

</td>

<td>${3-index}</td>

<td>${index}</td>

<td>${index===3?2:0}</td>

<td class="gt-pts">${9-index}</td>

</tr>

`).join("")}

</tbody>

</table>

`;

}

async function boot(){

skeletonCards();

renderFixtures();

renderGroups();

reveal();

await fetchLiveMatches();

}

boot();

setInterval(fetchLiveMatches,60000);