import React from 'react';

class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({[event.target.name]: event.target.value}, function(){
			this.props.onChange({[event.target.name]: event.target.value});
		})
	}

	render() {
		return (
			<form>
				<fieldset>
				<legend>Выбери</legend>
					<div className="form-group">
						<label htmlFor="filler">С фильтром или без</label>
						<select className="form-control" id="filler" name="type" onChange={this.handleChange}>
							<option value="all-meat">Все мясо</option>
							<option value="meat-and-filler">какой-нибудь фильтр</option>
						</select>

						<div className="form-group">
						    <label htmlFor="paras">сколько стрипсов</label>
						    <input type="number" id="paras" name="paras" onChange={this.handleChange} min="1" max="10"/>
						</div>

						<div className="form-group">
							<label htmlFor="lorem">с фильтром или без</label>
							<select className="form-control" id="lorem" name="startWithLorem" onChange={this.handleChange}>
								<option value="1">Начинай</option>
								<option value="0">Просто мясо</option>
							</select>
						</div>
					</div>
				</fieldset>
			</form>
		);
	}
}

export default Form;