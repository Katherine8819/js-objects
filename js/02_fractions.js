(function () {
    'use strict'

    let table = document.getElementById('table');
    table.removeAttribute("hidden");

    let tbody = table.querySelector('tbody'),
        tr = ``,
        reducedFraction = 0,
        firstFr = {
            num: 5,
            denom: 8
        },
        secondFr = {
            num: 2,
            denom: 10
        },
        finalFr = {
            num: 0,
            denom: 0
        };

    for (let i = 0; i < (firstFr.denom * secondFr.denom) && finalFr.denom == 0; i++) {
        if (i % firstFr.denom == 0 && i % secondFr.denom == 0) {
            finalFr.denom = i;
        }
    }

    function addFraction() {
        if (firstFr.denom == secondFr.denom) {
            finalFr.num = firstFr.num + secondFr.num;
            finalFr.denom = firstFr.denom;
        } else {

            let firstAddNum = (finalFr.denom / firstFr.denom) * firstFr.num;
            let secondAddNum = (finalFr.denom / secondFr.denom) * secondFr.num;
            finalFr.num = firstAddNum + secondAddNum;
        }


        reducedFraction = reduceFraction(finalFr.num, finalFr.denom)

        tr = `
        <tr>
            <td>Сложение дробей</td>
            <td class="fraction"><p class="num">${finalFr.num}</p><p>${finalFr.denom}</p></td>
            <td>${reducedFraction[2]}</td>
            <td class="fraction"><p class="num">${reducedFraction[0]}</p><p>${reducedFraction[1]}</p></td>
        </tr>`;

        tbody.innerHTML = tbody.innerHTML + tr;

    }

    function substractFraction() {
        if (firstFr.denom == secondFr.denom) {
            finalFr.num = firstFr.num - secondFr.num;
            finalFr.denom = firstFr.denom;
        } else {

            let firstSubstrNum = (finalFr.denom / firstFr.denom) * firstFr.num;
            let secondSubstrNum = (finalFr.denom / secondFr.denom) * secondFr.num;
            finalFr.num = firstSubstrNum - secondSubstrNum;
        }

        reducedFraction = reduceFraction(finalFr.num, finalFr.denom)

        tr = `
        <tr>
            <td>Вычитание дробей</td>
            <td class="fraction"><p class="num">${finalFr.num}</p><p>${finalFr.denom}</p></td>
            <td>${reducedFraction[2]}</td>
            <td class="fraction"><p class="num">${reducedFraction[0]}</p><p>${reducedFraction[1]}</p></td>
        </tr>`;

        tbody.innerHTML = tbody.innerHTML + tr;
    }

    function multiplyFraction() {
        finalFr.num = firstFr.num * secondFr.num;
        if (firstFr.denom == secondFr.denom) {
            finalFr.denom = firstFr.denom;
        } else {
            finalFr.denom = firstFr.denom * secondFr.denom;
        }

        reducedFraction = reduceFraction(finalFr.num, finalFr.denom)

        tr = `
        <tr>
            <td>Умножение дробей</td>
            <td class="fraction"><p class="num">${finalFr.num}</p><p>${finalFr.denom}</p></td>
            <td>${reducedFraction[2]}</td>
            <td class="fraction"><p class="num">${reducedFraction[0]}</p><p>${reducedFraction[1]}</p></td>
        </tr>`;

        tbody.innerHTML = tbody.innerHTML + tr;
    }

    function divideFraction() {
        finalFr.num = firstFr.num * secondFr.denom;
        finalFr.denom = firstFr.denom * secondFr.num;

        reducedFraction = reduceFraction(finalFr.num, finalFr.denom);


        tr = `
        <tr>
            <td>Деление дробей</td>
            <td class="fraction"><p class="num">${finalFr.num}</p><p>${finalFr.denom}</p></td>
            <td>${reducedFraction[2]}</td>
            <td class="fraction"><p class="num">${reducedFraction[0]}</p><p>${reducedFraction[1]}</p></td>
        </tr>`;

        tbody.innerHTML = tbody.innerHTML + tr;
    }

    function reduceFraction(num, denom) {
        let greatestCommonDivisor = 0;
        for (let i = 0; i < (num * denom); i++) {
            if (num % i == 0 && denom % i == 0) {
                greatestCommonDivisor = i;
            }
        }

        num /= greatestCommonDivisor;
        denom /= greatestCommonDivisor;

        let integer = 0;

        if (num > denom) {
            integer = Math.round(num / denom);
            num = num - (denom * integer);
        }


        return [num, denom, integer]
    }

    addFraction();
    substractFraction();
    multiplyFraction();
    divideFraction();
    reduceFraction();
})();


/* Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом:

Функция сложения 2-х объектов-дробей;

Функция вычитания 2-х объектов-дробей;

Функция умножения 2-х объектов-дробей;

Функция деления 2-х объектов-дробей;

Функция сокращения объекта-дроби. */