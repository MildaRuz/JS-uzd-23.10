//-------- 1, 4 uzd --------
let sum = 0;
let numbersTo = 20;

for (let i = 1; i <= numbersTo; i++) {
  if (i % 2 === 0) {
    sum += i;
    console.log(i);
    document.write(`${i} `);
  }
}
console.log(`Lyginių skaičių iki ${numbersTo} suma: ${sum}`);

//-------- 2 uzd --------

function reverseString(zodis) {
  return zodis.split('').reverse().join('');
}
console.log(reverseString('SulA'));

function reverseString2(str) {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
console.log(reverseString2('alus'));

//-------- 3 uzd --------
let a = 50;

for (let i = 1; i <= a; i++) {
  if (i % 5 === 0) {
    sum += i;
    //console.log(i);
  }
}
console.log(`Skaičių, kurie dalijasi iš 50 suma: ${sum}`);
