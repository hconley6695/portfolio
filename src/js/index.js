// Javascript Entry Point
import $ from 'jquery'; 

$('.app').ready(function () {
	$('.milkninja').on('click', function() {

		$('#ninja-slides').fadeIn('slow');
	});
});