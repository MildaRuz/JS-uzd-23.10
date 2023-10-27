function startTimer() {
  let sec = 5;
  let secCounter = sec;
  let minCounter = 2;
  const timer = setInterval(() => {
    console.log(secCounter);
    secCounter--;
    document.querySelector('.counter').textContent = `${minCounter} min ${secCounter} s`;
    if (secCounter === 0) {
      minCounter--;
      console.log('min', minCounter);
      document.querySelector('.counter').textContent = `${minCounter} min ${secCounter} s`;
      secCounter = sec;
      if (minCounter === 0) {
        clearInterval(timer);

        document.querySelector('.counter').textContent = `Time is over...`;
      }
    }
  }, 1000);
}

function resetTimer() {
  let sec = 5;
  let secCounter = sec;
  let minCounter = 2;
  document.querySelector('.counter').textContent = `${minCounter} min ${secCounter} s`;
}

// function stopTimer() {
//   clearInterval(timer);
// }
