// function one() {
//     console.log('hello!');
//     return 0;
// }

// console.log(one()+1);

// let a = 8;
// let v = 8;


// function um() {
//     let c;
//     c = a * v;
//     console.log(c)
//     return 0;
// }

// um();

// function um2() {
//     console.log(a * v)
//     return 0;
// }

// um2();

// function um3() {
//     return a * v;
// }

// console.log(um3());

// let Per1 = +prompt('1');
// let Per2 = +prompt('2');

// function um2() {
//     return Per1 * Per2
// }
let f1 = document.querySelector('.f1');
// f1.onclick = function () {
//     let Per1 = +prompt('1');
//     let Per2 = +prompt('2');
//     function um2() {
//         return Per1 * Per2
//     }
//     alert(um2())
// }

// function um2(a, b) {
//     alert(a*b);
// }

// um2(+prompt('1'), +prompt('2'));

// f1.onclick = () => {
//     um2(+prompt('1')), +prompt('2');
// }

// let b = 8;
// let t = 10;

// function um3() {
//     return b + t;
// }

// let c1 = um3();
// let c2 = 11 * c1;

// alert(c1 + ' ' + c2);

function um4 (x, z) {
    return x * z;
}

let t = 10;
console.log(um4(4, 6));
console.log(um4(20, t));


function table(a) {
    for (let i = 0; i < 10; i++) {
        console.log(`${a} * ${i} = ${a * i}`)
    }
}

f1.onclick = () => {
    table(+prompt('Введите число'))
}