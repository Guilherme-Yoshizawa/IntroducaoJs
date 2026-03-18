var btnBemVindo = document.getElementById('btnBemVindo');
var btnCalcular = document.getElementById('btnCalcular');

btnBemVindo.addEventListener('click', function() {
    alert('Bem-vindo ao site!');
});

btnCalcular.addEventListener('click', function() {

    var numero1 = prompt('Digite o primeiro número:');
    var numero2 = prompt('Digite o segundo número:');

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    var soma          = numero1 + numero2;
    var subtracao     = numero1 - numero2;
    var multiplicacao = numero1 * numero2;

    var divisao;
    if (numero2 === 0) {
        divisao = 'Divisão por zero não permitida!';
    } else {
        divisao = numero1 / numero2;
    }

    document.write('<h2>Resultados:</h2>');
    document.write('<p> Soma: '          + soma          + '</p>');
    document.write('<p> Subtração: '     + subtracao     + '</p>');
    document.write('<p> Multiplicação: ' + multiplicacao + '</p>');
    document.write('<p> Divisão: '       + divisao       + '</p>');

    console.log('Soma:', soma);
    console.log('Subtração:', subtracao);
    console.log('Multiplicação:', multiplicacao);
    console.log('Divisão:', divisao);
});