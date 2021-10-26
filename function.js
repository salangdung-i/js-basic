// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function == one thing 하나의 함수는 한가지 일만 하도록! 
// naming: doSomething, command, verb 
// e.g. createCardAndPoint -> createdCard, createPoint 
// function is object in JS * 
// JS에서 함수는 object이기 때문에 '함수.'을하면 함수의 속성들을 확인 할수 있다.
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message)
}

log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
// 함수에서 파라메터의 값을 입력하지 않았을때 대체할 값을 넣는 기능
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');


// 4. Rest parameters (added in ES6)
// ... => 배열형태로 전달됨 
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    
    // args에 있는 값이 arg로 차례차례 출력되는 것
    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼수있다.
let globalMessage = 'global';   // global variable
function printMessage() {
    let message = 'hello';
    console.log(message);       // local variable   지역변수
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    //console.log(childMessage);    // error
}
printMessage();
//console.log(message); // error

// 6. Return a value
// return이 없는 함수는 return undefined; 가 생략되어 있다고 생각하자.
function sum(a, b) {
    return a+b;
}
const result = sum(1, 2);   // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
// 블럭 안에서 블럭을 쓰는 것은 가독성이 떨어짐
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic..
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic..
}

// 1. Function expression
// a function delaration can be called earlier than it is defied. (hoisted)
// a function expression is created when the execution reaches it.
// 함수의 이름없이 만들어서 변수에 할당할수있다.  
const print = function () { // anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function () {
    console.log('yes!');
};

const printNo = function print() {
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
/*
const simplePrint = function() {
    console.log('simplePrint!');
}
*/
const simplePrint = () => console.log('simplePrint!');
//const add = (a, b) => a + b;

// 블럭을 쓰면 리턴 키워드 써야함
const simpleMultiply = (a, b) => {
    // do something more
    return a * b ;
};

// IIFE: Immediately Invoked Function Expression
// 선언함과 동시에 실행 
(function hello() {
    console.log('IIFE');
})()

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calcalate(command, a, b) {
    if (command == add) {
        add(a,b);
    } else if (command == substract) {
        substract(a, b);
    } else if (command == divide) {
        divide(a, b);
    } else if (command == multiply) {
        multiply(a, b);
    } else if (command == remainder) {
        remainder(a, b);
    } else {
        console.log('command error!');
    } 
}

const add = (a, b) => console.log(`${a + b}`);
const substract = (a, b) => console.log(`${a - b}`);
const divide = (a, b) => console.log(`${a / b}`);
const multiply = (a, b) => console.log(`${a * b}`);
const remainder = (a, b) => console.log(`${a % b}`);

calcalate(divide, 10, 5);
calcalate();

function calcalate_switch(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');    
    }
}

console.log(calcalate_switch('add', 2, 3));