
$('.js-form').submit(function(){
    const formName = $(this);
    formName.find('button').prop('disabled', true);
    formName.find('.form__message').fadeIn(350);
    var data = new FormData();  
    formName.find(':input[name]').each(function(i, element) { 
        var field = $(this);
        if (field.val()) {
            data.append(field.attr('name'), field.val());
        }
    });
    $.ajax({
        url:  'form/form.php', 
        type:  "POST",
        data: data,
        contentType: false,
        cache: false, 
        processData:false, 
        success: function (e) {
            formName.find(".form__loading, .form__error").hide();
            formName.find(".form__success").show();
            formName.trigger("reset");
            setTimeout(function () {
              formName.find(".form__message").fadeOut();
            }, 3500);
            formName.find("button").prop("disabled", false);
        },
        error: function (e, i, t) {
            formName.find(".form__loading, .form__success").hide(),
            formName.find(".form__error").show(),
            setTimeout(function () {
              formName.find(".form__message").fadeOut();
            }, 3500);
            formName.find("button").prop("disabled", false);
        },
    });
    return false;
});