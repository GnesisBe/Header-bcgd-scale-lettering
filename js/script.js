$(document).ready(function() {

  $('#background-scale .background-scale').css('transform', 'translate(-50%, -50%) scale(1.0)');

  $('.tlt').textillate({
		selector: '.texts',
		loop: false,
		initialDelay: 300,
		in: {
			effect: 'fadeInUp',
			delay: 50,
			callback: function() {
				$('#main-title').addClass('animated fadeInUp');
				// $('#main-text').delay(2000).addClass('animated fadeInDown');
				$('#main-btn').delay(4000).addClass('animated fadeInDown');
			}
		},
		type: 'word'
	});

});
