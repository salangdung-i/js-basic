'use strict';

// Promize is a JavaScript object for asynchronous opertation. 
// State : pending -> fulfilled or rejected 
// producer vs consumer 

// 1. Producer
// when new Promis is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        //resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});

// 2. consumers: than, catch, finally
promise//
    .then((value) => {
    console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });

// 3. Promize chaning
const fetchNumber = new Promise((resovle, reject) => {
    setTimeout(() => resovle(1), 1000);
});

fetchNumber
.then(num => num *2)
.then(num => num *3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1), 1000);
    });
})
.then(num => console.log(num));

// 4. Error Handing
const getHen= hen => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resovle, reject) => {
        setTimeout(()=> reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000)
    });

getHen() //
.then(getEgg)
.catch(error => {
    return '🥖';
})
.then(cook)
.then(console.log)
.catch(console.log);
