"use strict";

function Vic (items, $elem) {

  this.fps = 40;
  this.items = items;
  this.$el = $elem;
  this.$video = this.$el.find('video');
  this.$video_wrap = this.$video.parent();
  this.$selected_item_wrap = this.$el.find('.selected_item_wrap');
  this.controls = {
    $play: this.$el.find('.controls .play'),
    $pause: this.$el.find('.controls .pause')
  };
  this.video = this.$video[0];
  this.pauseFlag = false;
  this.started = false;
  this.templates = {
    modal: _.template($('#vic_modal_contents').html()),
    selected_item: _.template($('#vic_selected_item').html())
  };
  this.$pointer = $(".mouse");

  this.init();

  return this;

}

Vic.prototype.play = function(){

  if ( this.started == false ) {

    this.createItemObjects();
    this.started = true;
    this.pointerPlay_();

  } else {

    this.pauseFlag = false;

  }

  this.controls.$play.hide();
  this.controls.$pause.fadeIn();
  this.video.play();

};

Vic.prototype.pause = function(){

  if ( this.started == false ) {

  } else {

    this.pauseFlag = true;
    this.controls.$pause.hide();
    this.controls.$play.fadeIn();

  }
  this.video.pause();

};

Vic.prototype.pointerPlay_ = function(){

  var me = this;
  var vid = this.video;
  var items = this.items;

  doRender();

  function doRender(){

    setTimeout(function(){
      if(!vid.ended){

        if(!me.pauseFlag){

          for(var i=0; items.length > i; i++){

            var itemObj = items[i].$dom;

            if(itemObj.data("startTime") < vid.currentTime && !itemObj.data("added")){

              itemObj.data("added",true);
              me.putItem(itemObj);

            }else if(itemObj.data("endTime") < vid.currentTime && itemObj.data("added")){

              itemObj.stop();
              itemObj.css("display","none");

            }else{

              me.moveItem(itemObj);

            }
          }
        }
        doRender();
      }else{

        me.started = false;
        $("#timeDisplay").text("");

      }
    }, 1000/me.fps);
  }
};



Vic.prototype.createItemObjects = function () {

  var that = this;
  var items = this.items;

  for(var i=0; items.length > i; i++){

    var itemName = items[i].itemName;
    //console.log(item.top + ":----------------------:" + videoObj.position().top);
    var top = items[i].top;
    var left = items[i].left;
    var width = items[i].width;
    var height = items[i].height;
    var startTime = items[i].startTime;
    var endTime = items[i].startTime + items[i].duration;
    var url = items[i].url;
    var distanceByFrameX = items[i].translateX / (items[i].duration * this.fps);
    var distanceByFrameY = items[i].translateY / (items[i].duration * this.fps);
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


    if(typeof items[i].tag !== "undefined"){

      var div = $("<div>").css(items[i].tag.css);

      if(items[i].tag.text){
        div.append($("<p>" + items[i].tag.text + "</p>"));
      }

      itemObj.append(div);

    }

    items[i].$dom = itemObj;

    ////オブジェクトをクリックした時の挙動
    itemObj.on('click', items[i], function (evt) {

      that.movieStop();
      that.openModal(evt.data);

    });

    itemObj.bind({
      'mouseover': function (evt) {

        console.log("enter");
        that.$pointer.fadeIn();

      },
      'mouseout': function (evt) {
        console.log("out");
        that.$pointer.fadeOut();

      }
    });

  }

};


Vic.prototype.putItem = function (itemObj) {

  this.$video_wrap.append(itemObj);

};


Vic.prototype.movieStop = function () {
  this.pause();
};

Vic.prototype.moveItem = function (itemObj) {
  if(itemObj.data("added")){
    itemObj.data("left",itemObj.data("left") + itemObj.data("distanceByFrameX"));
    itemObj.data("top",itemObj.data("top") + itemObj.data("distanceByFrameY"));
    itemObj.css({"left":itemObj.data("left")});
    itemObj.css({"top":itemObj.data("top")});
  }
};

Vic.prototype.openModal = function (item) {

  var target_obj = this;
  var $dom_modal = $(this.templates.modal({ item: item }));
  var $parent = this.$video_wrap;

  $dom_modal.find('.close').on('click', function (evt) {
    $dom_modal.remove();
    target_obj.play();
  });

  $dom_modal.find('.add_item').on('click', function (evt) {

    item.selected = true;
    target_obj.renderSelectedItems();

  });
  $parent.append($dom_modal);

  return this;
};


Vic.prototype.renderSelectedItems = function () {

  var selected_items = _.where(this.items, { selected: true });
  var that = this;
  var $btn_area = this.$selected_item_wrap.find('.btn_area');
  var $selected_items_area = this.$selected_item_wrap.find('.selected_item_area');

  $btn_area.empty();
  if ( selected_items.length > 0 ) {
    $btn_area.html('<div class="btn btn-default add_to_cart">購入手続きへ進む</div>');
    $btn_area.find('.add_to_cart').on('click', function (evt) {
    })
  } else {
    $btn_area.find('.btn_area').empty();
  }

  $selected_items_area.empty();
  for ( var i =0; selected_items.length > i; i++ ) {

    var $node = $(this.templates.selected_item({ item: selected_items[i] }));

    ////イベント
    $node.find('.unselect').each(function () {
      $(this).on('click', selected_items[i], function (evt) {
        evt.data.selected = false;
        that.renderSelectedItems();
      });
    });

    $selected_items_area.append($node);

  }

};

Vic.prototype.init = function () {

  var that = this;

  this.controls.$play.hide();
  this.controls.$pause.hide();

  ////ボタンイベントの設定
  ////再生
  this.$el.find('.play').each(function () {

    $(this).on('click', function () {
      that.play();
    });

  });

  ////停止
  this.$el.find('.pause').each(function () {

    $(this).on('click', function () {
      that.pause();
    });

  });

  this.$video_wrap.on('mouseenter', function (evt) {
    that.showControls();
  });

  this.$video_wrap.on('mouseleave', function (evt) {
    that.hideControls();
  });


  /////ビデオのコントロールイベント
  /////https://developer.mozilla.org/ja/docs/Web/Guide/Events/Media_events
  this.video.addEventListener('playing', function ( evt ) { that.onPlaying(evt); });
  this.video.addEventListener('ended', function ( evt ) {
    that.started = false;
    that.controls.$play.fadeIn();
    that.controls.$pause.hide();
    that.onEnded(evt);
  });

  ////ポインターの制御
  $(document).off('mousemove');

  this.$pointer.hide();

  $(document).on('mousemove', function (evt) {
    that.followPointer(evt);
  });


  this.createItemObjects();
};

Vic.prototype.showControls = function () {
  if ( this.started ) {
    this.controls.$pause.fadeIn();
  } else {
    this.controls.$play.fadeIn();
  }
};

Vic.prototype.hideControls = function () {
  if ( this.started ) {
    this.controls.$pause.fadeOut();
  } else {
    this.controls.$play.fadeOut();
  }
};

/////ビデオイベント
Vic.prototype.onPlaying  = function (evt) {
  console.log('playing');
};

Vic.prototype.onEnded  = function (evt) {
  console.log('ended');
};

Vic.prototype.followPointer = function (evt) {

  var mouseX = evt.pageX - 13;
  var mouseY = evt.pageY - 18;
  var xp = 50, yp = 50;
  // console.log('mouse is moving');
  xp += (mouseX - xp);
  yp += (mouseY - yp);
  this.$pointer.css({left:xp, top:yp});

};

function initializeVic(){

  for(var i=0; items.length > i; i++){

    new Vic(items[i],$("#video-" + i));

  }

}


window.onload = function () {
  initializeVic();
};



