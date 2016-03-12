//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
	var offsetFromTop = $(".navbar").offset().top;

	if (offsetFromTop > 50) { // scrolled 50px away from top
		$(".navbar-fixed-top").addClass("top-nav-collapse");
		$(".navbar-fixed-top").removeClass("navbar-transparent");
	} else { // within 50px from top
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
		$(".navbar-fixed-top").addClass("navbar-transparent");
	}
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

/*
$(function() {
	$.scrollify({
		section: ".section",
		scrollbars: false,
	});
});
*/