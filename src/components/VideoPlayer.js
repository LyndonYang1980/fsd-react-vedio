import React from 'react'
import Player from './Player'
import VideoControl from './VideoControl'
import ProgressBarControl from './ProgressBarControl'

class VideoPlayer extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div>
				<Player source={this.props.source}/>
				<ProgressBarControl />
				<VideoControl />
			</div>
		)
	}
}

export default VideoPlayer
		