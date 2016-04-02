$(document).ready(function() {

	$('#fullpage').fullpage({
		anchors: ['profile', 'education', 'career', 'projects'],
		navigation: true,
		menu: '#menu',

		onLeave: function(index, nextIndex, direction) {
			if(nextIndex == 1) { // going to first page
				$(".navbar-fixed-top").removeClass("top-nav-collapse");
				$(".navbar-fixed-top").addClass("navbar-transparent");
			} else {
				$(".navbar-fixed-top").addClass("top-nav-collapse");
				$(".navbar-fixed-top").removeClass("navbar-transparent");
			}
		}
	});

});