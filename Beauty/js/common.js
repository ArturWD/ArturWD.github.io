$(function() {

	// Custom JS
	$('#my-menu').mmenu({
		extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="Салон красоты Смитлер">'
		},
		offCanvas: {
			position: 'right'
		}
	});
	
	var api= $('#my-menu').data('mmenu');
	api.bind('opened', function(){
		$('.hamburger').addClass('is-active');
	}).bind('closed', function(){
		$('.hamburger').removeClass('is-active');
	});
	
	$('.carousel-service').owlCarousel({
		//loop: true,
		nav: true,
		smartSpeed: 700,
		navText:['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive:{
			0:{
				items: 1
			},
			900:{
				items: 2
			},
			1200:{
				items:3
			}
		}
	});
	
	
	function carouselService(){
		$('.carousel-service-item').each(function(){
			var $this =$(this),
				thisH = $this.find('.carousel-service-content').outerHeight();
			$this.find('.carousel-service-image').css('height', thisH+5);
		});
	};
	
	$('.carousel-service-composition .h3').each(function(){
		var $this =$(this);
		$this.html($this.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});
	//$(window).resize(carouselService());
	
	$('.carousel-service-content').equalHeights();
	carouselService();
	
	$('section .h2').each(function(){
		var $this =$(this);
		$this.html($this.html().replace(/^(\S+)/, '<span>$1</span>'));
	});
	
	
	$('select').selectize({
//		create: true,
//		sortField: 'text'
	});
	
	
	
	
	//FORM
	$("form.callback button").on('click', function(){
		var par = $(this).parent();
		par.find('.success').addClass('active');
		setTimeout(function() {					
			par.find('.success').removeClass('active');
		}, 3000);
	});
	//E-mail Ajax Send
//	$("form.callback").submit(function() { //Change
//		var th = $(this);
//		$.ajax({
//			type: "POST",
//			url: "/mail.php", //Change
//			data: th.serialize()
//		}).done(function() {
//			$(th).find('.success').addClass('active');
//			setTimeout(function() {
//				// Done Functions
//				$(th).find('.success').removeClass('active');
//				th.trigger("reset");
//			}, 3000);
//		});
//		return false;
//	});
	
	
	$('.reviews').owlCarousel({
		loop: true,
		smartSpeed: 700,
		items:1,
		nav: false,
		autoHeight: true
		
	});
	
	$('.partners').owlCarousel({
		loop: true,
		smartSpeed: 700,
		items: 1,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		nav: true,
		dots: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1
			},
			450:{
				items:2
			},
			600:{
				items: 3
			},
			1000:{
				items:4
			}
		}
	});
	
});
