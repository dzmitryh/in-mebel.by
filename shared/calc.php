<?php
$root = realpath($_SERVER["DOCUMENT_ROOT"]);
$title = "Калькулятор заказа";
$keywords = "Мебель, заказ, Минске, корпусная, столы, шкафы, кровати, проект, цены, расчет, калькулятор";
$description = "Калькулятор расчета стоимости шкафа";
$url = "http://www.in-mebel.by/services";                
include("$root/parts/header.php");
?>
<div id="content_bg">
    <div id="content">
        <div class="main_box">
            <h2>Калькулятор расчета стоимости</h2>
            <!--<form action='index.php' method='post' id='contact_form'>-->
            <iframe width="1020" height="700" frameborder="0" scrolling="no" src="http://myconstructor.ru/public/iframe/constructor_270edd69788dce200a3b395a6da6fdb7.html"></iframe>
            <!--</form>-->
        </div>
    </div>
</div>
<?php include("$root/parts/footer.php"); ?>