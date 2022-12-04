
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

const media = 7;

function gets() {    
    return media;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print }

