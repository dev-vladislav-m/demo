var multiItemSlider = (function () {
  return function (selector) {
    var
      _mainElement = document.querySelector(selector), // основный элемент блока
      _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
      _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
      _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
      _sliderControlLeft = _mainElement.querySelector('.slider__control-left'), // кнопка "LEFT"
      _sliderControlRight = _mainElement.querySelector('.slider__control-right'), // кнопка "RIGHT"
      _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
      _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента
      _positionLeftItem = 0, // позиция левого активного элемента
      _transform = 0, // значение трансформации .slider_wrapper
      _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
      _items = []; // массив элементов

      _touchDown = false;
      _touchDownX = 0;

    // наполнение массива _items
    _sliderItems.forEach(function (item, index) {
      _items.push({ item: item, position: index, transform: 0 });
    });

    _items.find(i => i.position === _positionLeftItem + 1).item.classList.add('slider__item_active');

    var position = {
        getItemMin: function () {
            var indexItem = 0;
            _items.forEach(function (item, index) {
            if (item.position < _items[indexItem].position) {
                indexItem = index;
            }
            });
            return indexItem;
        },
        getItemMax: function () {
            var indexItem = 0;
            _items.forEach(function (item, index) {
                if (item.position > _items[indexItem].position) {
                indexItem = index;
                }
            });
            return indexItem;
        },
        getMin: function () {
            return _items[position.getItemMin()].position;
        },
        getMax: function () {
            return _items[position.getItemMax()].position;
        }
    };

    var _transformItem = function (direction) {
        var nextItem;

        _mainElement.querySelector('.slider__item_active').classList.remove('slider__item_active');

        if (direction === 'right') {
          _positionLeftItem++;
          if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
            nextItem = position.getItemMin();
            _items[nextItem].position = position.getMax() + 1;
            _items[nextItem].transform += _items.length * 100;
            _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
          }
          _transform -= _step;
        }
        if (direction === 'left') {
          _positionLeftItem--;
          if (_positionLeftItem < position.getMin()) {
            nextItem = position.getItemMax();
            _items[nextItem].position = position.getMin() - 1;
            _items[nextItem].transform -= _items.length * 100;
            _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
          }
          _transform += _step;
        }

        _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        
        _items.find(i => i.position === _positionLeftItem + 1).item.classList.add('slider__item_active');
    }

    // обработчик события click для кнопок "назад" и "вперед"
    var _controlClick = function (e) {
      if (e.target.classList.contains('slider__control')) {
        e.preventDefault();
        var direction = e.target.classList.contains('slider__control-right') ? 'right' : 'left';
        _transformItem(direction);
      }
    };

    var _setUpListeners = function () {
      // добавление к кнопкам "назад" и "вперед" обработчика _controlClick для события click
      _sliderControls.forEach(function (item) {
        item.addEventListener('click', _controlClick);
      });
    }

    _mainElement.addEventListener( 'mousedown', function(e) {
      _touchDown = true;
      _touchDownX = e.clientX;
    });

    _mainElement.addEventListener( 'mouseup', function(e) {
      if ( e.clientX < _touchDownX ) _transformItem('right');
      else if ( e.clientX > _touchDownX ) _transformItem('left');
    });

    document.addEventListener( 'mouseup', function() {
      _touchDown = false;
    });

    _mainElement.addEventListener( 'touchstart', function(e) {
      _touchDown = true;
      _touchDownX = e.clientX;
    });

    _mainElement.addEventListener( 'touchend', function(e) {
      if ( e.clientX < _touchDownX ) _transformItem('right');
      else if ( e.clientX > _touchDownX ) _transformItem('left');
    });

    document.addEventListener( 'touchend', function() {
      _touchDown = false;
    });

    // инициализация
    _setUpListeners();

    return {
      right: function () { // метод right
        _transformItem('right');
      },
      left: function () { // метод left
        _transformItem('left');
      }
    }

  }

}());

let images = document.querySelectorAll('img');

for ( let i = 0; i < images.length; i++ ) {
  images[i].onmousedown = function() {
    return false;
  }
  images[i].ontouchstart = function() {
    return false;
  }
}