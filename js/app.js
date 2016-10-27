$(document).ready(function() {
	//Navigation

	$('.nav a[href=#home]').addClass('active');
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

				//set active state for the menu item
				$('.active').removeClass('active');
				var navlink = $('.nav a[href='+target.selector+']');
				navlink.addClass('active');

				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});

//Quotes

	$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=3", function(a) {

		$(".quote1").append(a[0].content);
		$(".author1").append("<p>- " +a[0].title+ "</p>");
		$(".quote2").append(a[1].content);
		$(".author2").append("<p>- " +a[1].title+ "</p>");
		$(".quote3").append(a[2].content);
		$(".author3").append("<p>- " +a[2].title+ "</p>");
	});

	$("#testimonials-slider div:gt(0)").hide();

	setInterval( function(){
		$('#testimonials-slider div:first').fadeOut(500).next().fadeIn(1000).end().appendTo('#testimonials-slider');
		},6000
		);

	//Overlay

	// Define the overlay as a jQuery object
	var $overlay = $('<div id="overlay"></div>');
	var $image = $('<img class="lightboximg">');

	$overlay.append($image);

	$("#portfolio").append($overlay);

	//.Capture the click event of the image

	$(".portfolio-item").click(function(event){
		event.preventDefault();
		var imgLocation=$(this).children().children().attr("rel");
		$image.attr("src", imgLocation);

		$overlay.show();
	}
		)


	//Hide the overlay
	$($overlay).click(function(){
		$overlay.hide();

	})

	//Portfolio filter

	var $btns = $('.btn').click(function() {
	if (this.id == 'all') {
	  $('.portfolio-container > li').fadeIn(450);
	} else {
	  var $el = $('.' + this.id).fadeIn(450);
	  $('.portfolio-container > li').not($el).hide();
	}

	$btns.removeClass('active-btn');
	$(this).addClass('active-btn');
	})
});
