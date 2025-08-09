/// <reference path="jquery-1.7.2.min.js" />
function Ytool() { }

////////////////////辅助方法//////////////////////////////////////////////////////

//tab、onOff和onOffAnimate辅助方法（当前元素显示，其他元素隐藏）

// Ytool.prototype.otherHide = function (index, btn, content, btnStyle) {
//     btn.eq(index).addClass(btnStyle);
//     btn.not(":eq(" + index + ")").removeClass(btnStyle);
//     content.eq(index).show();
//     content.not(":eq(" + index + ")").hide();
// }
Ytool.prototype.otherHide = function (index, btn, content, btnStyle) {
    btn.eq(index).addClass(btnStyle).siblings().removeClass(btnStyle);
    // btn.not(":eq(" + index + ")").removeClass(btnStyle);
    content.eq(index).show().siblings().hide();
    // content.not(":eq(" + index + ")").hide();
}

//tab和onOffAnimate辅助方法（适合需要左右滑动效果的方法使用）

// Ytool.prototype.showContent = function (btnIndex, btn, content, btnStyle, inDirection) {
//     var inClass = "";
//     var outClass = "";
//     if (inDirection == 0) {
//         inClass = "fadeInRightBig";
//         outClass = "fadeOutLeftBig";
//     }
//     else if (inDirection == 1) {
//         inClass = "fadeInLeftBig";
//         outClass = "fadeOutRightBig";
//     }
//     btn.eq(btnIndex).addClass(btnStyle);
//     btn.not(":eq(" + btnIndex + ")").removeClass(btnStyle);
//     content.eq(btnIndex).show(500);
//     content.eq(btnIndex).removeClass("animated fadeOutRightBig fadeOutLeftBig");
//     content.eq(btnIndex).addClass("animated " + inClass);
//     content.not(":eq(" + btnIndex + ")").removeClass("animated fadeInRightBig fadeInLeftBig");
//     content.not(":eq(" + btnIndex + ")").addClass("animated " + outClass);
//     content.not(":eq(" + btnIndex + ")").hide(500);
// }


Ytool.prototype.showContent = function (btnIndex, btn, content, btnStyle, inDirection) {
    var inClass = "";
    var outClass = "";
    if (inDirection == 0) {
        inClass = "fadeInRightBig";
        outClass = "fadeOutLeftBig";
    }
    else if (inDirection == 1) {
        inClass = "fadeInLeftBig";
        outClass = "fadeOutRightBig";
    }
    btn.eq(btnIndex).addClass(btnStyle);
    btn.not(":eq(" + btnIndex + ")").removeClass(btnStyle);
    content.eq(btnIndex).show(500).siblings().hide(500);
    content.eq(btnIndex).removeClass("animated fadeOutRightBig fadeOutLeftBig").siblings().addClass("animated " + outClass);
    content.eq(btnIndex).addClass("animated " + inClass).siblings().removeClass("animated fadeInRightBig fadeInLeftBig");
    // content.not(":eq(" + btnIndex + ")").removeClass("animated fadeInRightBig fadeInLeftBig");
    // content.not(":eq(" + btnIndex + ")").addClass("animated " + outClass);
    // content.not(":eq(" + btnIndex + ")").hide(500);
}

/////////////////////////////头部导航自动渐变贴顶////////////////////////////////////////
/////////////////////////////navFixed////////////////////////////////////////////
///////////////(*使用时需要放在$(window).scroll(function (){})中)

Ytool.prototype.navFixed = function (ob, className) {
    if (ob.offset().top <= $(window).scrollTop()) {
        ob.addClass(className);

        if ($(window).scrollTop() == 0) {
            ob.removeClass(className);
        }
    }
}



Ytool.prototype.tabGene = function (btn, content, btnStyle) {
    var tabGene = new Ytool();
    tabGene.otherHide(0, btn, content, btnStyle);
    btn.mouseover(function () {
        var index = parseInt($(this).index());
        tabGene.otherHide(index, btn, content, btnStyle);
    });
}