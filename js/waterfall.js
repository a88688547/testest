$(function () {
    let width = $(window).width()
    if (width > 768) {
        //Trigger layout after each image loads and initialise Mansonry
        $('#waterfallArea').imagesLoaded(function () {
            $('#waterfallArea').masonry({
                itemSelector: '.content_box',
                columnWidth: 5, //gap
                animate: true,
                horizontalOrder: true,
                originTop: true,
            })
        })

        //Fade Out the loading screen when all images loaded
        $('#waterfallArea')
            .imagesLoaded()
            .always(function (instance) {
                $('.loadingScreen').fadeOut()
            })
    } else {
        return false
    }

    window.onresize = function () {
        let width = $(window).width()

        if (width > 768) {
            console.log('0 0')
            //Trigger layout after each image loads and initialise Mansonry
            $('#waterfallArea').imagesLoaded(function () {
                $('#waterfallArea').masonry({
                    itemSelector: '.content_box',
                    columnWidth: 5, //gap
                    animate: true,
                    horizontalOrder: true,
                    originTop: true,
                })
            })

            //Fade Out the loading screen when all images loaded
            $('#waterfallArea')
                .imagesLoaded()
                .always(function (instance) {
                    $('.loadingScreen').fadeOut()
                })
        } else {
            return false
        }
    }
})
