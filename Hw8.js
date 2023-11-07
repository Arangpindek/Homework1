//
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

people.sort((a, b) => a.age - b.age);

console.log(people);
//
function isPositive(value) {
    return value > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function map(array, mapFunction) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(mapFunction(array[i]));
    }

    return result;
}

function filter(array, ruleFunction) {
    return map(array, function (item) {
        if (ruleFunction(item)) {
            return item;
        }
    }).filter(function (item) {
        return item !== undefined;
    });
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));
//
function printCurrentDate() {
    console.log(new Date());
}

let interval = setInterval(printCurrentDate, 3000);
setTimeout(function () {
    clearInterval(interval);
    console.log("30 секунд прошло");
}, 30000);
//
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});
//
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (typeof cb === 'function') {
            cb();
        }
    }, 1000);
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond(() => {
    sayHi('Глеб');
});