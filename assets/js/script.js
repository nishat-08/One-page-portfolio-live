// All JS for Portfoilio 

// Counter JS

$('.counter-value').counterUp({
    delay: 10,
    time: 1000
});

// Typed JS

var typed = new Typed('.typed', {
  strings: ["Freelancer", "Web Designer.", "WordPress Developer."],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
});

// Portfoilio Filter JS

$(window).on('load', function () {
	var $container = $('.my-workContainer');
	$container.isotope({
		filter: '*',
	});

	$('.my-workFilter a').on('click', function () {
		$('.my-workFilter .current').removeClass('current');
		$(this).addClass('current');

		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
		});
		return false;
	});
});

$('.my-work-popup').magnificPopup({
	type:'image',
	gallery:{
		enabled:true
	}
});

// Testimonial Slider

$('.slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('#nav').onePageNav();

$(window).on('scroll', function(){
	if ($(this).scrollTop() > 1){
		$('.header-area').addClass("sticky");
	}else{
		$('.header-area').removeClass("sticky");
	}
});


