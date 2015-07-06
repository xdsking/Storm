/**
 * Created by xuds on 2015/7/6.
 */
$(function(){

    $(".toolBarPane .icon-lock").click(function(){
        $(this).toggleClass("icon-unlock");
    });
    $(".toolBarPane .icon-volume-up").click(function(){
        $(this).toggleClass("icon-volume-down");
    });
});