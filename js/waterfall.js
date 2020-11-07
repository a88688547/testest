$(function () {
    setInterval(checkResize, 500) //利用定時器 偵測寬度變化，0.5秒降低效能

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

    function checkResize() {
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
            console.log('QQ')
            return false
        }
    }

    // function checkResize() {
    //     window.onresize = function () {
    //         let width = $(window).width()

    //         if (width >= 768) {
    //             console.log('開啟瀑布流')
    //             //Trigger layout after each image loads and initialise Mansonry
    //             $('#waterfallArea').imagesLoaded(function () {
    //                 $('#waterfallArea').masonry({
    //                     itemSelector: '.content_box',
    //                     columnWidth: 5, //gap
    //                     animate: true,}
    //                     horizontalOrder: true,
    //                     originTop: true,
    //                 })
    //             })

    //             //Fade Out the loading screen when all images loaded
    //             $('#waterfallArea')
    //                 .imagesLoaded()
    //                 .always(function (instance) {
    //                     $('.loadingScreen').fadeOut()
    //                 })
    //         } else {
    //             return false
    //         }
    //     }
    // }

    let box = document.querySelectorAll('.content_box')

    for (i = 0; i < box.length; i++) {
        $(box[i])
            .addClass('animate__animated animate__flipInY')
            .css('animation-delay', i * 0.25 + 's')
    }
})
