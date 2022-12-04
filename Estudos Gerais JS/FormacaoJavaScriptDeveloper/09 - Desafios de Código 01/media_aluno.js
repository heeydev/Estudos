
/*
Faça um programa que receba notas de um aluno.
Caso a media seja < 5 imprima "Reprovado"
Caso a média seja >= 5 e < 7 imprima "Recuperação"
Caso a média seja >= 7 imprima "Aprovado"

Exemplo:
Entreada
5.5
Saida:
Recuperação
*/

const entradas = [3, 4, 4, 4];

let i = 0;


function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print }

