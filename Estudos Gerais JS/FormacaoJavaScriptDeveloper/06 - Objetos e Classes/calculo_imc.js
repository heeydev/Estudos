
/*

2 - Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura *altura))
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura
E peça ao José para dizer o valor do seu IMC.

*/


class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (Math.pow(this.altura, 2))
    }

    classificarImc() {

        const imc = this.calcularImc();

        console.log(`A pessoa de nome ${this.nome}, que pesa ${this.peso}kg e tem altura de ${this.altura.toFixed(2)} metros, possui o IMC de ${imc.toFixed(2)} que se enquadra no status de:`)

        if (imc < 18.5) {
            return 'Abaixo do peso';
        }
        else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        }
        else if (imc >= 25 && imc < 30) {
            return 'Acima do peso';
        }
        else if (imc >= 30 && imc < 40) {
            return 'Obeso';
        }
        else {
            return 'Obesidade grave';
        }
    }
}

const p1 = new Pessoa('José', 90, 1.75);
console.log(p1.classificarImc());

const p2 = new Pessoa('Renan', 63, 1.75);
console.log(p2.classificarImc());

const p3 = new Pessoa('Vitor', 50, 1.69);
console.log(p3.classificarImc());
