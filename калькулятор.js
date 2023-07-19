const input1 = document.getElementById('num1')
const input2 = document.getElementById('num2')
const result = document.getElementById('result')

const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const mulBtn = document.getElementById('mul')
const divisBtn = document.getElementById('divis')

let action = '+'

plusBtn.onclick = function() {action = '+'}
minusBtn.onclick = function() {action = '-'}
mulBtn.onclick = function() {action = '*'}
divisBtn.onclick = function() {action = '/'}

submitBtn.onclick = function() {
    let num1 = +input1.value, num2 = +input2.value;
    result.textContent = action == '+' ? num1 + num2 : 
                         action == '-' ? num1 - num2 : 
                         action == '*' ? num1 * num2 : num1 / num2;
    result.style.color = 'black';
    result.style.fontWeight = '600';
    result.style.fontSize = '18px';
}



