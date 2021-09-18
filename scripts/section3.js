var number1 = document.querySelector('#number1')
var number2 = document.querySelector('#number2')
var doMath = document.querySelector('#do-math')
var solution = document.querySelector('#solution')

doMath.onclick = function () {
    solution.innerHTML = parseFloat(number1.value) + parseFloat(number2.value)

}