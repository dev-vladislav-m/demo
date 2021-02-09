function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});


window.onload = function(event) {

    let slides_show = +document.getElementById('show-slides').value;
    let slides = document.querySelectorAll('.slides .slide');
    let slides_wrapper = document.querySelector('.slides-wrapper');
    let show_slide_index_last = slides_show - 1;

    let slides_to_show = [];

    for (let i = 0; i < slides_show; i++) {
        slides_wrapper.appendChild( slides[i] );
        slides_to_show.push( slides[i] );
    }

    setInterval(function() {

        if ( show_slide_index_last + 1 >= slides.length )
            show_slide_index_last = 0;
        else show_slide_index_last++;

        slides_to_show.pop();
        slides_to_show.unshift( slides[show_slide_index_last] );

        let html = '';
        for (let i = 0; i < slides_to_show.length; i++) {
            html += slides_to_show[i].outerHTML;
        }

        slides_wrapper.classList.add('reload');
        slides_wrapper.innerHTML = html;

        setTimeout(function() {
            slides_wrapper.classList.remove('reload');
        }, 400);

        if ( show_slide_index_last + 1 >= slides.length )
            document.querySelector('.selected-slider-item')
                .innerHTML = slides[0].innerHTML;
        else 
            document.querySelector('.selected-slider-item')
                .innerHTML = slides[show_slide_index_last + 1].innerHTML;
            

    }, 2000);

}