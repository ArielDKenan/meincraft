/**
 * Created by User on 12/29/2015.
 */
function welcome(){
    var $saveload = $('.saveload');
    var $innerContainer = $('.inner-container');
    $saveload.hide();
    var $startButton = $('<input>');
    $startButton.attr('type', 'button');
    $startButton.attr('value', "Ready to Play MineCraft?");
    $startButton.addClass('startButton');
    $startButton.on('click', function () {
        $innerContainer.fadeIn(1000);
        gameInit();
        $innerContainer.css({'background':'none', 'padding':'0px'});
        $startButton.hide();
        $saveload.show();
    });
    $innerContainer.append($startButton);
    //setTimeout(function () {
    //    $startButton.click();
    //}, 1000);
}