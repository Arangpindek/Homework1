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