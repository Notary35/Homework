// let buttonBut = document.querySelector('.but');
// let inputPol_1 = document.querySelector('#two');
// let inputPol_2 = document.querySelector('#three');

// buttonBut.onclick = () => {

//     if ((inputPol_1.checked) && (inputPol_2.checked)) { 
//         alert('Укажите один пол');}
//     else if (inputPol_1.checked) {
//         alert('Ваш пол : ' + inputPol_1.value);
//     }
//     else if (inputPol_2.checked) {
//         alert('Ваш пол : ' + inputPol_2.value);
//     }
//     else {
//         alert('Вы не указали Ваш пол');
//     }
// }

// let star = document.querySelector('.star');//поле ввода
// star.oninput = () => { //выводим в консоль состояние бегунка
//     console. log(star. value);
//     document.querySelector('.spanRange').innerHTML = star.value;
// }


// let button = document.querySelector('.rt'); //кнопка 
// let text = document.querySelector('textarea');//поле ввода

// button.onclick = (e) => {
//     e.preventDefault(); //позволяет остановиь перезагрузку формы
//     console.log(text.value);
// }

//     // обращения к элементам формы с пер-ой 
//     let form = document.querySelector('form'); 
//     // console.log(form); 
//     alert(form.elements.two2.value);
//     alert(form.elements.three2.value);


let otv_1 = document.querySelector('.otv_1');
let otv_2 = document.querySelector('.otv_2');
let otv_3 = document.querySelector('.otv_3');
let banAnketa = document.querySelector('.banAnketa');

banAnketa.onclick =() => {
otv_1.innerHTML = document.querySelector('.vop_1').value;
otv_2.innerHTML= document.querySelector('.vop_2').value;
let m = document.querySelector('#two');
let j = document.querySelector('#three');
if ((m.checked) && (j.checked)) {
    alert('Укажите один пол');
}
else if (m.checked) {
    otv_3.innerHTML = m.value;
}
else if (j.checked) {
    otv_3.innerHTML = j.value;
}
else {
    alert('Вы не указали Ваш пол');
}
document.querySelector('.anketa').style.backgroundColor = 
document.querySelector('.colNew').value;
}