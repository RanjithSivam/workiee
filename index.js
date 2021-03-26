$(document).ready(function(){
    $('.nav__bar').click(function(){
        $(this).toggleClass('active')
        $('.nav__items').toggleClass('active');
    })

    $('.nav__links').click(function(){
        $('.nav__bar').toggleClass('active')
        $('.nav__items').toggleClass('active');
    })
})