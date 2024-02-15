console.log(`Задание 1:   isFirstNumberLarger (firstNumber, secondNumber)

Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

Задание 2:   factorial (number)

Написать функцию, которая вычисляет факториал переданного ей числа.

Задание 3:   joinNumbers (number1, number2, number3)

Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

Задание 4:   areaOfRectangleOrSquare (firstSide, secondSide)

Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

Задание 5:   isPerfectNumber (number)

Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

Задание 6:   perfectNumbersFromGivenRange (min, max)

Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.

Задание 7:   timeFormatting (hours, minuts, seconds)

Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс». Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

Задание 8:   convertingTimeToSeconds (hours, minuts, seconds)

Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

Задание 9:   convertingTimeFromSeconds (seconds)

Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

Задание 10:  differenceBetweenTheTwoTimeValues (firstHours, firstMinuts, firstSeconds, secondHours, secondMinuts, secondSeconds)

Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс».`);

// Task 1

function isFirstNumberLarger (firstNumber, secondNumber) {
    if (!isFinite(firstNumber) || !isFinite(secondNumber)) {
        return null;
    }
   
    if (firstNumber > secondNumber) {
        return 1;
    } else if (firstNumber < secondNumber) {
        return -1;
    } else {
        return 0;
    }
}

// Task 2

function factorial (number) {
    if (number < 0 || !isFinite(number)) {
        return null;
    }

    if (number < 171) {
        let result = 1;
    for(let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
    } else {
        let result = 1n;
        number = BigInt(number);
        for (let i = 1n; i <= number; i++) {
            result *= i;
        }
        return result;
    }
}

// Task 3

function joinNumbers (number1, number2, number3) {
    return +('' + number1 + number2 + number3);
}

// Task 4

function areaOfRectangleOrSquare (firstSide, secondSide) {
    if (isFinite(firstSide) && isFinite(secondSide)) {
        return firstSide * secondSide;
    } else if (isFinite(firstSide)) {
        return firstSide ** 2;
    } else return null;
}

// Task 5

function isPerfectNumber (number) {
    if (!(isFinite(number)) || number < 1) {
        return null;
    }

    let sumOfDivisors = findingDivisorsAndSum(number);
    return sumOfDivisors === number;
}

function findingDivisorsAndSum (number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum;
}

// Task 6

function perfectNumbersFromGivenRange (min, max) {
    if (min > max || !(isFinite(+min)) || !(isFinite(+max))) {
        return null;
    }

    let perfectNumbers = [];
    for (let i = +min; i < max; i++) {
        if (isPerfectNumber(i)) {
            perfectNumbers[perfectNumbers.length] = i;
        }
    }
    return perfectNumbers;
}

// Task 7

function timeFormatting (hours, minuts, seconds) {
    if (hours > 24 || hours < 0 || !isFinite(hours) || (hours % 1 !== 0) ||
        minuts > 60 || minuts < 0 || (minuts % 1 !== 0 && minuts !== undefined) ||
        seconds > 60 || seconds < 0 || (seconds % 1 !== 0 && seconds !== undefined)) {
        return null;
    }

    hours = (hours < 10) ? '0' + hours : hours;
    minuts = (minuts === undefined) ? '00' : (minuts < 10 ? ('0' + minuts) : minuts);
    seconds = (seconds === undefined) ? '00' : (seconds < 10 ? '0' + seconds : seconds);
    return `${hours}:${minuts}:${seconds}`;
}

// Task 8

function convertingTimeToSeconds (hours, minuts, seconds) {
    if (hours < 0 || (hours % 1 !== 0 && hours !== undefined) ||
    minuts < 0 || (minuts % 1 !== 0 && minuts !== undefined) ||
    seconds < 0 || (seconds % 1 !== 0 && seconds !== undefined)) {
        return null;
    }
    if (hours === undefined) {
        return 0;
    }

    if (minuts === undefined) {
        return (hours * 3600);
    }
    
    if (seconds === undefined) {
        return (hours * 3600) + (minuts * 60);
    } else {
        return (hours * 3600) + (minuts * 60) + (+seconds);
    }
}

// Task 9

function convertingTimeFromSeconds (seconds) {
    if (seconds < 0 || seconds % 1 !== 0) {
        return null;
    }

    let hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    let minuts = Math.floor(seconds / 60);
    seconds %= 60;

    hours = (hours < 10) ? '0' + hours : hours;
    minuts = (minuts < 10 ? ('0' + minuts) : minuts);
    seconds = (seconds < 10 ? '0' + seconds : seconds);
 
    return `${hours}:${minuts}:${seconds}`;
}

// Task 10

// function differenceBetweenTheTwoTimeValues (firstTime, secondTime) {
//     firstTime = firstTime.split(':');
//     secondTime = secondTime.split(':');
    
//     if (firstTime.length != 3 || !isFinite(+firstTime[0]) || !isFinite(+firstTime[1]) || !isFinite(+firstTime[2]) ||
//     secondTime.length != 3 || !isFinite(+secondTime[0]) || !isFinite(+secondTime[1]) || !isFinite(+secondTime[2])) {
//         return null;
//     }
    
//     firstTime = convertingTimeToSeconds(firstTime[0], firstTime[1], firstTime[2]);
//     secondTime = convertingTimeToSeconds(secondTime[0], secondTime[1], secondTime[2]);

//     let difference = convertingTimeFromSeconds(Math.abs(firstTime - secondTime));
//     if (secondTime - firstTime < 0) {
//         return '-' + difference;
//     } 
//     return difference;
// }

function differenceBetweenTheTwoTimeValues (firstHours, firstMinuts, firstSeconds, secondHours, secondMinuts, secondSeconds) {
  
    if (!isFinite(+firstHours) || !isFinite(+firstMinuts) || !isFinite(+firstSeconds) ||
    !isFinite(+secondHours) || !isFinite(+secondMinuts) || !isFinite(+secondSeconds)) {
        return null;
    }
    
    firstTime = convertingTimeToSeconds(firstHours, firstMinuts, firstSeconds);
    secondTime = convertingTimeToSeconds(secondHours, secondMinuts, secondSeconds);

    let difference = convertingTimeFromSeconds(Math.abs(firstTime - secondTime));
    if (secondTime - firstTime < 0) {
        return '-' + difference;
    } 
    return difference;
}

