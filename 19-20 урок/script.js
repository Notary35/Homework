let div_one = document.querySelectorAll('.one')
console.log(div_one)

for (let i = 0; i<div_one.length; i++){
    div_one[i] .style.background = 'LightPink';
    div_one[i] .style.border = '2px double Steel8lue'; 
    div_one[i] .style.marginBottom = '20px';
    div_one[i] .style.cursor = 'pointer';
    
    div_one[i].onclick = fn_one;
}
function fn_one(){
    console.log('работает!')
}