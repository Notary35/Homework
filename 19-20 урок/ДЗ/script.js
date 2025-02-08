let but_one = document.querySelector('.but_one');
but_one.onclick = function(){
    let a = +prompt('введите число');
    // let b = Math.floor(a/100);
    for ( i = 1 ; i <= 100 ; i++ ) {
        if(i % a == 0) {
            document.write(i + "<br>");
        }
    }
};

let but_two = document.querySelector('.but_two');
but_two.onclick = function(){
    let a_min = +prompt('введите минимальное число диапозона');
    let a_max = +prompt('введите максимальное число диапозона');
    // let b = Math.floor(a/100);
    for ( i = a_min ; i <= a_max ; i++ ) {
        if (i = i + 4 , i <= a_max)
            document.write(i + "<br>");
    }
};

let but_three = document.querySelector('.but_three');
but_three.onclick = function(){
    let a = +prompt('Введите число')
    let i, flag = true;
    for (i = 2; i <= a - 1; i++) {
        if (a % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true)
        document.write(a + " Число простое");
    else
        document.write(a + " Число не простое");
};

let but_four = document.querySelector('.but_four');
but_four.onclick = function(){
    let a;
    do {
        a = +prompt('решите пример 2+2*2=')
    }
    while (a != 6)
        alert('Верно!')
};

let but_five = document.querySelector('.but_five');
but_five.onclick = function(){
    let a = +prompt("Укажите количество #: ")
    let i = 0;
    let sim = "";
    while(a > i){
        sim += "#";
        i++;
    }
    document.write("ваши символы: " + sim);

};