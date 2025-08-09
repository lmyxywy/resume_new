/// <reference path="jquery.min.js" />
/// <reference path="Ytool_1.0.js" />

$(function () {


    (function () {

        var Y = new Ytool();

        /////////////////////////////////////////////////////////////////////页面加载之后css3动画效果

        Y.listAnimateShow($(".nav li"), "animated fadeInRightBig");

        var obAll_1 = [
                    [$(".header_left"), "animated fadeInLeftBig"],
                    [$(".nav"), "animated fadeInRightBig"],
                    [$(".mobile_menu_btn"), "animated fadeInRightBig"],
                    [$(".inpage_top_img"), "animated fadeInDown"],
                    [$(".remind .time"), "animated fadeInLeftBig"],
                    [$(".remind .notice"), "animated fadeInUpBig"],
                    [$(".remind .search"), "animated fadeInRightBig"],
                    [$(".footer"), "animated fadeInUp"],
                    [$(".footer_relevant"), "animated fadeInLeftBig"],
                    [$(".footer_intro"), "animated fadeInRightBig"]
        ];
        Y.moreAnimate(1, obAll_1);

        ///////////////////////////////////滚动鼠标滚轮触发

        $(window).scroll(function () {

            Y.navFixed($(".header"), "header_fixed");


            var obAll_0 = [
                    [$(".first_img"), "animated fadeInUp"],
                    [$(".footer"), "animated fadeInUp"],
                    [$(".footer_relevant"), "animated fadeInLeftBig"],
                    [$(".footer_intro"), "animated fadeInRightBig"]
            ];
            Y.moreAnimate(0, obAll_0);
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




    }())
})

