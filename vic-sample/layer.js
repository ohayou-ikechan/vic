var videoTop;
var videoLeft;
var videoWidth;
var videoHeigt;
var items;
var itemObjs = [];

$(document).ready(function(){
	//videoタグのポジション座標を取得
	videoTop = $("#video").position().top;
	videoLeft = $("#video").position().left;
	//videoタグの幅と高さを取得
	videoWidth = $("#video").width();
	videoHeigt = $("#video").height();


	//$(".content").append('<div class="layer"></div>');
	//$(".layer").css({"top":videoTop,"left":videoLeft,"width":videoWidth,"height":videoHeigt,"opacity":0.5,"margin": "20px"});

	//videoオブジェクト
	var vid = $("#video").get(0);
	//ページがロードされたら、動画も前もってローディングしておく
	vid.preload = "auto";


	$("#videoPlay").click(function(){
		vid.play();
		items = loadItems();
		for(x in items){
			itemObjs[x] = createObj(items[x]);
		}
		getVideoTime(vid);
		//addItem("0","item1",videoTop + 130,videoLeft + 330,100,100,0,6,"http://amzn.to/1hssCyq","ゴミ箱");
		//addItem("1","item2",videoTop + 30,videoLeft + 500,86,200,0,6,"http://amzn.to/1Mz6MGt","扇風機");
		//addItem("item1",videoTop + 130,videoLeft + 330,75,100,0.8,6,"http://amzn.to/1hssCyq","アロエ");
		//addItem("item2",videoTop + 30,videoLeft + 500,75,100,0,6,"http://amzn.to/1Mz6MGt","書棚");
	});

	$("#videoStop").click(function(){
		vid.pause();
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

// function addItem(itemName,top,left,width,height,startTime,endTime,url,tag){
// 	var href = $("<a>",{"href":url,"target":"_blank"});
// 	var item = $("<div>",{"id":itemName,"class":"itemPointer"});
// 	item.css({"top":top,"left":left,"position": "absolute","margin": "20px","width": width,"height":height});
// 	//Jqueryデータを持たせる
// 	item.data("startTime",startTime);
// 	item.data("endTime",endTime);
// 	item.data("tag",tag);
// 	item.addClass(itemName).on('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend',function(){
// 		this.remove();
// 	});
// 	href.append(item);
// 	$(".content").append(href);
// 	return item;
// }

function createObj(item){
	//set valuables
	var itemName = item.itemName;
	var top = item.top + videoTop;
	var left = item.left + videoLeft;
	var width = item.width;
	var height = item.height;
	var startTime = item.startTime;
	var url = item.url;
	var tag = item.tag;

	var item = $("<div>",{"id":itemName,"class":"itemPointer"});
	item.css({"top":top,"left":left ,"position": "absolute","margin": "20px","width": width,"height":height});
	//Jqueryデータを持たせる
	item.data("startTime",startTime);
	item.data("tag",tag);
	item.data("url",url);
	item.addClass(itemName).on('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend',function(){
		this.remove();
	});
	return item;
}


function putItem(itemObj){
	var href = $("<a>",{"href":itemObj.data("url"),"target":"_blank"});
	href.append(itemObj);
	$(".content").append(href);
}

// function putItem(item){
// 	//set valuables
// 	var itemName = item.itemName;
// 	var top = item.top + videoTop;
// 	var left = item.left + videoLeft;
// 	var width = item.width;
// 	var height = item.height;
// 	var startTime = item.startTime;
// 	var url = item.url;
// 	var tag = item.tag;

// 	var href = $("<a>",{"href":url,"target":"_blank"});
// 	var item = $("<div>",{"id":itemName,"class":"itemPointer"});
// 	item.css({"top":top,"left":left ,"position": "absolute","margin": "20px","width": width,"height":height});
// 	//Jqueryデータを持たせる
// 	item.data("startTime",startTime);
// 	item.data("tag",tag);
// 	item.addClass(itemName).on('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend',function(){
// 		this.remove();
// 	});
// 	href.append(item);
// 	$(".content").append(href);
// 	return item;
// };

function getVideoTime(vid){
	$("#timeDisplay").text(vid.currentTime);
	setTimeout(function(){
		if(!vid.ended){
			for(x in items){
				if(items[x].startTime < vid.currentTime && !items[x].added){
					items[x].added = true;
					//var addedItem = addItem(items[x].itemName,items[x].top,items[x].left,items[x].width,items[x].height,items[x].startTime,items[x].endTime,items[x].url,items[x].tag,items[x].animation);
					putItem(itemObjs[x]);
					itemObjs[x].transition(items[x].animation);
				}
			};
			getVideoTime(vid);
		}else{
			$("#timeDisplay").text("");
		}
	}, 100);
}


function log(msg) {
	//document.getElementById('console').innerHTML =document.getElementById('console').innerHTML +"<br/>"+msg
}