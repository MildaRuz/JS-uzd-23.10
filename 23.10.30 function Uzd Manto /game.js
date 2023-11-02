//----- 6 uzd ------
//Sukurkite mini žaidimą kuriame atėjęs žmogus galėtų spėti skaičių
//kurį sugalvojo kompiuteris. Jei spėtas skaičius per didelis išmeskite žinutę
//„Jūsų skaičius per didelis“. Taip pat jei ir skaičius per mažas.
//Atspėjus skaičių turite parašyti pasveikinimo žinutę ir pradėti
//žaidimą iš naujo.

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let number = rand(0, 10);

function goodNumber(numberGuess) {
  console.log(number);
  if (numberGuess > number) {
    document.querySelector('#hint-text').textContent = 'Jūsų skaičius per didelis';
    console.log('Jūsų skaičius per didelis');
  } else if (numberGuess < number) {
    console.log('Jūsų skaičius per mažas');
    document.querySelector('#hint-text').textContent = 'Jūsų skaičius per mažas';
  } else if (numberGuess == number) {
    document.querySelector('form').classList.add('hidden');
    document.querySelector('#success-message').classList.remove('hidden');
    document.querySelector('#hint-text').textContent = '';
    document.querySelector('.newGame').classList.remove('hidden');
    document.querySelector('form').reset();
  }
}

//goodNumber();

const isThatNum = (el) => {
  el.preventDefault();
  const guess = el.target[0].value;
  numberGuess = guess;
  goodNumber(numberGuess);
  console.log(`spetas skaicius... ${numberGuess}`);
};

const newGame = () => {
  number = rand(0, 10);
  document.querySelector('form').classList.remove('hidden');
  document.querySelector('#success-message').classList.add('hidden');
  document.querySelector('.newGame').classList.add('hidden');
};
