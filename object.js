// Objects
// one of the JavaScript's types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 비효율적
const name = 'ellie';
const age = 4;
print(name, age);
function print(name, age) {
    console.log(name);
    console.log(age);
}

// 1. Literals and properties
const obj1 = {};            // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

//효율적
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

// 동적임으로 뒤늦게 추가 가능
// 하지만 가능하면 피할것 
ellie.hasJob = true;
console.log(ellie.hasJob);

// 삭제도 가능 
delete ellie.hasJob;
console.log(ellie.hasJob); 

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']); // 배열에서 데이터를 가져오는것 처럼도 가능
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');
// 나중에 obj의 key value를 받아올때 유용하다고함,,,?

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('ellie', 30);
const person5 = new Person('ellie', 30);

function makePerson(name, age) {
    return {
        name,   // name: name, key와 value가 같으면 생략가능
        age,    // age: age,
    };
}

// 4. Constuctor function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
// key가 있는지 없는지 확인하는 키워드 
console.log('name' in ellie);
console.log('random' in ellie);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
//ellie가 가지고 있는 키가 블럭을 돌때마다 key에 할당됨
    console.log(key);    
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(let i = 0; i < array.length ; i++) {
    console.log(array[i]);
}

for(value of array ) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign(user4, user);
console.log(user4);

// another example
const fruit1 = { color: 'red'};
const fruit2 = { color : 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에있는 프로퍼티가 값을 덮어씌어줌
console.log(mixed.color);
console.log(mixed.size);
