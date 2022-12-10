<?php

declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';

use exercicioFinal\Venda;

$venda1 = new Venda(
    //date_create('now'),
    new DateTime(),
    'Monitor Samsung 120hz',
    2,
    2670.90
);

//var_dump($venda1);

echo $venda1->exibirDadosVenda();

?>