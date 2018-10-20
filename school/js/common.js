$(function() {

    
    
	carouselHeight();
	$(window).resize(function(){
		carouselHeight();
	});
    
    
    
    $('.news-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                dots: false
            },
            890:{
                items:2,
                nav:true,
                dots: false
            },
            1090:{
                items:3,
                nav:true
            },
            1200:{
                items:4,
                nav:true,
                loop:false
            }
        }
    })
    $('.news-preview').imagefill();
    
	$('.services-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                dots: false
            },
            890:{
                items:2,
                nav:true,
                dots: false
            },
            1090:{
                items:3,
                nav:true
            }
        }
    })
});
function carouselHeight(){
	if( $(window).width() > 768)
	{
		let height = $('.section-main-info .about-us-container').height();
		$('.main-carousel .carousel-item').each(function(){
			$(this).css('height', height+'px');										
		})
		console.log('g');
	} else if($(window).width() > 400){
		$('.main-carousel .carousel-item').each(function(){
			$(this).css('height', '300px');										
		})  
	} else{
		$('.main-carousel .carousel-item').each(function(){
			$(this).css('height', '200px');										
		})
	}
}
