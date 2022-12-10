<?php

declare(strict_types=1);

namespace exercicioFinal;

date_default_timezone_set('America/Sao_Paulo');

use DateTime;
use DateInterval;

class Venda
{
    private DateTime $data;
    private string $produto;
    private int  $quantidade;
    private float $valorTotal;

    public function __construct(
        DateTime $data,
        string $produto,
        int $quantidade,
        float $valorTotal
    ) {
        $this->data = $data;
        $this->produto = $produto;
        $this->quantidade = $quantidade;
        $this->valorTotal = $valorTotal;
    }

    
    // public function setdata($DtBase){
    //     $this->data = $DtBase;
    // }
    // public function getdata(){
    //     return convertData($this->data);
    // }
    // public function convertData($data){
    //     $data = Datetime::createFromFormat('d/m/Y', $data);
    // return $data->format('Y-m-d');
    // }




    //Implementar: Colocar status de "Ativo" nos produtos com garantia extendida, 
    //comparando a data atual com a da garantia extendida

    public function exibirDadosVenda(): string
    {
        // $datainicio = date_format($this->data, 'd/m/Y');        
        // $garantia = date('d/m/Y', strtotime("+12 month", strtotime($datainicio)));
        // $garantiaExtendida = new DateTime($garantia); 
        
        $garantiaExtendida = new DateTime();
        $garantia = new DateInterval('P1Y');
        $garantiaExtendida->add($garantia);

        return "Data e Hora da venda: " . date_format($this->data, 'd/m/Y - H:i:s') .PHP_EOL 
        .PHP_EOL . "Produto: " . $this->produto 
        .PHP_EOL . "Quantidade: " . $this->quantidade 
        .PHP_EOL . "Valor total da venda: R$" . number_format($this->valorTotal, 2, ',', '') .PHP_EOL 
        .PHP_EOL . "Validade Garantia Extendida: " . date_format($garantiaExtendida, 'd/m/Y');
    }

    /**
     * Get the value of data
     */
    public function getData()
    {
        return $this->data;
    }

    /**
     * Get the value of produto
     */
    public function getProduto()
    {
        return $this->produto;
    }

    /**
     * Get the value of quantidade
     */
    public function getQuantidade()
    {
        return $this->quantidade;
    }

    /**
     * Get the value of valorTotal
     */
    public function getValorTotal()
    {
        return $this->valorTotal;
    }
}
