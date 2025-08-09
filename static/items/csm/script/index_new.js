/// <reference path="jquery-1.7.2.min.js" />
/// <reference path="Ytool_1.0_new.js" />
$(function () {

    (function () {

        /////////////////////////////////////////////////////////////////////页面加载之后css3动画效果

        var Y = new Ytool();


        ////////////////////////////////////////////////////tab按钮切换

        Y.tabGene($(".tab_btn_1"), $(".tab_body_1"), "tittle_checked_1");
        Y.tabGene($(".tab_btn_2"), $(".tab_body_2"), "tittle_checked_2");
        Y.tabGene($(".tab_btn_3"), $(".tab_body_3"), "tittle_checked_1");
        Y.tabGene($(".tab_btn_4"), $(".tab_body_4"), "tittle_checked_1");
        Y.tabGene($(".tab_btn_5"), $(".tab_body_5"), "tittle_checked_1");
        Y.tabGene($(".tab_btn_22"), $(".tab_body_22"), "tittle_checked_2");
        Y.tabGene($(".tab_btn_23"), $(".tab_body_23"), "second_nav_7_tab_tittle");


        $(".inves.inves_main").hover(function () {
            $(".inves_body").slideDown();
        }, function () {

            $(".inves_body").slideUp();
        });


        //////////////////////////////////////////////////轮播图插件swiper启动器



        //////////////////图片新闻轮播
        //var pic_news = new Swiper('.pic_news.tab_body_1 .swiper-container', {
        //    pagination: '.pic_news.tab_body_1 .pagination',
        //    paginationClickable: true,
        //    loop: true,
        //    autoplay: 3000,
        //});

        //$('.pic_news.tab_body_1 .arrow-left').on('click',function (e) {
        //    e.preventDefault()
        //    pic_news.swipePrev()
        //})
        //$('.pic_news.tab_body_1 .arrow-right').on('click', function (e) {
        //    e.preventDefault()
        //    pic_news.swipeNext()
        //})

        //////////////////专题活动轮播
        //var activity = new Swiper('.activity .swiper-container', {
        //    pagination: '.activity .pagination',
        //    paginationClickable: true,
        //    loop: true,
        //    autoplay: 3000,
        //});



    }())

    ///////////////////////////////////手机端flash大小

    if (screen.width < 768) {
        $("#flash").attr({"width":"200","height":"80"});
    }
    
})