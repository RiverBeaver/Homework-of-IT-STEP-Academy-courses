// // Task 1

console.log('Задание 1: Подсчитайте сумму всех чисел в заданном пользователем диапазоне.');

let beginningRange;
let endRange;

while (true) {
    beginningRange = prompt('Задание 1: Введните целым числом начало или конец диапазона', 0);
    endRange = prompt('Введите целым числом начало или конец диапазона', 999);

    if (beginningRange !== null && beginningRange !== '' && Number.isFinite(+beginningRange) && (beginningRange % 1 === 0) &&
    (endRange % 1 === 0) && endRange != null && endRange != '' && Number.isFinite(+endRange)) {
        beginningRange = +beginningRange;
        endRange = +endRange;
        break;
    }

    alert('Вы не ввели диапазон или ввели его не целыми числами');
}
let summ = 0;

if (beginningRange < endRange) {
    for(let i = beginningRange; i <= endRange; i++) {
        summ += i;
    }
    console.log(`Сумма чисел от ${beginningRange} до ${endRange} равна ${summ}`);
} else {
    for(let i = endRange; i <= beginningRange; i++) {
        summ += i;
    }
    console.log(`Сумма чисел от ${endRange} до ${beginningRange} равна ${summ}`);
}
console.log('');


// // Task 2

console.log('Задание 2: Запросите 2 числа и найдите только наибольший общий делитель.');

let firstNumber;
let secondNumber;

while(true) {
    firstNumber = prompt('Задание 2: Введите первое целое число');
    if (firstNumber !== null && firstNumber !== '' && Number.isFinite(+firstNumber) && (firstNumber % 1 === 0)) {
        firstNumber = +firstNumber;
        break;
    }

    alert('Вы не ввели число или ввели его не целым числом');
}

while(true) {
    secondNumber = prompt('Введите второе целое число');
    if (secondNumber !== null && secondNumber !== '' && Number.isFinite(+secondNumber) && (secondNumber % 1 === 0)) {
        secondNumber = +secondNumber;
        break;
    }

    alert('Вы не ввели число или ввели его не целым числом');
}

let maxDivider = 1;
if (Math.abs(firstNumber) > Math.abs(secondNumber)) {
    if (firstNumber % secondNumber === 0) {
        maxDivider = secondNumber;
    } else {
        for(let i = 2; i < Math.abs(secondNumber) / 2; i++) {
            if (firstNumber % (secondNumber / i) === 0) {
                maxDivider = Math.abs(secondNumber) / i;
                break;
            }
        }
    }
} else {
    if (secondNumber % firstNumber === 0) {
        maxDivider = firstNumber;
    } else {
        for(let i = 2; i < Math.abs(firstNumber) / 2; i++) {
            if (secondNumber % (firstNumber / i) === 0) {
                maxDivider = Math.abs(firstNumber) / i;
                break;
            }
        }
    }
}

console.log(`Максимальный делитель чисел ${firstNumber} и ${secondNumber} равен ${Math.abs(maxDivider)}`);

console.log('');


// // Task 3

console.log('Задание 3: Запросите у пользователя число и выведите все делители этого числа.');

let number;

while(true) {
    number = prompt('Задание 3: Введите целое число', 1234);
    if (number !== null && number !== '' && Number.isFinite(+number) && (number % 1 === 0)) {
        number = +number;
        console.log(`Введеное число: ${number}`)
        break;
    }

    alert('Вы не ввели число или ввели его не целым числом');
}

let interimNumber = Math.abs(number);

console.log(1);

for(let i = 2; i <= interimNumber;) {
    if (interimNumber % i === 0) {
        console.log(i);
        interimNumber /= i;
    } else {
        i++;
    }
}

console.log('');


// // Task 4 

console.log('Задание 4: Определите количество цифр в введенном числе.');

let enteredNumber;

while(true) {
    enteredNumber = prompt('Задание 4: Введите число', -12345.6789);
    if (enteredNumber !== null && enteredNumber !== '' && Number.isFinite(+enteredNumber)) {
        break;
    }

    alert('Вы не ввели число или ввели его не цифрами');
}

let numberLength = enteredNumber.length;

if (enteredNumber.indexOf('-') !== -1) {
    numberLength--;
}

if (enteredNumber.indexOf !== -1) {
    numberLength--;
}

console.log(`Количество цифр в числе ${enteredNumber} равно ${numberLength}`);
console.log('');


// // Task 5

console.log('Задание 5: Запросите у пользователя 10 чисел и подсчитайте,сколько он ввел положительных, отрицательных, нулей, четных и нечетных.');

alert('Задание 5: введите 10 чисел');

const arrayNumber = [];
let positive = 0;
let negative = 0;
let zero = 0;
let even = 0;
let odd = 0;

for(let count = 0; count < 10;) {
    const enteredNumber = prompt('Введите целое число', 0);
    if (enteredNumber !== null && enteredNumber !== '' && Number.isFinite(+enteredNumber) && (enteredNumber % 1 === 0)) {

        arrayNumber[arrayNumber.length] = enteredNumber;

        if (enteredNumber > 0) positive++;
        else if (enteredNumber < 0) negative++;
        else zero++;

        if (enteredNumber % 2 === 0 ) even++;
        else odd++;

        count++;
        continue;
    }

    alert('Вы не ввели число или ввели его не целым числом');
}

console.log(`Вы ввели: ${arrayNumber.join(', ')}`);
console.log(`Среди них ${positive} положительных, ${negative} отрицательных, ${zero} ${zero > 1 && zero < 5 ? 'нуля' : zero === 1 ? 'ноль' : 'нулей'}, ${even} четных и ${odd} нечетных`);

console.log('');


// // Task 6 

console.log('Задание 6: Зациклите калькулятор. Запросите у пользователя 2 числа и знак, решите пример, выведите результат и спросите, хочет ли он решить еще один пример.');
alert('Задание 6: Калькулятор');

while(true) {
    let firstNumber;
    let secondNumber;

    while (true) {
        firstNumber = prompt('Введите первое число', 15);
        if (firstNumber !== null && firstNumber !== '' && Number.isFinite(+firstNumber)) {
            firstNumber = +firstNumber;
            break;
        }

        alert('Вы не ввели число или ввели его не цифрами');
    }

    while (true) {
        secondNumber = prompt('Введите второе число', 5);
        if (secondNumber !== null && secondNumber !== '' && Number.isFinite(+secondNumber)) {
            secondNumber = +secondNumber;
            break;
        }

        alert('Вы не ввели число или ввели его не цифрами');
    }

    const mathematicalSymbol = prompt('Введите знак (+, -, *, /, pow, корень)', '+');

    switch(mathematicalSymbol) {
        case '+':
            console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
            break;
        case '-':
            console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
            break;
        case '*':
            console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
            break;
        case '/':
            console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
            break;
        case 'pow':
            console.log(`${firstNumber} в степени ${secondNumber} = ${firstNumber ** secondNumber}`);
            break;
        case 'корень':
            console.log(`Корень ${secondNumber} степени из числа ${firstNumber} = ${firstNumber ** (1 / secondNumber)}`);
            break;
        default: 
            console.log('Вы ввели не существующий знак');
    }

    if (!confirm('Желаете продолжить?')) {
        break;
    }
}

console.log('');


// // Task 7

console.log('Задание 7: Запросите у пользователя число и на сколько цифр его сдвинуть. Сдвиньте цифры числа и выведите результат.');

let enteredNumberToShift;
let shiftNumber;

while(true) {
    enteredNumberToShift = prompt('Задание 7: Введите число которое нужно сдвинуть', -12345.6789);
    if (enteredNumberToShift !== null && enteredNumberToShift !== '' && Number.isFinite(+enteredNumberToShift)) {
        break;
    }

    alert('Вы не ввели число или ввели его не цифрами');
}

while(true) {
    shiftNumber = prompt(`На сколько знаков вы хотите сдвинуть число ${enteredNumberToShift}`, 5);
    if (shiftNumber !== null && shiftNumber !== '' && Number.isFinite(+shiftNumber) && (shiftNumber % 1 === 0)) {
        if (shiftNumber < 0) {
            alert('Пожалуйста, введите положительное число');
            continue;
        }
        break;
    }

    alert('Вы не ввели число или ввели его не целым числом');
}

let result = '';
let shiftCount = +shiftNumber;
let numberOfDigits = enteredNumberToShift.length;
let beginning = 0;


enteredNumberToShift.indexOf('-') !== -1 ? 
(numberOfDigits--, shiftCount++ , beginning++) : 0;

enteredNumberToShift % 1 !== 0 ? numberOfDigits-- : 0;

if (shiftNumber > numberOfDigits) {        
    while(shiftCount > numberOfDigits) {
        shiftCount -= numberOfDigits;
    }
}

enteredNumberToShift.indexOf('-') !== -1 ?
    result += enteredNumberToShift[0] : 0;


if (enteredNumberToShift % 1 === 0) {
    
        for(let i = shiftCount; i < enteredNumberToShift.length; i++) {
            result += enteredNumberToShift[i];
        }
        
        for(; beginning < shiftCount; beginning++) {
            result += enteredNumberToShift[beginning];
        }

} else {

    let dotsIndex = enteredNumberToShift.indexOf('.');

    shiftCount > dotsIndex ? shiftCount++ : 0;

    for(let i = shiftCount; i < enteredNumberToShift.length; i++) {
        if (result.length === dotsIndex) {
            result += '.';
        }
        if (dotsIndex === i) {
            i++;
        }
        result += enteredNumberToShift[i];
    }

    for(; beginning < shiftCount; beginning++) {
        if (result.length === dotsIndex) {
            result += '.';
        }
        if (dotsIndex === beginning) {
            i++;
        }
        result += enteredNumberToShift[beginning];
    }
}
console.log(`Число ${enteredNumberToShift} смещеное на ${shiftNumber} знака равно ${result}`);

console.log('');


// // Task 8

console.log('Задание 8: Зациклите вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.');
alert('Задание 8');

const weekday = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let currentDay = 0;

console.log(`${weekday[currentDay]}. Хотите увидеть следующий день?`);

while(confirm(`${weekday[currentDay]}. Хотите увидеть следующий день?`)) {
    currentDay++;
    if (currentDay === weekday.length) {
        currentDay = 0;
    }

    console.log(`${weekday[currentDay]}. Хотите увидеть следующий день?`);
}

console.log('');


// // Task 9

console.log('Задание 9: Выведите таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.');

for (let i = 2; i < 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log('');
}

console.log('');


// // Task 10

console.log('Задание 10: Игра «Угадай число». Предложите пользователю загадать число от 0 до 100 и отгадайте его используя бинарный поиск.');

let guessNumber;
let low = 0;
let high = 100;
let middle;

// while(true) {
//     guessNumber = prompt('Задание 10: Загадайте число', 11);
//     if (guessNumber !== null && guessNumber !== '' && Number.isFinite(+guessNumber) && (guessNumber % 1 === 0)) {
//         if (guessNumber < 0 || guessNumber > 100) {
//             alert('Пожалуйста, введите число от 1 до 100');
//             continue;
//         }
//         guessNumber = +guessNumber;
//         break;
//     }

//     alert('Вы не ввели число или ввели его не целым числом');
// }

// while((middle = Math.round((low + high) / 2)) != guessNumber) {
//     if (guessNumber > middle) {
//         low = middle + 1;
//     } else {
//         high = middle - 1;
//     }
// }

while (low <= high) {
    middle = Math.round((high + low) / 2);
    guessNumber = prompt(`Загадайте число!
    1: Ваше число > ${middle}
    2: Ваше число = ${middle}
    3: Ваше число < ${middle}`);
    if (+guessNumber === 1) {
        low = middle + 1;
    } else if (+guessNumber === 3) {
        high = middle - 1;
    } else if (+guessNumber === 2) {
        console.log(`Вы загадали число ${middle}`);
        break;
    } else {
        console.log('Error');
        break;
    }
}

