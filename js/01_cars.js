(function () {
    'use strict'

    let car = {
        manufacturer: 'BMW',
        model: "X1",
        year: 2018,
        averageSpeed: 120
    }

    function getCarDescription(car) {
        document.write(`Производитель: ${car.manufacturer} <br \/> 
                        Модель: ${car.model} <br \/> 
                        Год выпуска: ${car.year} <br \/>
                        Средняя скорость: ${car.averageSpeed} км/час <br \/>`)
    }

    getCarDescription(car);

    function countTime(distance) {

        let time = Math.floor(60 * (distance / car.averageSpeed));

        if (time >= 60) {
            let hours = Math.floor(time / 60);
            let minutes = time - (hours * 60);

            let fourthHour = 0;

            for (let i = 4; i <= hours; i += 4) {
                fourthHour++
            }
            console.log(fourthHour);

            let hoursWithRest = hours + fourthHour
            if (hours >= 4) {
                document.write(`<p style="font-weight: 700">Для преодоления ${distance} км 
                                        потребуется ${hoursWithRest} ч. ${minutes} мин., с учетом ${fourthHour} ч. отдыха.</p>`)

            } else {
                document.write(`<p style="font-weight: 700">Для преодоления ${distance} км потребуется ${hours} ч. ${minutes} мин.</p>`)
            }

        } else {
            document.write(`<p style="font-weight: 700">Для преодоления ${distance} км потребуется ${time} мин.</p>`)
        }
    }
    countTime(2000);
})();



/* Создать объект, описывающий автомобиль(производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

Функция для вывода на экран информации об автомобиле;

Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час. */