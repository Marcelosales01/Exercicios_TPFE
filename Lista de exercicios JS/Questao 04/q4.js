//let salarioInicial = 1000; 
//let anoContratacao = 1995;

//const anoAtual = 2023;
//while (anoContratacao <= anoAtual) {
  //const aumentoPercentual = (anoContratacao === 1996) ? 1.5 : 2 * (anoContratacao - 1996);

  //salarioInicial = salarioInicial * (1 + aumentoPercentual / 100);

  //anoContratacao++;
//}

//console.log(`O salário atual do funcionário em ${anoAtual} é R$ ${salarioInicial.toFixed(2)}`);




/// Permitindo que o usuario informe o salario inicial

const salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"));

let anoContratacao = 1995;

const anoAtual = 2023;
let salarioAtual = salarioInicial;

while (anoContratacao <= anoAtual) {
  const aumentoPercentual = (anoContratacao === 1996) ? 1.5 : 2 * (anoContratacao - 1996);

  salarioAtual = salarioAtual * (1 + aumentoPercentual / 100);

  anoContratacao++;
}

console.log(`O salário atual do funcionário em ${anoAtual} é R$ ${salarioAtual.toFixed(2)}`);
alert(`O salário atual do funcionário em ${anoAtual} é R$ ${salarioAtual.toFixed(2)}`);

