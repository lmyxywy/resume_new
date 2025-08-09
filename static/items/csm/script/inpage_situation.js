/// <reference path="jquery-1.7.2.min.js" />
/// <reference path="Ytool_1.0_new.js" />
$(function () {



        var Y = new Ytool();


    //    ////////////////吉林 概况轮播
    //    var situation_wrap = new Swiper('.situation_wrap .swiper-container', {
    //        pagination: '.situation_wrap .pagination',
    //        paginationClickable: true,
    //        loop: true,
    //        autoplay: 3000,
    //    });

    //////////////////吉林 印象轮播
    //    var situation_block_5_wrap = new Swiper('.situation_block_5_wrap .swiper-container', {
    //        paginationClickable: false,
    //        loop: true,
    //        autoplay: 3000,
    //    });
    //    $('.situation_block_5_wrap .arrow-left').on('click', function (e) {
    //        e.preventDefault()
    //        situation_block_5_wrap.swipePrev()
    //    })
    //    $('.situation_block_5_wrap .arrow-right').on('click', function (e) {
    //        e.preventDefault()
    //        situation_block_5_wrap.swipeNext()
    //    })


        ////////////////////////////////////////////////////tab按钮切换

        Y.tabGene($(".tab_btn_12"), $(".tab_body_12"), "tittle_checked_1");
        Y.tabGene($(".tab_btn_13"), $(".tab_body_13"), "tittle_checked_1");
        Y.tabGene($(".tab_btn_14"), $(".tab_body_14"), "tittle_checked_1");
        Y.tabGene($(".tab_btn_15"), $(".tab_body_15"), "tittle_checked_1");

})