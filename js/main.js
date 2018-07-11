(function($) {

 "use strict";

	// for window onload
	 $(window).on('load', function() {

	 });

	// for document ready
	 $(document).ready(function() {
		  heigtMasonary();
		  responsiveMenu();
		  cardFiveSlide();
		  scroll_Up();
		  new WOW().init();
	 });

	// for window on resize
	 $(window).on('resize', function() {
	  
	 });

	// for window scroll
	 $(window).on('scroll', function() {
	  	scrollHideShow()
	 });


	// Activated Scroll Top
	function scroll_Up(){
		$('.scrolltotop').on('click', function() {
			$('html, body').animate({ scrollTop: 0 }, 800);
			return false;
		});
	}

	// Activated Scroll Hide & Show 
	function scrollHideShow(){
	      $(document).scroll(function() {
	          var y = $(this).scrollTop();
	          if (y > 300) {
	              $('.scrolltotop').fadeIn();
	          } else {
	              $('.scrolltotop').fadeOut();
	          }
	      });

	}

	 // Activated section 3 masonary
	function heigtMasonary(){	
		$('.masonary-wrapper').masonry({
		  itemSelector : '.hight-masonary'
		});
	}

	// Activated Resposive menu
	function responsiveMenu(){
		jQuery('#main-nav').stellarNav({
		  theme     : 'dark', 
		  breakpoint: 768, 
		  phoneBtn: false, 
		  locationBtn: false, 
		  sticky     : false, 
		  position: 'static', 
		  showArrows: true, 
		  closeBtn     : false, 

		  scrollbarFix: false 
		  
		});
	}

	// Activated Home slider
	function cardFiveSlide(){
		$('#card-five').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:false,
		    autoplay: true,
		    autoplaySpeed: 2000,
		    autoplayTimeout: 4000,
		    navSpeed:1000,
		    dots: false,
	         responsive:{
	             0:{
	                 items:1
	             },
	             600:{
	                 items:2
	             },
	             800:{
	                 items:3
	             },
	             1000:{
	                 items:5
	             }
	         },
		});
	}
	



})(jQuery);


