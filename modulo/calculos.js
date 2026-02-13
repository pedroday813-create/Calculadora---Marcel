/*************************************************************************************************
 * Biblioteca para cálculos
 *************************************************************************************************/

function calcularSoma(valor, tipoEquacao) {
    let calculos = Number(valor)

    // Validação do valor
    if (isNaN(calculos) || valor.trim() === '') {
        return 'ERRO: O valor da soma deve ser um número válido!';
    } else {
        let tipo = tipoEquacao.toLowerCase();
    
        if (tipo === 'soma') {
            return calculos + calculos;
        } else if (tipo === 'divisao') {
            return calculos / 2;
        } else if (tipo === 'subtracao') {
            return calculos - calculos;
        } else if (tipo === 'multiplicacao') {
            return calculos * calculos;
        } else {
            return 'ERRO: Só pode escolher entre Soma, Divisão, Subtração ou Multiplicação.';
        }
    }




}

// Exportando a função
module.exports = {
    calcularSoma
}