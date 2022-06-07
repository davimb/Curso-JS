function somar() {
    var elem1 = window.document.querySelector("input#txtn1")
    var elem2 = window.document.querySelector("input#txtn2")
    var resultado = window.document.querySelector("div#resultado")
    var n1 = Number(elem1.value)
    var n2 = Number(elem2.value)
    resultado.innerHTML = "= ";
    resultado.innerHTML += n1 + n2
}
function subt() {
    var elem1 = window.document.querySelector("input#txtn1")
    var elem2 = window.document.querySelector("input#txtn2")
    var resultado = window.document.querySelector("div#resultado")
    var n1 = Number(elem1.value)
    var n2 = Number(elem2.value)
    resultado.innerHTML = "= ";
    resultado.innerHTML += n1 - n2
}
function mult() {
    var elem1 = window.document.querySelector("input#txtn1")
    var elem2 = window.document.querySelector("input#txtn2")
    var resultado = window.document.querySelector("div#resultado")
    var n1 = Number(elem1.value)
    var n2 = Number(elem2.value)
    resultado.innerHTML = "= ";
    resultado.innerHTML += n1 * n2
}
function divi() {
    var elem1 = window.document.querySelector("input#txtn1")
    var elem2 = window.document.querySelector("input#txtn2")
    var resultado = window.document.querySelector("div#resultado")
    var n1 = Number(elem1.value)
    var n2 = Number(elem2.value)
    resultado.innerHTML = "= ";
    resultado.innerHTML += n1 / n2
}