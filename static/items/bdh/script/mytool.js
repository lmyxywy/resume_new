/// <reference path="jquery.min.js" />


///////////////头部导航自动渐变贴顶////////////////////////////////////////////
///////////////(*使用时需要放在$(window).scroll(function (){}中)

function navFixed(ob, className) {
    if (ob.offset().top <= $(window).scrollTop()) {
        ob.addClass(className);

        if ($(window).scrollTop() == 0) {
            ob.removeClass(className);
        }
    }
}


///////////////多组"元素出现动画"循环遍历////////////////////////////////////////

function moreAnimate(situate, group) {
    if (situate == 0) {
        for (i = 0; i < group.length; i++) {
            animateShow(group[i][0], group[i][1]);
        }
    }//在$(window).scroll（）方法内部时
    else if (situate == 1) {
        for (i = 0; i < group.length; i++) {
            group[i][0].addClass(group[i][1]);
        }
    }//在$(window).scroll（）方法外部时(不需判断是否在可视区域内，页面加载就启动)
}

///////////////"元素出现动画"核心代码（只有元素出现在窗口中才能触动）

function animateShow(ob, className) {

    //元素在window窗口下方的情况

    var top = $(window).height() - ob.offset().top + $(window).scrollTop();

    //元素在window窗口上方的情况

    var btm = $(window).scrollTop() - ob.offset().top - ob.height();

    if (top > 0 && btm < 0) {
        ob.css("opacity", "1");
        ob.addClass(className);
    }
    else {

        ob.css("opacity", "0");
        ob.removeClass(className);
    }
}

//////tab标签功能（适合横版li，可按两种方向滑动）//////////////////////////////

function tab(btn, content, btnStyle) {

    otherHide(0, btn, content, btnStyle);

    btn.click(function () {

        for (i = 0; i < btn.length; i++) {

            if (btn.eq(i).hasClass(btnStyle)) {
                var btnIndex = parseInt($(this).index());
                if (btnIndex < i) {
                    showContent(btnIndex, btn, content, btnStyle, 1);//1为从左进入
                }
                else if (btnIndex > i) {
                    showContent(btnIndex, btn, content, btnStyle, 0);//0为从右进入
                }
            }
        }
    });
}


///////标题按钮开关功能（4参数）简单show和hide功能///////////////////////////////
//(第一个参数只有0和1，0默认第一个内容关闭，1默认第一个内容打开)
//(btn为按钮元素对象)
//(btnStyle为点击之后为按钮添加的样式类名)
function onOff(key, btn, content, btnStyle) {
    if (key == 1) {
        otherHide(0, btn, content, btnStyle);
    }
    else if (key == 0) {
        content.hide();
    }
    btn.click(function () {
        var btnIndex = parseInt($(this).index());
        var className = "." + btnStyle

        if (btn.eq(btnIndex).is(className)) {
            btn.eq(btnIndex).removeClass(btnStyle);
            content.eq(btnIndex).hide();
        } else {
            otherHide(btnIndex, btn, content, btnStyle);
        }
    });
}


///////标题按钮开关功能（4参数）效果为slide///////////////////////////////////////
//点击当前标签时，其他标签无法关闭，需手动

function onOffSlide(btn, content, btnClassName) {
    content.hide();
    btn.click(function () {
        var btnIndex = parseInt($(this).index());
        var className = "." + btnClassName
        if (btn.eq(btnIndex).is(className)) {
            btn.eq(btnIndex).removeClass(btnClassName);
        } else {
            btn.eq(btnIndex).addClass(btnClassName);
        }
        content.eq(btnIndex).slideToggle();
    });
}


///////标题按钮开关功能（5参数）效果为左右滑动////////////////////////////////////
//key为0，第一块内容默认隐藏，为1，默认显示
//directionKey为0，从右滑进，为1，从左滑进

function onOffAnimate(key, btn, content, btnStyle, directionKey) {
    if (key == 1) {
        otherHide(0, btn, content, btnStyle);
    }
    else if (key == 0) {
        content.hide();
    }
    btn.click(function () {

        var btnIndex = parseInt($(this).index());
        var className = "." + btnStyle

        if (btn.eq(btnIndex).is(className)) {

            btn.eq(btnIndex).removeClass(btnStyle);

            if (directionKey == 0) {
                content.eq(btnIndex).addClass("animated fadeOutLeftBig");
            } else if (directionKey == 1) {
                content.eq(btnIndex).addClass("animated fadeOutRightBig");
            }

        } else {
            showContent(btnIndex, btn, content, btnStyle, directionKey);
        }

    });
}

////////////////////辅助方法//////////////////////////////////////////////////////

//tab、onOff和onOffAnimate辅助方法（当前元素显示，其他元素隐藏）

function otherHide(index, btn, content, btnStyle) {
    btn.eq(index).addClass(btnStyle);
    btn.not(":eq(" + index + ")").removeClass(btnStyle);
    content.eq(index).show();
    content.not(":eq(" + index + ")").hide();
}

//tab和onOffAnimate辅助方法（适合需要左右滑动效果的方法使用）

function showContent(btnIndex, btn, content, btnStyle, inDirection) {
    var inClass = "";
    var outClass = "";
    if (inDirection == 0) {
        inClass = "fadeInRight";
        outClass = "fadeOutLeftBig";
    }
    else if (inDirection == 1) {
        inClass = "fadeInLeft";
        outClass = "fadeOutRightBig";
    }
    btn.eq(btnIndex).addClass(btnStyle);
    btn.not(":eq(" + btnIndex + ")").removeClass(btnStyle);
    content.eq(btnIndex).show(500);
    content.eq(btnIndex).removeClass("animated fadeOutRightBig fadeOutLeftBig");
    content.eq(btnIndex).addClass("animated " + inClass);
    content.not(":eq(" + btnIndex + ")").removeClass("animated fadeInRight fadeInLeft");
    content.not(":eq(" + btnIndex + ")").addClass("animated " + outClass);
    content.not(":eq(" + btnIndex + ")").hide(500);
}

