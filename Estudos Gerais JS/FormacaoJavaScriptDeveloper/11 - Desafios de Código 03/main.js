const { gets, print } = require("./maior_par_menor_impar")

const quantidaDeNumeros = gets();
const listaDeNumeros = [];

for (let i = 0; i < quantidaDeNumeros; i++) {
    const quantidaDeNumeros = gets();
    listaDeNumeros.push(quantidaDeNumeros);
}

let maiorNumeroPar = 0;
let menorNumeroImpar = 0;

for (let i = 0; i < listaDeNumeros.length; i++) {
    const numero = listaDeNumeros[i];
    if (maiorNumeroPar === null || (numero % 2 === 0 && numero > maiorNumeroPar)) {
        maiorNumeroPar = numero;
    }
    else if (menorNumeroImpar === null || menorNumeroImpar === 0 || (numero % 2 != 0 && numero < menorNumeroImpar)) {
        menorNumeroImpar = numero;
    }
}

print(`Maior número par: ${maiorNumeroPar}`);
print(`Menor número impar: ${menorNumeroImpar}`);



