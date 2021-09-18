var button1 = document.querySelector('#button1')
var par1 = document.querySelector('#par1')

button1.onclick = function () {
    var selectedColor = colorSelector.value

    par1.style.color = selectedColor
}