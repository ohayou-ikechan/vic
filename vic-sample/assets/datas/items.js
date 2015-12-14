// function loadItems(i){
var items = [
	//サンプルビデオ 1
	[
		{
			itemName: "item1",
			top: 95,
			left: 280,
			width: 87,
			height: 100,
			startTime: 12.84,
			url: "",
            details: {
                name: "スキンモデリングアイズ",
                price: "5,000",
                description: "澄んだ色と光で肌そのものの美しさを際立たせるベージュを基調とした4色セットのアイシャドウ。<br>モデリングハイライトが色と肌を一体化させ立体感を生み出します。",
                image: {
                    thumbnail: './assets/images/sample.png',
                    small: './assets/images/sample.png',
                    large: './assets/images/sample.png'
                },
                item_id: 11
            },
			translateX: 0,
			translateY: 0,
			duration: 4.5,
			tag:{
				text:"スキンモデリングアイズ<br>¥5000",
				css:{
					"font-family": "Sans-serif",
					color: "white",
          fontWeight: "bold",
          textShadow: "0 1px 1px rgba(0,0,0,.4)",
					position: "absolute",
					bottom: "-50px",
					right: "-50px"
				}
			}
		},
		{
			itemName: "item2",
			top: 138,
			left: 448,
			width: 170,
			height: 77,
			startTime: 19,
			url: "http://amzn.to/1Si7qIT",
            details: {
                name: "スキンモデリングアイズ",
                price: "5,000",
                description: "澄んだ色と光で肌そのものの美しさを際立たせるベージュを基調とした4色セットのアイシャドウ。<br>モデリングハイライトが色と肌を一体化させ立体感を生み出します。",
                image: {
                    thumbnail: './assets/images/sample.png',
                    small: './assets/images/sample.png',
                    large: './assets/images/sample.png'
                },
                item_id: 11
            },
			translateX: 0,
			translateY: 0,
			duration: 4,
			tag:{
				text:"スキンモデリングアイズ<br>¥5000",
				css:{
					"font-family": "Sans-serif",
					color: "white",
          fontWeight: "bold",
          textShadow: "0 1px 1px rgba(0,0,0,.4)",
					position: "absolute",
					bottom: "-50px",
					right: "-10px"
				}
			}
		},
		{
			itemName: "item3",
			top: 138,
			left: 448,
			width: 170,
			height: 77,
			startTime: 29.7,
			url: "http://amzn.to/1Si7qIT",
            details: {
                name: "スキンモデリングアイズ",
                price: "5,000",
                description: "澄んだ色と光で肌そのものの美しさを際立たせるベージュを基調とした4色セットのアイシャドウ。<br>モデリングハイライトが色と肌を一体化させ立体感を生み出します。",
                image: {
                    thumbnail: './assets/images/sample.png',
                    small: './assets/images/sample.png',
                    large: './assets/images/sample.png'
                },
                item_id: 11
            },
			translateX: 0,
			translateY: 0,
			duration: 4,
			tag:{
				text:"スキンモデリングアイズ<br>¥5000",
				css:{
					"font-family": "Sans-serif",
					color: "white",
          fontWeight: "bold",
          textShadow: "0 1px 1px rgba(0,0,0,.4)",
					position: "absolute",
					bottom: "-50px",
					right: "-10px"
				}
			}
		},
		{
			itemName: "item4",
			top: 138,
			left: 448,
			width: 170,
			height: 77,
			startTime: 41,
			url: "http://amzn.to/1Si7qIT",
            details: {
                name: "スキンモデリングアイズ",
                price: "5,000",
                description: "澄んだ色と光で肌そのものの美しさを際立たせるベージュを基調とした4色セットのアイシャドウ。<br>モデリングハイライトが色と肌を一体化させ立体感を生み出します。",
                image: {
                    thumbnail: './assets/images/sample.png',
                    small: './assets/images/sample.png',
                    large: './assets/images/sample.png'
                },
                item_id: 11
            },
			translateX: 250,
			translateY: 0,
			duration: 3,
			tag:{
				text:"スキンモデリングアイズ<br>¥5000",
				css:{
					"font-family": "Sans-serif",
					color: "white",
          fontWeight: "bold",
          textShadow: "0 1px 1px rgba(0,0,0,.4)",
					position: "absolute",
					bottom: "-50px",
					right: "-10px"
				}
			}
		},
		{
			itemName: "item4",
			top: 138,
			left: 448,
			width: 170,
			height: 77,
			startTime: 49,
			url: "http://amzn.to/1Si7qIT",
            details: {
                name: "スキンモデリングアイズ",
                price: "5,000",
                description: "澄んだ色と光で肌そのものの美しさを際立たせるベージュを基調とした4色セットのアイシャドウ。<br>モデリングハイライトが色と肌を一体化させ立体感を生み出します。",
                image: {
                    thumbnail: './assets/images/sample.png',
                    small: './assets/images/sample.png',
                    large: './assets/images/sample.png'
                },
                item_id: 11
            },
			translateX: 0,
			translateY: 0,
			duration: 5,
			tag:{
				text:"スキンモデリングアイズ<br>¥5000",
				css:{
					"font-family": "Sans-serif",
					color: "white",
          fontWeight: "bold",
          textShadow: "0 1px 1px rgba(0,0,0,.4)",
					position: "absolute",
					bottom: "-50px",
					right: "-10px"
				}
			}
		}
	],


	//サンプルビデオ 2
	[
		{
			itemName: "sneaker-1",
			top: 180,
			left: 150,
			width: 240,
			height: 120,
			startTime: 0,
			url: "http://amzn.to/1Qu5der",
            details: {
                name: "プラントポット",
                price: "5,600",
                description: "ここに商品の説明が入ります",
                image: {
                    thumbnail: '',
                    small: '',
                    large: ''
                },
                item_id: 11
            },
			translateX: 0,
			translateY: 0,
			duration: 3,
			tag:{
				text:"ナイキスニーカー<br>¥15000",
				css:{
					"font-family": "Sans-serif",
					color: "white",
					"font-size":"15px",
					position: "absolute",
					bottom: "-10px"
				}
			}
		},
		{
			itemName: "t-shirt-1",
			top: 40,
			left: 135,
			width: 160,
			height: 250,
			startTime: 3.8,
			url: "http://amzn.to/1ShM4KS",
            details: {
                name: "プラントポット",
                price: "5,600",
                description: "ここに商品の説明が入ります",
                image: {
                    thumbnail: '',
                    small: '',
                    large: ''
                },
                item_id: 11
            },
			translateX: -130,
			translateY: 0,
			duration: 1,
			tag:{
				text:"ナイキTシャツ<br>¥15000",
				css:{
					"font-family": "Sans-serif",
					color: "pink",
					"font-size":"15px",
					position: "absolute",
					bottom: "-10px"
				}
			}
		},
		{
			itemName: "t-shirt-2",
			top: 40,
			left: 180,
			width: 110,
			height: 200,
			startTime: 4.8,
			url: "http://amzn.to/1ShM4KS",
            details: {
                name: "プラントポット",
                price: "5,600",
                description: "ここに商品の説明が入ります",
                image: {
                    thumbnail: '',
                    small: '',
                    large: ''
                },
                item_id: 11
            },
			translateX: 300,
			translateY: 0,
			duration: 2,
			tag:{
				text:"ナイキTシャツ<br>¥15000",
				css:{
					"font-family": "Sans-serif",
					color: "pink",
					"font-size":"15px",
					position: "absolute",
					bottom: "-10px"
				}
			}
		},
		{
			itemName: "sneaker-2",
			top: 180,
			left: 320,
			width: 170,
			height: 130,
			startTime: 8,
			url: "http://amzn.to/1Qu5der",
            details: {
                name: "プラントポット",
                price: "5,600",
                description: "ここに商品の説明が入ります",
                image: {
                    thumbnail: '',
                    small: '',
                    large: ''
                },
                item_id: 11
            },
			translateX: 0,
			translateY: 150,
			duration: 2,
			tag:{
				text:"ナイキスニーカー<br>¥15000",
				css:{
					"font-family": "Sans-serif",
					color: "pink",
					"font-size":"15px",
					position: "absolute",
					top: "-20px"
				}
			}
		},
		{
			itemName: "t-shirt-3",
			top: 0,
			left: 355,
			width: 170,
			height: 133,
			startTime: 13,
			url: "http://amzn.to/1ShM4KS",
            details: {
                name: "プラントポット",
                price: "5,600",
                description: "ここに商品の説明が入ります",
                image: {
                    thumbnail: '',
                    small: '',
                    large: ''
                },
                item_id: 11
            },
			translateX: 0,
			translateY: 200,
			duration: 4,
			tag:{
				text:"ナイキTシャツ<br>¥15000",
				css:{
					"font-family": "Sans-serif",
					color: "white",
					"font-size":"15px",
					position: "absolute",
					bottom: "-10px"
				}
			}
		}
	]
];
// 	return items[i];
// }