let numeros = []
let continuar = true

while(continuar){
    let numero = parseFloat(prompt("Digite um número ou deixe em branco para encerrar: "))


if(!isNaN(numero)){
    numeros.push(numero)
}
else{
    continuar = false
}
}

if(numeros.length > 0){
    let soma = numeros.reduce((total, numero) => total + numero, 0)
    console.log(`A soma dos números é: ${soma}`)
}
else{
    console.log("Sem cálculo, nenhum número informado.")
}
