$(window).on('scroll', function() {
    if($(window).scrollTop()){
        $('nav').addclass('black');
    }
    else{
        $('nav').removeClass('black'); 
    }
})  