function $(sel) {
  return document.querySelector(sel);
}
// document.write('Hello world')
// alert('Danger')
// confirm('Really')
// prompt('enter your age')

//! for loop

// for (i = 0; i < 10; i++) {
//   console.log(i)
// }

//!while loop

// var a = 1
// while (a < 4) {
//   a *= 2
//   console.log(a)
// }

//! do-while loop
// var i = 1
// do {
//   i *= 3
//   console.log(i)
// } while (i < 100)

// ! Array
let myNum = [1, 2, 3, 4, 5];
let str = "Sardor Samijonov";
let myArr = [
  "foo",
  "bar",
  "baz",
  "sar",
  "puzz",
  "kull",
  "null",
  "war",
  "jar",
  "nar",
  "foo",
  "show",
];

// var esc = "i don't know"
// console.log(esc)
// console.log(myArr.length)

// console.log(myArr.indexOf('bar'))

// console.log(myArr.lastIndexOf('foo'))

// console.log(myArr.slice(3, 6))

// console.log(myArr.slice(3))

// str.replace()
// console.log(str)

// console.log(str.toUpperCase())
// console.log(str.toLowerCase())

// let str2 = 'Botirbek Samijonov'

// console.log(str.concat('  ', str2))
// console.log(str.charAt(3))

// console.log(str[0])
// console.log(str.charCodeAt())
// console.log(str.split(" "));
// console.log(str.split(''))

// !Math
// let pi = Math.PI
// num = 10
// console.log(pi)
// console.log(Math.abs(-3.2))
// console.log(Math.acos(3.6))
// console.log(Math.acosh(3))
// console.log(Math.asin())
// console.log(Math.atan(3))
// console.log(Math.cbrt(4.5))

// console.log(Math.floor(4.9))
// console.log(Math.round(4.4))
// console.log(Math.ceil(4.1))

// console.log(Math.clz32(4))
// console.log(Math.sqrt(16))
// console.log(Math.exp(10))
// console.log(Math.trunc(11))
// console.log(Math.sin(20))
// console.log(Math.imul(num))
// console.log(Math.max(10 , 11))
// console.log(Math.min(11 , 10))
// console.log(Math.pow(1 , 2))
// console.log(Math)
// console.log(Math)
// console.log(Math)
// console.log(Math)

//! Javascript Numbers

// console.log(Math.PI.toFixed(0));
// console.log(Math.PI.toFixed(1));
// console.log(Math.PI.toPrecision(3));
// console.log(Math.PI.valueOf());
// console.log(Number("110"));
// console.log(String("110"));
// console.log(parseInt('5.6 day'));
// console.log(parseFloat('5.5 day'));

// console.log('Java script');

// !Java script

// console.log(myNum.at(3));
// console.log(myNum.push(8));                                            //* oxririda shun elementni qoshadi
// console.log(myNum.unshift(8));                                         //* boshidan shu elementni qoshadi
// console.log(myNum.pop());                                              //* oxiridagi bitta elementni oladi
// console.log(myNum.shift());                                            //* boshidagi elementni oladi
// console.log(myNum.fill("s"));                                          //* hamma arrni s qiladi
// console.log(myNum.reverse());                                          //* teskari tartibda qiladi
// console.log(myNum.includes(5));                                        //* 5bor yugligini ko'rsatadi
// console.log(myNum.map(e => parseInt(e)));                              //* ichida funksiya yozsa boladi item * 2
// console.log(myNum.filter(item => item <3 ));                           //* filtrlab olsa boladi ajratib
// console.log(myArr.findIndex(item => item === 'foo'));                  //* indexni topib beradi
// console.log(myNum.reduce((prev , curr) => prev + curr  ));              //* hammasini qoshib beradi
// console.log(myNum.toString());                                          //* hammasini bitta qilib string qilib beradi
// console.log(myArr.toString());                                          //* hammasini bitta qilib string qilib beradi
// console.log(myNum.join(' / '));                                         //* slash quyib beradi orasiga
// console.log(myNum.slice(2 , 5)  )                                       //*  2 bilan 5gaca kesib tashladi
// console.log(myNum.splice(2 , 5)  )                                      //*  2 bilan 5gaca kesib tashladi
// console.log(myArr.sort());                                              //*  alfabet boyicha tartib
// console.log(myNum.sort((a , b)=> {return b+a}));                        //* pastdan tepaga qarab sort
// console.log(myNum.sort((a , b)=> {return b-a}));                        //*tepadan pastga qarab sort
// console.log(myNum.sort((a , b)=> {return 0.5 - Math.random()}));

//   let obj = { a: 1, b: 2 , c: 3 }
//   let arr =[]
//   function toArray(obj) {
//     for (i=0 ; i<Object.keys(obj).length; i ++ ){
//     arr.push([Object.keys(obj)[i],Object.values(obj)[i]])
//   }
//   return arr
// }
// console.log(toArray(obj) )
// console.log(typeof arr)

// function secondLargest(arr) {
//   arr.sort();
//   return arr[arr.length - 2];
// }

// console.log(secondLargest(myNum));

// console.log(myNum.
// (x => x = 5));

// !Findeing demo

// sentence = "I am finding Nemo !"

// function findNemo(sentence) {
//   let index = null
//   let arr = sentence .split(' ')
//   console.log( arr.every(x => x = 'Nemo'))
// 	 if(arr.every(x => x !== 'Nemo')){
// 		console.log(  "I can't find Nemo :(")
// 	 }
// 	else{
//     index = arr.findIndex(item => item === 'Nemo') + 1
// 		console.log(  'I found Nemo at '+ index + '!')
// 	}
// }
// findNemo(sentence)

// ! todo

// filtered = myNum.filter(e => parseInt(e));
// console.log( filtered)
// console.log(  filtered.reduce((prev , curr) => prev + curr  ))

// console.log(num);

// let numbersOnly = (val ) =>{
//   if(typeof(val) === 7){
//     return val
//   }
// }
//  console.log( myNum.filter(numbersOnly).reduce((prev , curr) => prev + curr  ))

// ! seven boom
// let sevenB = [1, 2, 3, 4, 5, 6 , 'sal' , true  , '12 '];
// function sevenBoom(arr) {
//   let num = sevenB.join('').split("")
// 	if(num.includes('7')){
// 	return	 "Boom!"
// 	}else {
// 		return "there is no 7 in the array"
// 	}
// }
// console.log( sevenBoom(myNum))\

// function multiply(arr, num) {
//   const iterator = arr.values();
//    let array = []
//   for (value of iterator) {
//     array.push( value * num)
//   }
//   return array
// }
// console.log(multiply(myNum, 3));

//  multiply = myNum => a => myNum.map(e => e * a)
//  console.log( multiply (myNum , 3))

// !indexni valga kopaytirish
{
  // let myNum = [-3, 0, 8, -6];
  // function indexMultiplier(arr) {
  //   let result = null;
  //   for (val of arr) {
  //     result += val * arr.indexOf(val);
  //   }
  //   return result;
  // }
  // console.log(indexMultiplier(myNum));
  // function indexMultiplier(arr) {
  //   return arr.reduce((acc, cv, i) => acc + cv * i, 0);
  // }
  // console.log(indexMultiplier(myNum));
}

//  ! An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.
// {
//   let myNum = [2, 7, 4, 9, 6, 1, 6, 3]
// function isSpecialArray(arr) {
// 	arr.reduce((acc, cv, i  , arr) =>{
//     console.log(i +1 )
//     2
//   },0);
// }
// isSpecialArray(myNum)
// }
// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }

// {

{
  let myNum = [1, 2, 3, 4, 5 ,6 ,7, 8];
  let twoArr = [];
  // function teng (arr){
  for (i = 0; i < myNum.length; i++) {
    twoArr.push(i);
    if(twoArr[i] !== myNum[i]){
      console.log(myNum[i]);
    }
  }
  // console.log( teng(myNum ))
  // }
  // console.log( myNum.length)
  // myNum.forEach((item) => {
  //   console.log(twoArr.includes(item));
  //   if(!twoArr.includes(item)){
  //     console.log(item);
  //   }
  // });
}
