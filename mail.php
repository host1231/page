<?php
    $to = 'pg15182100@gmail.com'; // устанавливаем e-mail адрес получателя
    $site = 'AVIA-CERT'; // устанавливаем название сайта

    $name = trim($_POST['name']); // получаем данные поля name и удаляем пробелы
    $email = trim($_POST['email']); // получаем данные поля e-mail и удаляем пробелы
    $text = trim($_POST['text']); // получаем данные поля text и удаляем пробелы

    $message = "Имя: $name \n Email: $email \n Сообщение: $text";  // создаем содержимое письма
    $page = "Информация с сайта: $site"; // создаем заголовок письма
    
    mail($to, $page, $message, "From: $to"); // отправляем письмо
?>
