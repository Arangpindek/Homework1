//
let hwt1 = 'js';
console.log(hwt1.toUpperCase())
//
function searchStart(products, search) {

    products.forEach((product) => {
        if (product.toLowerCase().includes(search.toLowerCase())) {
            console.log(product);
        }
    });
}
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []
//
let hwt3 = 32.58884;
console.log(Math.floor(hwt3));
console.log(Math.ceil(hwt3));
console.log(Math.round(hwt3));
//
const array4 = [52, 53, 49, 77, 21, 32];

let small = Math.min(...numbers);
let large = Math.max(...numbers);

console.log("Наименьшее число:", small);
console.log("Наибольшее число:", large);
//
function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * maxValue);
}
console.log(getRandomInt(1, 10));
//
function getRandomArrNumbers(num) {
    let length = Math.floor(num / 2);
    let array3 = [];

    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * (num));
        array3.push(randomNumber);
    }

    return array3;
}
let inputNumber = prompt('Введи число');
let randomArray = getRandomArrNumbers(inputNumber);
console.log(randomArray);
//
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let minNumber = Number(prompt('Введите первое число'));
let maxNumber = Number(prompt('Введите второе число'));
let randomNumber = generateRandomNumber(minNumber, maxNumber);
alert(randomNumber);
//
let currentDate = new Date();
console.log(currentDate);
//
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(`Через 73 дня будет: ${currentDate}`);
//
function formatDateTime(date) {
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const weekdays = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let weekday = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    let formattedDate = `Дата: ${day} ${months[month]} ${year} - это ${weekdays[weekday]}.`;
    let formattedTime = `Время: ${hours}:${minutes}:${seconds}`;
    
    return `${formattedDate} ${formattedTime}`;
    }
let currentDate = new Date();
let formattedDateTime = formatDateTime(currentDate);
console.log(formattedDateTime);