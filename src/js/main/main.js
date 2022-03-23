

document.addEventListener("DOMContentLoaded", function() {
    @@include("form/control.js",{})
    @@include("form/field.js",{}) 
    @@include("form/ajax.js",{})

    @@include("plugins/lazy.js",{})
    @@include("plugins/scroll.js",{})

    @@include("components/index.js",{})

    @@include("section/index.js",{})
    
    @@include("preloader.js",{})
});
