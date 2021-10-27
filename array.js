// 자료구조
// object vs 자료구조
// object 서로 연관된 특징,행동을 묶어놓는것 (토끼, 사람, 자동차, ..)
// 비슷한 타입의 object를 묶어놓는것 자료구조
// 나중에 자료구조, 알고리즘 공부더하기

// 인덱스 0부터 시작
// 한 배열안에는 동일한 타입의 데이터를 넣도록 하기

'use strict';

// Array 

// 1. Declaration
const arr1  = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits.length - 1); // 배열의 마지막 데이터 접근시

// 3. Looping over an array
// print all

// a. for
for(let i = 0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push : add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginging
fruits.unshift('🍓', '🍑');
console.log(fruits);

// shift : remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note! shift, unshift are slower than pop, push
// splice : remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1,'🍏', '🍉');
console.log(fruits);

// combine two arrays
const frusts2 = ['🍐', '🥥'];
const newFruits = fruits.concat(frusts2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥'));  // 배열안에 없으면 -1을 반환

// includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎')); // 🍎가 여러개있을떄 가장 마지막 index를 출력한다.

// HOME Work : Array!!
