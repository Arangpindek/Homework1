//Задание 1
let a = 10;
alert(a);
let a1 = a + 10;
alert(a1)
//Задание 2
let ipy = String('Iphone выпустили 9 января 2007');
alert(ipy);
//Задание 3
let jsy = String('Автор Java Script Брендан Эйх')
alert(jsy);
//Задание 4
let p1 = 10;
let p2 = 2;
let r1 = p1 + p2;
let r2 = p1 - p2;
let r3 = p1 * p2;
let r4 = p1 / p2;
alert(`Сумма чисел = ${r1}. Разность = ${r2}. Произведение = ${r3}.Частное = ${r4}.`)
//Задание 5
let z5 = 2;
let zr5 = z5 ** 5;
alert(zr5);
//Задание 6
let z6a = 9;
let z6b = 2;
let rz6 = z6a % z6b;
alert(rz6);
//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);
//Задание 8
let z8age = prompt("Сколько вам лет?")
alert(`Вы сделали ${z8age} оборотов вокруг солнца`)
//Задание 9
const user = {
    name: String('Bob'),
    age: Number(32),
    isAdmin: Boolean(true)
}
user.city_of_residence = String('Moscow');
user.age = 42;
delete user.city_of_residence;
let info = prompt("Что вы хотите узнать о пользователе?", "name");
alert(user[info]);
//Задание 10
let z10 = prompt("Как вас зовут");
alert(`Привет, ${z10} !`)


// 3 домашка
// Задание 1
let password = 'пароль';
let passchek = prompt('Введите пароль');
if (password == passchek) {
    alert("Пароль введен верно")
}
else {
    alert("Пароль введен неверно")
}
// Задание 2
let c = Number(prompt('Введите число'));
if (c > 0 && c < 10) {
    console.log('true')
} else {
    console.log('false')
}
// Задание 3
let d = Number(prompt('Введите число 1'));
let e = Number(prompt('Введите число 2'));
if (d > 100 || e > 100) {
    console.log('true')
} else {
    console.log('false')
}
// Задание 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(+a + +b);
// Задание 5
let month = Number(prompt('Введите номер месяца'))
switch (month) {
    case 1 || 2 || 12:
        console.log('Это зима');
        break;
    case 3 || 4 || 5:
        console.log('Это весна');
        break;
    case 6 || 7 || 8:
        console.log('Это лето');
        break;
    case 9 || 10 || 11:
        console.log('Это зима');
        break;
    default: console.log('Ты на какой планете живешь?');
        break;
}

// Задание 7
let chet = prompt('Введите число')
let chetzna = chet % 2
if (isNaN(chetzna)) {
    alert('Введено не число')
} else
    if (chetzna == 0) {
        alert('Число четное')
    } else {
        alert('Число не четное')
    }
