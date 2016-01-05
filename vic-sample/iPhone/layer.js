$(document).ready(function(){
	jQuery.preloadImages = function(){
    for(var i = 0; i<arguments.length; i++){
        jQuery("<img>").attr("src", arguments[i]);
	    }
	};
	$.preloadImages(
		"apng/sample05.gif"
	);
	initializeVic();

	$("#videoPlay0").click(function(){
		vics[0].play();
	});

});
