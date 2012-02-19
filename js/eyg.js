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
        if (is_on) {
            //$('.off').animate({
                //'opacity' : 'toggle',
            //});
            //$('.on').animate({
                //'opacity' : 'toggle',
            //});
            $('.off').show();
            $('.on').hide();
            is_on = false;
        } else {
            //$('.off').animate({
                //'opacity' : 'toggle',
            //});
            //$('.on').animate({
                //'opacity' : 'toggle',
            //});
            $('.off').hide();
            $('.on').show();
            is_on = true;
        }
            

        
        
        
    //$('#keyboard .inner').click(function(){
        //var $this = $(this),
            //character = $this.html();
        
    //console.log($this.html());
        //$write.html($write.html() + character);
    });


        
});
    
