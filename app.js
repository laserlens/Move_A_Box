$(document).ready(function() {

    $('#leftClicker').click(function() {
        $('#box1').animate({
        'marginLeft' : "-=30px" //moves left
        });
    });

    $('#rightClicker').click(function() {
        $('#box1').animate({
        'marginLeft' : "+=30px" //moves right
        });
    });

    $('#downClicker').click(function() {
        $('#box1').animate({
        'marginTop' : "+=30px" //moves down
        });
    });

    $('#upClicker').click(function() {
        $('#box1').animate({
        'marginTop' : "-=30px" //moves up
        });
    });

});
