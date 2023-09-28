const quantidadeDeNumeros = parseInt(prompt("Digite a quantidade de números:"));

let menorValor = Infinity; 
let maiorValor = -Infinity;
let somaDosValores = 0;

for (let i = 0; i < quantidadeDeNumeros; i++) {
  const numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));

  if (numero < menorValor) {
    menorValor = numero;
  }
  if (numero > maiorValor) {
    maiorValor = numero;
  }

  somaDosValores += numero;
}

console.log(`Menor valor: ${menorValor}`);
console.log(`Maior valor: ${maiorValor}`);
console.log(`Soma dos valores: ${somaDosValores}`);
