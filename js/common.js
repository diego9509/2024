$(document).ready(function(){
    var target = $('.pop-event');

    $('.button-event').click(function(){
        target.addClass('is-shown');
        target.attr('aria-hidden', false);
        focusControl(0);
    });

    $('button.close').click(function(){
        target.removeClass('is-shown');
        target.attr('aria-hidden', true);
        focusControl(-1);
    })

    function focusControl(val) {
        target.find('button').attr('tabindex', val)
        target.find('input').attr('tabindex', val)
        target.find('textarea').attr('tabindex', val)
    }
});