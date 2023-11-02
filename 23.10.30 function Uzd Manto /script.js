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
  return arr.filter((item) => {
    if (type === 'array') {
      return Array.isArray(item);
    }
    if (type === 'object' && Array.isArray(item)) {
      return false;
    }
    return typeof item === type;
  });
};

console.log(arrayTypeof(array2, 'number'));
console.log(arrayTypeof(array2, 'string'));
console.log(arrayTypeof(array2, 'boolean'));
console.log(arrayTypeof(array2, 'array'));
console.log(arrayTypeof(array2, 'object'));
