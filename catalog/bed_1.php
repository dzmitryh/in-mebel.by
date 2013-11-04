<?php
$root = realpath($_SERVER["DOCUMENT_ROOT"]);
$title = "Кровати";
$keywords = "кровати";
$description = "";
include("$root/parts/header.php");
?>
<div id="content_bg">
    <div id="content">
        <div class="main_box">
                <a name="begin"/>
                <h2>Добро пожаловать на наш сайт!</h2>
                <p>Вашему вниманию предлагаются кровати в следующем ассортименте: </p>
        </div>
        <div id="column_box">

            <div id="column1_content_product">
                <div class="column_title_product">
                    Кровать 1
                </div>
                <div class="column_text_product">
                    <div class="img_bg_product">
                        <a rel="wardrobe_box" href="../images_conc/bed_2b.jpg" title="Кровать 1. Мебель под заказ в Минске">
                            <img src="../images_conc/bed_2s.jpg" alt="Кровать 1. Мебель под заказ в Минске" title="Кровать 1"/>
                        </a>
                    </div>
                </div>
                <div class="column_content_bot_product"></div>
            </div>

            <div id="column2_content_product" class="column_default_product">
                <div class="column_title_product">
                    Кровать 2
                </div>
                <div class="column_text_product">
                    <div class="img_bg_product">
                        <a rel="wardrobe_box" href="../images_conc/bed_3b.jpg" title="Кровать 2. Мебель под заказ в Минске">
                            <img src="../images_conc/bed_3s.jpg" alt="Кровать 2" title="Кровать 2"/>
                        </a>
                    </div>
                </div>
                <div class="column_content_bot_product"></div>
            </div>
            
            <div class="clear"></div>
        </div>
    </div>
</div>
<?php include("$root/parts/footer.php"); ?>