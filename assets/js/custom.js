$(window).on('load', function() {
	setTimeout(function() {
        $('.preloader').slideUp('slow');
      	$('.cube-wrapper').fadeOut();
    }, 1000);
});

$(document).ready(function(e) {
    $(window).on('load', function(e) {										
		$('.search-icon').on('click', function(){
			$('.search-part').toggleClass('open-search');
		});
    });
});