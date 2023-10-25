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
