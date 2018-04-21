$(function() {
	$('.clothes-pics img').each(function(i) {
	$(this).delay((i++) * 500).fadeTo(1000, 1); })
});
