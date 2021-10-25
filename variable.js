// 1. Use Strict
// added in ES 5
// use this for valina Javascript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
// block variable 
{
    let name = "ellie";
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);

// var (don't ever use this!)
// 변수를 선언 하지 않고도 값을 할당할수 있다. (미친짓!)
// 면접 Tip! var hoisiting (move declaration from bottom to top )
// 어디에 선언했는지에 상관없이 선언을 제일 위로 끌어 올려주는 것을 말한다. 
// has no block scope
// 블럭을 철저히 무시한다. 예전엔 유연성이라 생각했지만, 선언하지도 않은 값을 할당해서 이상한 값이 나올수도 있다. 
age = 4;
var age;

// 3. Constant, r(read only)
// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS

// fovor immutable data type always for a few reason:
// 값이 절대 변하지 않는 것 
// - security               보안상
// - thread safety          어플리케이션이 실행되면 쓰레드가 여러개 돌아가며 동시에 값에 접근해서 값을 변경할수있음, 위험
// - reduce human mistakes  
const daysInWeek = 7;
const maxNumber = 5;

 
// Mutable data type

// 4. Variable types
// primaitive, single item : 더 이상 나눌수 없는 데이터 타입
// 값 자체가 메모리에 바로 저장됨
// ex. number, string, boolean, null, undefiedn, symbol
// object, box container : 싱글 데이터 타입을 묶어서 관리할수 있는 것
// function, first-class function 
// ref : object가 담겨있는 곳 
// ellie -> ref -> name, age

const count = 17;   // integer
const size = 17.1;  // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`); 


// number - speicla numeric values : infinity, -infinity, NaN
// 나중에 DOM 요소에 접근해서 변경할때 중요하다고 함 
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// BigInt 숫자+n

// string
const char = 'c';
const brenden = "brenden";
const greeting = "hello" + brenden;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brenden}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value

// null
// 너는 텅텅 비어있는 empty 
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
// 선언은 되어있지만 아무것도 값이 지정되어 있지 않아
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 주어지는 string에 상관없이 고유한 식별자를 만들때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// symbol은 출력할때 .description으로 변환홰서 출력해야한다.

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

// 5. Dynamic typing : dynamically typed lauguage
// 선언할때 어떤타입인지 선언하지않고 런타임이 동작할때 값에 따라 타입이 부여됨 
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / 2;
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // error



// type Script 
// 자바스크립트 위에 타입이 올려진 언어 
// 브라우저가 이해할수 있는 트랜스 컴파일러(Bable)을 이용해야함 

