$(document).ready(function(){

	

$('.scroll').click(function(event) {
    // Preventing default action of the event
    event.preventDefault();
    // Getting the height of the document
    var n = $(document).height();
	var scroll = $(window).scrollTop();
	if(scroll > 90) {
		$('html, body').animate({ scrollTop: -n }, 750);
	}
	else {
		$('html, body').animate({ scrollTop: n }, 750);
	}
    
});

$(window).scroll(function(){
	
	var scroll = $(window).scrollTop();
	
	if(scroll > 90) {
		$('.txt').addClass('scrolled');
		$('.txt').text('');
		$('.scroll').addClass('scrolled2');
	}
	else {
		$('.txt').removeClass('scrolled');
		$('.txt').text('SCROLL DOWN');
		$('.scroll').removeClass('scrolled2');
	}
});

	
});
