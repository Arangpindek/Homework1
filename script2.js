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