$(function(){
    $('.carousel__container').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        arrows: true,
        prevArrow: "<div class='prev' id='prev'><span><img src='./img/prev_arrow.svg' alt='prev'></span></div>",
        nextArrow: "<div class='next'><span><img src='./img/next_arrow.svg' alt='next'></span></div>",
        dots: true,
        responsive: [
            {
                breakpoint: 1430,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '10px',
                  slidesToShow: 4
                }
            },

            {
                breakpoint: 1290,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '10px',
                  slidesToShow: 3
                }
            },

            {
                breakpoint: 995,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '10px',
                  slidesToShow: 2
                }
            },
            {
                breakpoint: 769,
                settings: {
                prevArrow: "<div class='none'></div>",
                arrows: true,
                centerMode: false,
                centerPadding: '50px',
                slidesToShow: 1
                }
            }
        ]
    });
})