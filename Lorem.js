import React, { Component } from 'react';

class Lorem extends Component {
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
				<label htmlFor="lorem">Да или Нет</label>
				<select className="form-control" id="lorem" value={this.props.value} onChange={this.onChange}>
					<option value="1">Начинай</option>
					<option value="0">Вот такие приколы</option>
				</select>
			</div>
		);
	}
}

export default Lorem;
