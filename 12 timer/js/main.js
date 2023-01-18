let form = document.querySelector(".form");
let numberOne = document.querySelector(".numberOne");
let numberTwo = document.querySelector(".numberTwo");
let btn = document.querySelector(".btn");
let secund = document.querySelector(".secund");
let span = document.querySelector('.secund')
let body = document.querySelector('.body')
var clickCounter=0;
let  funksiya = btn.addEventListener("click", (e) => {
  e.preventDefault();
  let m = Number(numberOne.value);
  let s = Number(numberTwo.value);

    let  results = s + m * 60;
     let sett = setInterval(function () {
        if(results > 0 ){
            results = results - 1 ;
            secund.textContent = results
        }else if( results === 0){
            span.innerHTML = ' Vaqt tugadi'
            body.classList.add('danger')

        }
    }, 1000);
    
    clickCounter++;
    if (clickCounter === 2) {
        clearTimeout(sett);
    }
    console.log(sett);
});
