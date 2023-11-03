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
const kiekZirafu = document.querySelectorAll('#zirafos > li:not(.like-button)').length;
console.log('kategorijų:', kiekKategoriju, `žirafų:`, kiekZirafu);

//g) Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje
//ir 50px paddingą kairėje ir dešinėje;
document.querySelectorAll('ul').forEach((el) => (el.style.border = '1px solid black'));

document.querySelectorAll('ul').forEach((el) => (el.style.padding = '15px 50px'));

//h) Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
const kiekNaujuGyvunu = document.querySelectorAll('.animals .new');

console.log(kiekNaujuGyvunu.length);
//i) Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;
const kiekNaujuZirafu = document.querySelectorAll('#zirafos .new').length;
const kiekNaujuPlesrunu = document.querySelectorAll('#plesrunai .new').length;
const kiekNaujuGyvaciu = document.querySelectorAll('#gyvates .new').length;
const kiekNaujuZoliaedziu = document.querySelectorAll('#zoliaedziai .new').length;

console.log(
  `Naujų žirafų: ${kiekNaujuZirafu}, naujų plėšrūnų: ${kiekNaujuPlesrunu}, naujų gyvačių: ${kiekNaujuGyvaciu}, naujų žoliaėdžių: ${kiekNaujuZoliaedziu}`
);

//----- 3 uzd ------
//Elementų events
//a) Padaryti tai ką liepia mygtukai Header1 sekcijoje;
const h1Color = document.querySelector('#h1-color');
h1Color.addEventListener('click', () => {
  h1.style.color = 'green';
});
const h1Font = document.querySelector('#h1-font');
h1Font.addEventListener('click', () => {
  h1.style.fontSize = '10px';
});
//b)Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
const iAllBold = document.querySelector('i');
iAllBold.addEventListener('click', () => {
  iAllBold.style.fontWeight = 'bold';
});

//c)Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką,
//o paspaudus dar kartą vėl grįžtu į baltą spalvą;
const prices = document.querySelector('.prices');
prices.addEventListener('click', () => {
  if (prices.style.backgroundColor === 'grey') {
    prices.style.backgroundColor = 'white';
  } else {
    prices.style.backgroundColor = 'grey';
  }
});
//d) Padaryti, kad paspaudus ant tago su id contacts,
//tam tagui būtų pridėta css savybė color = orange;
const contacts = document.querySelector('#contacts');
contacts.addEventListener('click', () => {
  contacts.style.color = 'orange';
});
//e) Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts,
//tagui su id contacts būtų pridėta css savybė fontSize = 20px;
const contactsPadidinti = document.querySelector('#contacts u');
contactsPadidinti.addEventListener('click', () => {
  contacts.style.fontSize = '20px';
});
//f) Padaryti taip, kad paspaudus ant X, esančio tage su id contacts,
// pridėtos tage su id contacts savybės būtų panaikintos
//https://stackoverflow.com/questions/18691655/remove-style-on-element
const contactsX = document.querySelector('#contacts b');
contactsX.addEventListener('click', () => {
  contacts.style.fontSize = '';
});
//g)Padaryti tai ką liepia mygtukai Header2 sekcijoje;
const h1ColorGrazinti = document.querySelector('#h1-color-back');
h1ColorGrazinti.addEventListener('click', () => {
  h1.style.color = '';
});
const h1FontGrazinti = document.querySelector('#h1-font-back');
h1FontGrazinti.addEventListener('click', () => {
  h1.style.fontSize = '';
});

//----- 4 uzd ------
// Elementų grupių events
// a) Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai
//https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
const naujiGyvunai = document.querySelectorAll('.animals .new');

naujiGyvunai.forEach((el) => {
  el.addEventListener('dblclick', () => {
    el.style.color = 'red';
  });
});

// b) Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu.
// “PATINKA” tas neturi galioti.
const gyvunaiDidinti = document.querySelectorAll('.animals > ul >li:not(.like-button)');
//console.log(gyvunaiDidinti);
gyvunaiDidinti.forEach((el) => {
  el.addEventListener('click', () => {
    el.style.fontSize = '130%';
  });
});

// c) Padaryti, kad paspaudus ant “PATINKA”, atitinkamai
//(tėvinei) sekcijai būtų priskirta klasė like;
const like = document.querySelectorAll('.animals .like-button');
like.forEach((item) => {
  item.addEventListener('click', () => {
    item.parentElement.classList.add('like');
  });
});

//----- 5 uzd ------
//Dinaminis elementų kūrimas (su createElement)
//a) Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;
const newPriceSenjorai = document.createElement('h2');
const newPriceSenjoraiContent = document.createTextNode('Senjorai tik: 1.99 eur');
newPriceSenjorai.appendChild(newPriceSenjoraiContent);
const curH2 = document.querySelector('.prices');
document.body.insertBefore(newPriceSenjorai, curH2);

newPriceSenjorai.classList.add('price-tag');
newPriceSenjorai.classList.add('small');

//b) Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur”
//Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;
const newPriceSenGrupe = document.createElement('h2');
const newPriceSenGrupeContent = document.createTextNode('Senjorų grupė iki 10: tik 5.99 eur');
newPriceSenGrupe.appendChild(newPriceSenGrupeContent);
const currentPriceGroup = document.querySelector('.prices');
document.body.insertBefore(newPriceSenGrupe, currentPriceGroup);
newPriceSenGrupe.classList.add('price-tag');
newPriceSenGrupe.classList.add('small');
const newGrupe = newPriceSenGrupe.classList.add('new');

newPriceSenGrupe.addEventListener('click', () => {
  newPriceSenGrupe.style.color = 'green';
});

//c) Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar
//vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like
const findPatinka = document.querySelectorAll('.animals .like-button');

findPatinka.forEach((elem) => {
  const newNepatinka = document.createElement('li');
  newNepatinka.classList.add('dislike-button');
  const newNepatinkaContent = document.createTextNode('NEPATINKA');

  newNepatinka.appendChild(newNepatinkaContent);
  elem.after(newNepatinka);
});

const dislike = document.querySelectorAll('.animals .dislike-button');
dislike.forEach((item) => {
  item.addEventListener('click', () => {
    item.parentElement.classList.remove('like');
  });
});
//d) Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant
//analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2.
//Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”.
//Mygtukai turi daryti tai kas ant jų parašyta
