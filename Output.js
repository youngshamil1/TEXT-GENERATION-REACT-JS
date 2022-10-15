import React, { Component } from 'react';


class Output extends Component {

	rederOutPut() {
		var paragraphs = [];
		for (let i = 0; i < this.props.text.length; i++) {
		 	paragraphs.push(<p className='paragraphs' key={i}>{this.props.text[i]}</p>);
		}
		return paragraphs;
	}

	render() {
		return (
			<div className="output">
				{this.rederOutPut()}
			</div>
		);
	}
}

export default Output;