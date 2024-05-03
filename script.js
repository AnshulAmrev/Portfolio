$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Technical Consultant at Microsoft", "Dynamics 365 Developer", "Power Platform Expert", "C# and JavaScript Developer", "SQL Expert"],
        typeSpeed: 50,
        backSpeed: 20,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Technical Consultant at Microsoft", "Dynamics 365 Developer", "Power Platform Expert", "C# and JavaScript Developer", "SQL Expert"],
        typeSpeed: 50,
        backSpeed: 20,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

});

//Certifications section
document.querySelectorAll('#image-container img').forEach(function(img) {
    img.addEventListener('mouseenter', function() {
      document.getElementById('image-container').classList.add('paused');
    });
    img.addEventListener('mouseleave', function() {
      document.getElementById('image-container').classList.remove('paused');
    });
  });
  

//send mail fucntion 
document.getElementById('communicationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var form = event.target;
    var formData = new FormData(form);
    //logic app integration
    var endpoint = 'https://prod-11.centralindia.logic.azure.com:443/workflows/50055c2c8f3641858b066789a1e1fa7f/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=tsKCSTnM-7f-w337I4pejq_RkAl3O1qJ4pvz5VkvwAU';

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    }).then(function (response) {
        alert('Email sent successfully!');
    }).catch(function (error) {
        alert('Failed to send email.');
    });
}); 