// 電影介紹 頁面 推薦電影 slick 輪播設定

$(document).ready(function () {
    $('.single-item').slick({
        autoplay: true, //自動撥放
        autoplaySpeed: 1500, //自動撥放秒數
        centerMode: true, //左右縮起來
        slidesToShow: 5, //頁面顯示幾張
        // slidesToScroll: 4,
        swipeToSlide: true, //可以左右自由滑動
        infinite: true, //持續輪播
        dots: true, //黑點點
        arrows: false, //關閉 左右箭頭
        responsive: [
            //事件條件
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: true,

                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,

                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,

                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    centerMode: true,

                    slidesToShow: 1,
                },
            },
        ],
    })
})
