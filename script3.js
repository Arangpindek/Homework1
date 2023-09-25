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