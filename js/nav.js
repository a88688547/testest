// Js控制網頁滑動的時候頂部導航條變成半透明

function _scroll() {
    var scrollTop = $(window).scrollTop()
    if (scrollTop < 10) {
        $('header').css('opacity', 1)
    } else {
        $('header').css('opacity', 0.99)
    }
}
$(window).on('scroll', function () {
    _scroll()
})

// 漢堡圖示 點擊時 切換Class 名稱
// 以及 選單向下滑出
$(document).ready(function () {
    $('.hamburg_btn').click(function () {
        $(this).toggleClass('btn-on')
        $('.hamburg_ul').slideToggle(300)
    })
})
// 會員圖示 點擊時  選單向下滑出

// $(document).ready(function () {
//     $('.member_btn').click(function () {
//         // $(this).toggleClass("btn-on");
//         $('.member_ul').slideToggle(300)
//     })
// })
