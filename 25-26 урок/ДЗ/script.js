let but_one = document.querySelector('.but_one');
but_one.onclick = function(){
    let num = parseInt(prompt("Сколько #?"));
    let i = 0;
    while(i < num) {
        i += 1
        document.write('# ');
    }
}

let but_two = document.querySelector('.but_two');
but_two.onclick = function(){
    let b = prompt("Введите число");
    while (b >= 0) {
        document.write(b + " ");
        b--;
    }
}

let but_three = document.querySelector('.but_three');
but_three.onclick = function(){
    let num = prompt("Введите число:");
    let deg = prompt("Введите степень:");
    let res = 1;
    let cnt = 0;
    while (cnt < deg) {
        res *= num;
        cnt++;
    }
    alert(`${num} в степени ${deg}  =  ${res}`);
}

let but_four = document.querySelector('.but_four');
but_four.onclick = function(){
    let num1 = prompt("Введите число");
    let num2 = prompt("введите второе число");
    let commonDivisors = [];
    let smallerNum = Math.min(num1, num2);
    let i = 1;
    while (i <= smallerNum) {
        if (num1 % i == 0 && num2 % i == 0) {
            commonDivisors.push(i);
        }
        i++;
    }
    
    document.write(commonDivisors + " ");
}

let but_five = document.querySelector('.but_five');
but_five.onclick = function(){
    let num = prompt("Введите число");
    let i = 1;
    while (num > 1) {
        i *= num; // i = i * num
        num--; // num = num -1
    }
    alert("Факториал вашего числа = " + i);
}

let but_six = document.querySelector('.but_six');
but_six.onclick = function(){
    let answer;
    // let answer = prompt("Решите пример 2 + 2 * 2 =");
    do {
        answer = +prompt("Решите пример 2 + 2 * 2  =");
        if (answer == 6) {
            alert(`Верно!`);
        }
        else {
            alert(`Не верно, повторите`)
        }
    }
    while (answer !== 6);
}

let but_seven = document.querySelector('.but_seven');
but_seven.onclick = function(){
    let num = 1000;
    let counter = 0;
    do {
        num /= 2;
        counter++;
    }
    while (num >= 50);

    alert(`Полученное число = ${num}\nКоличество делений = ${counter}`);
}

let but_eight = document.querySelector('.but_eight');
but_eight.onclick = function() {
    let num = +prompt("Введите число от 1 до 100");
    for (let i = 1; i <= 100; i++) {
        if (i % num == 0) {
            document.write(i + " ");
        }
    }
    // let num = +prompt("Введите число от 1 до 100");
    // let arrays = [];
    // let i = 1;
    // if (num >= 1 && num <= 100) {
    //     while (i <= 100){
    //         if (i % num == 0) {
    //             arrays.push(i);
    //         }
    //         i++;
    //     }
    // }
    // else {
    //     alert("Не верно!");
    // }
    // document.write(arrays);
}

let but_nine = document.querySelector('.but_nine');
but_nine.onclick = function() {
    let min = +prompt("Введите минимальное значение диапозона");
    let max = +prompt("Введите максимальное число диапозона");
    for(let i = min; i<= max; i++) {
        if ((i - min) % 4 == 0) {
            console.log(i);
        }
    }
}

let but_ten = document.querySelector('.but_ten');
but_ten.onclick = function(){
    let a = +prompt('Введите число')
    let i, flag = true;
    for (i = 2; i <= a - 1; i++) {
        if (a % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true)
        alert(a + " Число простое");
    else
        alert(a + " Число не простое");
};