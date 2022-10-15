import React, { Component } from 'react';
import Output from './components/Output';
import Type from './components/Type';
import Paras from './components/Paras';
import Lorem from './components/Lorem';
import Title from './components/Title';
import './App.css';

class  App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'all-meat',
            paras: 5,
            startWithLorem: 1,
            format: 'json',
            text: '',
            // field: {},
        }
        this.showType = this.showType.bind(this);
        this.changeParas = this.changeParas.bind(this);
        this.changeLorem = this.changeLorem.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        this.getSampleText();
    }

    getSampleText = async (e) => {
        // e.preventDefault();
        try {
            const API_CALL = await fetch(`https://baconipsum.com/api/?type=${this.state.type}&paras=${this.state.paras}&start-with-lorem=${this.state.startWithLorem}&format=${this.state.format}`);
            if (API_CALL.ok) {
                const jsonResponse = await API_CALL.json();
                // console.log(jsonResponse.length);
                this.setState({
                    text: jsonResponse,
                })
            } else {
                throw new Error('Request Failed!');
            }
        }   catch (error) {
            console.log(error);
        }
    }

    showType(type){
        this.setState({type: type}, this.getSampleText);
    }

    changeParas(paras){
        this.setState({paras: paras}, this.getSampleText);
    }

    changeLorem(lorem){
        this.setState({startWithLorem: lorem}, this.getSampleText);
    }

    // handleChange = updatedValue => {
    //     this.setState({
    //         fields: {
    //             ...this.state.fields,
    //             ...updatedValue
    //         }
    //     }, this.getSampleText);
    // }

    render() {
        const barStyle = {
            width: '100%'
        }

        return (
            <div className="App container">
                <Title />
                {/*<Form value={this.state.fields} onChange={this.handleChange} />*/}
                <form>
                    <fieldset>
                        <legend>Выбери</legend>
                        <div className="row">
                            <div className="col-md-4">
                                <Type value={this.state.type} onChange={this.showType} />
                            </div>
                            <div className="col-md-4">
                                <Paras value={this.state.paras} onChange={this.changeParas} />
                            </div>
                            <div className="col-md-4">
                                <Lorem value={this.state.startWithLorem} onChange={this.changeLorem} />
                            </div>
                        </div>
                    </fieldset>
                </form>
                <hr/>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={barStyle} ariaValuenow="100" ariaValuemin="0" ariaValuemax="100"></div>
                </div>
                <hr/>
                <Output
                    text={this.state.text} />
            </div>
        );
    }
}

export default App;
