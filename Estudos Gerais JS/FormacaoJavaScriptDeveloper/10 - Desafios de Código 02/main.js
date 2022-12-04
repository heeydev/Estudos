const { gets, print } = require("./media_aluno")

let media = gets();

if (media < 5) {
    print(`Nota: ${media} - Reprovado`);
}
else if (media >= 5 && media < 7) {
    print(`Nota: ${media} - Recuperação`);
}
else {
    print(`Nota: ${media} - Aprovado`);
}

