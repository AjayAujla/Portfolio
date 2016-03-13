$(document).ready(function() {
	
	$('#fullpage').fullpage({
		anchors:['profile', 'education', 'career', 'projects'],

		onLeave: function(index, nextIndex, direction) {
			if(nextIndex == 1) {
				$(".navbar-fixed-top").removeClass("top-nav-collapse");
				$(".navbar-fixed-top").addClass("navbar-transparent");
			} else {
				$(".navbar-fixed-top").addClass("top-nav-collapse");
				$(".navbar-fixed-top").removeClass("navbar-transparent");
			}
		}
	});

	$('.flexslider').flexslider({
		animation: "slide",
		animationLoop: true,
		direction: "horizontal",
		controlNav: true,
		directionNav: true,
		keyboard: true,
		slideshow: false
	});
});