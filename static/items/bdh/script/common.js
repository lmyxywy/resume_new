/// <reference path="jquery.min.js" />
$(function () {

    /////////////////////////////////////////////////////////////////////页面加载之后css3动画效果

    listAnimateShow($(".nav li"), "animated fadeInRight");

    var obAll_1 = [
                [$(".header_left"), "animated fadeInLeft"],
                [$(".nav"), "animated fadeInRight"],
                [$(".mobile_menu_btn"), "animated fadeInRight"],
                [$(".inpage_top_img"), "animated fadeInDown"],
                [$(".remind .time"), "animated fadeInLeft"],
                [$(".remind .notice"), "animated fadeInUp"],
                [$(".remind .search"), "animated fadeInRight"],
                [$(".footer"), "animated fadeInUp"],
                [$(".footer_intro"), "animated fadeInRight"]
    ];
    moreAnimate(1, obAll_1);

    ///////////////////////////////////滚动鼠标滚轮触发

    $(window).scroll(function () {

        navFixed($(".header"), "header_fixed");

        var obAll_0 = [
                [$(".first_img"), "animated fadeInUp"],
                [$(".footer"), "animated fadeInUp"],
                [$(".footer_intro"), "animated fadeInRight"]
        ];
        moreAnimate(0, obAll_0);
    });
    /////////////////////////////////////移动端导航按钮控制
    $(".mobile_menu_btn").click(function () {
        if ($(".nav").css("display") == "none") {
            $(".nav").show();
        }
        else {
            $(".nav").slideUp();
        }
    });
})

///////////////头部导航自动渐变贴顶(*使用时需要放在$(window).scroll(function (){}中)

function navFixed(ob, className) {
    if (ob.offset().top <= $(window).scrollTop()) {
        ob.addClass(className);

        //$(".header_fixed_search").show();

        if ($(window).scrollTop() == 0) {
            ob.removeClass(className);

            //$(".header_fixed_search").hide();
        }
    }
}

///////////////多组"元素出现动画"循环遍历

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

//////列表延迟进入动画//////////////////////////////

function listAnimateShow(ob, className) {
    for (i = 0; i < ob.length; i++) {
        ob.eq(i).addClass("animated " + className);
        ob.eq(i).css({ 'animation-delay': (i / 10) + 's' });
    }
}