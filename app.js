/*************************************************************************************************
 * Objetivo: Desenvolver uma aplicação para a empresa Cálculos SA
 * Data: 13/02/26
 * Autor: Pedro Rodrigues Cruz
 * versao: 1.0
 *************************************************************************************************/

// Importação da biblioteca para entrada de dados
const readline = require('readline');

// Criação de um objeto para receber os dados do terminal
const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite o valor 1 da soma (Sem "," apenas com "." e so pode conter 5 numeros): ', function (valor) {
    let valorSoma1 = valor;
    //valor1 
    
    entradaDados.question('Digite o valor 2 da soma (Sem "," apenas com "." e so pode conter 5 numeros): ', function (valor2) {
        let valorSoma2 = valor2;
        //valor2

        entradaDados.question('Deseja calcular como Soma, Divisão, Subtração ou Multiplicação? ', function (equacao) {
            //tipo equacao
            let tipoEquacao = equacao.trim().toLowerCase();

            // Biblioteca de cálculos
            let calculos = require('./modulo/calculos.js');

            // Substituir vírgulas por pontos
            if (valorSoma1.includes(",")) {
                valorSoma1 = valorSoma1.replace(",", ".");
            }
            if (valorSoma2.includes(",")) {
                valorSoma2 = valorSoma2.replace(",", ".");
            }

            // Validação do valor
            if (
                isNaN(valorSoma1) || valorSoma1.trim() === '' || Number(valorSoma1) <= 0 ||
                isNaN(valorSoma2) || valorSoma2.trim() === '' || Number(valorSoma2) <= 0
            ) {
                console.log('ERRO: O valor deve ser um número válido e acima de zero!');
                entradaDados.close();
                return;
            }

            // Chamada da função de cálculo
            let resultado = calculos.calcularSoma(Number(valorSoma1), Number(valorSoma2), tipoEquacao);
            console.log(resultado);

            // Encerrando o programa
            entradaDados.close();
        }); //tipo equacao e resultado e biblioteca
    }); //valor2
}); //valor1