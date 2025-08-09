/// <reference path="jquery.min.js" />
/// <reference path="common.js" />
$(function () {

    /////////////////////////////////////////////////////////////////////页面加载之后css3动画效果

    var obAll_1 = [
                [$(".listpage_tittle"), "animated fadeInRight"],
                [$(".detail_tittle"), "animated fadeInLeft"],
                [$(".detail_intro"), "animated fadeInRight"],
                [$(".detail_content"), "animated fadeInUp"]
    ];
    moreAnimate(1, obAll_1);
})