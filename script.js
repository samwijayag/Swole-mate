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
	//buttons
	$('.btn-full').click(function(){
		$('html,body').animate({scrollTop: $('.subscribe').offset().top},1000);
	})
	$('.btn-ghost').click(function(){
		$('html,body').animate({scrollTop: $('.features').offset().top},1000);
	})

	//nav
	$('.scroll-swole-mate').click(function(){
		$('html,body').animate({scrollTop: $('.swole-mate').offset().top},1000);
	})





});


