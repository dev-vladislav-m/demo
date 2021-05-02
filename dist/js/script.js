window.onload = function() {

    //Класс слайда
    class Slide {
        constructor(title, desc, price, img, imgMin) {
            this.title = title;
            this.desc = desc;
            this.price = price;
            this.img = img;
            this.imgMin = imgMin;
        }
    }

    //Парсим файл и создаем объекты
    let slidesData = JSON.parse(data);
    let slidesList = [];
    slidesData.forEach((el) => {
        slidesList.push(new Slide(el.title, el.desc, el.price, el.img, el.imgMin));
    });

    //Получаем день недели
    let day = new Date().getDay();
    if (day == 0)
        day = 7;

    //Добавляем слайды
    let slideWrap = document.querySelector('.s1__slides');
    slidesList.forEach((el) => {
        slideWrap.innerHTML += `
            <div class="s1__slide">
                <div class="fb s1__slide-wrap">
                    <div class="s1__slide-info">
                        <h3 class="s1__slide-title">${el.title}</h3>
                        <div class="s1__slide-desc">
                            ${el.desc}             
                        </div>              
                        <div class="s1__slide-price">
                            <p class="s1__slide-sales">${el.price}</p>
                            <p class="s1__slide-currency">грн</p>
                        </div>
                    </div>
                    <div class="s1__slide-img">
                        <picture>
                            <source srcset="./img/${el.img}.webp" type="image/webp">
                            <img src="./img/${el.img}.png" alt="">
                        </picture>
                    </div>
                </div>
            </div>
        `;
    });


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

}