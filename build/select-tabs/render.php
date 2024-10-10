<?php 

function golf_trous_render($attributes,$content,$block){

    ob_start();
    ?>
   <div class="select-div"><select id="select-liste-des-trous"></select></div>
    <?php 
    $html = ob_get_clean();
    return $html;
}
?>