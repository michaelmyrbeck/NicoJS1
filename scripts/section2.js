var colorSelector = document.querySelector('#color-selector')
var button2 = document.querySelector('#button2')
var textInput = document.querySelector('#text-input1')
var body = document.querySelector('body')

button2.onclick = function () {
    var textInputValue = textInput.value
    var newPar = document.createElement('p')
    newPar.innerHTML = textInputValue;
    body.appendChild(newPar);
}