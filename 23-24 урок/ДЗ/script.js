let but_one = document.querySelector('.but_one');
but_one.onclick = function(){
    const num = prompt("Кол-во повторений");
    // num = int(input('Сколько раз повторять: '))
    let i = 1
    while (i<=num) {
        i= i + 1
        alert('Text')
    }

}