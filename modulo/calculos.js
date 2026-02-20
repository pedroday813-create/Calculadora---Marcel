/*************************************************************************************************
 * Biblioteca para cálculos
 *************************************************************************************************/

function calcularSoma(valor, valor2, tipoEquacao) {
    let calculos = Number(valor);
    let calculos2 = Number(valor2);

    // Validação do valor
    if (isNaN(calculos) || isNaN(calculos2)) {
        return 'ERRO: Os valores devem ser números válidos!';
    }

    let tipo = tipoEquacao.toLowerCase();

    if (tipo === 'soma') {
        return `Resultado da soma: ${calculos + calculos2}`;
    } else if (tipo === 'divisao') {
        return `Resultado da divisão: ${calculos / calculos2}`;
    } else if (tipo === 'subtracao') {
        return `Resultado da subtração: ${calculos - calculos2}`;
    } else if (tipo === 'multiplicacao') {
        return `Resultado da multiplicação: ${calculos * calculos2}`;
    } else {
        return 'ERRO: Só pode escolher entre Soma, Divisão, Subtração ou Multiplicação.';
    }
}

// Exportando a função
module.exports = {
    calcularSoma
};