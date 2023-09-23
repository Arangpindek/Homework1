// Задание 1
let i1 = 1;
do {
    console.log('Привет');
    i1++;
}
while (i1 <= 2);


// Задание 2

let i2 = 1;
while (i2 <= 5) {
    console.log(i2);
    i2++;
}

// Задание 3

let i3 = 7;
while (i3 <= 22) {
    console.log(i3);
    i3++;
}

// Задание 4

const salary = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
};
for (let payment in salary) {
    console.log(`${payment} - зарплата ${salary[payment]}$`);
}
// Задание 5

let n = 1000;
let num = 0;
do {
    n /= 2;
    num++;
}
while (n >= 50)
console.log(num);
// Задание 6
let e = Number(prompt('Введите число первой пятницы'))
if (e > 7) {
    alert('Вы ввели не то число')
} else {
    do {
        e += 7;
        alert(`Сегодня пятница, ${e}-е число. Необходимо подготовить отчет.`)
    } while (e < 31);
}

// Домашка 5

//Задание 1

function smallerNum(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}
console.log(smallerNum(2, 4));
console.log(smallerNum(6, 6));
console.log(smallerNum(8, 4));

//Задание 2

function findEvenNumber(num) {
    if (num % 2 == 0) {
        return 'Число четное'
    } else {
        return 'Число нечетное'
    }
}
findEvenNumber();
console.log(findEvenNumber(4));


printMessage();

//Задание 3.1

let a = prompt('введите число')

function getSquare(num) {
    console.log(num * num);
}

getSquare(a);

//Задание 3.2

let a = prompt('введите число')

function getSquare(num) {
    return num * num
}

console.log(getSquare(a));

// Задание 4

function ageRequest() {
    let age = prompt('введите ваш возраст');
    if (isNaN(age)) {
        alert('Вы ввели не возраст');
    } else
        if (age < 0) {
            alert('Вы ввели неправильное значение');
        } else
            if (age < 13) {
                alert('Привет, друг!');
            } else {
                alert('Добро пожаловать!');
            }
}

ageRequest();

//Задание 5


let num1 = prompt('введите 1 число')
let num2 = prompt('введите 2 число')

function numberCheker(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return n1 * n2;
    }
}

numberCheker(num1, num2);

//Задание 6

function cubefire() {
    let n = prompt('введите  число');
    if (isNaN(n)) {
        return 'Переданный параметр не является числом';
    } else {
        let result = n ** 3;
        return `${n} в кубе равняется ${result}`
    }
}
cubefire();

// Задание 7

function getArea() {
    return Math.PI * (this.radius ** 2);
}
function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 5,
    area: getArea,
    perimeter: getPerimeter,
};
const circle2 = {
    radius: 6,
    area: getArea,
    perimeter: getPerimeter,
};

console.log(circle1.perimeter());
console.log(circle1.area());
console.log(circle2.perimeter());
console.log(circle2.area());