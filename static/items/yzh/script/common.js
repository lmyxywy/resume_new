/// <reference path="jquery-1.7.2.min.js" />

$(function() {
    $('.header_top_btn').hover(function() {
        var index = $(this).index('.header_top_btn')
        $('.top_img').eq(index).show().siblings('.top_img').hide()
    }, function() {
        $('.top_img').hide()
    })

    listAnimateShow($(".header_top_ani"), "animated fadeInDown");
    listAnimateShow($(".nav li"), "animated fadeInRight");
    listAnimateShow($(".header_logo"), "animated fadeInLeft");
    var obAll_1 = [
        [$(".mobile_menu"), "animated fadeInUp"],
    ];

    moreAnimate(1, obAll_1);


    $(".first img").css({ 'animation-delay': (i / 10) + 's' });


    $(window).scroll(function() {
        var obAll_0 = [
            [$(".header_top_ani"), "animated fadeInDown"],
            [$(".nav li"), "animated fadeInRight"],
            [$(".mobile_menu"), "animated fadeInUp"],
            [$(".header_logo"), "animated fadeInLeft"],

            [$(".footer_left"), "animated fadeInLeft"],
            [$(".footer_center"), "animated fadeInUp"],
            [$(".footer_right"), "animated fadeInRight"]
        ];
        moreAnimate(0, obAll_0);

    });

    $('.mobile_menu').click(function() {
        $('.nav ul').slideToggle();
    })

})

///////////////多组"元素出现动画"循环遍历

function moreAnimate(situate, group) {
    if (situate == 0) {
        for (i = 0; i < group.length; i++) {
            animateShow(group[i][0], group[i][1]);
        }
    } //在$(window).scroll（）方法内部时
    else if (situate == 1) {
        for (i = 0; i < group.length; i++) {
            group[i][0].addClass(group[i][1]);
        }
    } //在$(window).scroll（）方法外部时(不需判断是否在可视区域内，页面加载就启动)
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
    } else {
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