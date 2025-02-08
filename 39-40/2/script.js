let one = document.querySelector('#one');
let four = document.querySelector('#four');
one.onclick = myClick;

function myClick() {
    console.log('click');
    one.onclick = null;
    let two = document.querySelector('#two');
    two.onclick = myClick2;
}

function myClick2() {
    console.log(2222);
    let two = document.querySelector('#two');
    two.onclick = myClick3;
}

function myClick3() {
    console.log('woooooooooork!!!');
    let three = document.querySelector('#three')
    three.onclick = myClick4;
}

function myClick4() {
    console.log('Привет привет!!');
}

four.onclick = myClick;