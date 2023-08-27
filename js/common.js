$(document).ready(function(){
    $('.button-event').click(function(){
        $('.pop-event').addClass('is-shown');
    });

    $('button.close').click(function(){
        $('.pop-event').removeClass('is-shown');
    })
});