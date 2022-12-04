
/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilometro rodado.
Crie um método que dado a quantidade de quilômetros e o preço dos combustível nos dê o valor
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    consumoPorKm;

    constructor(marca, cor, consumoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.consumoPorKm = consumoPorKm;
    }

    gastoPercurso(kilometros, precoCombustivel) {
        const consumo = kilometros * this.consumoPorKm;
        const custoViagem = consumo * precoCombustivel;
        console.log(`O percurso de ${kilometros}KM irá consumir ${consumo.toFixed(3)} litros de combustível e custará R$${custoViagem.toFixed(2)} no carro de cor ${this.cor} da marca ${this.marca}.`);
    }
}

const carro1 = new Carro('Nissam', 'branca', 1/12);
carro1.gastoPercurso(70, 5);

const carro2 = new Carro('Fiat', 'preto', 1/10);
carro2.gastoPercurso(70, 5);
