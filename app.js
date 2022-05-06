// import functions and grab DOM elements
import { renderBros } from "./bros";
const brosKnocked = document.querySelector('knockedout-list');
const brawlerHp = document.querySelector('brawler-bottles');
const brawlerImg = document.querySelector('brawler-img');
const form = document.querySelector('form');
const broListEl = document.querySelector('.bross');

// let state
let brosKnocked = 0;
let brawlerHealth = 10;
let bros = [
  {id: 1 name: 'Broseph' hp: 2},
  {id: 2 name: 'Brodude' hp: 1},
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
  
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
