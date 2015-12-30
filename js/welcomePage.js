/**
 * Created by User on 12/29/2015.
 */
function welcome(){
    $('.bottomButton').hide();
    $('#board').hide();
    var $innerContainer = $('.inner-container');


    var $startButton = $('<div></div>');
    $startButton.text("Play MineCraft");
    $startButton.addClass('startButton');
    $startButton.fadeIn(2000);

/*    var timer;*/
    $startButton.on('click', function () {
        $('#board').show();
        $('#sidebar').fadeIn(2000);
        gameInit();
        $innerContainer.css({'background':'none', 'padding':'0px'});
        $('.container').css({'background':'#D59527', 'padding':'0px'});
        $('.inner-container').css({'padding-top':'0.4%', 'padding-bottom':'0.4%'});
        $startButton.hide();
        $('.bottomButton').show();
        clearTimeout(timer);
    });
    $innerContainer.append($startButton);
    //setTimeout(function () {
    //    $startButton.click();
    //}, 1000);
}
