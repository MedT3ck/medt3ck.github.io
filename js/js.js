/*
Neteor - Web Designer Portfolio Template HTML5
Author: © Ciuca Cristi (Criatix) | All rights reserved
Version: 1.0
Framework: Bootstrap 4.2
Demo: http://www.ciucacristi.tk/neteor/webdesigner
*/

/* Navbar Shrink Scroll Effect */

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

/* End Navbar Shrink Scroll Effect */


/* Animations */

jQuery(function($) {

  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {

    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');

    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }

    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	};

  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});

/* End Animations */

/* Portfolio filter buttons */
$(document).ready(function(){

   $(".filter-button").click(function(){
       var value = $(this).attr('data-filter');

       if(value == "all")
       {
           //$('.filter').removeClass('hidden');
           $('.filter').show('1000');
       }
       else
       {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
           $(".filter").not('.'+value).hide('3000');
           $('.filter').filter('.'+value).show('3000');

       }
   });

  /* $('#portfolio a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })*/
  $('#portfolio .nav-item').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
  
});

/* End Portfolio filter buttons */

/* Owl Carousel */
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      autoplay:true,
      autoplayTimeout:3000,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:false
          },
          1000:{
              items:3,
              nav:false,
              loop:true
          }
      }
  })
});

/* End Owl Carousel */
/* Tooltip Button */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
