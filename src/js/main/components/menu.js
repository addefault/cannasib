// menu 
$("#menu-modal-open, .menu-modal__link, .menu-modal__close").on('click', function(){
    $('.modal-back').fadeToggle();
    $('#menu-modal').toggleClass('show');
});