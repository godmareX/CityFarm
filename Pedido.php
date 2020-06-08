<?php
$info = $_POST['mydata'];
$target_file = "Pedido" . $info->Id;
$file = fopen($target_file,"w")
fwrite($file, $info->Preco)
fwrite($file, $info->Produtos)
?>