// let user_age = promt('Что меняем?');
// let Mas_user = [
//     {name: 'Оксана', age: 25,},
//     {name: 'Петр', age: 20,},
//     {name: 'Кристина', age: 15,},
// ];
// if (user_age == 'Все') {
//     let us = promt('Имя старое');
//     let ag = +promt('Возраст старый');
//     let us_new = promt('Имя новое');
//     let ag_new = +promt('Возраст новый');
//     for (let i = 0; i< Mas_user.length; i++) {
//         if (us == Mas_user[i].name && ag == Mas_user[i].age)
//         {
//             Mas_user[i].name = us_new;
//             Mas_user[i].age = ag_new;
//             console.log(Mas_user);
//             break;
//         }
//         // else {
//         //     alert('Пользователь не найден');
//         // }
//     }
// }



// if (user_age == 'Имя') {
//     let us = promt('Имя старое');
//     let ag = +promt('Возраст старый');
//     let us_new = promt('Имя новое');
//     for (let i = 0; i < Mas_user.length; i++) {
//         if (
//             us == Mas_user[i].name && ag == Mas_user[i].age) {
//                 Mas_user[i].name = us_new;
//                 console.log(Mas_user);
//                 break;
//             }
//             else {
//                 alert('Пользователь не найден');
//             }}}
// if (user_age == 'Возраст') {
//     let us = promt('Имя старое');
//     let ag = +promt('Возраст старый');
//     let ag_new = +promt('Возраст новый');
//     for (let i = 0; i<Mas_user.length; i++) {
//         if (us == Mas_user[i].name && ag == Mas_user[i].age) {
//             Mas_user[i].age = ag_new;
//             console.log(Mas_user);
//             break;
//         }
//         else {
//             alert('Пользователь не найден')
//         }
//     }
// }

let Masdbl = [
    [1,2,3,4,5,],
    [1,2,3,4,],
    [1,2,3,4,5,6, 7],
    [1,2,],
]

console.log (Masdbl);

for (let i = 0; i < Masdbl.length; i++){
    console.log (Masdbl[i]);
    let c = Masdbl[i]; //присвоили массив
    for (let j = 0; j < c.length; j++){
        console.log(c[j]);
    }
}

// let Mas_forEach = [
//     {name: 'Пушок', type: 'Кот', age: '13',},
//     {name: 'Ева', type: 'Собака', age: '3',},
//     {name: 'Ада', type: 'Кошка', age: '8',},
//     {name: 'Леди', type: 'Кошка', age: '11',},
//     {name: 'Барсик', type: 'Кот', age: '7',},
// ]