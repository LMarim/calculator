let input = document.getElementById('inputbox')
let btns = document.querySelectorAll('button')

let num = "";
let vet = Array.from(btns);
vet.forEach(button =>{
    button.addEventListener('click',(calc)=>{
if (calc.target.innerHTML == '=') {
    num = eval(num);
    input.value = num;
}else if (calc.target.innerHTML == 'AC') {
    num = "";
    input.value = num;
}else if (calc.target.innerHTML == 'DE') {
    num = num.substring(0,num.length-1);
    input.value = num;
}
else{
   num += calc.target.innerHTML;
   input.value = num;
  
}
    })
})