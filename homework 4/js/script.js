$(function(){
    $('.logo-container').on('click', function(){
        location.reload();
    })
    $('.burger-button').on('click', function(){
        $('nav').toggleClass('hiden');
        $('.burger-button').toggleClass('active-burger');
        
    })
    $('.nav-list-item').on('click', function(){
        if ( $(this).hasClass('active') != true ){
            $('.nav-list-item').removeClass('active');
            $(this).addClass('active');
        }
    })
})