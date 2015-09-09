$(document).ready(function(){
// Image Swap - Top

$('.Side img').click(function() {
    var thmb = this;
    var src = this.src;
    $('.mainIMG img').fadeOut(400,function(){
        thmb.src = this.src;
        $(this).fadeIn(400)[0].src = src;
    });
    $('.Side img').fadeOut(400,function(){
        $(this).fadeIn(400)[0]
    });
});

// Scroll Bar

function win_scroll() {

	var distFromTop = $(document).scrollTop();

	if (distFromTop >= 474) {
		$('nav').addClass('pinnedNav')
	}
	else {
		$('nav').removeClass('pinnedNav')
	}

	console.log(distFromTop)

	

}

$(window).scroll(win_scroll);








}); // End of doc.Ready