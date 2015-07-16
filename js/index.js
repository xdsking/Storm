/**
 * Created by xuds on 2015/7/6.
 */
$(function(){

    $(".toolBarPane .icon-volume-up").click(function(){
        $(this).toggleClass("icon-volume-down");
    });
    var toolBarPane=$(".toolBarPane");
    var flag=true;
    $("#show").click(function(){
        if(flag){
            $("#videoPane").css("width","80%");
            $(".otherPane").css("width","20%").fadeToggle();
            flag=false;
        }else{
            $("#videoPane").css("width","100%");
            $(".otherPane").css("width","0").fadeToggle();
            flag=true;
        }

    });
    $("#removePane").click(function(){
        $("#videoPane").css("width","100%");
        $(".otherPane").css("width","0").fadeToggle();
        flag=true;
    });
    initPanelHeadingEvt();
});

/**
 * Created by xuds on 2015/7/11.
 */
/**
 * @summary 初始化隐藏标题栏,鼠标移入显示标题栏,延迟n秒后隐藏,移出时隐藏.
 */
var initPanelHeadingEvt =function(){
    var domNode=$("#videoPane");
    var outTimer;
    domNode.mousemove(function(){
        var headingPane=$(".toolBarPane,.otherToolBarPane");
        headingPane.css("visibility","visible");
        headingPane.css("display","block");
        clearTimeout(outTimer);
        outTimer= setTimeout(function(){
            headingPane.fadeOut(function(){
                headingPane.css("visibility","hidden");
            });
        },2000);
    });
    domNode.mouseout(function(){
        $(".toolBarPane,.otherToolBarPane").css("visibility","hidden");
    })
};