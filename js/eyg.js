$(function(){
    $('.off').hide();
    var is_on = true;
    var text;
    var $write = $('#write'),
shift = false,
capslock = false;

$('#keyboard .outer').click(function(){
    $this = $(this);
    if (is_on) {
        if ($this.is('#outer_top_left')) {
            $('#outer_top_left .off').text('g');
            $('#outer_top_mid .off').text('h');
            $('#outer_top_right .off').text('i');
            $('#outer_bot_left .off').text('f');
            $('#outer_bot_mid .off').text('');
            $('#outer_bot_right .off').text('j');
        } else if ($this.is('#outer_top_mid')) {
            $('#outer_top_left .off').text('l');
            $('#outer_top_mid .off').text('m');
            $('#outer_top_right .off').text('n');
            $('#outer_bot_left .off').text('k');
            $('#outer_bot_mid .off').text('');
            $('#outer_bot_right .off').text('o');
        } else if ($this.is('#outer_top_right')) {
            $('#outer_top_left .off').text('q');
            $('#outer_top_mid .off').text('r');
            $('#outer_top_right .off').text('s');
            $('#outer_bot_left .off').text('p');
            $('#outer_bot_mid .off').text('');
            $('#outer_bot_right .off').text('t');
        } else if ($this.is('#outer_bot_left')) {
            $('#outer_top_left .off').text('b');
            $('#outer_top_mid .off').text('c');
            $('#outer_top_right .off').text('d');
            $('#outer_bot_left .off').text('a');
            $('#outer_bot_mid .off').text('');
            $('#outer_bot_right .off').text('e');
        } else if ($this.is('#outer_bot_mid')) {
            $('#outer_top_left .off').text('.');
            $('#outer_top_mid .off').text(',');
            $('#outer_top_right .off').text('<-');
            $('#outer_bot_left .off').text('tab');
            $('#outer_bot_mid .off').text(' ');
            $('#outer_bot_right .off').text(' ');
        } else if ($this.is('#outer_bot_right')) {
            $('#outer_top_left .off').text('v');
            $('#outer_top_mid .off').text('w');
            $('#outer_top_right .off').text('x');
            $('#outer_bot_left .off').text('u');
            $('#outer_bot_mid .off').text('y');
            $('#outer_bot_right .off').text('z');
        }
        $('.off').show();
        $('.on').hide();
        is_on = false;
    } else {
        text = $($(this).children('.off')).html();
        if (text == "&lt;-") {
            var html = $write.html();
            $write.html(html.substr(0, html.length -1));
        //} else if (text == "tab") {
            //$write.html($write.html() + "\t"); 
        } else {
            $write.html($write.html() + text);
        }
        $('.off').text('');
        $('.off').hide();
        $('.on').show();
        is_on = true;
    }

});

});

