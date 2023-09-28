function calcularMontante(){

 const capital_inicial = parseFloat(prompt("Digite o capital inicial a ser investido: "));
 const txjuros = parseFloat(prompt("Digite a taxa de juros mensal em porcentagem (%): "));
 const tempoEmMeses = parseInt(prompt("Digite o tempo do investimento em meses: "))

 if (isNaN(capital_inicial) || isNaN(txjuros) || isNaN(tempoEmMeses) || capital_inicial < 0 || txjuros < 0 || tempoEmMeses < 0){
    console.log("Erro, digite valores válidos.");
    return;
 }
    
 const txjurosDecimal = txjuros / 100;
 const montante = capital_inicial * Math.pow(1 + txjurosDecimal, tempoEmMeses);
 console.log(`O montante do investimento é: R$ ${montante.toFixed(2)}`);
}

calcularMontante();