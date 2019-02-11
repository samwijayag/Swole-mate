$(document).ready(function(){
	// Sticky Nav
	
	$('.swole-mate').waypoint(function(direction){
		if(direction == 'down'){
			$('nav').addClass('sticky');
		}else{
			$('nav').removeClass('sticky');
		}
	}, {
		offset:'60px'
	});

	// Scroll
	$('.btn-full').click(function(){
		$('html,body').animate({scrollTop: $('.subscribe').offset().top},1000);
	})


});


