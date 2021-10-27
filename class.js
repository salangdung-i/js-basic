'use strict';
// Object-oriendted programming
// class: templated
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance
// 이전에는 클래스를 지정하지 않고 사용했다?

// 1. Class declarations 선언
class Person {
    // constructor 생성자 
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
//https://www.w3schools.com/js/js_object_accessors.asp 참고
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; 
    }

    get age() {
        return this._age;
    }
    // set은 값을 설정하니까 값을 받아와야함 
    set age(value){
        if (value < 0) {
            console.log('age can not be negative');
        }
        this._age  = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);
// 사람의 나이가 -1이 되는게 말이안됨 
// 누군가 내가 만든 클래스를 잘못사용하고 있을때 방어적으로 하는게 getter와 setter 이다.


// 3. Fields (public, private)
// Too soon!
// mdn
class Experiment {
    publicField = 2;
    #privateField = 0; // 클래스 내부에서만 값이 보여지고, 변경할수있다.
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
// 클래스안에 있는 필드와 메소드는 만들떄마다 복제되어서 씀
// 오브젝트에 상관없이 클래스 자체에 연결되어짐??
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); //'Dream Coding'
Article.printPublisher();
// 들어오는 데이터에 상관없이 공통적으로 쓰려면?? 
// 이해 잘 안감

// 상속, 다형성
// 도형을 그리는 메소드를 만드려면
// 공통적인 속성들은 한번에 


// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

// extends 연장한다.
class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        // super : 부모의 함수를 상속
        super.draw();
        // 추가적으로 기능 추가
        console.log('🔺');
    }
    // 필요한 함수만 재정의 overiding 오버라이딩
    getArea() {
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle: color: ${this.color}`;       
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// 클래스를 이용해서 만들어진 새로운 인스턴스 
// 오브젝트가 왼쪽 클래스를 이용해서 만들어진 앤지 아닌지 
console.log(rectangle instanceof Rectangle);    // T
console.log(triangle instanceof Rectangle);     // F
console.log(triangle instanceof Triangle);      // T
console.log(triangle instanceof Shape);         // T
console.log(triangle instanceof Object);        // T 자바스크립트의 모든 오브젝트는 이 오브젝트를 상속한 것이다.
console.log(triangle.toString());
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference 참고