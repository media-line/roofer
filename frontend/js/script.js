jQuery(function($) {
    $(document).ready(function () {

        //Главный слайдер на главной странице
        $('.js-slick-slider').slick({
            autoplay: true,
            dots: true,
            arrows: false,
            fade: true
        });

        //Слайдер портфолио
        $('.js-slick-slider-portfolio').slick({
            autoplay: false,
            fade: true,
            dots: false,
            arrows: true,
            prevArrow: $('.slick-arrows-custom .slick-prev'),
            nextArrow: $('.slick-arrows-custom .slick-next')
            //prevArrow: '<a href="#" class="slick-prev slick-arrow"></a>',
            //nextArrow: '<a href="#" class="slick-next slick-arrow"></a>'
        });
        
        //Слайдер портфолио
        /*$('.slick-prev').click(function () {
            //console.log($(this).closest('.slick-slider'));
            $('#portf_slider').slick('slickPrev');
            return false;
        });

        $('.slick-next').click(function () {
            //console.log($(this).closest('.slick-slider'));
            $('#portf_slider').slick('slickNext');
            return false;
        });*/

        //Прилипающая шапка
        stickyHeaderHandler($(window));
        $(window).scroll(function () {
            stickyHeaderHandler($(this));
        });

        //Мобильное меню
        $('.main-menu-mobile a').click(function () {
            $(this).closest('.parent').toggleClass('open');
            $(this).closest('.parent').find('.navbar-nav-subnav').slideToggle(300);
        });
    });
});

//Прилипающая шапка
function stickyHeaderHandler(windowObject) {
    var topOffset = 270;
    if (windowObject.scrollTop() > topOffset) {
        $('.js-sticky-header').addClass('sticky-header-show');
    } else {
        $('.js-sticky-header').removeClass('sticky-header-show');
    }
}
