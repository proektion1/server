<?php
$_POST = json_decode(file_get_contents('php://input'), true);
echo var_dump($_POST);
//берет данные от клиента, превращает в строку и показывает (это response)