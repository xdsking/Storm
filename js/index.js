/**
 * Created by xuds on 2015/7/6.
 */
var curDomNode = null;
var showOperatePane = function (operatePane,target) {
    $(".operatePane").css("width", "0");
    $(".rightToolBarPane span").removeClass("heighLightToolBarIcon");
    if (curDomNode == operatePane[0]) {
        $("#videoPane").css("width", "100%");
        operatePane.css("width", "0").fadeOut();
        curDomNode = null;
    } else {
        $("#videoPane").css("width", "80%");
        operatePane.css("width", "20%").fadeIn();
        $(target).addClass("heighLightToolBarIcon");
        curDomNode = operatePane[0];

    }
};
$(function () {
    $(".toolBarPane .icon-volume-up").click(function () {
        $(this).toggleClass("icon-volume-down");
    });
    var toolBarPane = $(".toolBarPane");
    $("#operate1").click(function () {
        var operatePane = $("#operatePane1");
        showOperatePane(operatePane,this);
        //TODO
    });
    $("#operate2").click(function () {
        var operatePane = $("#operatePane2");
        showOperatePane(operatePane,this);
        //TODO
    });
    $("#operate3").click(function () {
        var operatePane = $("#operatePane3");
        showOperatePane(operatePane,this);
        //TODO
    });
    $("#operate4").click(function () {
        var operatePane = $("#operatePane4");
        showOperatePane(operatePane,this);
        //TODO
    });
    $(".closePane").click(function () {
        $("#videoPane").css("width", "100%");
        $(this.parentNode).fadeOut(function(){
            $(this).css("width", "0");
            $(".rightToolBarPane span").removeClass("heighLightToolBarIcon");
        });
        curDomNode=null;
    });
    initPanelHeadingEvt();
});

/**
 * Created by xuds on 2015/7/17.
 */
/**
 * @summary 初始化隐藏标题栏,鼠标移入显示标题栏,延迟n秒后隐藏,移出时隐藏.
 */
var initPanelHeadingEvt = function () {
    var domNode = $("#videoPane");
    var outTimer,mouseLeaveOutTimer,outTimer1;
    var headingPane = $(".topToolBarPane,.rightToolBarPane");
    domNode.mousemove(function () {
        headingPane.css("visibility", "visible");
        headingPane.css("display", "block");
        clearTimeout(outTimer);
        clearTimeout(outTimer1);
        clearTimeout(mouseLeaveOutTimer);
        outTimer1=setTimeout(function(){
            headingPane.css("visibility", "hidden");
        },2000);

    });
    outTimer = setTimeout(function () {
        headingPane.fadeOut(function () {
            headingPane.css("visibility", "hidden");
        });
    }, 2000);
    domNode.mouseleave(function () {
        mouseLeaveOutTimer=setTimeout(function(){
            $(".topToolBarPane,.rightToolBarPane").fadeOut(500,function(){
                $(this).css("visibility", "hidden");
            });
        },1000);

    })
};