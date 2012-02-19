$(function(){
    $('.off').hide();
    var is_on = true;
    var $write = $('#write'),
        shift = false,
        capslock = false;
    
    var top_left = new Array("g","h","i","f","","j");
    var top_mid = new Array("l","m","n","k","","o");
    var top_right = new Array("q","r","s","p","","t");
    var bot_left = new Array("b","c","d","a","","e");
    var bot_mid = new Array("","","","","","");
    var bot_right = new Array("v","w","x","u","y","z");

    $('#keyboard .outer').click(function(){
        $this = $(this);
        console.log($this);
        if (is_on) {
            if ($this.is('#outer_top_left')) {
                console.log("yes");
                $('.off').replaceWith('B');
            }
            $('.off').show();
            $('.on').hide();
            is_on = false;
        } else {
            $('.off').hide();
            $('.on').show();
            is_on = true;
        }
            
    });
        
});
    
