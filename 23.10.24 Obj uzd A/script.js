//----- 2 uzd ------
//Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes
//popieriniaiPinigai ir metaliniaiPinigai.
//Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę.
//Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai,
//jeigu kitaip- prie popieriniaiPinigai.
//Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į
//konsolę popieriniaiPinigai ir metaliniaiPinigai sumą.
//Sukurti klasės objektą ir pademonstruoti veikimą.
//Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame
// pasaulyje.
class Pinigine {
  constructor() {
    this.popieriniaiPinigai = 0;
    this.metaliniaiPinigai = 0;
  }

  ideti(kiekis) {
    if (kiekis < 2) {
      this.metaliniaiPinigai++;
    } else this.popieriniaiPinigai += kiekis;
  }
  skaiciuoti() {
    console.log(`Popieriniai pinigai: ${this.popieriniaiPinigai}, monetos : ${this.metaliniaiPinigai}`);
  }
}

const pinigine1 = new Pinigine();

pinigine1.ideti(3);
pinigine1.ideti(1);
pinigine1.ideti(13);
pinigine1.ideti(1);

pinigine1.skaiciuoti();

//----- 3 uzd ------
//Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius
//kuri yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir
//islipa(keleiviuSkaicius). O taip pat parašyti metoda vaziuoja(),
//kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. Atkreipkite dėmesį,
//kad troleibusu važiuoti neigiamas keleivių skaičius negali.
class Troleibusas {
  constructor() {
    this.keleiviuSkaicius = 0;
  }
  ilipa(keleiviuSkaicius) {
    this.keleiviuSkaicius += keleiviuSkaicius;
  }
  islipa(keleiviuSkaicius) {
    if (this.keleiviuSkaicius < keleiviuSkaicius) {
      this.keleiviuSkaicius = 0;
    } else this.keleiviuSkaicius -= keleiviuSkaicius;
  }
  vaziuoja() {
    console.log(`Troleibusu važiuoja ${this.keleiviuSkaicius} keleivių`);
  }
}

const troleibusas11 = new Troleibusas();

troleibusas11.ilipa(10);
troleibusas11.islipa(2);
troleibusas11.ilipa(3);

troleibusas11.vaziuoja();

//----- 4 uzd ------
