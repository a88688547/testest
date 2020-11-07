$(document).ready(function () {
    var controller = new ScrollMagic.Controller()

    var scroolbar1 = new ScrollMagic.Scene({
        triggerElement: '#activity',
        triggerHook: 0.9,
        // duration: `100%`,
    })
        .on('enter', function () {
            $('.activity_item').addClass('animate__animated animate__flipInY')
        })

        // .addIndicators()
        .addTo(controller)
})
