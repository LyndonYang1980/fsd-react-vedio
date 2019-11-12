import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class Player extends React.Component{
	constructor(props){
		super(props)

	}

	render(){
		const responsiveClass = "embed-responsive embed-responsive-16by9";
		return(
			<div className={responsiveClass}>
				<video src={this.props.source} id="videoItem" className={responsiveClass}>	
				</video>
			</div>
		)
	}
}

export default  Player