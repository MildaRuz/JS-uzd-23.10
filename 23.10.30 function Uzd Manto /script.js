//----- 1 uzd ------
//Sukurkite funkciją, kuri patikrina, ar duotas masyvas
// turi tam tikrą elementą.
let array = [3, 5, 40, 55, 7];

function isInArray(num) {
  if (array.includes(num)) {
    return console.log(`${num} is in an array`);
  } else {
    return console.log(`There is no number ${num} in an array`);
  }
}
isInArray(55);
isInArray(4);

//----- 2 uzd ------
//Sukurkite funkciją, kuri apskaičiuoja kvadrato plotą pagal kraštinės ilgį.
const squareArea = (num) => num ** 2;

console.log(squareArea(5));

//----- 3 uzd ------
//Sukurkite funkciją, kuri patikrina, ar duotas skaičius yra teigiamas,
//neigiamas ar nulis.

const whatNum = (num) => {
  if (num > 0) {
    return `${num} is positive`;
  } else if (num === 0) {
    return `${num} is zero`;
  } else {
    return `${num} is negative`;
  }
};
console.log(whatNum(-2));
console.log(whatNum(0));
console.log(whatNum(2));

//----- 4 uzd ------
//Sukurkite funkciją, kuri surūšiuoja masyvą didėjimo arba mažėjimo tvarka.
let niceArray = [6, 8, 3, 2, 33, 1, -3];

const arraySortAsc = (el) => el.sort((a, b) => a - b);
const arraySortDesc = (el) => el.sort((a, b) => b - a);
console.log(arraySortAsc(niceArray));
console.log(arraySortDesc(niceArray));

//----- 5 uzd ------
//Sukurkite funkciją, kuri išfiltruoja masyvą, palikdama tik nurodytą
// tipą elementų

let array2 = [3, 'a', 4, 'b', [1, 2], true, false, true, { a: 1, b: 3 }];

const arrayTypeof = (arr, type) => {
  return arr.filter((item) => typeof item === typeof type);
};

console.log(arrayTypeof(array2, 0));
console.log(arrayTypeof(array2, ''));
console.log(arrayTypeof(array2, false));
console.log(arrayTypeof(array2, []));
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
