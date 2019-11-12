import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';

class ProgressBarControl extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
        const divClass = "row";
        const progressClass = "progress-bar progress-bar-striped progress-bar-animated";
        
		return(
			<div className={divClass}>
				<div id="progressbar" className={progressClass} />
			</div>
		)
	}
}

export default ProgressBarControl