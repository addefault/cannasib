const desktopQuery = window.matchMedia('(min-width: 1440px)');
function setAnswersWidth() {
    if (desktopQuery.matches) {
        $('.faq__item').each(function() {
            const qWidth = $(this).children('.faq__item-question').outerWidth();
            $(this).children('.faq__item-answer').css('width', qWidth - 20);
        });
    } else {
        $('.faq__item-answer').css('width', 'auto');
    }
}
setTimeout(setAnswersWidth, 40);
$(window).on('resize', setAnswersWidth);