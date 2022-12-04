
const entradas = [5, 50, 10, 115, 23, 11, 50, 10, 98, 55, 76, 23, 34, 54, 67];
let i = 0

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print }
