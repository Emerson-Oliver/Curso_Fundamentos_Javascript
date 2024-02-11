const prompt = require ("prompt-sync")();

const numero1 = Number(prompt("Valor 1: "));
const numero2 = Number(prompt("Valor 2: "));
const numero3 = Number(prompt("Valor 3: "));

const media = (numero1 + numero2 + numero3) / 3;

console.log(`A media é ${media.toFixed("1")}`);