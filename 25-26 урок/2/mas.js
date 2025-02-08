
// let butCol = document.querySelector('.but_col'); //кнопка 
// let col = document.querySelector('.col');//поле ввода 
// let pCol = document.querySelector('p');//Событие нажатия на кнопку

// butCol.onclick = () => {
//     console. log(col. value);
//     butCol.style.backgroundColor = col.value;
//     pCol.style.color = col.value;
// }

let pasPas = document.querySelector('.pas_pas'); //кнопка
let onePas = document.querySelector('.one_pas');//поле ввода
//Событие нажатия на кнопку
pasPas.onclick = () => {
//
    console.log(onePas. value);
    let pas = onePas.value;
    alert(`Ваш пароль: ${pas}`);

    if (pas == 'admin'){
        alert('верно!')
    }
    else {
        alert('неверно!')
    }
}