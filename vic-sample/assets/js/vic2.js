"use strict";


var vic_object =
    {
        video: {
            src: 'sample01.mp4',
            width: 650,
            height: 350
        },
        items: [
            {
                itemName: "item2",
                top: 190,
                left: 0,
                width: 165,
                height: 160,
                startTime: 4,
                url: "http://amzn.to/1Si7qIT",
                translateX: 250,
                translateY: 0,
                duration: 3,
                tag:{
                    text:"プラントポット<br>¥5600",
                    css:{
                        "font-family": "Sans-serif",
                        color: "blue",
                        "font-size":"20px",
                        position: "absolute",
                        bottom: "-20px",
                        right: "-100px"
                    }
                }
            }
        ]
    }

;





var VideoWrap = React.createClass({
    play: function (evt) {
        debugger;
    },
    render: function () {
        return (
            <div class="video">
                <Video data={this.props.data.video} />
                <div class="controls">
                    <button onClick={this.play}>Play</button>
                    <button>Stop</button>
                    <button>再開</button>
                </div>
                <div id="timeDisplay"></div>
            </div>
        );
    }
});

var Video = React.createClass({
    componentDidMount: function () {

    },
    play: function () {
        debugger;
    },
    render: function () {
        return (
            <video src={this.props.data.src} width={this.props.data.width} height={this.props.data.height}></video>
        );
    }
});


ReactDOM.render(
    <VideoWrap data={vic_object} />,
    document.getElementById('video01')
);






