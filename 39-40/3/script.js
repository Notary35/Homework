document.querySelector('.onclick').onclick = () => {
    console.log('click');
}

document.querySelector('.ondblclick').ondblclick = function (){
    console.log('double click');
}

document.querySelector('.onmousemove').onmousemove = function (){
    console.log('goooooo');
}

document.querySelector('.onmouseenter').onmouseenter = function (){
    console.log('enter');
}

document.querySelector('.onmouseleave').onmouseleave = function (){
    console.log('leave');
}

document.querySelector('.onmousewheel').onmousewheel = function (){
    console.log('wheel');
    return false;
}