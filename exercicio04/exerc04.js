let notas = []

for (let i = 0; i < 3; i++){
    let nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));
    notas.push(nota);
}

let soma = 0;
for (let nota of notas){
    soma += nota;
}

let media = soma / notas.length;

if (media <=4){
    alert("Reprovado");
}
else if (media < 7){
    alert("Recuperação")


let nota_recuperacao = parseFloat(prompt("Digite a nota da recuperação: "));

let media_final = (media + nota_recuperacao) / 2;

if (media_final >= 5){
alert("Aprovado na recuperação")
}

else{
    alert("Reprovado na recuperação")
}

}else{
    alert("Aprovado")
}
