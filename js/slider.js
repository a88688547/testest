;(function () {
    var nameArray = ['花木蘭', '怪胎', '天能', '倒數反擊', '全面啟動', '粽邪']
    var nameElems = document.getElementsByClassName('name')[0]
    nameElems.innerText = nameArray[0]

    var linkArray = [
        'https://www.youtube.com/watch?v=l1PEdUDXsUM',
        'https://www.youtube.com/watch?v=llvRuUHy36M',
        'https://www.youtube.com/watch?v=S_oz6u_3tEs',
        'https://www.youtube.com/watch?v=Tpeix_F1aIM&feature=emb_title',
        'https://www.youtube.com/watch?v=WJdA7qJth14',
        'https://www.youtube.com/watch?v=r4Yip1mCUGk',
    ]
    var linkElems = document.getElementsByClassName('link')[0]
    linkElems.href = linkArray[0]

    // var main2Array = [
    //     '../image/index/main2_banner_01.jpg',
    //     '../image/index/main2_banner_02.jpg',
    //     '../image/index/main2_banner_03.jpg',
    //     '../image/index/main2_banner_04.jpg',
    //     '../image/index/main2_banner_05.jpg',
    //     '../image/index/main2_banner_06.jpg',
    // ]
    // var main2Elems = Document.getElementsByClassName('main2')[0]

    var textArray = [
        '迪士尼《花木蘭》真人電影，根據動畫劇情改編，戰場毋須分雌雄，集美貌與力量的巾幗英雄，描述中國女孩木蘭代父從軍的故事。中國女演員劉亦菲將飾演花木蘭。',
        '《怪胎》是一部屬於時下男女愛情觀點作品，廖明毅結合奇幻與寫實的手法，運用iPhone的獨特攝影鏡頭。男女主角由林柏宏、謝欣穎，全新戀人組合，以及特別演出的張少懷加入演出陣容。',
        '時間將至。克里斯多福諾蘭編導，卡司羅伯派汀森、約翰大衛華盛頓主演。這不是時空旅行，而是逆轉未來。全新主角必須僅靠一個字「天能」，在順向與逆轉的時空中，為地球全人類的存亡誓死奮戰。',
        '連恩尼遜主演，想洗心革面的海軍陸戰隊退役拆彈專家湯姆，被貪圖鉅款的兩位FBI探員誣陷，為了找回屬於自己的清白，湯姆決定奮力一搏誓死反擊，讓罪有應得的FBI探員付出慘痛的代價！。',
        '你的心智就是犯罪現場！你創造夢境世界，你將目標對象帶入那個夢，他們則用自己的秘密填滿它...克里斯多福諾蘭編導力作。神偷唐姆柯比的偷竊行動是潛入客戶的潛意識，將最不可告人的機密手到擒來。',
        '繼《紅衣小女孩》後又一正宗台灣恐怖片鉅作！百年傳統儀式台灣神秘習俗「送肉粽」搬上大銀幕！拍奇異風俗影片直播的家維，為籌措結婚基金，決定與好友阿怪拍攝神秘的送肉粽儀式，沒想到卻接二連三的災厄...。',
    ]
    var strElems = document.getElementsByClassName('str')[0]
    strElems.innerText = textArray[0]

    setInterval(function () {
        var elems = document.getElementsByClassName('pics')
        var b = elems.item(0).className
        elems.item(0).className = elems.item(1).className
        elems.item(1).className = elems.item(2).className
        elems.item(2).className = elems.item(3).className
        elems.item(3).className = elems.item(4).className
        elems.item(4).className = elems.item(5).className
        elems.item(5).className = b

        var nowIndex = parseInt(b.split(' ')[1].slice(-1))
        // console.log(nowIndex)
        strElems.innerText = textArray[nowIndex === 6 ? 0 : nowIndex]

        nameElems.innerText = nameArray[nowIndex === 6 ? 0 : nowIndex]

        // main2Elems.body.style.backgroundImage = URL(main2Array)[nowIndex === 6 ? 0 : nowIndex]

        linkElems.href = linkArray[nowIndex === 6 ? 0 : nowIndex]
    }, 4000)
})()
