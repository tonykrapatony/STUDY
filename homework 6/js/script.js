$(function(){
    $('.nav__item').on('click', function(){
        $('.nav__item').removeClass('active');
        $(this).addClass('active');
    })
})