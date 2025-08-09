/// <reference path="jquery.min.js" />
$(function () {

    /////////////////////////////////////////////////////////////////////页面加载之后css3动画效果



    var obAll_1 = [
                [$(".first_img"), "animated fadeInUp"]
    ];
    moreAnimate(1, obAll_1);

    ///////////////////////////////////滚动鼠标滚轮触发

    $(window).scroll(function () {

        navFixed($(".header"), "header_fixed");


        var obAll_0 = [
            [$(".news"), "animated fadeInLeft"],
            [$(".video"), "animated fadeInRight"],
            [$(".weibo"), "animated fadeInLeft"],
            [$(".information"), "animated fadeInRight"],
            [$(".activity").eq(0), "animated fadeInUp"],
            [$(".vacation"), "animated fadeInUp"],
            [$(".outdoors"), "animated fadeInLeft"],
            [$(".develop"), "animated fadeInLeft"],
            [$(".blog"), "animated fadeInRight"],
            [$(".activity").eq(1), "animated fadeInUp"], 
            [$(".two_block"), "animated fadeInUp"],
            [$(".partner"), "animated fadeInUp"],
            [$(".contact"), "animated fadeInUp"]
        ];
        moreAnimate(0, obAll_0);
    });

    //////////////////////////////////////////////////轮播图插件swiper启动器

    /////////////新闻轮播
    var newsWrap = new Swiper('.news_wrap .swiper-container', {
        pagination: '.news_wrap .pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 3000,
    });

    $('.news_wrap .arrow-left').on('click', function (e) {
        e.preventDefault()
        newsWrap.swipePrev()
    })
    $('.news_wrap .arrow-right').on('click', function (e) {
        e.preventDefault()
        newsWrap.swipeNext()
    })

    ////////////////专题活动轮播
    var activityWrap = new Swiper('.activity .swiper-container', {
        pagination: '.activity .pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 3000,
    });

    $('.activity .arrow-left').on('click', function (e) {
        e.preventDefault()
        activityWrap.swipePrev()
    })
    $('.activity .arrow-right').on('click', function (e) {
        e.preventDefault()
        activityWrap.swipeNext()
    })
})