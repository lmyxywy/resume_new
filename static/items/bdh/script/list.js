/// <reference path="jquery.min.js" />
/// <reference path="common.js" />
$(function () {


    listAnimateShow($(".listpage_left li"), "animated fadeInLeft");
    listAnimateShow($(".listpage_right li"), "animated fadeInRight");

    /////////////////////////////////////////////////////////////////////页面加载之后css3动画效果

    var obAll_1 = [
                [$(".listpage_tittle"), "animated fadeInLeft"],
                [$(".listpage_left"), "animated fadeInLeft"],
                [$(".listpage_right"), "animated fadeInRight"]
    ];
    moreAnimate(1, obAll_1);
})