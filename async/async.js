// async & awit
// clear style of using promise :)

// 1. async
// 함수 앞에 async 키워드를 쓰면 Promise로 바로 만들어줌
async function fetchUser() {
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

/*
function getBanana() {
    return delay(3000)
    .then(() => '🍌');
}
*/

/*
function pickFruits() {
    return getApple()
    .then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}
*/

async function pickFruits() {
    // promise만들면 바로 시작하니까 병렬처리 가능 
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + ')
    );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);