/// <reference path="jquery.min.js" />
/// <reference path="common.js" />
$(function () {
    (function () {
        var Y = new Ytool();

        Y.listAnimateShow($(".listpage_left li"), "animated fadeInLeftBig");
        Y.listAnimateShow($(".listpage_right li"), "animated fadeInRightBig");

        /////////////////////////////////////////////////////////////////////页面加载之后css3动画效果

        var obAll_1 = [
                    [$(".listpage_tittle"), "animated fadeInLeftBig"],
                    [$(".listpage_left"), "animated fadeInLeft"],
                    [$(".listpage_right"), "animated fadeInRight"],
                    [$(".list_write_btn"), "animated fadeInRightBig"]
        ];
        Y.moreAnimate(1, obAll_1);



    }())

    
})