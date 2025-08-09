/// <reference path="jquery-1.7.2.min.js" />
/// <reference path="Ytool_1.0_new.js" />
$(function () {
    $(".detail_font_size_body").hide();
    $(".detail_font_size_btn").click(function () {
        $(".detail_font_size_body").slideToggle();
    });
    $(".detail_font_size_body span").click(function () {
        var index = parseInt($(this).index());
        
        if (index == 0) {
            $(".detail_content").css({ "font-size": "20px" });
            $(".detail_font_size span").eq(0).text("大");
        }
        else if (index == 1) {
            $(".detail_content").css({ "font-size": "18px" });
            $(".detail_font_size span").eq(0).text("中");
        }
        else if (index == 2) {
            $(".detail_content").css({ "font-size": "16px" });
            $(".detail_font_size span").eq(0).text("小");
        }

        $(".detail_font_size_body").slideUp();
    });
})