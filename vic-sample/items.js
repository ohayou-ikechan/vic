function loadItems(){
	return [
		{
			itemName: "item1",
			top: 190,
			left: 260,
			width: 75,
			height: 100,
			startTime: 0.5,
			url: "http://amzn.to/1Si7qIT",
			tag: "観葉植物",
			animation:{
			  x: "-170px",
			  duration: 3000,
			  easing: 'in',
			  complete: function() {
			  	this.remove();
			  	this.added = false;
			  }
			}
		},
		{
			itemName: "item2",
			top: 190,
			left: 0,
			width: 165,
			height: 160,
			startTime: 3.7,
			url: "http://amzn.to/1Si7qIT",
			tag: "観葉植物",
			animation:{
			  x: "250px",
			  duration: 3000,
			  easing: 'in',
			  complete: function() {
			  	this.remove();
			  	this.added = false;
			  }
			}
		},
		{
			itemName: "item3",
			top: 50,
			left: 150,
			width: 340,
			height: 315,
			startTime: 7,
			url: "http://amzn.to/1NLQM2D",
			tag: "本棚",
			animation:{
			  x: "0px",
			  duration: 3000,
			  easing: 'in',
			  complete: function() {
			  	this.remove();
			  	this.added = false;
			  }
			}
		}
	];
}