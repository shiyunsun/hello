$(document).ready(function(){
    var button1clicked = false;
    var button2clicked = true;
    var button3clicked = true;

    $('#news').scrollTop(590);
    $('#button1').click(function(){
        if (! button1clicked) {
        $('#button1').text("+");
        button1clicked = true;
        $('#course1').hide();
        } else {
        $('#button1').text("-");  
        button1clicked = false;
        $('#course1').show();
        }
    })

    $('#button2').click(function(){
        if (! button2clicked) {
        $('#button2').text("+");
        button2clicked = true;
        $('#course2').hide();
        } else {
        $('#button2').text("-");  
        button2clicked = false;
        $('#course2').show();
        }
    })

    $('#button3').click(function(){
        if (! button3clicked) {
        $('#button3').text("+");
        button3clicked = true;
        $('#course3').hide();
        } else {
        $('#button3').text("-");  
        button3clicked = false;
        $('#course3').show();
        }
    })
  });