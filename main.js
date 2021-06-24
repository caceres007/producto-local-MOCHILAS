$(document).ready(function() {
	$('#holder').toggleClass("visible");

	$('a.link').click(function(event) {
	
		event.preventDefault();
	
		newLocation = this.href;
		color = $(this).data("color");
		$('body').css('background-color', color );
		$('#holder').css('opacity','0' );
		
		window.setTimeout(function() {
		   
				window.location = newLocation;
		}, 250);
	});

    $('.toggle').click(function(){
        $('.formulario').animate({
            height: "toggle",
            'padding-top': 'toggle',
            'padding-bottom': 'toggle',
            opacity: 'toggle'
        }, "slow");
    });
});

