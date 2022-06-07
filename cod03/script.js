function verificar () {
    var data = new Date()
    var year = data.getFullYear()
    var ano = document.getElementById('year')
    var result = document.getElementById('result')
    if (ano.value > year || ano.value.length == 0) {
        alert('[ERRO] Ano inválido')
    }
    else {
        var sexo = document.getElementsByName('radiosex')
        var idade = year - Number(ano.value)
        if (sexo[0].checked) {
            result.innerHTML = 'Homem'
        }
        else {
            result.innerHTML = 'Mulher'
        }
        result.innerHTML += `<br>${idade} anos`
        if (idade <= 10) {
            result.innerHTML += '<br>Criança'
        }
        else if (idade <= 21) {
            result.innerHTML += '<br>Jovem'
        }
        else if (idade <= 50) {
            result.innerHTML += '<br>Adulto'
        }
        else {
            result.innerHTML += '<br>Idoso'
        }
    }
}