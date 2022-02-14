/* Template: Bootstrap HTML Template
   Description: Custom JS file
*/

new WOW().init();

(function($) {
    "use strict";
    document.addEventListener("DOMContentLoaded", function() {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 70) {
                document.getElementById('navbar_top').classList.add('fixed-top');
                // add padding top to show content behind navbar
                // navbar_height = document.querySelector('.navbar').offsetHeight;
                // document.body.style.paddingTop = navbar_height + 'px';
            } else {
                document.getElementById('navbar_top').classList.remove('fixed-top');
                // remove padding top from body
                document.body.style.paddingTop = '0';
            }
        });
    });


    // offcanvas script from Bootstrap + added element to close menu on click in small viewport
    $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function() {
        $('.offcanvas-collapse').toggleClass('open')
    })


    //Carousel slider

    $('.owl-carousel').owlCarousel({
        responsiveClass: true,
        nav: false,
        dots: false,
        autoPlay: false,
        loop: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            767: {
                items: 3,
                nav: false
            },
            992: {
                items: 3,
                nav: false
            },

            1100: {
                items: 5,
                nav: false
            },
        }
    })

    $('.technology_logo').owlCarousel({
        responsiveClass: true,
        margin: 10,
        nav: false,
        autoPlay: true,
        loop: false,
        dots: false,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            500: {
                items: 3,
                nav: false
            },
            767: {
                items: 4,
                nav: false
            },
            992: {
                items: 5,
                nav: false
            },
            1100: {
                items: 7,
                nav: false,
                dots: false,
            },
        }
    })

})(jQuery);

/*---For Popup---*/
$(document).ready(function() {

    $('#smartwizard').smartWizard({
        selected: 0,
        theme: 'dots',
        autoAdjustHeight: true,
        transitionEffect: 'fade',
        showStepURLhash: false,

    });

});


// With JQuery
$("#ex8").slider({
    tooltip: 'always'
});

// Without JQuery
var slider = new Slider("#ex8", {
    tooltip: 'always'
});

$(document).ready(function() {
    $(".edit").click(function() {
        $(".lead-calculator").toggleClass("form-show");
    });
});



// Lead generation

function sendMail() {
    let tempParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        message: document.getElementById("message").value,
        designation: document.getElementById("designation").value,
        organization: document.getElementById("organization").value,
    }
    emailjs.send('service_pvpxt53', 'template_sj77rur', 'tempParams')
        .then(function(res) {
            console.log("sucess", res.status);
        })

}