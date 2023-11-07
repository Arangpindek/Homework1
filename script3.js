function seasonFinder() {
    let mn = prompt('Введите номер месяца')
    if (mn == 1 || mn == 2 || mn == 12) {
        alert('Это Зима')
    }
    else if (mn >= 3 && mn <= 5) {
        alert('Это Весна')
    }
    else if (mn >= 6 && mn <= 8) {
        alert('Это Лето')
    }
    else if (mn >= 9 && mn <= 11) {
        alert('Это Осень')
    }
    else {
        alert('Введено неверное число')
    }
}
function game2() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    for (let i = fruits.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [fruits[i], fruits[j]] = [fruits[j], fruits[i]];
    }
    alert(fruits);
    let firstElementGuess = prompt("Чему равнялся первый элемент массива?");
    let lastElementGuess = prompt("Чему равнялся последний элемент массива?");
    let firstElement = fruits[0];
    let lastElement = fruits[fruits.length - 1];
    if (firstElementGuess === firstElement && lastElementGuess === lastElement) {
        alert("Поздравляю! Вы угадали оба элемента!");
    } else if (firstElementGuess === firstElement || lastElementGuess === lastElement) {
        alert("Вы были близки к победе!");
    } else {
        alert("Вы ответили неверно.");
    }
}