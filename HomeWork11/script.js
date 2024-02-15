// Task1

console.log('Задание 1: Запросите у пользователя его возраст и определите, кем он является: ребенком, подростком, взрослым или пенсионером');
alert('Задание 1: Запросите у пользователя его возраст и определите, кем он является: ребенком, подростком, взрослым или пенсионером');
let age;
while (true) {
    age = prompt('Сколько вам лет?', 25);
    if ((age !== null) && !(isNaN(+age)) && (age !== '')) {
        break;
    }

    alert('Вы не ввели сколько вам лет или ввели его не числом');
}

let wordAge;

if ((age[age.length -1] > 0) && (age[age.length -1] < 5) && !((age > 10) && (age < 20))) {
    wordAge = 'год';
} else {
    wordAge = 'лет';
}

if (age < 12) {
    console.log(`Вам ${age} ${wordAge}. Вы ребенок`);
} else if (age >= 12 && age < 18) {
    console.log(`Вам ${age} ${wordAge}. Вы подросток`);
} else if (age >= 18 && age < 60) {
    console.log(`Вам ${age} ${wordAge}. Вы взрослый`);
} else {
    console.log(`Вам ${age} ${wordAge}. Вы пенсионер`);
}

console.log('');

// // Task 2

console.log('Задание 2: Запросите у пользователя число от 0 до 9 и выведите ему спецсимвол, который расположен на этой клавише');
alert('Задание 2: Запросите у пользователя число от 0 до 9 и выведите ему спецсимвол, который расположен на этой клавише');

let number;

while (true) {
    number = prompt('Введите число от 0 до 9', 5);
    if ((number !== null) && !(isNaN(+number)) && (number !== '')) {
        if (number > 9 || number < 0) {
            alert('Вы ввели число не от 0 до 9.');
            continue;
        }
        number = +number;
        break;
    }

    alert('Вы не ввели число. Пожалуйста, введите его');
}

let specialCharacter;

switch (number) {
    case 1: specialCharacter = '!';
            break;
    case 2: specialCharacter = '@';
            break;
    case 3: specialCharacter = '#';
            break;
    case 4: specialCharacter = '$';
            break;
    case 5: specialCharacter = '%';
            break;
    case 6: specialCharacter = '^';
            break;
    case 7: specialCharacter = '&';
            break;
    case 8: specialCharacter = '*';
            break;
    case 9: specialCharacter = '(';
            break;
    case 0: specialCharacter = ')';
            break;
}

console.log(`Вы ввели ${number}`);
console.log(`Спецвимвол: ${specialCharacter}`);

console.log('');

//Task 3

console.log('Задание 3: Запросите у пользователя трехзначное число и проверьте, есть ли в нем одинаковые цифры');
alert('Задание 3: Запросите у пользователя трехзначное число и проверьте, есть ли в нем одинаковые цифры');

let threeDigitNumber;

while (true) {
    threeDigitNumber = prompt('Введите трехзначное число', 555);
    if ((threeDigitNumber !== null) && !(isNaN(+threeDigitNumber)) && (threeDigitNumber !== '')) {
        if (threeDigitNumber > 999 || threeDigitNumber < 100) {
            alert('Вы ввели не трехзначное число');
            continue;
        }
        threeDigitNumber = +threeDigitNumber;
        break;
    }

    alert('Вы не ввели число. Пожалуйста, введите его');
}

let firstDigit = Number.parseInt(threeDigitNumber / 100);
let secondDigit = Number.parseInt(threeDigitNumber / 10) % 10;
let thirdDigit = threeDigitNumber % 10;

if ((firstDigit === secondDigit) || 
    (firstDigit === thirdDigit) || 
    (secondDigit === thirdDigit)) {
    console.log(`В числе ${threeDigitNumber} есть одинаковые цифры`);
} else {
    console.log(`В числе ${threeDigitNumber} нет одинаковых цифр`);
}

console.log('');

// Task 4

console.log('Задание 4: Запросите у пользователя год и проверьте, високосный он или нет');
alert('Задание 4: Запросите у пользователя год и проверьте, високосный он или нет');

let enteredYear;

while (true) {
    enteredYear = prompt('Введите год', 1985);
    if ((enteredYear !== null) && !(isNaN(+enteredYear)) && (enteredYear !== '')) {
        enteredYear = +enteredYear;
        break;
    }

    alert('Вы не ввели год или ввели его не числом');
}

if ((enteredYear % 400 === 0) || (enteredYear % 4 == 0 && enteredYear % 100 !== 0)) {
    console.log(`${enteredYear} год является високосным`);
} else {
    console.log(`${enteredYear} год не является високосным`);
}

console.log('');

// Task 5 

console.log('Задание 5: Запросите у пользователя пятиразраядное число и определите, является ли оно палиндромом');
alert('Задание 5: Запросите у пользователя пятиразраядное число и определите, является ли оно палиндромом');

let fiveDigitNumber;

while (true) {
    fiveDigitNumber = prompt('Введите пятиразрядное число', 45654);
    if ((fiveDigitNumber !== null) && !(isNaN(+fiveDigitNumber)) && (fiveDigitNumber !== '')) {
        if (fiveDigitNumber > 99999 || fiveDigitNumber < 10000) {
            alert('Вы ввели не пятиразрядное число');
            continue;
        }
        fiveDigitNumber = +fiveDigitNumber;
        break;
    }

    alert('Вы не ввели число');
}

let firstNumbers = Number.parseInt(fiveDigitNumber / 1000);
let lastNumbers = fiveDigitNumber % 100;

if ((Number.parseInt(firstNumbers / 10) === lastNumbers % 10) && 
    firstNumbers % 10 === Number.parseInt(lastNumbers / 10)) {
    console.log(`Число ${fiveDigitNumber} является палиндромом`);
} else {
    console.log(`Число ${fiveDigitNumber} не является палиндромом`);
}

console.log('');

// Task 6

console.log('Задание 6: Напишите конвертор валют');
alert('Задание 6: Напишите конвертор валют');

let dollars;
const currentEUR = 0.92115;
const currentUAN = 6.79;
const currentAZN = 1.7;

while (true) {
    dollars = prompt('Сколько долларов вы хотите поменять', 1000);
    if ((dollars !== null) && !(isNaN(+dollars)) && (dollars !== '')) {
        dollars = +dollars;
        break;
    }

    alert('Вы не ввели доллары или ввели их не числом');
}

let currency = prompt('Введите заглавнями буквами в какую валюты вы хотите перевести: EUR, UAN или AZN', 'EUR');
let yourMoney

switch (currency) {
    case 'EUR': 
        yourMoney = dollars * currentEUR;
        break;
    case 'UAN':
        yourMoney = dollars * currentUAN;
        break;
    case 'AZN':
        yourMoney = dollars * currentAZN;
        break;
    default:
        console.log(`Мы не умее переводить в указаную(${currency}) валюту`);
}
console.log(`${dollars} USD = ${yourMoney} ${currency}`);

console.log('');

// Task 7

console.log('Задание 7: Запросите у пользователя сумму покупки и выведите сумму к оплате со скидкой');
alert('Задание 7: Запросите у пользователя сумму покупки и выведите сумму к оплате со скидкой');

let purchaseAmount;
let discount;

while (true) {
    purchaseAmount = prompt('Введите сумму покупки числом', 350);
    if ((purchaseAmount !== null) && !(isNaN(+purchaseAmount)) && (purchaseAmount !== '')) {
        purchaseAmount = +purchaseAmount;
        break;
    }

    alert('Вы не ввели сумму покупки или ввели ее не числом');
}

if (purchaseAmount >= 200 && purchaseAmount < 300) {
    discount = 0.03;
} else if (purchaseAmount >= 300 && purchaseAmount < 500) {
    discount = 0.05;
} else if (purchaseAmount >= 500) {
    discount = 0.07;
} else {
    discount = 0;
}

console.log(`Ваша сумма покупки составляет ${purchaseAmount}. 
Ваша скидка: ${+discount > 0 ? (discount*100).toFixed(0) + ' %' : 'к сожалеию, у вас нет скидки'}.
Сумма к оплате: ${purchaseAmount - purchaseAmount * discount}.`);

console.log('');

// Task 8

console.log('Задание 8: Запросите у пользователя длину окружности и периметр квадрата. Определите, может ли такая окружность поместиться в указанный квадрат');
alert('Задание 8: Запросите у пользователя длину окружности и периметр квадрата. Определите, может ли такая окружность поместиться в указанный квадрат');

let circumference;
let perimeterOfTheSquare;
const PI = 3.14159265;

while (true) {
    circumference = prompt('Введите длину окружности', 100);
    if ((circumference !== null) && 
    !(isNaN(+circumference)) && 
    (circumference !== '')) {
        circumference = +circumference;
        break;
    }

    alert('Вы не ввели сумму покупки или ввели ее не числом');
}

while (true) {
    perimeterOfTheSquare = prompt('Введите длину окружности', 200);
    if ((perimeterOfTheSquare !== null) && 
    !(isNaN(+perimeterOfTheSquare)) && 
    (perimeterOfTheSquare !== '')) {
        perimeterOfTheSquare = +perimeterOfTheSquare;
        break;
    }

    alert('Вы не ввели сумму покупки или ввели ее не числом');
}

if (circumference / PI <= perimeterOfTheSquare / 4) {
    console.log(`Окружность длинной ${circumference} может поместиться в квадрат с периметром ${perimeterOfTheSquare}`);
} else {
    console.log(`Окружность длинной ${circumference} не может поместиться в квадрат с периметром ${perimeterOfTheSquare}`);
}

console.log('');

// Task 9

console.log('Заданине 9: Задайте пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После выведите количество набранных баллов');
alert('Заданине 9: Задайте пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После выведите количество набранных баллов');

let firstAnswer = prompt(`Какой тег считается строчным? (В ответе укажите номер ответа(1, 2 или 3))
1) <header>
2) <form>
3) <input>`);

let secondAnswer = prompt(`Сколько типов данных в JavaScript? (В ответе укажите номер ответа(1, 2 или 3))
1) 7
2) 8
3) 9`);

let thirdAnswer = prompt(`Во что преобразуется данное выражение: !NaN? (В ответе укажите номер ответа(1, 2 или 3))
1) false
2) 0
3) true`);

let points = 0;
let count = 0;

if (+firstAnswer === 3) {
    points += 2;
    count++;
}
if (+secondAnswer === 2) {
    points += 2;
    count++;
}
if (+thirdAnswer == 3) {
    points += 2;
    count++;
}

console.log(`Количество правильных ответов: ${count} из 3.
Количество набранных вами баллов: ${points}`);

console.log('');

// Task 10 

console.log('Задание 10: Запросите дату и выведите следующую за ней дату');
alert('Задание 10: Запросите дату и выведите следующую за ней дату');

let day;
let month;
let year;

while (true) {
    day = prompt('Введите день месяца', 20);
    if ((day !== null) && 
    !(isNaN(+day)) && 
    (day !== '')) {
        if (day <=0 || day > 31) {
            alert('Введите день в диапазоне от 1 до 31');
            continue;
        }
        day = +day;
        break;
    }

    alert('Вы не ввели день или введи его не числом');
}
while (true) {
    month = prompt('Введите месяц (числом)', 10);
    if ((month !== null) && 
    !(isNaN(+month)) && 
    (month !== '')) {
        if (month <= 0 || month > 12) {
            alert('В году 12 месяцев. Введите число от 1 до 12');
            continue;
        }
        month = +month;
        break;
    }

    alert('Вы не ввели месяц или ввели его не числом');
}
while (true) {
    year = prompt('Введите год', 1996);
    if ((year !== null) && 
    !(isNaN(+year)) && 
    (year !== '')) {
        year = +year;
        break;
    }

    alert('Вы не ввели год или ввели его не числом');
}

let nextDay = day;
let nextMonth = month;
let nextYear = year;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
        if (day === 31) {
            nextDay = 1;
            nextMonth++;
        } else {
            nextDay++;
        }
        console.log(`За ${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year} следует ${nextDay < 10 ? '0' + nextDay : nextDay}.${nextMonth < 10 ? '0' + nextMonth : nextMonth}.${nextYear}`);
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        if (day === 30) {
            nextDay = 1;
            nextMonth++;
        } else if (day > 30) {
            console.log(`Даты ${day}.${month < 10 ? '0' + month : month}.${year} не существует`);
            break;
        } else {
            nextDay++;
        }
        console.log(`За ${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year} следует ${nextDay < 10 ? '0' + nextDay : nextDay}.${nextMonth < 10 ? '0' + nextMonth : nextMonth}.${nextYear}`);
        break;
    case 2:
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
            if (day === 29) {
                nextDay = 1;
                nextMonth++;
            } else if (day > 29) {
                console.log(`Даты ${day}.${month < 10 ? '0' + month : month}.${year} не существует.`);
                break;
            } else {
                nextDay++;
            }
        } else {
            if (day === 28) {
                nextDay = 1;
                nextMonth++;
            } else if (day > 28) {
                console.log(`Даты ${day}.${month < 10 ? '0' + month : month}.${year} не существует. Год ${year} не является високосным`);
                break;
            } else {
                nextDay++;
            }
        }
        console.log(`За ${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year} следует ${nextDay < 10 ? '0' + nextDay : nextDay}.${nextMonth < 10 ? '0' + nextMonth : nextMonth}.${nextYear}`);
        break;
    case 12:
        if (day === 31) {
            nextDay = 1;
            nextMonth = 1;
            nextYear++;
        } else {
            nextDay++;
        }
        console.log(`За ${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year} следует ${nextDay < 10 ? '0' + nextDay : nextDay}.${nextMonth < 10 ? '0' + nextMonth : nextMonth}.${nextYear}`);
}



