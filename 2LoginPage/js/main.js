function $ (sel) {
  return document.querySelector(sel)
}
// document.write('Hello world')
// alert('Danger')
// confirm('Really')
// prompt('enter your age')

//! for loop

for (i = 0; i < 10; i++) {
  console.log(i)
}

//!while loop

var a = 1
while (a < 4) {
  a *= 2
  console.log(a)
}

//! do-while loop
var i = 1
do {
  i *= 3
  console.log(i)
} while (i < 100)

// ! Array
var myArr = [
  'foo',
  'bar',
  'baz',
  'sar',
  'puzz',
  'kull',
  'null',
  'war',
  'jar',
  'nar',
  'foo',
  'show'
]
myNum = [1 ,2 ,3 ,4 ,5 , ,6]
var esc = "i don't know"
console.log(esc)
console.log(myArr.length)

console.log(myArr.indexOf('bar'))

console.log(myArr.lastIndexOf('foo'))

console.log(myArr.slice(3, 6))

console.log(myArr.slice(3))

let str = 'Sardor Samijonov'
str.replace()
console.log(str)

console.log(str.toUpperCase())
console.log(str.toLowerCase())

let str2 = 'Botirbek Samijonov'

console.log(str.concat('  ', str2))
console.log(str.charAt(3))

console.log(str[0])
console.log(str.charCodeAt())
console.log(str.split(' '))
console.log(str.split(''))

// !Math
let pi = Math.PI
num = 10
console.log(pi)
console.log(Math.abs(-3.2))
console.log(Math.acos(3.6))
console.log(Math.acosh(3))
console.log(Math.asin())
console.log(Math.atan(3))
console.log(Math.cbrt(4.5))

console.log(Math.floor(4.9))
console.log(Math.round(4.4))
console.log(Math.ceil(4.1))

// console.log(Math.clz32(4))
console.log(Math.sqrt(16))
console.log(Math.exp(10))
console.log(Math.trunc(11))
console.log(Math.sin(20))
console.log(Math.imul(num))
console.log(Math.max(10 , 11))
console.log(Math.min(11 , 10))
console.log(Math.pow(1 , 2))
console.log(Math)
console.log(Math)
console.log(Math)
console.log(Math)



// Javascript Numbers


console.log(Math.PI.toFixed(0));
console.log(Math.PI.toFixed(1));
console.log(Math.PI.toPrecision(3));
console.log(Math.PI.valueOf());
console.log(Number("110"));
console.log(String("110"));
console.log(parseInt('5.6 day'));
console.log(parseFloat('5.5 day'));
