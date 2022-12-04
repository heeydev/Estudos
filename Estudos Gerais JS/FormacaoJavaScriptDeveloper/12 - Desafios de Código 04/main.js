const { gets, print } = require("./media_aluno")

const quantidaDeValores = gets();
const salario = [];

for (let i = 0; i < quantidaDeValores; i++) {
    const quantidaDeValores = gets();
    salario.push(quantidaDeValores);
}

if (salario[0] > 0 && salario[0] <= 1100) {
    const ajuste = salario[0] - ((salario[0] * 5)/100);
    const salarioMaisBeneficios = ajuste + salario[1];
    print(salarioMaisBeneficios);
}
else if (salario[0] > 1100.01 && salario[0] <= 2500) {
    const ajuste = salario[0] - ((salario[0] * 10)/100);
    const salarioMaisBeneficios = ajuste + salario[1];
    print(salarioMaisBeneficios);
}
else {
    const ajuste = salario[0] - ((salario[0] * 15)/100);
    const salarioMaisBeneficios = ajuste + salario[1];
    print(salarioMaisBeneficios);
}


