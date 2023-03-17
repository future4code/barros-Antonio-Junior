function FahrenheitEmKelvin() {
    let temperaturaDigitada = document.getElementById('temperatura');
    let temperaturaDigitada = temperaturaDigitada.value;
    var res = document.getElementById('resultado');

    if (temperaturaDigitada == '') {
        resultado.innerHTML = '<p style="color: black; font-size: 25px; font-weight: 600;">Digite um número para fazer a conversão.</p>';
    } else {
        temperaturaK = (temperaturaDigitada - 32) * 5 / 9 + 273;
        res.innerHTML = "<p><b>Resultado:</b><br>" + temperaturaK.toFixed(1) + "° Kelvin equivale a " + temperaturaDigitada + "° Fahrenheit.</p>";
    }
}


console.log("exercicio 1");