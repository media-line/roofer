jQuery(function($) {
    $(document).ready(function () {

        //Главный слайдер на главной странице
        $('.js-slick-slider').slick({
            autoplay: true,
            dots: true,
            arrows: false
        });

        //Галерея марок авто внизу страницы
        $('.js-slick-slideset').slick({
            dots: false,
            autoplay: true,
            infinite: true,
            speed: 400,
            slidesToShow: 12,
            centerMode: false,
            variableWidth: true,
            prevArrow: '<a href="#" class="slick-prev"></a>',
            nextArrow: '<a href="#" class="slick-next"></a>'
        });

        //Слайдер советов в карточке услуг
        $('.js-slick-advices').slick({
            dots: true,
            arrows: true,
            autoplay: true,
            fade: true,
            speed: 400,
            slidesToShow: 1,
            prevArrow: '<a href="#" class="slick-prev"></a>',
            nextArrow: '<a href="#" class="slick-next"></a>'
        });

        //Лайтбокс
        if($('*').is('.fancybox')){
            $('.fancybox').fancybox();
        }

        if($('ul').is('.sidebar-menu-list')) {
            $('.sidebar-menu-list li.parent > a').click(function () {
                $(this).next('ul').slideToggle(300);
                $(this).next('ul').closest('.parent').toggleClass('open');
                return false;
            });
        }

        //Рейтинг
        if($('div').is('.js-rating')) {
            $('.js-rating-stars > *').hover(function () {

                var elementIndex = $(this).index();

                $('.js-rating-captions > *').removeClass('hovered');
                $('.js-rating-stars > *').removeClass('hovered');

                $('.js-rating-stars > *').each(function (index) {
                    if(index < elementIndex){
                        $(this).addClass('hovered');
                    }
                });

                $(this).closest('.js-rating').find('.js-rating-captions > *').eq(elementIndex).addClass('hovered');

                return false;
            });
            $('.js-rating-stars > *').mouseleave(function () {
                $('.js-rating-captions > *').removeClass('hovered');
                $('.js-rating-stars > *').removeClass('hovered');
            });
        }

        //Печать страницы
        $('.js-print-page').click(function () {
            window.print();
            return false;
        });

    });

    //Правка левого отступа слайдера советов
    $('.js-slick-advices').on('init', function(){
        if($('div').is('.js-service-full-advices')){
            var minHeight = 200;
            var maxHeight = 600;
            var minMargin = 40;
            var maxMargin = 90;

            var currentHeight = $('.js-service-full-advices').outerHeight();

            if((currentHeight > minHeight) && (maxMargin != minMargin)){

                var margin = minMargin + ((currentHeight - minHeight) * ((maxMargin - minMargin) / (maxHeight - minHeight)));
                
                $('.js-service-full-advices').css({
                    'margin-left' : margin + 'px'
                });
            }
        }
    });


});

