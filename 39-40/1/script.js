let blocks = document.querySelectorAll('.block');
console.log(blocks);

for (let i = 0; i < blocks.length; i++){
    blocks[i].onclick = one;
}

function one(){
    console.log(111);
    console.log(this.innerHTML);
    this.style.background = 'green';
}


// blocks.forEach(function (element) {
//     console.log(element);

//     element.onclick = function () {
//         console.log('work');
//         this.style.background = 'pink';
//     }
// });