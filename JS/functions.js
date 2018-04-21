$(function() {
	$('.clothes-pics img').each(function(i) {
	$(this).delay((i++) * 800).fadeTo(1000, 1); })
});
