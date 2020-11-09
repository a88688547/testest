$(document).ready(function () {
    //  點擊 登入按鈕 進行 帳號 密碼 確認

    $('#login').click(function () {
        $('#feedback').text('')
        if ($('#login').text() == '註冊') {
            $('.feedback_acc').text('')
            $('.feedback_pass').text('')
            $('.feedback_pass').text('很抱歉，目前尚未開放新會員註冊，請密切注意官網資訊。')
            return false
        } else if ($('#account').val() == '') {
            $('.feedback_acc').text('')
            $('.feedback_pass').text('')
            $('.feedback_acc').text('請填入帳號 !!!')
            console.log('請填入帳號')
            return false
        } else if ($('#password').val() == '') {
            $('.feedback_acc').text('')
            $('.feedback_pass').text('')
            $('.feedback_pass').text('請填入密碼 !!!')
            console.log('請填入密碼')
            return false
        } else if ($('#account').val() != 'ced101') {
            $('.feedback_acc').text('')
            $('.feedback_pass').text('')
            $('.feedback_acc').text('帳號錯誤 !!!')
            console.log('帳號錯誤')
            return false
        } else if ($('#password').val() != 'ced101') {
            $('.feedback_acc').text('')
            $('.feedback_pass').text('')
            $('.feedback_pass').text('密碼錯誤 !!!')
            console.log('密碼錯誤')
            return false
        } else if ($('#account').val() == 'ced101' && $('#password').val() == 'ced101') {
            $('#account').val('')
            $('#password').val('')
            $('.feedback_acc').text('')
            $('.feedback_pass').text('')
            $('.light_box').hide()
            console.log('登入成功')
        }
    })
    // light_box 點擊 XX 關閉
    $('.close_img > img').click(function () {
        $('#account').val('')
        $('#password').val('')
        $('.feedback_acc').text('')
        $('.feedback_pass').text('')
        $('.light_box').hide()

        console.log('關閉light_box')
    })
    // 點擊 會員圖示/文字 打開 light_box 區域
    $('.member_btn > i').click(function () {
        $('.light_box').show()
    })
    $('.login').click(function () {
        $('.feedback_acc').text('')
        $('.feedback_pass').text('')
        $('.type_box > div').removeClass('type_on')
        $('.loginbtn').addClass('type_on')
        $('#login').text('登入')
        $('.light_box').show()
    })
    $('.signin').click(function () {
        $('.feedback_acc').text('')
        $('.feedback_pass').text('')
        $('.type_box > div').removeClass('type_on')
        $('.signinbtn').addClass('type_on')
        $('#login').text('註冊')
        $('.light_box').show()
    })

    // 註冊 及 登入 功能切換
    $('.signinbtn').click(function () {
        $('.feedback_acc').text('')
        $('.feedback_pass').text('')
        $('.type_box > div').removeClass('type_on')
        $(this).addClass('type_on')
        $('#login').text('註冊')
    })
    $('.loginbtn').click(function () {
        $('.feedback_acc').text('')
        $('.feedback_pass').text('')
        $('.type_box > div').removeClass('type_on')
        $(this).addClass('type_on')
        $('#login').text('登入')
    })
})
