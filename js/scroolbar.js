$(document).ready(function () {
    // -----------------------------------------------
    // 點擊 側邊攔 會滾動
    $("a[href^='#']").click(function (e) {
        e.preventDefault()

        var position = $($(this).attr('href')).offset().top

        $('body, html').animate(
            {
                scrollTop: position - 80.8,
            },
            500
        )
        console.log(position)
    })

    // -----------------------------------------------
    // -------------scrollmagic 效果------------------
    // var controller = new ScrollMagic.Controller()
    var controller = new ScrollMagic.Controller()

    var scroolbar1 = new ScrollMagic.Scene({
        triggerElement: '#key01',
        // duration: `100%`,
    })
        .on('enter', function () {
            console.log('01')
        })
        .setClassToggle('#icon01', 'on')
        // .addIndicators()
        .addTo(controller)

    var scroolbar2 = new ScrollMagic.Scene({
        triggerElement: '#key02',
        // duration: `100%`,
    })
        .on('enter', function () {
            console.log('02')
        })
        .setClassToggle('#icon02', 'on')
        // .addIndicators()
        .addTo(controller)

    var scroolbar2 = new ScrollMagic.Scene({
        triggerElement: '#key03',
        // duration: `100%`,
    })
        .on('enter', function () {
            console.log('03')
        })
        .setClassToggle('#icon03', 'on')
        // .addIndicators()
        .addTo(controller)
    var scroolbar2 = new ScrollMagic.Scene({
        triggerElement: '#key04',
        // duration: `100%`,
    })
        .on('enter', function () {
            console.log('04')
        })
        .setClassToggle('#icon04', 'on')
        // .addIndicators()
        .addTo(controller)
    var scroolbar2 = new ScrollMagic.Scene({
        triggerElement: '#key05',
        // duration: `100%`,
    })
        .on('enter', function () {
            console.log('05')
        })
        .setClassToggle('#icon05', 'on')
        // .addIndicators()
        .addTo(controller)
    // --------------------------------------------------------------------
    setInterval(resizecheck, 500) //設定定時器 每0.5秒做 高度確認

    function resizecheck() {
        var h1 = $('.section_1').height()
        var h2 = $('.section_2').height()
        var h3 = $('.section_3').height()
        var h4 = $('.section_4').height()
        var h5 = $('.section_5').height()

        //   重新定義 scrollbar 設定

        var controller = new ScrollMagic.Controller()

        var scroolbar1 = new ScrollMagic.Scene({
            triggerElement: '#key01',
            duration: h1,
        })
            .on('enter', function () {
                console.log('01')
            })
            .setClassToggle('#icon01', 'on')
            // .addIndicators()
            .addTo(controller)

        var scroolbar2 = new ScrollMagic.Scene({
            triggerElement: '#key02',
            duration: h2,
        })
            .on('enter', function () {
                console.log('02')
            })
            .setClassToggle('#icon02', 'on')
            // .addIndicators()
            .addTo(controller)

        var scroolbar2 = new ScrollMagic.Scene({
            triggerElement: '#key03',
            duration: h3,
        })
            .on('enter', function () {
                console.log('03')
            })
            .setClassToggle('#icon03', 'on')
            // .addIndicators()
            .addTo(controller)
        var scroolbar2 = new ScrollMagic.Scene({
            triggerElement: '#key04',
            duration: h4,
        })
            .on('enter', function () {
                console.log('04')
            })
            .setClassToggle('#icon04', 'on')
            // .addIndicators()
            .addTo(controller)
        var scroolbar2 = new ScrollMagic.Scene({
            triggerElement: '#key05',
            duration: h5,
        })
            .on('enter', function () {
                console.log('05')
            })
            .setClassToggle('#icon05', 'on')
            // .addIndicators()
            .addTo(controller)
    }
})
