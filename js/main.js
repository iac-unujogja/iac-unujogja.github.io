//untuk membuat nav bar yang sctiky scroll 

$(document).ready(function () {
	
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if (top>=60) {
			$("nav").addClass('secondary');
		}
		else
			if($("nav").hasClass('secondary')){
				$("nav").removeClass('secondary');
			}
	});

	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if (top>=60) {
			$('.toggle').addClass('hidden');
		}
		else
			if($('.toggle').hasClass('hidden')){
				$('.toggle').removeClass('hidden');
			}
	});
});

//scrol button

$(document).ready(function(){
	
	$(window).scroll(function(){
		if($(this).scrollTop() > 40){
			$('#btnScroll').fadeIn();
		}
		else{
			$('#btnScroll').fadeOut();
		}

	});

	$("#btnScroll").click(function(){
		$('html,body').animate({scrollTop : 0},800);
	});


});

//paralax

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.jumbotron h3').css({
		'transform' : 'translate(0px, '+ wScroll/0.8 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

	$('.jumbotron h4').css({
		'transform' : 'translate(0px, '+ wScroll/1.6 +'%)'
	});

});




// scroll smooth


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top -50
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

