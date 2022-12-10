<?php

function divisao(array $valores)
{
    if ($valores['divisor'] == 0 || $valores['dividendo'] == 0) {
        throw new Exception('O número não pode ser igual a 0!');        
    } else {
        $resultado = $valores['divisor'] / $valores['dividendo'];
        echo 'O resultado da divisão é: ' . $resultado;        
    }

    return true;
}

$valores = [
    'divisor' => 100,
    'dividendo' => 1,
];

$status = false;

try {
    $status = divisao($valores);
} catch (Exception $e) {
    echo $e->getMessage();
}finally{
    echo "\nO status da operação é: " .(int)$status;    
}

echo PHP_EOL;
echo "\n... Executando ... \n";
