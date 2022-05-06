export function renderBros(broData) {
    const broEl = document.createElement('div');
    const broFace = document.createElement('p');
    const broName = document.createElement('p');
    const broHp = document.createElement('p');

    broEl.classList.add('Bro');

    broName.textContent = broData.name;
    broHp.id = `Bro-hp-${broData.id}`;
    broHp.textContent = broData.hp <0 ? 0 : broData.hp;

    broFace.id = `bro-face-${broData.id}`
    broFace.textContent = broData.hp > 0 ? 'XXX' : 'xxx';

    if (broData.hp < 0) {
        broEl.classList.add('dead');
    }

    broEl.append(broName, broFace, broHp);
}