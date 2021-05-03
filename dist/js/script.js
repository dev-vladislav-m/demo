window.onload = function() {

    //Класс слайда
    class Slide {
        constructor(title, desc, oldprice, price, img, imgMin, bg) {
            this.title = title;
            this.desc = desc;
            this.oldprice = oldprice;
            this.price = price;
            this.img = img;
            this.imgMin = imgMin;
            this.bg = bg;
        }
    }

    //Парсим файл и создаем объекты
    let slidesData = JSON.parse(data);
    let slidesList = [];
    slidesData.forEach((el) => {
        slidesList.push(new Slide(el.title, el.desc, el.oldprice, el.price, el.img, el.imgMin, el.bg));
    });

    //Получаем день недели
    let day = new Date().getDay();
    if (day == 0)
        day = 7;

    //Добавляем фон
    const bg = document.querySelector('.hero__bg');
    bg.innerHTML += `
        <picture>
            <source srcset="./img/${slidesList[day - 1].bg}.svg" type="image/webp">
            <img src="./img/${slidesList[day - 1].bg}.svg" alt="">
        </picture>
    `;
    fadeIn(".hero__bg");
    
    //Добавление миниатюр
    const slidePrevs = document.querySelector('.s1__slide-list');
    for (var i = day - 1; i < day + 2; i++) {
        slidePrevs.innerHTML += `
            <div class="s1__slide-item">
                <picture>
                    <source srcset="./img/${slidesList[i].imgMin}.webp" type="image/webp">
                    <img src="./img/${slidesList[i].imgMin}.png" alt="">
                </picture>
            </div>
        `;
    }

    //Добавление слайдов
    let slideWrap = document.querySelector('.s1__slides');
    for (var i = day - 1; i < day + 2; i++) {
        slideWrap.innerHTML += `
            <div class="s1__slide">
                <div class="s1__slide-wrap">
                    <div class="fb s1__slide-info">
                        <h3 class="s1__slide-title">${slidesList[i].title}</h3>
                        <div class="s1__slide-desc">
                            ${slidesList[i].desc}             
                        </div>              
                        <div class="s1__slide-price">
                            <div class="fb s1__slide-sales"><p>${slidesList[i].price}</p></div>
                            <div class="fb s1__slide-currency"><p>грн</p></div>
                        </div>
                        <div class="s1__slide-old-price">
                            <p class="fb">${slidesList[i].oldprice}</p>
                        </div>
                    </div>
                    <div class="s1__slide-img">
                        <picture>
                            <source srcset="./img/${slidesList[i].img}.webp" type="image/webp">
                            <img src="./img/${slidesList[i].img}.png" alt="">
                        </picture>
                    </div>
                </div>
            </div>
        `;
    }


    //Переключение слайдов
    let slidesHtml = document.querySelectorAll('.s1__slide'),
        slidesPrew = document.querySelectorAll('.s1__slide-item');

    slidesHtml[0].classList.add('active');
    slidesPrew[0].classList.add('active');

    slidesPrew.forEach((item, indexDot) => {
        item.addEventListener('click', () => {
            index = indexDot;
            activeSlide(index)
        })
    })

    const activeSlide = n  => {
        for(slide of slidesHtml)
            slide.classList.remove('active');
        for(prew of slidesPrew)
            prew.classList.remove('active');
        slidesHtml[n].classList.add('active');
        slidesPrew[n].classList.add('active');
    }

    //Анимация
    function fadeIn(el) {
        var opacity = 0.01;
        var timer = setInterval(function() {
            if(opacity >= 1) {
                clearInterval(timer);
            }
            document.querySelector(el).style.opacity = opacity;
            opacity += opacity * 0.1;
        }, 10);
    }

}