// let a = +prompt(`введите число`); //123
// let b = Math.floor(a/100); //1
// let c = a % 100; //23
// let d = Math.floor(c/10); //2
// let r = c % 10; //3
// alert(b + d + r);


// const zp = 250;
// let sum = prompt(`сумма`);
// let p = sum/100*10;
// alert(`zp =` + (zp+p) + `$`)

// let f = Math.pow(4, 2)
// alert(Math.pow(4, 2));

// let a = +prompt(`введите число`);

// if (a>0){
//     console.log(`число положительное`);
// }

// if (a==0){
//     console.log(`число равно 0`);
// }

// if (a<0){
//     console.log(`число отрицательное`);
// }

// let a = +prompt(`введите число`)
// if (a >= 0){
//         if (a == 0){
//             console.log(`число равно 0`);
//         }
//         else {
//             console.log('число положительное')
//         }
// }

// else if(a<0) {
//     console.log(`число отрицательное`)
// }

let but_two = document.querySelector('.but_two')

but_two.onclick = function(){
    let a = +prompt('Введите Ваш возраст: ')
    if (a>=0 && a<=120) {
        console.log('Возраст корректный')
    }
    else {
        console.log('Вы ввели ошибочные данные!')
    }
}

let but_one = document.querySelector('.but_one')
but_one.onclick = function(){
    let inp = +prompt('Введите номер дня недели')
    switch (inp){
        case 1: console.log('ПН'); break;
        case 2: console.log('ВТ'); break;
        case 3: console.log('СР'); break;
        case 4: console.log('ЧТ'); break;
        case 5: console.log('ПТ'); break;
        case 6: console.log('СБ'); break;
        case 7: console.log('ВС'); break;
        default: console.log("Error")
    }
}

// let but_three = document.querySelector('.but_three')
// but_three.onclick = function(){
//     let inp_1 = +prompt('1 число')
//     let inp_2 = +prompt('2 число')
//     let sign = prompt('знак')
//     switch (sign){
//         case '+': console.log(inp_1+inp_2); break;
//         case '-': console.log(inp_1-inp_2); break;
//         case '*': console.log(inp_1*inp_2); break;
//         case '/': console.log(inp_1/inp_2); break;
//         default: console.log("Error")
//     }
// }

// let a = +prompt('Введите Ваш возраст');

// if (a>=18 a<=120)