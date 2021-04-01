$(function() {

    /*Fixed Header*/
    let header = $("#header");/*Обьявляем переменную header через id*/
    let intro = $("#intro");
    let introH = intro.innerHeight(); /*Для того чтобы сделать шапку когда мы прокручиваем страницу ниже блока intro нам нужно указать высоту блока intro. В данном случае мы задаем introH через метод height для intro*/
    /*Метод height не учитывает padding чтобы padding учитывался необхлдимо использовать метод innerHeight*/
    let scrollPos = $(window).scrollTop();

    $(window)/*Обращаемся к окну*/.on/*Метод on то есть при. В данном случае при скроле страницы*/("scroll load resize", function () {
        
        let introH = intro.innerHeight(); /*Для того чтобы сделать шапку когда мы прокручиваем страницу ниже блока intro нам нужно указать высоту блока intro. В данном случае мы задаем introH через метод height для intro*/

        scrollPos = $(this).scrollTop();/*В этой конструкции мы обращаемся к окну (this) c целью обновления значений scroll*/

        if( scrollPos> introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

        console.log(scrollPos);
    });

    /*Smooth scroll*/
    $("[data-scroll]")/*Выборка по атрибуту ставится в []*/.on("click", function(event) {
        event.preventDefault();/*Отменяем стандартное поведение ссылки*/

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset + 10
        }, 700)

        console.log(elementOffset)
    });

    /*Nav Toggle*/
    let nav = $("#nav");
    let navToggle = $("#navToggle")

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");

    });

    /*Story Slider*/
    let slider = $("#storySlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });

      /*January*/
      let story = $("#januaryStory");
      let januaryImg = $("#januaryImg")

      januaryImg.on("click", function() {
          story.toggleClass("show");
      })

      story.on("click", function(){
          story.removeClass("show");
      })

      /*july*/
      let storyJuly = $("#julyStory");
      let julyImg = $("#julyImg");

      julyImg.on("click", function() {
        storyJuly.toggleClass("show");
    })

    storyJuly.on("click", function(){
        storyJuly.removeClass("show");
    });

    /*Carousel Slider*/
    let carouselSlider = $("#carouselSlider");
    

    $('#carouselSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false
      });
});
