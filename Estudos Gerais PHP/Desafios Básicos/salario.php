

<?php

// Leia o Desafio e siga o código base abaixo para resolvê-lo. Algumas dicas:
// 1. Use a função "fgets(STDIN)" para ler uma linha de Entrada;
// 2. Use a função "echo" formatar e imprimir sua(s) Saída(s).

$nome = fgets(STDIN);
$salario = fgets(STDIN);
$totalVendas = fgets(STDIN);

$aReceber = $salario + ($totalVendas * 15 / 100);

$aReceber = sprintf('%.2f', $aReceber);

$aReceber = str_replace(',', '', $aReceber);

echo "TOTAL = R$ $aReceber";




// Leia o Desafio e siga o código base abaixo para resolvê-lo. Algumas dicas:
// 1. Use a função "fgets(STDIN)" para ler uma linha de Entrada;
// 2. Use a função "echo" formatar e imprimir sua(s) Saída(s).

    // // $nome = fgets(STDIN);
    // // $salario = fgets(STDIN);
    // // $totalVendas = fgets(STDIN);

    // $a = 500.00;
    // $b = 1230.30;

    // $comissao = $b * 0.75;
    
    // $salarioFinal = $a + $comissao;

    // echo "TOTAL = R$ " .(round($salarioFinal, 2));


?>

