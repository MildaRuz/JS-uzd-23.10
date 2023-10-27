//----- 1 uzd ------
//Atskiri elementai
//a)Tamsiai žaliai nuspalvinti h1 tagą;
const h1 = document.querySelector('h1');
h1.style.color = 'darkgreen';

//b)Tagui i pridėti klasę small;
document.querySelector('i').classList.add('small');

//c)Iš tago h1 pašalinti klasę main;
h1.classList.remove('main');

//d)Tik tam h2 tagui, kuris iškart eina po h1 tago, pridėti klasę first
//ir pašalinti klasę main;
//https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove

const h2Tag = document.querySelector('h2');
h2Tag.classList.add('first');
h2Tag.classList.remove('main');

//e) Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px
//ir nudažyti pilkai
document.querySelector('h2 > span').style.fontSize = '10px';
document.querySelector('h2 > span').style.color = 'grey';

//----- 2 uzd ------
//Elemetų grupės (nodeList) skaičiavimus išvest į consolę
//a) Suskaičiuoti kiek yra h2 tagų;
const h2All = document.querySelectorAll('h2').length;
console.log(h2All);

//b) Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
const h2AllWithoutFirst = document.querySelectorAll('h2.first').length;
console.log(h2All - h2AllWithoutFirst);

//c) Visus h2 tagus nuspalvinti šviesiai mėlynai
// document.querySelector('h2').style.color = 'skyblue';
document.querySelectorAll('h2').forEach((item) => (item.style.color = 'lightblue'));

//d) Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;
document.querySelectorAll('div.prices > h2').forEach((item) => item.classList.add('price-tag'));

//e) Pabraukti visus tagus su klase new;
const allNew = document.querySelectorAll('.new');
allNew.forEach((item) => (item.style.textDecoration = 'underline'));

//f) Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
const kiekKategoriju = document.querySelectorAll('ul').length;
const kiekZirafu = document.querySelectorAll('#zirafos > li').length - 1;
console.log('kategorijų:', kiekKategoriju, `žirafų:`, kiekZirafu);

//g) Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje
//ir 50px paddingą kairėje ir dešinėje;
document.querySelectorAll('ul').forEach((el) => (el.style.border = '1px solid black'));

document.querySelectorAll('ul').forEach((el) => (el.style.padding = '15px 50px'));

//h) Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
console.log(allNew.length - 1); //-1 o ka daryt :DDD
//i) Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;
