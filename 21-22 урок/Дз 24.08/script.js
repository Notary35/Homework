
    /************1************/

    let but_one = document.querySelector('.but_one');
    but_one.onclick = function(){
        let old = prompt("Сколько вам лет?");
        if(old>=0 && old<=11){
            alert('Пользователь ребёнок');
        }
        else if(old>=12 && old<=18){
            alert('Пользователь подросток');
        }
        else if(old>=19 && old<=60){
            alert('Пользователь взрослый');
        }
        else {
            alert('Пользователь пенсионер')
        }
    }

    /************2************/

    let but_two = document.querySelector('.but_two');
    but_two.onclick = function(){
        let number = +prompt("Введите число от 0 до 9");
        switch(number) {
            case 1: alert('!'); break;
            case 2: alert('@'); break;            
            case 3: alert('#'); break;            
            case 4: alert('$'); break;            
            case 5: alert('%'); break;            
            case 6: alert('^'); break;           
            case 7: alert('&'); break;           
            case 8: alert('*'); break;           
            case 9: alert('('); break;
            case 0: alert(')'); break;
            default: alert('Не верно!'); break;
        }
    }

    // // /****************3***************/

    let but_three = document.querySelector('.but_three');
    but_three.onclick = function(){
        let num = +prompt("Введите трёхзначное число:");
        let x = Math.floor(num / 10);
        let a = Math.floor(x / 10);
        let b = x % 10;
        let c = num % 10;
        if(num>=100 && num<=999){
            if (a == b || a == c || b == c) {
                alert(`В числе ${num} обнаружены одинаковые цифры`);
            } 
            else {
                alert (`Одинаковых цифр в числе ${num} не обнаружено`);
            }
        }
        else {
            alert(`Число ${num} не трёхзначное`);
        }
    }

    // /**************4****************/

    let but_four = document.querySelector('.but_four');
    but_four.onclick = function(){
        let year = +prompt("Введите год");
        if(year % 4 == 0 && year % 100 || year % 400 == 0) {
            alert (`${year} високосный год`);
        }
        else{
            alert(`${year} не високосный год`);
        }
    }

    // /******************5****************/

    let but_five = document.querySelector('.but_five');
    but_five.onclick = function(){
        let num5 = +prompt("Введите пятизначное число");
        let a = Math.floor(num5 / 10000);
        let b = Math.floor(num5 % 10000 / 1000);
        let c = Math.floor(num5 % 1000 / 100);
        let d = Math.floor(num5 % 100 / 10);
        let e = num5 % 10;
        if (num5 >= 10000 && num5<=99999){
            if (a == e && b == d) {
                alert(`Число ${num5} палиндром`);
            }
            else {
                alert(`Число ${num5} не палиндром`);
            }
        }
        else {
            alert(`Число ${num5} не пятизначное!`)
        }
    }

    // /****************6***************/

    let but_six = document.querySelector('.but_six');
    but_six.onclick = function(){
        const EUR = 0.91;
        const UAH = 41.21;
        const AZN = 1.7;
        let cash = +prompt("Сколько у вас $?");
        let value = +prompt("Выберете валюту: 1 - EUR 2 - UAH 3 - AZN");
        switch(value) {
            case 1: alert(`У вас ${cash * EUR} EUR`); break;
            case 2: alert(`У вас ${cash * UAH} UAH`); break;            
            case 3: alert(`У вас ${cash * AZN} AZN`); break;
        }
    }

    // /******************7*****************/

    let but_seven = document.querySelector('.but_seven');
    but_seven.onclick = function(){
        let sum = +prompt("Введите сумму покупки ₽");
        if (sum >= 200 && sum <= 300){
            alert(`Сумма покупки со скидкой 3% = ${sum - sum * 0.03}₽`)
        }
        else if (sum > 300 && sum <= 500){
            alert(`Сумма покупки со скидкой 5% = ${sum - sum * 0.05}₽`)
        }
        else if (sum > 500){
            alert(`Сумма покупки со скидкой 7% = ${sum - sum * 0.07}₽`)
        }
        else {
            alert(`Для получения скидки купите больше продукции`)
        }
    }

    // /****************8***************/

    let but_eight = document.querySelector('.but_eight');
    but_eight.onclick = function(){
        let L = +prompt("Укажите длину окружности в см");
        let P = +prompt("Укажите периметр квадрата в см");
        const π = 3.14;
        let r = L / (2 * π);
        let d = 2 * r;
        let a = P / 4;
        if (d <= a){
            alert(`Данная окружность поместиться в указанный квадрат`);
        }
        else{
            alert(`Данная окружность НЕ поместиться в указанный квадрат`);
        }

    }

    // /*****************9******************/
    let but_nine = document.querySelector('.but_nine');
    but_nine.onclick = function(){
        var score = 0;
        let answer1 = +prompt("Столица португалии:\n1) Никосия\n2) Тегеран\n3) Лиссабон");
        if (answer1 == 3){
            alert( `Верно`);
            score = score + 2;
        }
        else{
            alert( `Не верно`)
        }
        let answer2 = +prompt("Основатель Рима:\n1) Ромул и Рем\n2) Юлий Цезарь\n3) Октавиан Август");
        if(answer2 == 1){
            alert( `Верно`);
            score = score + 2;
        }
        else{
            alert( `Не верно`)
        }
        let answer3 = +prompt("Первый кругосветный мореплаватель:\n1) Васко да Гама\n2) Фернан Магеллан\n3) Христофор Колумб");
        if(answer3 == 2) {
            alert( `Верно`);
            score = score + 2;
        }
        else{
            alert( `Не верно`)
        }
        alert(`Вы набрали ${score} баллов из 6!`)
    }

    // /*************10****************/
    let but_ten = document.querySelector('.but_ten');
    but_ten.onclick = function(){
        var date = Math.abs(
            Math.floor(Number(prompt("Введите число месяца от 1 до 31: ")))
        );
        
        var month = Math.abs(
            Math.floor(Number(prompt("Введите порядковый номер месяца от 1 до 12: ")))
        );
        
        var year = Math.floor(Number(prompt("Введите год: ")));
        
        if (date < 1 || date > 31 || month < 1 || month > 12) {
            date = 1;
            month = 1;
            alert(
            "ERROR 404"
            );
        }
        
        if ((month < 10) & (date < 10)) {
            alert(
            `Вы запросили дату 0${date}.0${month}.${year}`
            );
        } else if ((month > 9) & (date < 10)) {
            alert(
            `Вы запросили дату 0${date}.${month}.${year},`
            );
        } else if ((month < 10) & (date > 9)) {
            alert(
            `Вы запросили дату ${date}.0${month}.${year}`
            );
        } else {
            alert(
            `Вы запросили дату ${date}.${month}.${year}`
            );
        }
        
        var leap_year = Number(0);
        
        if ((year % 4 == 0) & (year % 100 != 0) || year % 400 == 0) {
            leap_year = 1;
            alert("Введенный вами год является високосным по григорианскому календарю");
        }
        
        var new_date = date; 
        
        var new_month = month;
        
        var new_year = year;
        
        new_date += 1;
        
        if ((new_date > 30) & (month == 4 || month == 6 || month == 9 || month == 11)) {
            new_date = 1;
            new_month += 1;
        } 
        
        if (
            (new_date > 31) &
            (month == 1 ||
            month == 3 ||
            month == 5 ||
            month == 7 ||
            month == 8 ||
            month == 10)
        ) {
            new_date = 1;
            new_month += 1;
        } 
        
        if ((new_date > 31) & (month == 12)) {
            new_date = 1;
            new_month = 1;
            new_year += 1;
        }
        
        if ((new_date > 28) & (month == 2) & (leap_year == 0)) {
            new_date = 1;
            new_month = 3;
        }
        
        if ((new_date > 29) & (month == 2) & (leap_year == 1)) {
            new_date = 1;
            new_month = 3;
        }
    
        if ((date > 30) & (month == 4 || month == 6 || month == 9 || month == 11)) {
            date = 0;
        }
        
        if (
            (date > 31) &
            (month == 1 ||
            month == 3 ||
            month == 5 ||
            month == 7 ||
            month == 8 ||
            month == 10 ||
            month == 12)
        ) {
            date = 0;
        } 

        if ((date > 28) & ((month == 2) & (leap_year == 0))) {
            date = 0;
        } 
        
        if ((date > 29) & ((month == 2) & (leap_year == 1))) {
            date = 0;
        } 
        
        if (date == 0) {
            alert("ERROR 404");
        } 
        else {
            if ((new_month < 10) & (new_date < 10)) {
            alert(`Следующая дата 0${new_date}.0${new_month}.${new_year}`);
            } else if ((new_month > 9) & (new_date < 10)) {
            alert(`Следующая дата 0${new_date}.${new_month}.${new_year}`);
            } else if ((new_month < 10) & (new_date > 9)) {
            alert(`Следующая дата ${new_date}.0${new_month}.${new_year}`);
            } else {
            alert(`Следующая дата ${new_date}.${new_month}.${new_year}`);
            }
        }
    }