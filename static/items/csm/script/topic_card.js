/// <reference path="jquery-1.7.2.min.js" />
/// <reference path="Ytool_1.0_new.js" />
$(function () {


    var Y = new Ytool();

    ////////////////////////////////////////////锚点定位

    Y.anchorBuff($(".anchor_btn"), $(".anchor_top"), $(".anchor_ob"), "card_nav_hover", 0);


    //////////////////////////////////////////游在吉林 tab按钮


    Y.tabGene($(".card_tab_btn"), $(".card_tab_body"), "card_tab_checked");

    ///////////////////////////////////移动端导航按钮控制

    $(".mobile_menu_btn").click(function () {
        if ($(".card_nav ul").css("display") == "none") {
            $(".card_nav ul").slideDown();
        }
        else {
            $(".card_nav ul").slideUp();
        }
    });


    /////////////////////////////////////////////////////////////////////页面加载之后css3动画效果

    Y.listAnimateShow($(".card_nav li"), "animated fadeInLeft");
    Y.listAnimateShow($(".card_left_icon li"), "animated fadeInRight");


    var obAll_1 = [
            [$(".card_logo"), "animated fadeInRight"],
            [$(".card_title").eq(0), "animated fadeInDown"],
            [$(".card_content").eq(0), "animated fadeInUp"],
            [$(".card_content").eq(8), "animated fadeInDown"]
    ];
    Y.moreAnimate(1, obAll_1);

    $(window).scroll(function () {
        var obAll_0 = [
            [$(".card_title").eq(0), "animated fadeInDown"],
            [$(".card_content").eq(0), "animated fadeInUp"],
            [$(".card_content").eq(1), "animated fadeInDown"],
            [$(".card_content").eq(2), "animated fadeInDown"],
            [$(".card_content").eq(3), "animated fadeInDown"],
            [$(".card_content").eq(4), "animated fadeInDown"],
            [$(".card_content").eq(5), "animated fadeInDown"],
            [$(".card_content").eq(6), "animated fadeInDown"],
            [$(".card_content").eq(7), "animated fadeInDown"],
            [$(".card_content").eq(8), "animated fadeInDown"]
        ];
        Y.moreAnimate(0, obAll_0);


    });
})