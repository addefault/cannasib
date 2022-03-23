const xsQuery = window.matchMedia('(max-width: 767px)');
function equalHeightCauses() {
    if (xsQuery.matches) {
        let initHeight = 0;
        $('.causes__item').each(function() {
            if($(this).outerHeight() > initHeight)
                initHeight = $(this).outerHeight();
        });
        $('.causes__item').css('height', initHeight);
    }
}
equalHeightCauses();