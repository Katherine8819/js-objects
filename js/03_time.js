(function () {
    'use strict'


    function showTime() {
        let now = new Date();

        let h = now.getHours();
        h = h.toString().length == 1 ? ('0' + h) : h

        let m = now.getMinutes();
        m = m.toString().length == 1 ? ('0' + m) : m

        let s = now.getSeconds();
        s = s.toString().length == 1 ? ('0' + s) : s

        document.write(`Сейчас: ${h}:${m}:${s}</br>`);
    }

    function changeSeconds(seconds) {
        let changedSeconds = new Date();
        changedSeconds.setSeconds(changedSeconds.getSeconds() + seconds);

        let h = changedSeconds.getHours();
        h = h.toString().length == 1 ? ('0' + h) : h

        let m = changedSeconds.getMinutes();
        m = m.toString().length == 1 ? ('0' + m) : m

        let s = changedSeconds.getSeconds();
        s = s.toString().length == 1 ? ('0' + s) : s

        document.write(`Через ${seconds} сек. будет: ${h}:${m}:${s}</br>`);
    }

    function changeMinutes(minutes) {
        let changedMinutes = new Date();
        changedMinutes.setMinutes(changedMinutes.getMinutes() + minutes);

        let h = changedMinutes.getHours();
        h = h.toString().length == 1 ? ('0' + h) : h

        let m = changedMinutes.getMinutes();
        m = m.toString().length == 1 ? ('0' + m) : m

        let s = changedMinutes.getSeconds();
        s = s.toString().length == 1 ? ('0' + s) : s

        document.write(`Через ${minutes} мин. будет: ${h}:${m}:${s}</br>`);
    }
    function changeHours(hours) {
        let changedHours = new Date();
        changedHours.setHours(changedHours.getHours() + hours);

        let h = changedHours.getHours();
        h = h.toString().length == 1 ? ('0' + h) : h

        let m = changedHours.getMinutes();
        m = m.toString().length == 1 ? ('0' + m) : m

        let s = changedHours.getSeconds();
        s = s.toString().length == 1 ? ('0' + s) : s

        document.write(`Через ${hours} ч. будет: ${h}:${m}:${s}`);
    }

    showTime()
    changeSeconds(60)
    changeMinutes(10)
    changeHours(2)
})();


/* Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:

Функция вывода времени на экран;

Функция изменения времени на переданное количество секунд;

Функция изменения времени на переданное количество минут;

Функция изменения времени на переданное количество часов.

Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75». */