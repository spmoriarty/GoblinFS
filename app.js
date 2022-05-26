// import functions and grab DOM elements
import { renderBros } from './bros.js';
const brosKnockedList = document.querySelector('knockedout-list');
const brawlerHp = document.querySelector('brawler-bottles');
const brawlerImg = document.querySelector('brawler-img');
const form = document.querySelector('form');
const broListEl = document.querySelector('.bro');

// let state
let brosKnocked = 0;
let currentId = 3;
let brawlerHealth = 10;
let bros = [
    { id: 1, name: 'Broseph', hp: 2 },
    { id: 2, name: 'Brodude', hp: 1 },
];

let broId = 3;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);

    const BroName = data.get('bro-name');

    const newBro = {
        id: currentId,
        name: BroName,
        hp: Math.ceil(Math.random() * 3),
    };
    currentId++;

    bros.push(newBro);

    displayBros();
});

function displayBros() {
    broListEl.textContent = '';
    for (let bro of bros) {
        const broDiv = renderBros(bro);
        broListEl.append(broDiv);
    }
    
    
}
displayBros();
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

broDiv.addEventListener('click', () => {
    function BroClickHandler(bro) {

        if (bro.hp === 0) return;

        if (brawlerHp.hp === 0) return;

        const brawlerHit = Math.random();
        if (brawlerHit < 1) {
            bro.hp--;

            renderBros();

            alert(`You hit ${bro.name}!`);

            if (bro.hp === 0) {
                brosKnocked++;
                brosKnockedList.textContent = brosKnocked;
            }
            else {
                alert('The bro dodged!');
            }

            const broHit = Math.random();
            
            if (broHit < 1) {
                brawlerHp.hp--;
                brawlerHealth.textContent = brawlerHp.hp;
                alert(`${bro.name} cracked you with a bottle!`);

                if (brawlerHealth === 0) {
                    alert('The Bros have taken the bar!');
                } else {
                    alert(`${bro.name} threw a bottle and you dodged!`)
                }
            }

        }

    }
});