// 1. String Concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log('string literals: 1 + 2 = ${1 +2}');

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement opertors
let counter = 2;
const preIncrement = ++counter; 
// counter = counter + 1;
// preIncrement = counter;
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);    // less than
console.log(10 <= 6);   // less than or equal
console.log(10 > 6);    // greater than
console.log(10 >= 6);   // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value  
// 처음으로 true 가 나오면 연산을 멈춤 
// 젤 무거운 연산 함수같은건 맨뒤에
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
if(nullableObject != null) {
    nullableObject.something;
}

// ! (not)
console.log(!value1);

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('분노');
    }
    return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log( stringFive == numberFive);
console.log( stringFive != numberFive);

// === strict equality, no type conversion
console.log( stringFive === numberFive);
console.log( stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false : ref value가 다름
console.log(ellie1 === ellie2); // false : ref 값이 다름
console.log(ellie1 === ellie2); // true : ref 가 같음

// equality - puzzler
console.log(0 == false);            // t
console.log(0 === false);           // f boolean
console.log('' == false);           // t 
console.log('' === false);          // f
console.log(null == undefined);     // t 
console.log(null === undefined);    // f

// 8. Conditional operators: if
// if, else if, else
const name = 'coder';
if (name === 'ellie') {
    console.log('Welcome, Ellie');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else { 
    console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;

https://www.youtube.com/watch?v=YBjufjBaxHo&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=4
