$(function() {

	$('header .hamburger').on('click', function(){
		$('header nav .menu').toggleClass('is-active');
	});
	
	$('.tour-offers').masonry({
		columnWidth: ".tour-offer-wrapper",
		itemSelector: ".tour-offer-wrapper"
	});
	
	
	
	$('.tour-offer').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'inline'
	  // other options
	});


	
	
	$('.tour-img').imagefill(); 
	$('.gallery-img').imagefill(); 
});
