'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting. 호이스팅이 된 이후부터 코드가 작성된 순서에 맞춰 하나하나 실행된다는말 
// hoisting: var, function delaration 변수, 함수의 선언들이 자동적으로 위로 올라가는 것 
// hoisting 되기 때문에 모든 함수와 선언은 위로 올라가게 됨, 이후 순서대로 실행
// Synchronous callback
function printImmediately(print) {
    print();
}
// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

// 1. 동기와 비동기
// 2. 콜백 마지막 정리

console.log('1');
setTimeout(() => console.log('2'), 1000); // 브라우저에 1초뒤에 동작하도록 요청
console.log('3');

printImmediately(() => console.log('hello'));

printWithDelay(() => console.log('async callback'), 2000); // 브라우저에 2초뒤에 동작하도록 요청


// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if ( 
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            }else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

// 1. 사용자가 id, password
// 2. login
// 3. role 
// 4. 사용자의 이름과 역할 출력 

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    (user) => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
            );
        }, 
    error => {
        console.log(error);
    }
);
