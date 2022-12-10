<?php

//Crie uma data com a classe DateTime com a data e a hora atuais. Em seguida, subtraia 5 dias, 10 horas e 50 minutos
//dessa data e exiba o resultado no seguinte formato:

// dia/mês/ano - hora:minuto:segundo



date_default_timezone_set('America/Sao_Paulo');

$garantiaExtendida = new DateTime();
$garantia = new DateInterval('P5DT10H50M');
$garantiaExtendida->add($garantia);

echo $garantiaExtendida->format('d/m/y - H:m:s');

?>