const mobilesQuery = window.matchMedia('(max-width: 1023px)');
function graphBarInit() {
    if (mobilesQuery.matches) {
        new SimpleBar(document.querySelector('.graph'), { autoHide: false });
    }
}
graphBarInit();
$(window).on('resize', graphBarInit);