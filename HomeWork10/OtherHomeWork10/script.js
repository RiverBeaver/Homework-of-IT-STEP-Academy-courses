"use strict"

// Task 1
/* 
let name = prompt('Как вас завут?', 'Саша');
alert('Привет, ' + name); 
*/

// Task 2
/*
let yearOfBirth;
const thisYear = 2023;

while (true) {
    yearOfBirth = prompt('В каком году вы родились?', '1995');

    if (+yearOfBirth > 0)
    {
        yearOfBirth = +yearOfBirth;
        break;
    }

    alert('Вы не ввели год или ввели его не числом');    
}

let age = thisYear - yearOfBirth;
alert(`Вам ${age}`);
*/

// Task 3
/*
let sideOfTheSquare;

while (true) {
    sideOfTheSquare = prompt('Введите длину стороны квадрата в см', '25');

    if (+sideOfTheSquare > 0)
    {
        sideOfTheSquare = +sideOfTheSquare;
        break;
    }

    alert('Вы не ввели длину стороны квадрата или ввели ее не числом');    
}

alert(`Периметр квадрата равет ${4 * sideOfTheSquare} см`);
*/

// Task 4
/*
let radius;

while (true) {
    radius = prompt('Введите радиус окружности в см', '25');

    if (+radius > 0)
    {
        radius = +radius;
        break;
    }

    alert('Вы не ввели радиус окружности или ввели его не числом');    
}

alert(`Площадь круга равна ${(3.1415926535 * radius**2).toFixed(2)} см`);
*/

// Task 5
/*
let distance;
let time;

while (true) {
    distance = prompt('Введите расстояние между городами в км', '25');

    if (+distance > 0)
    {
        distance = +distance;
        break;
    }

    alert('Вы не ввели расстояние между городами или ввели его не числом');    
}

while (true) {
    time = prompt('Введите за какое время вы хотите добраться в часах', '1');

    if (+time > 0)
    {
        time = +time;
        break;
    }

    alert('Вы не ввели время или ввели его не числом');    
}

alert(`Скороть с которой вам необходимо двигаться ${(distance/time).toFixed(1)} км/ч`);
*/

// Task 6
/*
let dollar;
const theCurrentCourse = 0.9395;

while (true) {
    dollar = prompt('Сколько долларов вы хотите конвертировать', '25');

    if (+dollar > 0)
    {
        dollar = +dollar;
        break;
    }

    alert('Вы не ввели количество долларов или ввели их не числом');    
}

alert(`У вас будет ${(dollar * theCurrentCourse).toFixed(2)} евро`);
*/

// Task 7
/*
let volumeFlash;

while (true) {
    volumeFlash = prompt('Введите объем флешки в Гб', '16');

    if (+volumeFlash > 0)
    {
        volumeFlash = +volumeFlash;
        break;
    }

    alert('Вы не ввели объем флешки или ввели его не числом');    
}

alert(`На вашу флешку поместиться ${parseInt(volumeFlash / 0.82)} шт. файлов размером в 820 МГб`);
*/

// Task 8
/*
let summaInWallet;
let thePriceOfChocolate;

while (true) {
    summaInWallet = prompt('Сколько у вас денег в рублях?', '100');

    if (+summaInWallet > 0)
    {
        summaInWallet = +summaInWallet;
        break;
    }

    alert('Вы не ввели сумму денег или ввели ее не числом');    
}

while (true) {
    thePriceOfChocolate = prompt('Сколько стоит шоколадка в рублях?', '10');

    if (+thePriceOfChocolate > 0)
    {
        thePriceOfChocolate = +thePriceOfChocolate;
        break;
    }

    alert('Вы не ввели стоимость шоколадки или ввели ее не числом');    
}

let cout = parseInt(summaInWallet/thePriceOfChocolate);

alert(`Вы сможете купить ${cout} шт. шоколадок и у вас останется ${(summaInWallet - (cout * thePriceOfChocolate)).toFixed(2)} рублей`);
*/

// Task 9
/*
let threeDigitNumber;

while (true) {
    threeDigitNumber = prompt('Введите трехзначное число', '685');

    if ((+threeDigitNumber >= 100) & (+threeDigitNumber <= 999))
    {
        threeDigitNumber = +threeDigitNumber;
        break;
    }

    alert('Вы не ввели трехзначное число');    
}

let a = threeDigitNumber % 100;
threeDigitNumber = '' + a % 10 + parseInt(a / 10) + parseInt(threeDigitNumber / 100);

alert(`Это число задом наперед: ${threeDigitNumber}`);
*/

// Task 10
/*
let number;

while (true) {
    number = prompt('Введите число', '15');

    if ((number !== null) & (number !== '') & (!isNaN(+number)))
    {
        number = +number;
        break;
    }

    alert('Вы не ввели число');    
}

alert(`Число ${number} ${number % 2 === 0 ? 'четное' : 'нечетное'}`);
*/