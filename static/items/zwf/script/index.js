/// <reference path="jquery.min.js" />
/// <reference path="Ytool_1.0.js" />
$(function () {

    (function () {

        /////////////////////////////////////////////////////////////////////页面加载之后css3动画效果

        var Y = new Ytool();

        var obAll_1 = [
                    [$(".first_img"), "animated fadeInUp"]
        ];

        Y.moreAnimate(1, obAll_1);

        ///////////////////////////////////滚动鼠标滚轮触发

        $(window).scroll(function () {

            Y.navFixed($(".header"), "header_fixed");

            Y.listAnimateShow($(".news li"), "animated fadeInLeft");
            Y.listAnimateShow($(".open li"), "animated fadeInUpBig");
            Y.listAnimateShow($(".communi li"), "animated fadeInUpBig");
            Y.listAnimateShow($(".btn_group li"), "animated fadeInRightBig");
            Y.listAnimateShow($(".spot_btns li"), "animated fadeInRightBig");

            var obAll_0 = [
                [$(".newsAndOpen"), "animated fadeInLeftBig"],
                [$(".video"), "animated fadeInRightBig"],
                [$(".three_block"), "animated fadeInUp"],
                [$(".three_block"), "animated fadeInUp"],
                [$(".btn_group"), "animated fadeInUp"],
                [$(".activity"), "animated fadeInUp"],
                [$(".spot"), "animated fadeInLeftBig"],
                [$(".photo"), "animated fadeInRightBig"],
                [$(".three_items"), "animated fadeInLeftBig"],
                [$(".tour_tittle"), "animated fadeInRightBig"],
                [$(".tour_tittle_triangle"), "animated fadeInRightBig"],
                [$(".tour_content"), "animated fadeInLeftBig"]
            ];
            Y.moreAnimate(0, obAll_0);
        });

        //////////////////////////////////////////////////旅游景点图片切换

        spotImgShow();
        function spotImgShow() {
            $(".spot_img a").eq(0).css({ "display": "block" });
            $(".spot_btns li").mouseover(function () {
                var index = parseInt($(this).index());

                $(".spot_img a").eq(index).css({ "display": "block" });

                $(".spot_img a").not(":eq(" + index + ")").css({ "display": "none" });
            });
        }

        //////////////////////////////////////////////////轮播图插件swiper启动器


        ////////////////专题活动轮播
        var activityWrap = new Swiper('.activity .swiper-container', {//////activityWrap需改变
            pagination: '.activity .pagination',//////需改变
            paginationClickable: true,
            loop: true,
            autoplay: 3000,
        });

        $('.activity .arrow-left').on('click', function (e) {//////需改变
            e.preventDefault()
            activityWrap.swipePrev()//////activityWrap需改变
        })
        $('.activity .arrow-right').on('click', function (e) {//////需改变
            e.preventDefault()
            activityWrap.swipeNext()//////activityWrap需改变
        })


    }())

    
})