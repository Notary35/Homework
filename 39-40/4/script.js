// const d = new Date();
// console.log(d);

// let d2 = new Date(1701707321);
// console.log(d2);

// let d3 = new Date(1701707321000);
// console.log(d3);

// let d4 = new Date(0);
// console.log(d4);

// let d5 = new Date(2024, 8, 29, 15, 15);
// console.log(d5);

// let d6 = new Date('2024 Sep 29');
// console.log(d6);

let dat = new Date ();
console.log(dat);

document.querySelector('.data_ob_1').innerHTML = dat;
document.querySelector('.data_ob_2').innerHTML = dat.toUTCString();
document.querySelector('.data_ob_3').innerHTML = dat.toDateString();
document.querySelector('.data_ob_4').innerHTML = dat.toISOString();


let data = new Date();

console.log(data.getFullYear());
console.log(data.getMonth() + 1);
console.log(data.getDate());
console.log(data.getDay());

console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getSeconds());