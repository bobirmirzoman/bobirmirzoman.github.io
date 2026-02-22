const guardsContainer = document.getElementById('guards');
const peopleContainer = document.getElementById('people');
const logEl = document.getElementById('log');
let resource = 50;
let level = 1;

function createCard(container, name) {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerText = name;
    div.style.left = Math.random() * 350 + 'px';
    div.style.top = Math.random() * 350 + 'px';
    container.appendChild(div);
    return div;
}

const guards = ['G1','G2','G3'].map(name => createCard(guardsContainer, name));
const people = ['P1','P2','P3','P4'].map(name => createCard(peopleContainer, name));

function moveCard(card){
    card.style.left = Math.random() * 350 + 'px';
    card.style.top = Math.random() * 350 + 'px';
}

function log(message){
    logEl.innerText = message;
}

document.getElementById('actionBtn').addEventListener('click', ()=>{
    guards.forEach(moveCard);
    people.forEach(moveCard);
    resource += Math.floor(Math.random()*10);
    level = Math.floor(resource/50)+1;
    log(`Resurs: ${resource}, Level: ${level}`);
});
