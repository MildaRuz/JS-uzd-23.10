let sec = 0;
let min = 10;
let countFrom;
const timer = () => {
  if (countFrom) {
    clearInterval(countFrom);
  }
  min = 10;
  sec = 0;
  countFrom = setInterval(() => {
    if (min === 0 && sec === 0) {
      return clearInterval(countFrom);
    }
    if (sec === 0) {
      min--;
      sec = 59;
    } else {
      sec--;
    }
    document.querySelector('.counter').textContent = `${min} min ${sec} s`;
  }, 1000);
};

// function startTimer() {
//   let sec = 3;
//   let secCounter = sec;
//   let minCounter = 5;
//   const timer = setInterval(() => {
//     console.log(secCounter);
//     secCounter--;
//     document.querySelector('.counter').textContent = `${minCounter} min ${secCounter} s`;
//     if (secCounter === 0) {
//       minCounter--;
//       console.log('min', minCounter);
//       document.querySelector('.counter').textContent = `${minCounter} min ${secCounter} s`;
//       secCounter = sec;
//       if (minCounter === 0 && secCounter === 0) {
//         clearInterval(timer);

//         document.querySelector('.counter').textContent = `Time is over...`;
//       }
//     }
//   }, 1000);
// }

function resetTimer() {
  min = 10;
  sec = 0;
  document.querySelector('.counter').textContent = `${min} min ${sec} s`;
}
document.querySelector('.counter').textContent = `${min} min ${sec} s`;

function stopTimer() {
  clearInterval(countFrom);
}
