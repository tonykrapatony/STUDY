$(function(){
    var width = $(window).width();
    alert(width);
    $('.burger-button').on('click', function(){
        $('nav').toggleClass('hiden');
    })
    $('.nav-list-item').on('click', function(){
        $(this).toggleClass('active');
    })
})