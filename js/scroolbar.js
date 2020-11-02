$(document).ready(function () {
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
        .addIndicators()
        .addTo(controller)

    var scroolbar2 = new ScrollMagic.Scene({
        triggerElement: '#key02',
        // duration: `100%`,
    })
        .on('enter', function () {
            console.log('02')
        })
        .setClassToggle('#icon02', 'on')
        .addIndicators()
        .addTo(controller)

    var scroolbar2 = new ScrollMagic.Scene({
        triggerElement: '#key03',
        // duration: `100%`,
    })
        .on('enter', function () {
            console.log('03')
        })
        .setClassToggle('#icon03', 'on')
        .addIndicators()
        .addTo(controller)
    var scroolbar2 = new ScrollMagic.Scene({
        triggerElement: '#key04',
        // duration: `100%`,
    })
        .on('enter', function () {
            console.log('04')
        })
        .setClassToggle('#icon04', 'on')
        .addIndicators()
        .addTo(controller)
    var scroolbar2 = new ScrollMagic.Scene({
        triggerElement: '#key05',
        // duration: `100%`,
    })
        .on('enter', function () {
            console.log('05')
        })
        .setClassToggle('#icon05', 'on')
        .addIndicators()
        .addTo(controller)
})
