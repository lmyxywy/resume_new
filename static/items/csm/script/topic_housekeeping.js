/// <reference path="jquery-1.7.2.min.js" />
/// <reference path="Ytool_1.0_new.js" />
$(function () {
    $(".hk_second_nav").hide();
    $(".hk_nav_li").hover(function () {
        var index = parseInt($(this).index(".hk_nav_li"));
        $(".hk_second_nav").eq(index).slideDown();

        $(".hk_second_nav").not(":eq("+index+")").slideUp();
    }, function () {

        $(".hk_second_nav").slideUp();
    });

    ///////////////////////////////////////////////////////按钮组

    $(".hk_btns li a").eq(0).addClass("hk_btns_checked");
    $(".hk_btns li a").hover(function () {
        var index = parseInt($(this).index(".hk_btns li a"));

        $(".hk_btns li a").eq(index).addClass("hk_btns_checked");
        $(".hk_btns li a").not(":eq(" + index + ")").removeClass("hk_btns_checked");

    });

    ////////////////图片新闻轮播

    var hk_wrap = new Swiper('.hk_wrap .swiper-container', {
        pagination: '.hk_wrap .pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 3000
    });

    $('.hk_wrap .arrow-left').on('click', function (e) {
        e.preventDefault()
        hk_wrap.swipePrev()
    })
    $('.hk_wrap .arrow-right').on('click', function (e) {
        e.preventDefault()
        hk_wrap.swipeNext()
    })
})