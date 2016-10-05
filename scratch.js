$(document).keydown(function(e){
    switch(e.which) {
        case $.ui.keyCode.LEFT:
        $('#leftClicker').click(function() {
            $('#box1').animate({
            'marginLeft' : "-=30px" //moves left
            });
        })// your code here
        break;

        case $.ui.keyCode.UP:
        $('#upClicker').click(function() {
            $('#box1').animate({
            'marginTop' : "-=30px" //moves up
            });
        });// your code here
        break;

        case $.ui.keyCode.RIGHT:
        $('#rightClicker').click(function() {
            $('#box1').animate({
            'marginLeft' : "+=30px" //moves right
            });
        });// your code here
        break;

        case $.ui.keyCode.DOWN:
        $('#downClicker').click(function() {
            $('#box1').animate({
            'marginTop' : "+=30px" //moves down
            });
        });// your code here
        break;

        default: return; // allow other keys to be handled
    }

    // prevent default action (eg. page moving up/down)
    // but consider accessibility (eg. user may want to use keys to choose a radio button)
    e.preventDefault();
});
