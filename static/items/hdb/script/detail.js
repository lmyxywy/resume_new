/// <reference path="jquery.min.js" />
/// <reference path="common.js" />
$(function () {

    (function () {

        var Y = new Ytool();

        /////////////////////////////////////////////////////////////////////iframe高度自适应（id需对应上）

        $("#iframepage").load(function () {
            var mainheight = $(this).contents().find("body").height();
            $(this).height(mainheight);
        });

        /////////////////////////////////////////////////////////////////////页面加载之后css3动画效果

        var obAll_1 = [
                    [$(".detail_tittle"), "animated fadeInLeftBig"],
                    [$(".detail_intro"), "animated fadeInRightBig"],
                    [$(".inpage_form_intro"), "animated fadeInLeftBig"],
                    [$(".detail_content"), "animated fadeInUpBig"]
        ];
        Y.moreAnimate(1, obAll_1);





    }())
})