$(document).ready(function(){
	initializeVic();

	$("#videoPlay0").click(function(){
		vics[0].play();
	});

	$("#videoStop0").click(function(){
		vics[0].pause();
		$("#videoPlay0").attr('disabled','disabled');
	});

	$("#videoRestart0").click(function(){
		vics[0].restart();
		$("#videoPlay0").removeAttr('disabled');
	});

	$("#videoPlay1").click(function(){
		vics[1].play();
	});

	$("#videoStop1").click(function(){
		vics[1].pause();
		$("#videoPlay0").attr('disabled','disabled');
	});


	$("#videoRestart1").click(function(){
		vics[1].restart();
		$("#videoPlay1").removeAttr('disabled');
	});

	$("#frameoff").click(function(){
		for(var i =0; itemObjs.length > i; i++){
			itemObjs[i].css({"border-style":"none"});
		}
	});

	$("#frameon").click(function(){
		for(var i =0; itemObjs.length > i; i++){
			itemObjs[i].css({"border-style":"none"});
		}
	});

	$("#tagon").click(function(){
		for(var i =0; itemObjs.length > i; i++){
			itemObjs[i].on({
			  'mouseenter':function(){
			    var text = $(this).data("tag");
			    $(this).append('<div class="tooltips">'+text+'</div>');
			  },
			  'mouseleave':function(){
			    $(this).find(".tooltips").remove();
			  }
			});
		}
	});

});


function log(msg) {
	//document.getElementById('console').innerHTML =document.getElementById('console').innerHTML +"<br/>"+msg
}