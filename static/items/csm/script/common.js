/// <reference path="jquery.min.js" />
/// <reference path="Ytool_1.0.js" />

$(function () {

    /////////////////////////////////////////////////////////头部上面日期显示

    (function showTime() {
        var show_day = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var date = time.getDate();
        var day = time.getDay();
        month < 10 ? month = '0' + month : month;
        date < 10 ? date = '0' + date : date;
        var now_time = year + '-' + month + '-' + date + ' ' + show_day[day] + '';

        $(".header_top_left span").text(now_time);
    }());


        var Y = new Ytool();

        ///////////////////////////////////滚动鼠标滚轮触发

        $(window).scroll(function () {

            /////////////导航固定

            if ($(window).scrollTop() > 100) {
                $(".header_body").addClass("header_fixed");
                $(".second_nav").addClass("second_nav_hide");
            }
            else {
                $(".header_body").removeClass("header_fixed");
                $(".second_nav").removeClass("second_nav_hide");
            }

        });
        //$(".second_nav").show();
        //$(".second_nav_1").show();
        (function secondNav() {


            var isFirst = true;
            var isFirst2 = true;

            $(".nav_whole").hover(function () {
                $(".second_nav").show();

                $(".second_nav_tab").mouseover(function () {

                    var index = parseInt($(this).index(".second_nav_tab"));

                    if (index == 1) {
                        (function doS() {
                            if (isFirst) {
                                //////////////二级导航 市情图片轮播
                                var second_nav_picwrap = new Swiper('.second_nav_picwrap .swiper-container', {
                                    pagination: '.second_nav_picwrap .pagination',
                                    paginationClickable: true,
                                    loop: true,
                                    autoplay: 3000,
                                });
                                isFirst = false;
                            }
                        }())
                    }

                    else if (index == 2) {
                        (function doS2() {
                            if (isFirst2) {
                                ////////////二级导航图片新闻轮播tab_body_8
                                        var second_pic_news = new Swiper('.tab_body_8 .swiper-container', {
                                            pagination: '.tab_body_8 .pagination',
                                            paginationClickable: true,
                                            loop: true,
                                            autoplay: 3000,
                                        });


                                        $('.tab_body_8 .arrow-left').on('click', function (e) {
                                            e.preventDefault()
                                            second_pic_news.swipePrev()
                                        })
                                        $('.tab_body_8 .arrow-right').on('click', function (e) {
                                            e.preventDefault()
                                            second_pic_news.swipeNext()
                                        });

                                        isFirst2 = false;
                            }
                        }())
                    }


                    $(".second_nav_body").not(":eq(" + index + ")").hide();
                    $(".second_nav_body").eq(index).show();
                });

            }, function () {
                $(".second_nav").hide();
            });
        }())
       
       ////////////////////////////////////////////////////footer tab按钮


        Y.tabGene($(".tab_btn_6"), $(".tab_body_6"), "tittle_checked_2");
        Y.tabGene($(".tab_btn_7"), $(".tab_body_7"), "tittle_checked_2");

        $(".tab_body_7").eq(0).hide();
        
        ////////////////////////////////////////////////////二级导航tab按钮切换

        Y.tabGene($(".tab_btn_8"), $(".tab_body_8"), "tittle_checked_1");
        Y.tabGene($(".tab_btn_9"), $(".tab_body_9"), "tittle_checked_2");
        Y.tabGene($(".tab_btn_10"), $(".tab_body_10"), "tittle_checked_2");
        Y.tabGene($(".tab_btn_11"), $(".tab_body_11"), "tittle_checked_1");

        
        

        /////////////////////////////////////二级导航政务四个按钮

        $(".second_nav_4 .second_nav_middle .block_tittle_1 a").hover(function () {
            $(this).addClass("tittle_checked_1").siblings().removeClass("tittle_checked_1");
        });

        

        ////////////////////////////////////////站群导航显示隐藏

        $(".relevant_close_btn").click(function () {
            $(".relevant_body").slideUp();
            $(".relevant_btn").slideDown();
        });
        $(".relevant_block_btn").click(function () {
            $(".relevant_body").slideDown();
            $(".relevant_btn").slideUp();
        });

        //////////////////////站群导航

        $(".relevant_list_one").click(function () {
            var btnIndex = parseInt($(this).index(".relevant_list_one"));
            $(".relevant_list_ul").eq(btnIndex).slideToggle();
        });

        ///////////////////////////////////移动端导航按钮控制

        $(".mobile_menu_btn").click(function () {
            if ($(".nav").css("display") == "none") {
                $(".nav").slideDown();
            }
            else {
                $(".nav").slideUp();
            }
        });

    //////////////////////////////////////////////////轮播图插件swiper启动器


    ////////////////背景大图片轮播
        var bodyBg = new Swiper('.body_bg .swiper-container', {
            paginationClickable: false,
            loop: true,
            autoplay: 8000,
        });
  
})

