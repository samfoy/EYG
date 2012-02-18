$(function(){
    var $write = $('#write'),
        shift = false,
        capslock = false;

    $('#keyboard .inner').click(function(){
        var $this = $(this),
            character = $this.html();
        
    console.log($this.html());
        $write.html($write.html() + character);
    });
        
});
    
