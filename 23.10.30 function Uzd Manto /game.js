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

document.querySelector('.newGame').style.display = 'none';
function goodNumber(numberGuess) {
  console.log(number);
  if (numberGuess > number) {
    document.querySelector('#text').textContent = 'Jūsų skaičius per didelis';
    console.log('Jūsų skaičius per didelis');
  } else if (numberGuess < number) {
    console.log('Jūsų skaičius per mažas');
    document.querySelector('#text').textContent = 'Jūsų skaičius per mažas';
  } else if (numberGuess == number) {
    document.querySelector('form').textContent = 'Sveikiname atspėjote skaičių!';
    document.querySelector('#text').style.display = 'none';
    console.log('Sveikiname atspėjote skaičių!');
    document.querySelector('.newGame').style.display = 'flex';
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
