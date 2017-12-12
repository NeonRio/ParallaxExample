$(window).scroll(function(){
	var st= $(this).scrollTop();
	$(".header-text").css({
		"transform": "translate(0%, "+ st +"%)"
	});

	$(".sect-2 img").css({
		"transform": "translate(0%, "+ st/30 +"%)"
	});
});