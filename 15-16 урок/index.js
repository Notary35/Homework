// let a = 4;
// let b = 2;

// console.log(a+b);



let a = `Сегодня`, b = `прекрасный`, c = `день!`
console.log(a, b, c)

console.log(a)
console.log(b)
console.log(c)

// alert(a + ` ` + b + ` ` + c)
// alert(a + `\n` + b + `\n` + c)
// alert(`Сегодня ` + `прекрасный ` + `день!`)

console.log(11)
console.log(`11`)
console.log(`11`+`2`)
console.log(+`11`+ +`2`)

// задача 1

let inp_one = document.querySelector(`.inp_one`)
let but_one = document.querySelector(`.but_one`)

but_one.onclick = function(){
    alert(`Привет ` + inp_one.value)
}

// задача 2

let inp_two = document.querySelector(`.inp_two`)
let but_two = document.querySelector(`.but_two`)

const year = 2024
but_two.onclick = function(){
    alert( year - inp_two.value)
}
