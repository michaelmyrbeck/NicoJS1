var number1 = document.querySelector('#number1')
var number2 = document.querySelector('#number2')
var doMath = document.querySelector('#do-math')
var solution = document.querySelector('#solution')

doMath.onclick = function () {
    var v1 = parseFloat(number1.value)
    var v2 = parseFloat(number2.value)
    solution.innerHTML = v1 + v2

}