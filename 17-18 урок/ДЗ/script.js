
let but_one = document.querySelector('.but_one');
but_one.onclick = function(){
    let number = prompt("Введите число");
    alert(`${number}^2 = ${number ** 2}`);
};

let but_two = document.querySelector('.but_two');
but_two.onclick = function(){
    let number_1 = Number(prompt("Введите число №1"));
    let number_2 = Number(prompt("Введите число №2"));
    alert(`Среднее арифметическое = ${(number_1+number_2)/2}`);
};

let but_three = document.querySelector('.but_three');
but_three.onclick = function(){
    let number_3 = prompt("Укажите длину стороный квадрата в СМ");
    alert(`Площадь квадрата = ${number_3 ** 2} см^2`);
};

let but_four = document.querySelector('.but_four');
but_four.onclick = function(){
    let number_4 = (prompt("Введите значение в километрах:"));
    const ml = 0.621371;
    alert(`Значение в милях = ${number_4*ml}`);
};

let but_five = document.querySelector('.but_five');
but_five.onclick = function(){
    let number_5 = Number(prompt("Введите число №1"));
    let number_6 = Number(prompt("Введите число №2"));
    alert(`
        ${number_5} + ${number_6} = ${number_5+number_6}
        ${number_5} - ${number_6} = ${number_5-number_6}
        ${number_5} * ${number_6} = ${number_5*number_6}
        ${number_5} / ${number_6} = ${number_5/number_6}`
    );
};

let but_six = document.querySelector('.but_six');
but_six.onclick = function(){
    let number_7 = Number(prompt("Введите значение a"));
    let number_8 = Number(prompt("Введите значение b"));
    alert(
        `
        a * x + b = 0
        a * x = -b
        x = -b / a
        Если a = ${number_7} а b = ${number_8} то x = ${-number_8/number_7}`
    )
};

let but_seven = document.querySelector('.but_seven');
but_seven.onclick = function(){
    let hours = Number(prompt("Часы:"));
    let minutes = Number(prompt("Минуты:"));
    let minutesInDay = 1440;
    let currentTimeInMinutes = hours*60 + minutes;
    let delta = minutesInDay - currentTimeInMinutes;
    alert(`До следующего дня осталось ${Math.trunc(delta/60)} ч. ${delta%60} мин.`);
};

let but_eight = document.querySelector('.but_eight');
but_eight.onclick = function(){
    let a = +prompt('введите 3-х значное число');
    // let b = Math.floor(a/100);
    if(a>=100 && a<=999){
        let b = a % 100;
        let c = Math.floor(b / 10);
        alert(`Вторая цифра - ${c}`);
    }
    else {
        alert(`Ошибка: число не 3-х значное`);
    };
};

let but_nine = document.querySelector('.but_nine');
but_nine.onclick = function(){
    let number_9 = +prompt('Введите 5-ти значное число: ');
    if(number_9>=10000 && number_9<=99999){
        let a = Number(number_9 % 10); //5
        let b = Number((number_9 - a) / 10 % 10000);
        alert(`Последняя цифра от числа теперь в начале: ${a*10000+b} `);
    }
    else{
        alert(`Ошибка: число не 5-ти значное`)
    }
};

let but_ten = document.querySelector('.but_ten')
but_ten.onclick = function(){
    let y = Number(250);
    let x = prompt('введите сумму продаж за месяц: ');
    alert(`Ваша зарплата в этом месяце: ${y + 0.1 * x}$`)
};