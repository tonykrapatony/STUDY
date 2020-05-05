$(function(){
    var checkedboxes = $('.checkbox .active').length;
    
    var checkboxes = $('.checkbox').length;
    
    
    $('.checkbox img').on('click', function(){
        $(this).toggleClass('active');
        var checkedboxes = $('.checkbox .active').length;
//        console.log(checkedboxes);
        if (checkedboxes === 0) {
            $('.checkbox-main .minus').removeClass('active');
            $('.checkbox-main .check').removeClass('active');
        } else if (checkedboxes !== checkboxes) {    
            $('.checkbox-main .minus').addClass('active');
            $('.checkbox-main .check').removeClass('active');
        } else {
            $('.checkbox-main .minus').removeClass('active');
            $('.checkbox-main .check').addClass('active');
        }
    });

    $('.checkbox-main').on('click', function(){
        var checkboxes = $('.checkbox').length;
        var checkedboxes = $('.checkbox .active').length;
//        console.log('checkedboxes= ' + checkedboxes);
        for (var i=0; i<=checkboxes; i++) {
//            console.log(i);
            if (checkedboxes != checkboxes) {
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