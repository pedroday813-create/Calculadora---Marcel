/*************************************************************************************************
 * Biblioteca para cálculos
 *************************************************************************************************/

function calcularSoma(valor, tipoEquacao) {
    let calculos = Number(valor)

    // Validação do valor
    if (isNaN(calculos) || valor.trim() === '') {
        return 'ERRO: O valor da soma deve ser um número válido!'
    }else{
        switch (tipoEquacao.toLowerCase()) {
            case 'soma':
                return calculos + calculos
            case 'divisao':
                return calculos / 2
            case 'subtracao':
                return calculos - calculos
            case 'multiplicacao':
                return calculos * calculos
            default:
                return 'ERRO: Só pode Escolher entre Soma, Divisão, Subtração ou Multiplicação.'
        }
    }

    


}

// Exportando a função
module.exports = {
    calcularSoma
}