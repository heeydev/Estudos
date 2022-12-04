const { gets, print } = require("./media_aluno")

const notas = gets();
let media = 0;
let soma = 0;

for (let i = 0; i < notas; i++) {
    soma = soma + gets();
    media = soma / notas;
}

if (media < 5) {
    print(`Nota: ${media} - Reprovado`);
}
else if (media >= 5 && media < 7) {
    print(`Nota: ${media} - Recuperação`);
}
else {
    print(`Nota: ${media} - Aprovado`);
}

