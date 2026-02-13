/*************************************************************************************************
 * Objetivo: Desenvolver uma aplicação para a empresa Cálculos SA
 * Data: 13/02/26
 * Autor: Pedro Rodrigues Cruz
 * versao: 1.0
 *************************************************************************************************/

// Importação da biblioteca para entrada de dados
const readline = require('readline')

// Criação de um objeto para receber os dados do terminal
const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o valor da soma (Sem "," apenas com "." e so pode conter 2 numeros): ', function (valor) {
    let valorSoma = valor
   
    entradaDados.question('Deseja calcular como Soma, Divisão, Subtração ou Multiplicação? ', function (equacao) {
        let tipoEquacao = equacao

        // Biblioteca de cálculos
        let calculos = require('./modulo/calculos.js')

        // Validação do valor
        if (isNaN(valorSoma) || valorSoma.trim() === '' || valorSoma.trim() === '0') {
            console.log('ERRO: O valor deve ser um número válido e acima de zero!')
            
        }else if (tipoEquacao === '') {
            console.log('ERRO: O tipo de equação deve ser válido!')
            
        }
        
        if (valor.includes(",")) {
            valor = valor.replace(",", ".")
        } else {
            valor = valor; // mantém igual
        }

        // Chamada da função de cálculo
        let resultado = calculos.calcularSoma(valorSoma, tipoEquacao)
        console.log(resultado)

        // Encerrando o programa
        entradaDados.close()
    })
})