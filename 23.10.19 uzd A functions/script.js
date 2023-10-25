//----- 1 uzd ------
const writeText = (text) => {
  console.log(`${text}`);
};
writeText('Labas rytas suraitytas');

//----- 2 uzd ------
const textHowMuch = (text, number) => {
  let str = `${text}`;
  console.log(str.repeat(`${number}`));
};
textHowMuch('labas ', 5);

//----- 4 uzd ------
const howMuchDivisors = (number) => {
  let result = [];
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      result.push(i);
    }
  }
  return result.length;
};

console.log(howMuchDivisors(8));

//----- 5 uzd ------
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let masyvas = [];
let dydis = 100;

for (let i = 0; i < dydis; i++) {
  masyvas[i] = rand(33, 77);
}
console.log(masyvas);

const filterDivisors = masyvas.filter((i) => {
  return howMuchDivisors(i);
});
//console.log(filterDivisors.sort((a, b) => b - a));

//----- 6 uzd ------
let masyvas2 = [];
let dydis2 = 100;

for (let j = 0; j < dydis2; j++) {
  masyvas2[j] = rand(333, 777);
}
//console.log(masyvas2);

const withoutPrimes = masyvas2.filter((j) => {
  return howMuchDivisors(j);
});

//console.log(withoutPrimes);

//----- 7 uzd ------
// Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi,
//išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10,
//o paskutinis masyvas,
//kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas.
//Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų.
// Paskutinio masyvo paskutinis elementas yra lygus 0;
function masyvasPagr2(number) {
  let length = rand(10, 20);
  return number > 0 ? Array.from({ length }, (_, i) => (i === length - 1 ? masyvasPagr2(number - 1) : rand(0, 10))) : 0;
}

function masyvasPagr(number) {
  if (number > 0) {
    let masyvas3 = [];
    let dydis3 = rand(10, 20);
    for (let j = 0; j < dydis3 - 1; j++) {
      masyvas3[j] = rand(0, 10);
    }
    masyvas3.push(masyvasPagr(number - 1));
    return masyvas3;
  }
  return 0;
}
const skaiciuMasyvas = masyvasPagr2(2);
//console.log(skaiciuMasyvas);

//----- 8 uzd ------
// Suskaičiuokite septinto uždavinio elementų, kurie nėra masyvai, sumą.
// Skaičiuoti reikia visuose masyvuose ir submasyvuose.
function sumNumbers(masyvas4) {
  let sum = 0;
  for (let i = 0; i < masyvas4.length; i++) {
    if (Array.isArray(masyvas4[i])) {
      sum += sumNumbers(masyvas4[i]);
    } else {
      sum += masyvas4[i];
    }
  }
  return sum;
}
//console.log(sumNumbers(skaiciuMasyvas));
//----- 9 uzd ------
// Sugeneruokite masyvą iš trijų elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 33.
// Jeigu tarp trijų paskutinių elementų yra nors vienas ne pirminis skaičius,
// prie masyvo pridėkite dar vieną elementą- atsitiktinį skaičių nuo 1 iki 33.
// Vėl patikrinkite pradinę sąlygą ir jeigu reikia pridėkite dar vieną elementą.
// Kartokite, kol sąlyga nereikalaus pridėti elemento.

function isPrimary(number) {
  let isPrime = true;
  if (number === 1) {
    //console.log('1 is neither prime nor composite number.');
    return false;
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

let array = [];
let i = 0;

while (
  !isPrimary(array[array.length - 1]) ||
  !isPrimary(array[array.length - 2]) ||
  !isPrimary(array[array.length - 3])
) {
  array.push(rand(1, 33));
}

console.log(array);

//----- 10 uzd ------
//Sugeneruokite masyvą iš 10 elementų, kurie yra masyvai iš 10 elementų,
//kurie yra atsitiktiniai skaičiai nuo 1 iki 100.
//Jeigu tokio didelio masyvo (ne atskirai mažesnių)
//pirminių skaičių vidurkis mažesnis už 70, suraskite masyve mažiausią skaičių
//(nebūtinai pirminį) ir prie jo pridėkite 3.
//Vėl paskaičiuokite masyvo pirminių skaičių vidurkį ir jeigu mažesnis
//nei 70 viską kartokite.
