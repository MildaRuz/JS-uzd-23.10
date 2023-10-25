// -----1uzd 2uzd-----

let size = 100;
let a = '';
for (let i = 0; i < size; i++) {
  for (let k = 0; k < size; k++) {
    if (i === k || size - 1 - i === k) {
      a += `<span style="color:red;">*</span>`;
    } else {
      a += '*';
    }
  }
  a += '<br/>';
}
// document.write(a);

// -----3uzd-----
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let h = 0;
let s = 1;
let rez;

//a)
// while (rez !== h) {
//   rez = rand(0, 1);
//   if (rez === s) {
//     document.write('S <br/>');
//   } else {
//     document.write('H');
//   }
// }

//b)
// let sumH = 0;
// while (sumH < 3) {
//   rez = rand(0, 1);
//   console.log(rez);
//   if (rez === s) {
//     document.write('S <br/>');
//   } else {
//     document.write('H <br/>');
//   }
//   if (rez === h) sumH++;
// }

//c)
// let sumH = 0;
// while (sumH < 3) {
//   rez = rand(0, 1);
//   console.log(rez);
//   if (rez === s) {
//     document.write('S <br/>');
//   } else {
//     document.write('H <br/>');
//   }
//   if (rez === h) {
//     sumH++;
//   } else {
//     sumH = 0;
//   }
//   if (sumH === 3) document.write('Sveikiname Jūs laimėjote! :D iškrito trys herbai iš eilės');
// }

// -----4uzd-----
// let name1 = 'Kazys';
// let name2 = 'Petras';
// let name1Scores = 0;
// let name2Scores = 0;
// let winner;
// while (true) {
//   name1Scores += rand(10, 20);
//   name2Scores += rand(5, 25);

//   console.log(name1Scores, name2Scores);

//   if (name1Scores === name2Scores && name1Scores >= 222 && name2Scores >= 222) {
//     `It's a draw!<br/> ${name1}: ${name1Scores}, ${name2}: ${name2Scores}`;
//     break;
//   } else if (name1Scores >= 222 && name1Scores > name2Scores) {
//     document.write(`${name1} :${name1Scores} scores, ${name2}: ${name2Scores} scores <br/>`);
//     document.write(`The winner is...${name1}!!!`);
//     break;
//   } else if (name2Scores >= 222) {
//     document.write(`${name1} :${name1Scores} scores, ${name2}: ${name2Scores} scores <br/>`);
//     document.write(`The winner is...${name2}!!!`);
//     break;
//   }
// }

// -----6uzd-----
let mazasSmugis = 0;
let kiekKartu = 0;

//a)
while (true) {
  mazasSmugis += rand(5, 20);
  kiekKartu++;

  if (mazasSmugis >= 85 * 5) {
    document.write(`Vinys įkaltos per ${kiekKartu} kartus(ų) <br/>`);
    break;
  }
}

//b)
let didelisSmugis = 0;
while (true) {
  didelisSmugis += rand(0, 1);
  console.log(didelisSmugis);
  if (didelisSmugis === 1) {
    didelisSmugis += rand(20, 30);
    console.log(didelisSmugis);
  } else {
    kiekKartu += 1;
  }
  kiekKartu++;

  if (didelisSmugis >= 85 * 5) {
    document.write(`Vinys įkaltos per ${kiekKartu} kartus(ų)`);
    break;
  }
}
