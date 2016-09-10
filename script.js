'use strict'

$(function() {

	//configuration
	var width = 730;
	var animationSpeed = 2000;
	var pause = 3000 ;
	var currentSlide = 1;

	//Cache the DOM
	var $slider = $('.slider') ;
	var $sliderContainer = $slider.find('.slides') ;
	var $slides = $sliderContainer.find('.slide') ;


	var interval ;

	function startSlider () {

		interval = setInterval(function(){
			$sliderContainer.animate( {'margin-left': '-='+width} , animationSpeed , function(){
				currentSlide++;
				if (currentSlide === $slides.length) {
					currentSlide = 1 ;
					$sliderContainer.css('margin-left' , 0) ;
				}
			});
		} , pause) ; 

	}

	function stopSlider() {
		clearInterval(interval) ;
	}

	$slider.on('mouseenter' , stopSlider).on('mouseleave' , startSlider) ;

	startSlider();

})
