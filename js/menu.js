var nav = document.querySelectorAll('nav div');

for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener('click', function () {
        getText(i)
    })
}

var arr = [
    [{
        title: '爱媛38号果冻橙',
        text: '￥69.9',
        img: 'images/1.jpg'
    },
    {
        title: '山东烟台红富士苹果',
        text: '￥49.9',
        img: 'images/2.jpg'
    },
    ],
    [{
        title: '泰国金枕榴莲',
        text: '￥299',
        img: 'images/3.jpg'
    },
    {
        title: '越南红心火龙果',
        text: '￥48.8',
        img: 'images/4.jpg'
    },
    ],
    [{
        title: '四川浦江猕猴桃',
        text: '￥31.8',
        img: 'images/5.jpg'
    },
    {
        title: '翠香猕猴桃',
        text: '￥53.8',
        img: 'images/6.jpg'
    },
    ]
]

var json1 = JSON.stringify(arr[0])
var json2 = JSON.stringify(arr[1])
var json3 = JSON.stringify(arr[2])

var menuImg = document.querySelectorAll('.menu_img img')
var menuTitle = document.querySelectorAll('.menu_title')
var menuText = document.querySelectorAll('.menu_text')


menuImg[0].src = JSON.parse(json1)[0].img;
menuImg[1].src = JSON.parse(json1)[1].img;
menuTitle[0].innerHTML = JSON.parse(json1)[0].title;
menuTitle[1].innerHTML = JSON.parse(json1)[1].title;
menuText[0].innerHTML = JSON.parse(json1)[0].text;
menuText[1].innerHTML = JSON.parse(json1)[1].text;

function getText(index) {
    console.log(index)
    if (index === 0) {
        menuImg[0].src = JSON.parse(json1)[0].img;
        menuImg[1].src = JSON.parse(json1)[1].img;
        menuTitle[0].innerHTML = JSON.parse(json1)[0].title;
        menuTitle[1].innerHTML = JSON.parse(json1)[1].title;
        menuText[0].innerHTML = JSON.parse(json1)[0].text;
        menuText[1].innerHTML = JSON.parse(json1)[1].text;
    }
    else if (index === 1) {
        menuImg[0].src = JSON.parse(json2)[0].img;
        menuImg[1].src = JSON.parse(json2)[1].img;
        menuTitle[0].innerHTML = JSON.parse(json2)[0].title;
        menuTitle[1].innerHTML = JSON.parse(json2)[1].title;
        menuText[0].innerHTML = JSON.parse(json2)[0].text;
        menuText[1].innerHTML = JSON.parse(json2)[1].text;
    }
    else if (index === 2) {
        menuImg[0].src = JSON.parse(json3)[0].img;
        menuImg[1].src = JSON.parse(json3)[1].img;
        menuTitle[0].innerHTML = JSON.parse(json3)[0].title;
        menuTitle[1].innerHTML = JSON.parse(json3)[1].title;
        menuText[0].innerHTML = JSON.parse(json3)[0].text;
        menuText[1].innerHTML = JSON.parse(json3)[1].text;
    }
}
