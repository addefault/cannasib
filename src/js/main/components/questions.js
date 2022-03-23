$(".faq__item-question").on('click', function(){
    $(this).parent().siblings('.faq__item--active').children('.faq__item-answer').slideUp(250);
    $(this).parent().siblings('.faq__item--active').removeClass('faq__item--active');
    $(this).next().slideToggle(250);
    $(this).parent().toggleClass('faq__item--active');
}); 