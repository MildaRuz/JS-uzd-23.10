//----- 1 uzd ------

const wellcome = (name) => `Labas, ${name}.`;

console.log(wellcome('Elena'));

//----- 2 uzd ------
function howMuch(text) {
  console.log(text.length);
  document.write(`The word <span style="color:red">${text}</span> has ${text.length} symbols <br />`);
}

howMuch('labas');
howMuch('kiekciaturaidziu');
howMuch('2aa2');
//----- 3 uzd ------
function nameLastName(name, last_name) {
  let str = '';
  str = name.charAt(0).toUpperCase() + name.slice(1) + ' ' + last_name.charAt(0).toUpperCase() + last_name.slice(1);
  console.log(str);
}
nameLastName('mil', 'ruz');

//----- 4 uzd ------

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let size = 3;
function randNumber() {
  let num;
  let string = '';
  for (let i = 0; i < size; i++) {
    num = rand(0, 5);
    if (i < size) {
      string += num + ', ';
    }
  }
  console.log(string.slice(0, -2));
}
randNumber();

//----- 5 uzd ------
function fromTo(from, to, limit) {
  if (typeof from === 'number' && typeof to === 'number' && typeof limit === 'number') {
    let array = [];
    for (let i = 0; i < limit; i++) {
      array[i] = rand(from, to);
    }
    console.log(array);
  } else {
    console.log('Not a number');
  }
}
fromTo(1, 5, 9);

//----- 6 uzd ------
function numberRaising(number, powerOfaNumber) {
  console.log(number ** powerOfaNumber);
}

numberRaising(5, 2);

//----- 7 uzd ------
function text(text) {
  document.write(`<h1>${text}</h1><br/>`);
}
text('What a wonderful world');
text('This is my text');

//----- 8 uzd ------
let tagNum = rand(1, 6);
console.log(tagNum);

function hText(text, tagNum) {
  let str2 = `<h${tagNum}>${text}, my heading is h${tagNum}</h${tagNum}>`;
  return str2;
}

document.write(hText('labai fainas tekstas', tagNum));

//----- 9 uzd ------
function isPrimary(number) {
  let isPrime = true;
  if (number === 1) {
    console.log('1 is neither prime nor composite number.');
    return false;
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${number} is a prime number`);
      return true;
    } else {
      console.log(`${number} is not a prime number`);
      return false;
    }
  } else {
    console.log(`The ${number} is not a prime number.`);
    return false;
  }
}
isPrimary(521);
isPrimary(0);
isPrimary(-4);
isPrimary(1);
isPrimary(22);

//----- 10 uzd ------
size = 100;
array = [];
for (let i = 0; i < size; i++) {
  array[i] = rand(997, 15991);
}

console.log(array);

//----- 11 uzd ------
const filterPrimeNum = array.filter((i) => {
  return isPrimary(i) && i > 5000;
});
console.log(filterPrimeNum);
