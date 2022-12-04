function escrevaSeuNome(nome) {
    return 'Meu nome é ' + nome
}

function escrevaSuaIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaSeuNome('Hiago Crespo, ') + 'tenho ' + idade + ' anos e sou maior de idade.');
    }
    else {
        console.log(escrevaSeuNome('Hiago Crespo, ') + 'tenho ' + idade + ' anos e sou menor de idade.');
    }
}

escrevaSuaIdade(17);
escrevaSuaIdade(18);
