// Žaidimą žaidžia du žaidėjai: Player(Jūs) ir Kompiuteris.
// Žaidimą sudaro 10 raundų, vieno raundo trukmė 30 sekundžių.
// Raundą laimi tas žaidėjas kuris surenka daugiau taškų.
// Kiekvieno raundo pabaigoje atvaizduokite laimėtojo vardą,
//surinktus taškus raunde ir visus laimėtus roundus prie žaidėjų vardų.
//Puslapyje atvaizduojamas kvadratas(50px x 50px) kuris keičia savo atsitiktinę poziciją
//bei savo fono spalvą kas 1 sekundę.
//Jeigu žaidėjas spėja per šį laiko tarpą paspausti ant kvadrato - taškas skiriamas jam.
//Priešingu atveju laimi kompiuteris.
//Kiekviename rounde naršyklėje atvaizduokite laikmatį skaičiuojantį roundo trukmę.
//Pasibaigus žaidimui atvaizduokite laimėtojo vardą bei mygtuką,
//ant kurio paspaudus žaidimas būtų pradedamas iš naujo.

let playerScr = 0;
const rounds = 2;
let playerWinnedRounds = 0;
let computerWinnedRounds = 0;
let curentRoundNumber = 1;
const roundLengthInSec = 3;
let roundSec = roundLengthInSec;

const roundResults = document.querySelector('.round-results');
const finalResult = document.querySelector('.final-result');
const box = document.querySelector('.box');
const roundTime = document.querySelector('.round-time');

const startGame = () => {
  curentRoundNumber = 1;
  playerWinnedRounds = 0;
  computerWinnedRounds = 0;
  document.querySelector('.round-results').innerHTML = '';
  document.querySelector('.start-game-container').classList.add('hide');
  document.querySelector('.game-container').classList.remove('hide');
  startGameLoop();
};

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const setRandomPosition = () => {
  const gameSquare = document.querySelector('.game-square');
  box.style.backgroundColor = `rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`;
  box.style.top = `${rand(0, gameSquare.offsetHeight - box.offsetHeight)}px`;
  box.style.left = `${rand(0, gameSquare.offsetWidth - box.offsetWidth)}px`;
};
const startGameLoop = () => {
  roundSec = roundLengthInSec;
  playerScr = 0;
  roundTime.textContent = roundSec + ' s';
  box.classList.remove('hide');
  setRandomPosition();
  const interval = setInterval(() => {
    roundSec--;
    if (roundSec === 0) {
      clearInterval(interval);
      box.classList.add('hide');

      findRoundWinner();
      //console.log(curentRoundNumber, rounds);
      if (curentRoundNumber !== rounds) {
        startGameLoop();
      } else {
        endGame();
        finalWinner();
        return;
      }
      curentRoundNumber++;
      return;
    }
    roundTime.textContent = roundSec + ' s';
    setRandomPosition();
  }, 1000);
};

box.addEventListener('click', () => {
  playerScr++;
});

const findRoundWinner = () => {
  let computerSrc = roundLengthInSec - playerScr;

  if (playerScr > computerSrc) {
    roundResults.innerHTML += `${curentRoundNumber} raundą laimėjote Jūs ${playerScr} : ${computerSrc}</br>`;
    playerWinnedRounds++;
  } else if (playerScr === computerSrc) {
    roundResults.innerHTML += `${curentRoundNumber} šiame raunde lygiosios </br>`;
  } else {
    roundResults.innerHTML += `${curentRoundNumber} raundą laimėjo kompiuteris ${computerSrc} : ${playerScr} </br>`;
    computerWinnedRounds++;
  }
};

const finalWinner = () => {
  if (playerWinnedRounds > computerWinnedRounds) {
    finalResult.innerHTML = `Sveikiname laimėjote žaidimą, žaiskite dar kartą`;
  } else if (playerWinnedRounds === computerWinnedRounds) {
    finalResult.innerHTML = `Lygiosios, žaiskite dar kartą`;
  } else {
    finalResult.innerHTML = `Pralaimėjote... Žaiskite dar kartą`;
  }
};
const endGame = () => {
  document.querySelector('.start-game-container').classList.remove('hide');
  document.querySelector('.game-title').classList.add('hide');
  document.querySelector('.game-container').classList.add('hide');
  document.querySelector('.final-result').classList.remove('hide');
  document.querySelector('.start-button').innerHTML = 'Pradėti iš naujo';
};
