/**
 * Created by User on 12/28/2015.
 */
var tools = [];
var toolNames = ['pickaxe', 'shovel', 'axe', 'inventory'];
var $toolbox = $('#toolbox');
var $sidebar = $('#sidebar');

function toolClick(i) {
    $('.tools').css('background-color','#D59527');
    $('#'+toolNames[i]).css('background-color','#395668');
    tools.forEach(function (data, index) {
        data.isSelected = false;
    })
    tools[i].isSelected = true;
    getTool();
}

var worksOn = ['stone','earth','tree','none'];
(function createSideBar(){
    for (var i = 0; i < toolNames.length; i++) {
        var tool = {};
        var $div = $('<div></div>');
        $div.addClass('tools');
        $div.attr('id', toolNames[i]);
        $div.bind('mousedown', toolClick.bind(this,i));
        tool.selector = $('#toolbox').append($div);
        tool.isSelected = i==0 ? false : true;
        tool.name = toolNames[i];
        tool.worksOn = worksOn[i];
        tool.name[i] = worksOn[i];
        tools[i] = tool;

    }

}());

function getTool() {
    for (var x=0; x<tools.length; x++) {
        if (tools[x].isSelected) {
            return tools[x];
        }
    }
}