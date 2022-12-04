
function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}
function aplicarJuros(valor, juros) {
    return valor + (valor * (juros / 100));
}
function valorProduto(precoEtiqueta, formaDePagamento) {
    if (formaDePagamento === 1) {

        console.log('O valor final do produto é R$' + aplicarDesconto(precoEtiqueta, 10).toFixed(2));
    }
    else if (formaDePagamento === 2) {
        console.log('O valor final do produto é R$' + aplicarDesconto(precoEtiqueta, 15).toFixed(2));
    }
    else if (formaDePagamento === 3) {
        console.log('O valor final do produto é R$' + precoEtiqueta.toFixed(2));
    }
    else {
        console.log('O valor final do produto é R$' + aplicarJuros(precoEtiqueta, 10).toFixed(2));
    }
}

valorProduto(100, 1);
