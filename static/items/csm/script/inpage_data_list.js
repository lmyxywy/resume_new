/// <reference path="jquery.min.js" />
/// <reference path="Ytool_1.0.js" />
$(function () {

    var Y = new Ytool();

    $(".inpage_row").click(function () {
        var btnIndex = parseInt($(this).index(".inpage_row"));
        $(".inpage_list_ul").eq(btnIndex).slideToggle();
    });

})