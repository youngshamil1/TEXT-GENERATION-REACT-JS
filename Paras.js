import React, { Component } from 'react';

class Paras extends Component {
	constructor(props) {
		super(props);
		this.state = {
			vale: props.value
		}
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({value: e.target.value}, function(){
			this.props.onChange(this.state.value);
		})
	}

	render() {
		return (
			<div className="form-group">
				<label htmlFor="paras">Cколько стрипсов ?</label>
				<select className="form-control" id="paras" value={this.props.value} onChange={this.onChange}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="9">9</option>
				</select>
			</div>
		);
	}
}

export default Paras;