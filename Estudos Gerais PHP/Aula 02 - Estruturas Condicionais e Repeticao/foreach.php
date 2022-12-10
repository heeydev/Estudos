
<?php

//Ordenação de números em arrays.

$arrayNumeros = [0, 10, 4, 3, 8, 2];

$contador = count($arrayNumeros);

foreach ($arrayNumeros as $indice => $value) {
    if($value % 2 !== 0)
        continue;
    
    echo "índice: " .$indice ." | valor : " .$value ."\n";
    
}

?>