//----- 1 uzd ------
//Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29),
//kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

//funkcija random skaičiui
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let size = 30;
let array = [];
for (let i = 0; i < size; i++) {
  array[i] = rand(5, 25);
}
console.log(array);
//----- 2 uzd ------
//Naudodamiesi 1 uždavinio masyvu:
//a)Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
let sumBiggerThan10 = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 10) {
    sumBiggerThan10++;
  }
}
console.log(sumBiggerThan10);

//tas pats su filter
const sum10 = array.filter((number) => number > 10);
console.log(sum10.length);

//b)Raskite didžiausią masyvo reikšmę ir jos indeksą;
let numMax = Math.max(...array);
console.log(numMax, array.indexOf(numMax));

//c)Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;

let sumEvenIndexNum = 0;
array.forEach(function (value, i) {
  if (i % 2 === 0) {
    sumEvenIndexNum += value;
  }
});

console.log(sumEvenIndexNum);

//d)Sukurkite naują masyvą,
//kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės
//indeksas;
const array2 = array.map((_, i) => {
  return array[i] - i;
});
console.log(array2);

//e)Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25,
//kad bendras masyvas padidėtų iki indekso 39;
for (let j = 0; j < 10; j++) {
  array2.push(rand(5, 25));
}

console.log(array2);

//f)Iš masyvo elementų sukurkite du naujus masyvus.
//Vienas turi būti sudarytas iš neporinių indeksų reikšmių,
// o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);
let arrayEven = [];
let arrayOdd = [];
array2.forEach(function (value, i) {
  if (i % 2 === 0) {
    arrayEven.push(value);
  } else {
    arrayOdd.push(value);
  }
});
console.log(arrayEven);
console.log(arrayOdd);

//g)Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0
// jeigu jie didesni už 15;
const arrayEvenLessthan15 = arrayEven.map((num) => (num > 15 ? 0 : num));

console.log(arrayEvenLessthan15);

//h)Suraskite pirmą (mažiausią) indeksą,
// kurio elemento reikšmė didesnė už 10;
const minIndex = arrayEven.findIndex((num) => num > 10);
console.log(minIndex);

//----- 3 uzd ------
//Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D,
//o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

let sizeABCD = 200;
function arrABCD() {
  let arrayABCD = [];
  for (let i = 0; i < sizeABCD; i++) {
    arrayABCD.push(['A', 'B', 'C', 'D'][rand(0, 3)]);
  }
  return arrayABCD;
}
let arrayABCD = arrABCD();
console.log(arrayABCD);

let sumA = 0;
let sumB = 0;
let sumC = 0;
let sumD = 0;
arrayABCD.forEach(function (value) {
  if (value === 'A') {
    sumA++;
  } else if (value === 'B') {
    sumB++;
  } else if (value === 'C') {
    sumC++;
  } else {
    sumD++;
  }
});

console.log(`Suma A : ${sumA}, suma B : ${sumB}, suma C : ${sumC}, suma D : ${sumD}`);
//----- 4 uzd ------
//Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą.
//Sudėkite masyvus, sudėdami atitinkamas reikšmes.
//Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir
//kiek unikalių kombinacijų gavote.
let arrayABCD1 = arrABCD();
let arrayABCD2 = arrABCD();
let arrayABCD3 = arrABCD();
console.log(arrayABCD1);
console.log(arrayABCD2);
console.log(arrayABCD3);
const combinedArray = arrayABCD1.map((value, i) => value + arrayABCD2[i] + arrayABCD3[i]);
//console.log(combinedArray);

const uniqueCombinations = [...new Set(combinedArray)];
console.log(uniqueCombinations);
console.log(`Unique combinations: ${uniqueCombinations.length}`);
const howMuchUniqueCombinations = uniqueCombinations.map((value) => {
  const sumUnq = combinedArray.filter((item) => value === item);
  return value + ':' + sumUnq.length;
});
//console.log(howMuchUniqueCombinations);

//----- 5 uzd ------
//Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai
//nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo
// masyve (t.y. neturi kartotis).
let numbers = [];
let numbers2 = [];
let arraySize = 100;

const generateNumberArray = () => {
  let arrNum = [];
  do {
    let randNum = rand(100, 999);
    if (!arrNum.includes(randNum)) {
      arrNum.push(randNum);
    }
  } while (arrNum.length < arraySize);

  return arrNum;
};

numbers = generateNumberArray();
console.log(numbers);
numbers2 = generateNumberArray();
console.log(numbers2);

//----- 6 uzd ------
//Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių,
//kurios yra pirmame 5 uždavinio masyve,
// bet nėra antrame 5 uždavinio masyve.

const numUniq = numbers.filter((num1) => !numbers2.includes(num1));

console.log(numUniq);

//----- 7 uzd ------
//Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5
//uždavinio masyvuose.
const numSame = numbers.filter((num1) => numbers2.includes(num1));
console.log(numSame);

//----- 8 uzd ------
//Sugeneruokite masyvą, kurio indeksus sudarytų 5 uždavinio
//pirmo masyvo reikšmės, o jo reikšmės  būtų iš  antrojo 5 uždavinio masyvo.
let numbersUniq2 = [];
numbers.forEach((value, i) => {
  numbersUniq2[value] = numbers2[i];
});

console.log(numbersUniq2);

//----- 9 uzd ------
//Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai-
//atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma.
//Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.
let masyvas = [];
let dydis = 10;

for (let i = 0; i < 10; i++) {
  if (i < 2) {
    masyvas[i] = rand(5, 25);
  } else {
    masyvas.push(masyvas[i - 1] + masyvas[i - 2]);
  }
}
console.log(masyvas);
