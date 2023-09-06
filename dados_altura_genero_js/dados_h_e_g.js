let maior_h = 0;
let menor_h = Infinity;
let soma_altura_homens = 0;
let num_mulheres = 0;

for (let i = 1; i <=15; i++){

    const altura = parseFloat(prompt(`Informe a altura da pessoa ${i}: `));
    const genero = prompt(`Informe o genero da pessoa ${i} (H ou M): `)

    if (altura > maior_h){
        maior_h = altura
    }
    
    if (altura < menor_h){
        menor_h = altura
    }

    if (genero.toUpperCase() === 'H'){
        soma_altura_homens +=altura;
    }
    else if (genero.toUpperCase() === 'M'){
    num_mulheres++;
    }
}

const media_h_homens = soma_altura_homens / (15 - num_mulheres);

console.log("A Maior alura do grupo é: ", (maior_h));
console.log("A menor altura do grupo é: ", (menor_h));
console.log("A media da altura dos homens é: ", (media_h_homens.toFixed(2)));
console.log("O numero de mulheres é: ", (num_mulheres));


