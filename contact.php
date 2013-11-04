<?php
$root = realpath($_SERVER["DOCUMENT_ROOT"]);
$title = "Контакты";
$keywords = "шкафов-купе";
$description = "";
include("$root/parts/header.php");
?>
<div id="content_bg">
    <div id="content">
        <div class="main_box">
               <h2>Как с нами связаться</h2>
                <p>
                    <span class="underline">ИП «In-mebel»:</span>
                    Раковский кирмаш, универсам "Соседи" 2-ой этаж
                </p>
                <p>
                    <span class="underline">Режим работы:</span>
                    Без обеда и выходных |
                    Понедельник — Воскресенье с 8:00 до 21:00.
                </p>
                <p>
                    <span class="underline">Телефон:</span>
                    +375(29) 504-28-99 |
                    +375(29) 150-58-88

                </p>
                <p>
                    <span class="underline">Заказ кухни по номеру:</span>
                    +375(29) 275-90-90 |
                    +375(29) 627-17-00
                </p>
                <p>
                    <span class="underline">Электронный адрес:</span>
                    master-27@tut.by
                </p>
               <p>
                   <span class="underline">УНП</span>
                   590945264 | Регистрация от 14.06.2010
               </p>
               <div class="google_map">
                   <iframe width="425" height="350" frameborder="0" scrolling="no"
                           marginheight="0" marginwidth="0"
                           src="http://maps.google.com/maps/ms?msa=0&amp;msid=205126784371263335151.0004b59050cc919d3310e&amp;ie=UTF8&amp;t=m&amp;vpsrc=6&amp;ll=53.907852,27.491934&amp;spn=0.004424,0.00912&amp;z=16&amp;output=embed">
                   </iframe>
                   <br />
                   <small>
                       Просмотреть
                       <a href="http://maps.google.com/maps/ms?msa=0&amp;msid=205126784371263335151.0004b59050cc919d3310e&amp;ie=UTF8&amp;t=m&amp;vpsrc=6&amp;ll=53.907852,27.491934&amp;spn=0.004424,0.00912&amp;z=16&amp;source=embed" style="color:#0000FF;text-align:left">
                           in-mebel.by
                       </a> на карте большего размера
                   </small>
               </div>
        </div>
    </div>
</div>
<?php include("$root/parts/footer.php"); ?>