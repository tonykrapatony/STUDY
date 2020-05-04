$(function(){
    var checkedboxes = $('.checkbox .active'),
        checkboxes = $('.checkbox'),
        checkbox_label = $('.checkbox-label'),
        checkbox = $('.checkbox img');
    $('.checkbox-container').on('click', function(){
        $(this).find('.checkbox img').toggleClass('active');
        var checkedboxes = $('.checkbox .active');
//        console.log(checkedboxes);
        if (checkedboxes.length === 0) {
            $('.checkbox-main .minus').removeClass('active');
            $('.checkbox-main .check').removeClass('active');
        } else if (checkedboxes.length !== checkboxes.length) {    
            $('.checkbox-main .minus').addClass('active');
            $('.checkbox-main .check').removeClass('active');
        } else {
            $('.checkbox-main .minus').removeClass('active');
            $('.checkbox-main .check').addClass('active');
        }
    });
    
 
    $('.checkbox-main, .checkbox-main-label').on('click', function(){
        var checkboxes = $('.checkbox');
        var checkedboxes = $('.checkbox .active');
//        console.log('checkedboxes= ' + checkedboxes);
        for (var i=0; i<=checkboxes.length; i++) {
//            console.log(i);
            if (checkedboxes.length != checkboxes.length) {
                $('.checkbox img').addClass('active');
                $('.check').addClass('active');
                $('.checkbox-main .minus').removeClass('active');
            } else {
                $('.checkbox img').removeClass('active');
                $('.check').removeClass('active');
                $('.checkbox-main .minus').removeClass('active');
            }
            
        } 
    })
})