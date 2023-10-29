// Задание 1

let array1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
    if (array1[i] == 10) break;
}

//Задание 2

let array2 = [1, 5, 4, 10, 0, 3];
console.log(array2.indexOf(4));

// Задание 3 

let array3 = [1, 3, 5, 10, 20];
array3 = array3.join(' ');
console.log(array3);

// Задание 4

let array4 = [];
for (let i = 0; i < 3; i++) {
    array4[i] = [];
    for (let j = 0; j < 3; j++) {
        array4[i][j] = 1;
    }
}
console.log(array4);

//Задание 5

let array5 = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    array5.push(2)
}
console.log(array5);

//Задание 6

let array6 = [9, 8, 7, 'a', 6, 5];
array6 = array6.sort();
array6.pop();
console.log(array6);

//Задание 7 

let array7 = [9, 8, 7, 6, 5];
let kek = Number(prompt('Введи число'));
if (!kek) {
    alert('Вы ничего не ввели!')
} else
    if (array7.includes(kek)) {
        alert('Угадал')
    } else {
        alert('Не угадал')
    }

//Задание 8

let k = 'abcdef'
k = k.split('');
k = k.reverse('');
k = k.join('');
console.log(k);

//Задание 9

let array9 = [[1, 2, 3,],
[4, 5, 6]]
array9 = array9.flat();
console.log(array9);

//Задание 10

let array10 = [9, 8, 7, 6, 5];
for (let i = 0; i < array10.length - 1; i++) {
    console.log(array10[i] + array10[i + 1])
}

//Задание 11

let array11 = [1, 5, 4, 10, 0, 3];
let result = array11.map(el => (el ** 2));
console.log(result);

//Задание 12

function getLengthWords(array) {
    let arrayLength = array.map(function (piece) {
        return piece.length;
    });
    console.log(arrayLength);
}

getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']); // [5, 0, 4, 19, 5]

//Задание 13

function filterPositive(array) {
    let arrayPositive = array.filter(el => el < 0);
    console.log(arrayPositive);
};

filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]