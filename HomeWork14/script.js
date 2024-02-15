
console.log(`Задание 1:   powerOfNumber (number, pow)

Написать функцию возведения числа в степень.

Задание 2:   commonDivisor (number1, number2)

Написать функцию поиска наибольшего общего делителя.

Задание 3:   maximumDigitInNumber (number)

Написать функцию для поиска максимальной цифры в числе.

Задание 4:   isPrimeNumber (number)

Написать функцию, которая определяет простое ли переданное число.

Задание 5:   allMultipliers (number)

Написать функцию для вывода всех множителей переданного числа в возрастающем порядке. Например: число 18 – множители 2 * 3 * 3.

Задание 6:   fibonacciNumber(number)

Написать функцию, которая возвращает число Фибоначчи по переданному порядковому номеру. Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на том, что каждое число равно сумме двух предыдущих чисел. Например: порядковый номер 3 – число 2, порядковый номер 6 – число 8.


P.S.: Функиции работают только с целыми цислами, в других случаях возвращается/выводится NaN или false.`);

function powerOfNumber (number, pow) {
    if (!Number.isInteger(number) || !Number.isInteger(pow)) {
        return NaN;
    } 

    if (pow === 0) return 1;

    if (pow >= 1) {
        if (pow === 1) {
            return number;
        } else {
            return number * powerOfNumber(number, pow - 1);
        }
    } else if (pow <= -1) {
        if (pow === -1) {
            return 1 / number;
        } else {
            return 1 / number * powerOfNumber(number, pow + 1);
        }
    } else {
        return number * pow;
    }
}


function commonDivisor (number1, number2) {
    if (!Number.isInteger(number1) || !Number.isInteger(number2)) {
        return NaN;
    } 

    let max = Math.max(number1, number2);
    let min = Math.min(number1, number2);
    
    if (max % min === 0) {
        return min;
    } else {
        return commonDivisor(min, max % min);
    }
}


function maximumDigitInNumber (number) {
    if (!Number.isInteger(number)) {
        return NaN;
    }

    let digit = number % 10;
    number = Number.parseInt(number / 10);

    function maximumDigitInNumber (number, digit) {
        if (number < 10 && number > -10) {
            return Math.max(number, digit);
        } else {
            if (digit < number % 10) {
                digit = number % 10;
            }
            return maximumDigitInNumber(Number.parseInt(number / 10), digit);
        }
    }

    return maximumDigitInNumber(number, digit);
}


function isPrimeNumber (number) {
    if (!Number.isInteger(number) || number < 1) {
        return false;
    }

    if (number === 1 || number === 2) {
        return true;
    }

    let i = 2;

    function isPrimeNumber (number, i) {
        if (i > Math.sqrt(number)) {
            return true;
        }
        if (number % i === 0) {
            return false;
        } else {
            return isPrimeNumber (number, i + 1);
        }
    }

    return isPrimeNumber(number, i);
}

function allMultipliers (number) {
    if (!Number.isInteger(number)) {
        console.log(NaN);
    }
    if (number === 0) {
        console.log(Infinity);
    }

    let i = 2;

    function allMultipliers(number, i) {
        if (number === 1 || number === -1) {
            return 1;
        } else if (number % i === 0) {
            console.log(i);
            number = number / i;
        } else {
            i++;
        }
        return allMultipliers(number, i);
    }

    allMultipliers(number, i);
}

function fibonacciNumber(number) {
    if (!Number.isInteger(number)) {
        return NaN;
    }

    if (number < 3) {
        return 1;
    } else {
        return fibonacciNumber(number - 1) + fibonacciNumber(number - 2);
    }
}