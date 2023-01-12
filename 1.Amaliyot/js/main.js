//! Amaliyot
//? 1. User object ochish
//? 2. Userdan ma Lumotlar olish
//? 3. Ma*lumotlarni qayta ishlash
//? 4. HTMLda ma'lumotlarni ko'rsatish
function sayHello(name) {
    return `Assalomu alaikum ${name} aka!`
}

function calcAge(birthyear) {
    return 2022 - birthyear;
}
const user = {
    name: null,
    age: null,
};
// const username = prompt("Enter your firstname:");
user.name = username;
const birthyear = prompt("Enter your birthyear:");
user.age = calcAge(birthyear);
const headingEl = document.querySelector("#text");
const template = `s{sayHello(user.name)} Sizning yoshingiz ${user.age}da`;
headingEl.textContent = template;



//!  Lesson 5
const username = prompt("Enter your username:");

function $(name) {
if (name === "Ibrohim") {
return "Bu Ibrohim";
} else if (name === "Jasur") {
 return  "bu jasur"
} else {
return "Bu xechkim";
}
}

alert(username)

console. log(3*"3")
const num = prompt("Enter your loved number:")
const realNum = Number(num) ;
const string = String(3)
const realTrue = Boolean();
console. log(+num) ;

