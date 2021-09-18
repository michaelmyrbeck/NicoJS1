var button1 = document.querySelector('#button1')
var par1 = document.querySelector('#par1')

var colorSelector = document.querySelector('#color-selector')
var button2 = document.querySelector('#button2')
var textInput = document.querySelector('#text-input1')
var body = document.querySelector('body')

var number1 = document.querySelector('#number1')
var number2 = document.querySelector('#number2')
var doMath = document.querySelector('#do-math')
var solution = document.querySelector('#solution')

button1.onclick = function () {
    var selectedColor = colorSelector.value

    par1.style.color = selectedColor
}

button2.onclick = function () {
    var textInputValue = textInput.value
    var newPar = document.createElement('p')
    newPar.innerHTML = textInputValue;
    body.appendChild(newPar);
}

doMath.onclick = function () {
    var v1 = parseFloat(number1.value)
    var v2 = parseFloat(number2.value)
    solution.innerHTML = v1 + v2

}