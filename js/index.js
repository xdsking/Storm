/**
 * Created by xuds on 2015/7/6.
 */
var showOperatePane=function(operatePane,flag){
    $(".operatePane").css("width","0");
    if(flag){
        $("#videoPane").css("width","80%");
        operatePane.css("width","20%").fadeIn();
        flag=false;
    }else{
        $("#videoPane").css("width","100%");
        operatePane.css("width","0").fadeOut();
        flag=true;
    }
    return flag;
};
$(function(){

    $(".toolBarPane .icon-volume-up").click(function(){
        $(this).toggleClass("icon-volume-down");
    });
    var toolBarPane=$(".toolBarPane");
    var flag=true;
    $("#operate1").click(function(){
        flag=showOperatePane($("#operatePane1"),flag);
    });
    $("#operate2").click(function(){
        flag=showOperatePane($("#operatePane2"),flag);
    });
    $("#operate3").click(function(){
        flag=showOperatePane($("#operatePane3"),flag);
    });
    $("#operate4").click(function(){
        flag=showOperatePane($("#operatePane4"),flag);
    });
    $(".closePane").click(function(){
        $("#videoPane").css("width","100%");
        $(this.parentNode).css("width","0").fadeToggle();
        flag=true;
    });
    initPanelHeadingEvt();
});

/**
 * Created by xuds on 2015/7/17.
 */
/**
 * @summary 初始化隐藏标题栏,鼠标移入显示标题栏,延迟n秒后隐藏,移出时隐藏.
 */
var initPanelHeadingEvt =function(){
    var domNode=$("#videoPane");
    var outTimer;
    domNode.mousemove(function(){
        var headingPane=$(".topToolBarPane,.rightToolBarPane");
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
        $(".topToolBarPane,.rightToolBarPane").css("visibility","hidden");
    })
};