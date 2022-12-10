
<?php

//Ordenação de números em arrays.

$arrayNumeros = [0, 10, 4, 3, 8, 2];

$contador = count($arrayNumeros);

for ($i = 0; $i < $contador; $i++) {
    sort($arrayNumeros);
    print_r($arrayNumeros[$i] . "\n");
}

?>