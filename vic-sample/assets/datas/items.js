// function loadItems(i){
var items = [
	//サンプルビデオ 1
	[
		{
			itemName: "item1",
			top: 10,
			left: 330,
			width: 133,
			height: 289,
			startTime: 0,
			url: "http://amzn.to/1Si7qIT",
            details: {
                name: "驚くほどのストレッチ！美脚ストレートパンツ",
                price: "1,900",
                description: "膝位置高めで脚長効果抜群。内側ボタン式だからウエストすっきり。素材	レーヨン77%・ナイロン20%・ポリウレタン3%  <br>モデル:身長：168cm/Sサイズ",
                image: {
                    thumbnail: 'http://s3-ap-northeast-1.amazonaws.com/vic-video/parco/assets/images/item.jpg',
                    small: 'http://s3-ap-northeast-1.amazonaws.com/vic-video/parco/assets/images/item.jpg',
                    large: 'http://s3-ap-northeast-1.amazonaws.com/vic-video/parco/assets/images/item8.jpg'
                },
                item_id: 11
            },
			translateX: 0,
			translateY: 0,
			duration: 3,
			tag:{
				text:"ストレートパンツ<br>¥1,900",
				css:{
					"font-family": "NotoSansCJKjp-Bold",
					color: "white",
					fontWeight: "bold",
					textShadow: "0 1px 1px rgba(0,0,0,.4)",
					position: "absolute",
					bottom: "-50px",
					right: "-50px"
				}
			},
			cartProps:{
				item_cd:"MK_2132",
				ITEMPROPERTY_CD:"C0034-S001",
				request:"insert",
				CART_AMOUNT:"1"
			}
		},
		{
			itemName: "item2",
			top: 150,
			left: 0,
			width: 165,
			height: 160,
			startTime: 4,
			url: "http://amzn.to/1Si7qIT",
            details: {
                name: "サンセベリア",
                price: "1,980",
                description: "説明：明るい場所～半日陰で育てます。日によく当てれば葉の色が濃く、大きな葉っぱに成長します。窓から少し離れた、部屋の中程でも管理できます。",
                image: {
                    thumbnail: 'http://s3-ap-northeast-1.amazonaws.com/vic-video/parco/assets/images/02.jpg',
                    small: 'http://s3-ap-northeast-1.amazonaws.com/vic-video/parco/assets/images/02.jpg',
                    large: 'http://s3-ap-northeast-1.amazonaws.com/vic-video/parco/assets/images/02.jpg'
                },
                item_id: 11
            },
			translateX: 250,
			translateY: 0,
			duration: 3,
			tag:{
				text:"観葉植物<br>¥1,980",
				css:{
					"font-family": "NotoSansCJKjp-Bold",
					color: "white",
					fontWeight: "bold",
					textShadow: "0 1px 1px rgba(0,0,0,.4)",
					"font-size":"20px",
					position: "absolute",
					bottom: "-20px",
					right: "-100px"
				}
			},
			cartProps:{
				item_cd:"MK_2132",
				ITEMPROPERTY_CD:"C0034-S001",
				request:"insert",
				CART_AMOUNT:"1"
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
            details: {
                name: "クレエ 本立て A",
                price: "9,800",
                description: "木とアイアンのシンプルなブックスタンド。A4サイズや雑誌サイズまでがぴったり収まるサイズです。コンパクトでちょっとしたスペースで使いやすいサイズにしました。",
                image: {
                    thumbnail: 'http://s3-ap-northeast-1.amazonaws.com/vic-video/parco/assets/images/01.jpg',
                    small: 'http://s3-ap-northeast-1.amazonaws.com/vic-video/parco/assets/images/01.jpg',
                    large: 'http://s3-ap-northeast-1.amazonaws.com/vic-video/parco/assets/images/01.jpg'
                },
                item_id: 11
            },
			translateX: 0,
			translateY: 0,
			duration: 3,
			tag:{
				text:"ブックスタンド<br>¥2,700",
				css:{
					"font-family": "NotoSansCJKjp-Bold",
					color: "white",
					fontWeight: "bold",
					textShadow: "0 1px 1px rgba(0,0,0,.4)",
					"font-size":"25px",
					position: "absolute",
					top: "10px"
				}
			},
			cartProps:{
				item_cd:"4530956523057",
				ITEMPROPERTY_CD:"C0237-S012",
				request:"insert",
				CART_AMOUNT:"1"
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
                name: "ナイキ ルナテンポ",
                price: "11,880",
                description: "軽量性、サポート力のあるフィット感、足裏の柔らかいクッショニングが特長。ランニング中に抜群に滑らかな履き心地を実現します。",
                image: {
                    thumbnail: './assets/images/03.jpg',
                    small: './assets/images/03.jpg',
                    large: './assets/images/03.jpg'
                },
                item_id: 11
            },
			translateX: 0,
			translateY: 0,
			duration: 3,
			tag:{
				text:"ランニングシューズ<br>¥11,880",
				css:{
					"font-family": "NotoSansCJKjp-Bold",
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
                name: "ナイキ DRI-FIT コントアー",
                price: "4,860",
                description: "最高のパフォーマンスのために必要不可欠な通気性を実現。メッシュニットが高い通気性を確保した体に沿うデザイン。体温が上昇しても快適なカバー力で軽快な動きが可能。",
                image: {
                    thumbnail: './assets/images/04.jpg',
                    small: './assets/images/04.jpg',
                    large: './assets/images/04.jpg'
                },
                item_id: 11
            },
			translateX: -130,
			translateY: 0,
			duration: 1,
			tag:{
				text:"ランニングシャツ<br>¥4,860",
				css:{
					"font-family": "NotoSansCJKjp-Bold",
					color: "white",
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
                name: "ナイキ DRI-FIT コントアー",
                price: "4,860",
                description: "最高のパフォーマンスのために必要不可欠な通気性を実現。メッシュニットが高い通気性を確保した体に沿うデザイン。体温が上昇しても快適なカバー力で軽快な動きが可能。",
                image: {
                    thumbnail: './assets/images/04.jpg',
                    small: './assets/images/04.jpg',
                    large: './assets/images/04.jpg'
                },
                item_id: 11
            },
			translateX: 300,
			translateY: 0,
			duration: 2,
			tag:{
				text:"ランニングシャツ<br>¥4,860",
				css:{
					"font-family": "NotoSansCJKjp-Bold",
					color: "white",
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
                name: "ナイキ ルナテンポ",
                price: "11,880",
                description: "軽量性、サポート力のあるフィット感、足裏の柔らかいクッショニングが特長。ランニング中に抜群に滑らかな履き心地を実現します。",
                image: {
                    thumbnail: './assets/images/03.jpg',
                    small: './assets/images/03.jpg',
                    large: './assets/images/03.jpg'
                },
                item_id: 11
            },
			translateX: 0,
			translateY: 150,
			duration: 2,
			tag:{
				text:"ランニングシューズ<br>¥11,880",
				css:{
					"font-family": "NotoSansCJKjp-Bold",
					color: "white",
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
                name: "ナイキ DRI-FIT コントアー",
                price: "4,860",
                description: "最高のパフォーマンスのために必要不可欠な通気性を実現。メッシュニットが高い通気性を確保した体に沿うデザイン。体温が上昇しても快適なカバー力で軽快な動きが可能。",
                image: {
                    thumbnail: './assets/images/04.jpg',
                    small: './assets/images/04.jpg',
                    large: './assets/images/04.jpg'
                },
                item_id: 11
            },
			translateX: 0,
			translateY: 200,
			duration: 4,
			tag:{
				text:"ランニングシャツ<br>¥4,860",
				css:{
					"font-family": "NotoSansCJKjp-Bold",
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