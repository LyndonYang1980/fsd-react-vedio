import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import play from '../images/play.png'

class VideoControl extends React.Component{
	constructor(props){
		super(props);
		this.playVideo = this.playVideo.bind(this);
		this.pauseVideo = this.pauseVideo.bind(this);
		this.volumePlay = this.volumePlay.bind(this);
		this.volumeMute = this.volumeMute.bind(this);
		this.changeVolume = this.changeVolume.bind(this);
		this.addLikes = this.addLikes.bind(this);
		this.state= {
			"playbuttondisplay": 'true',			
			"volumedisplay":'true',
			"volume":0.8,
		}
	}

	playVideo(){
		document.getElementById("videoItem").play();
		this.setState({
			"playbuttondisplay": 'false',
		})
	}

	pauseVideo(){
		document.getElementById("videoItem").pause();
		this.setState({
			"playbuttondisplay": 'true',
		})
	}

	volumePlay(){
		document.getElementById("videoItem").volume = localStorage.volPer;
		this.setState({
			"volumedisplay": 'true',
		})
	}

	volumeMute(){
		//var volPer = document.getElementById("volumerange").value;
		localStorage.volPer = document.getElementById("volumerange").value/100;
		this.setState({
			"volume": localStorage.volPer
		});		
		
		document.getElementById("videoItem").volume = 0;
		this.setState({
			"volumedisplay": 'false',
		})
	}

	changeVolume(){
		var percent = document.getElementById("volumerange").value/100;     
		document.getElementById("videoItem").volume = percent;	
		//document.getElementById("volumerange").value = percent * 100;	
		};	

	addLikes(){
		
	}

	render(){
		const divClass = "row";

		let playbuttonstyle = this.state.playbuttondisplay=='false'? {display: 'none'}:{display: 'inline'}
		let playdisablebuttonstyle = this.state.playbuttondisplay=='true'? {display: 'none'}:{display: 'inline'}
		let volumestyle = this.state.volumedisplay=='false'? {display: 'none'}:{display: 'inline'}
		let volumemutestyle = this.state.volumedisplay=='true'? {display: 'none'}:{display: 'inline'}
		let localStorage = window.localStorage;
		
		return(

			<div className={divClass}>
				<div className="col-md-2">

					<img src={play} id="playbutton" onClick={this.playVideo} style={playbuttonstyle}/>
					<img src={require("../images/" + "play-disabled.png")} style={playdisablebuttonstyle} id="playdisablebutton" />
					<img src={require("../images/" + "pause.png")} style={playdisablebuttonstyle} onClick={this.pauseVideo} id="pausebutton"/>
					<img src={require("../images/" + "pause-disable.png")} style={playbuttonstyle}/>					
				</div>
				<div className="col-md-3 offset-md-5">
					<img src={require("../images/" + "volume.png")} className="pull-right" style={volumestyle} onClick={this.volumeMute} id="volume" />
					<img src={require("../images/" + "volume-mute.png")} className="pull-right" style={volumemutestyle} onClick={this.volumePlay} id="volumemute" />					
					<input type="range" id="volumerange" min="1" max="100" onInput={this.changeVolume} />					
					{/* <img src={require("../images/" + "like.png")} id="like" onClick={this.addLikes} />
					<div id="numberoflikes"></div> */}
				</div>
				<div className="col-md-1 offset-md-1">
					<img src={require("../images/" + "like.png")} id="like" onClick={this.addLikes} />
					<div id="numberoflikes"></div>
				</div>
			</div>
		)
	}
}

export default VideoControl