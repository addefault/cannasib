new WOW().init();
ScrollTrigger.matchMedia({
    "(min-width: 1440px)": function() {
        document.querySelectorAll('[data-parallax-img]').forEach(element => {
            const parallaxDataConfig = element.dataset.parallaxImg.split(',');
            const parallaxParent = element.parentElement;
            gsap.to(element, {
                scrollTrigger: {
                    trigger: parallaxParent,
                    start: "top top",
                    end: "bottom",
                    scrub:2
                },
                y:  -(Math.abs(Math.ceil(parallaxParent.offsetHeight - (parallaxParent.offsetWidth * ((parallaxDataConfig[1] / parallaxDataConfig[0]) * 100)) / 100)))
            });
        });     
    }
});