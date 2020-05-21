
Object.keys(images).forEach(function(path) {
    $('#hold_images').append("<img class='my_img' width=200 height=400 src=" + images[path] + ">"); 
});

$('body').append("<i id='icon_right'></i>");
$('body').append("<i id='icon_left'></i>"); 
add_icon('#icon_right', 'fa fa-chevron-right', '40px', 'white');
add_icon('#icon_left', 'fa fa-chevron-left', '40px', 'white');

$(document).ready(function(){
    $('.my_img').hover(function() {
        $(this).addClass('transition');

    }, function() {
        $(this).removeClass('transition');
    });
});

$(document).on('click', '#icon_right, #icon_left', function() {
    if($(this).attr('id') == 'icon_right') {
        $('body').animate({scrollLeft: 1000}, 800);
        } else {
        $('body').animate({scrollLeft: -1000}, 800);
    }
});