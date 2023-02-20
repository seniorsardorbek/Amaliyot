let form = document.querySelector(".form");
let numberOne = document.querySelector(".numberOne");
let numberTwo = document.querySelector(".numberTwo");
let btn = document.querySelector(".btn");
let secund = document.querySelector(".secund");
let span = document.querySelector(".secund");
let body = document.querySelector(".body");
let clickCounter = true;

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let m = Number(numberOne.value);
  let s = Number(numberTwo.value);
  let results = s + m * 60;

  if (clickCounter === true) {
    clickCounter = false;
    console.log("boshlandi");
    numberOne.value = ''
    numberTwo.value = ''
    let settime = setInterval(() => {
      if (results !== 0) {
        results = results - 1;
        secund.textContent = results
      } else  {
        clearInterval(settime)
        secund.textContent = 'Vaqt tugadi, Bro'

      }
      console.log(results);
    }, 1000);
    btn.textContent = 'Pause'
  } else if (clickCounter === false) {
    clickCounter = true;
        btn.textContent = 'Start'
    console.log("tuxtadi");
  }
});
 