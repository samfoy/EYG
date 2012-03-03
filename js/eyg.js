$(function(){
  $('.off').hide();
  $('.shifted').hide();
  var is_on = true;
  var text;
  var $write = $('#write'),
shift = false,
capslock = false;

function doUpper() {
  $('.unshifted').hide();
  $('.shifted').show();
  $('.shift').removeClass('shift');
  $('.letter').each(function() {
    $this = $(this);
    var text = $this.text();
    text = text.toUpperCase();
    $(this).text(text);
  });
}

function doLower() {
  $('.letter').each(function() {
    $this = $(this);
    var text = $this.text();
    text = text.toLowerCase();
    $(this).text(text);
  });
}

function doBracket() {
  $('#outer_top_left .off').html('(');
  $('#outer_top_mid .off').html(')');
  $('#outer_top_right .off').html('[');
  $('#outer_bot_left .off').html(']');
  $('#outer_bot_mid .off').html("{");
  $('#outer_bot_right .off').html('}');
  $('.on').hide();
  $('.off').show();
  $('.bracket').removeClass('bracket');
}

function doPunc() {
  $('#outer_top_left .off').html(';');
  $('#outer_top_mid .off').html(':');
  $('#outer_top_right .off').html('<');
  $('#outer_bot_left .off').html('>');
  $('#outer_bot_mid .off').html("'");
  $('#outer_bot_right .off').html('"');
  $('.on').hide();
  $('.off').show();
  $('.punc').removeClass('punc');
}

function doMath() {
  $('#outer_top_left .off').html('+');
  $('#outer_top_mid .off').html('-');
  $('#outer_top_right .off').html('/');
  $('#outer_bot_left .off').html('*');
  $('#outer_bot_mid .off').html('=');
  $('#outer_bot_right .off').html('|');
  $('.on').hide();
  $('.off').show();
  $('.math').removeClass('math');
}

function doExtra() {
  $('#outer_top_left .off').html('~');
  $('#outer_top_mid .off').html('`');
  $('#outer_top_right .off').html('\\');
  $('#outer_bot_left .off').html('\\t');
  $('#outer_bot_mid .off').html('');
  $('#outer_bot_right .off').html('_');
  $('.on').hide();
  $('.off').show();
  $('.extra').removeClass('extra');
}

$('#numpad .inner ').click(function(){
  $this = $(this);
  if (shift) {
    text = $this.children('.shifted').text();
  } else {
    text = $this.children('.unshifted').text();
  }
  //text = $this.text();
  $write.html($write.html() + text);
  $('.shifted').hide();
  $('.unshifted').show();
  shift = false;
});

$('#keyboard .outer').click(function(){
  $this = $(this);
  if (is_on) {
    if ($this.is('#outer_top_left')) {
      $('#outer_top_left .off').html('g');
      $('#outer_top_mid .off').html('h');
      $('#outer_top_right .off').html('i');
      $('#outer_bot_left .off').html('f');
      $('#outer_bot_mid .off').html(';');
      $('#outer_bot_mid').addClass('punc');
      $('#outer_bot_right .off').html('j');
    } else if ($this.is('#outer_top_mid')) {
      $('#outer_top_left .off').html('l');
      $('#outer_top_mid .off').html('m');
      $('#outer_top_right .off').html('n');
      $('#outer_bot_left .off').html('k');
      $('#outer_bot_mid .off').html('+');
      $('#outer_bot_mid').addClass('math');
      $('#outer_bot_right .off').html('o');
    } else if ($this.is('#outer_top_right')) {
      $('#outer_top_left .off').html('q');
      $('#outer_top_mid .off').html('r');
      $('#outer_top_right .off').html('s');
      $('#outer_bot_left .off').html('p');
      $('#outer_bot_mid .off').html('(');
      $('#outer_bot_mid').addClass('bracket');
      $('#outer_bot_right .off').html('t');
    } else if ($this.is('#outer_bot_left')) {
      $('#outer_top_left .off').html('b');
      $('#outer_top_mid .off').html('c');
      $('#outer_top_right .off').html('d');
      $('#outer_bot_left .off').html('a');
      $('#outer_bot_mid .off').html('~');
      $('#outer_bot_mid').addClass('extra');
      $('#outer_bot_right .off').html('e');
    } else if ($this.is('#outer_bot_mid')) {
      $('#outer_top_left .off').html('.');
      $('#outer_top_mid .off').html(',');
      $('#outer_top_right .off').html('&#8592;');
      $('#outer_top_right').addClass('delete');
      $('#outer_bot_left .off').html('&#8593;');
      $('#outer_bot_left').addClass('shift');
      $('#outer_bot_mid .off').html(' ');
      $('#outer_bot_right .off').html('&#8629;');
      $('#outer_bot_right').addClass('return');
    } else if ($this.is('#outer_bot_right')) {
      $('#outer_top_left .off').html('v');
      $('#outer_top_mid .off').html('w');
      $('#outer_top_right .off').html('x');
      $('#outer_bot_left .off').html('u');
      $('#outer_bot_mid .off').html('y');
      $('#outer_bot_right .off').html('z');
    }

    if (shift) {
      doUpper();
    }

    $('.off').show();
    $('.on').hide();
    is_on = false;
    shift = false;
  } else {
    text = $($(this).children('.off')).html();
    if ($this.hasClass('delete')) { 
      var html = $write.text();
      $write.html(html.substr(0, html.length -1));
    } else if ($this.hasClass('shift')) {
      shift = true;
      doUpper();
    } else if ($this.hasClass('return')) {
      $write.html($write.html() + "\n");
    } else if ($this.hasClass('math')) {
      doMath();
      return;
    } else if ($this.hasClass('punc')) {
      doPunc();
      return;
    } else if ($this.hasClass('bracket')) {
      doBracket();
      return;
    } else if ($this.hasClass('extra')) {
      doExtra();
      return;
    } else {
      $write.html($write.html() + text);
    }
    $('.off').text('');
    $('.off').hide();
    $('.on').show();
    $('.shift').removeClass('shift');
    $('.delete').removeClass('delete');
    $('.return').removeClass('return');
    $('.math').removeClass('math');
    $('.punc').removeClass('punc');
    $('.bracket').removeClass('bracket');
    $('.extra').removeClass('extra');

    if(!shift) {
      doLower();
    }

    is_on = true;
  }

});

});
