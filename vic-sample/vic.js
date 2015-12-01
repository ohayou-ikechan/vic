"use strict";

var fps = 40;
var vics =[];

function Vic(id,items,videoObj){
	this.items = items;
	this.videoObj = videoObj;
	this.vid = videoObj.get(0);
	this.pauseFlag = false;
	this.vicId = id;
}

Vic.prototype.play = function(){
	this.itemObjs = createItemObjects(this.vicId,this.items,this.videoObj);
	this.vid.play();
	this.pointerPlay_();
}

Vic.prototype.pause = function(){
	this.vid.pause();
	this.pauseFlag = true;
}


Vic.prototype.restart = function(){
	this.vid.play();
	this.pauseFlag = false;
}

Vic.prototype.pointerPlay_ = function(){
	var me = this;
	var vid = this.vid;
	doRender();

	function doRender(){
		setTimeout(function(){
			if(!vid.ended){
				if(!me.pauseFlag){
					for(var itemObj of me.itemObjs){
						if(itemObj.data("startTime") < vid.currentTime && !itemObj.data("added")){
							itemObj.data("added",true);
							putItem(itemObj,me.videoObj.parent());
						}else if(itemObj.data("endTime") < vid.currentTime && itemObj.data("added")){
							itemObj.stop();
							itemObj.css("display","none");
						}else{
							moveItem(itemObj);
						}
					};
				}
				doRender();
			}else{
				$("#timeDisplay").text("");
			}
		}, 1000/fps);
	}
}

function initializeVic(){
	for(var i=0; items.length > i; i++){
		vics[i] = new Vic(i,items[i],$("#video-" + i));
	}
}

function createItemObjects(id,items,videoObj){
	//set valuables
	var itemObjects = [];
	for(var item of items){
		var itemName = item.itemName;
		//console.log(item.top + ":----------------------:" + videoObj.position().top);
		var top = item.top + videoObj.position().top;
		var left = item.left + videoObj.position().left;
		var width = item.width;
		var height = item.height;
		var startTime = item.startTime;
		var endTime = item.startTime + item.duration;
		var url = item.url;
		var distanceByFrameX = item.translateX / (item.duration * fps);
		var distanceByFrameY = item.translateY / (item.duration * fps);
		var itemObj = $("<div>",{"id":itemName,"class":"itemPointer"});
		itemObj.css({"top":top,"left":left ,"position": "absolute","margin": "20px","width": width,"height":height});
		//Jqueryデータを持たせる
		itemObj.data("startTime",startTime);
		itemObj.data("endTime",endTime);
		itemObj.data("url",url);
		itemObj.data("distanceByFrameX",distanceByFrameX);
		itemObj.data("distanceByFrameY",distanceByFrameY);
		itemObj.data("top",top);
		itemObj.data("left",left);
		itemObj.data("width",width);
		itemObj.data("height",height);
		itemObj.data("vicId",id);
		
		if(typeof item.tag !== "undefined"){
			var div = $("<div>").css(item.tag.css)
			if(item.tag.text){
				div.append($("<p>" + item.tag.text + "</p>"));
			}
			itemObj.append(div);
		}

		itemObjects.push(itemObj);
	}

	return itemObjects;
}


function putItem(itemObj,view){
	var href = $("<a>",{"href":itemObj.data("url"),"target":"_blank","onClick":"movieStop(" + itemObj.data("vicId") +");"});
	href.append(itemObj);
	view.append(href);
}


function movieStop(id){
	vics[id].pause();
}

function moveItem(itemObj){
	if(itemObj.data("added")){
		itemObj.data("left",itemObj.data("left") + itemObj.data("distanceByFrameX"));
		itemObj.data("top",itemObj.data("top") + itemObj.data("distanceByFrameY"));
		itemObj.css({"left":itemObj.data("left")});
		itemObj.css({"top":itemObj.data("top")});
	}
	//console.log(itemObj.data("left"));
}