/* EXERCICIO
*Escrever um programa que faz conversão de um valor em R$ para um valor em $ e mostre o resultado
*O Valor a ser convertido e a cotação devem ser solicitados pelo usuário 
*/

const prompt = require("prompt-sync")();

const valorEmReal = Number(prompt("Qual o valorm em R$: "));
const cotacaoDoDolar = Number(prompt("Qual a cotação US$: "));

const valorConvertido = valorEmReal / cotacaoDoDolar;

console.log(`Valor Convertido em US$ ${valorConvertido.toFixed(2)}`);