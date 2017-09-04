import React, { Component } from 'react';
import Button from './components/Button.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { val1: '', val2: '', res: '' };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        //console.log(e.target.id);
        var val = e.target.value;
        switch (e.target.id) {
            case 'box1': this.setState({
                val1: val
            });
                break;
            case 'box2': this.setState({
                val2: val
            });
        }

    }

    onEvaluate(e) {
        //console.log(e.target);
        var val1 = this.state.val1;
        var val2 = this.state.val2;
        var result = 0;
        switch (e.target.id) {
            case 'add':
                result = parseInt(val1) + parseInt(val2);
                break;
            case 'subtract':
                result = parseInt(val1) - parseInt(val2);
                break;
            case 'multiply':
                result = parseInt(val1) * parseInt(val2);
                break;
            case 'divide':
                result = parseInt(val1) / parseInt(val2);
                break;
        }
        if (result)
            this.setState({
                res: result
            });
    }

    onClear() {
        this.setState({
            val1: '',
            val2: '',
            res: ''
        });
    }
    render() {
        var containerStyle = {
            marginTop : '40px',
            maxWidth: '75%',
            padding:'20px'
        }

        return (
            <div className="card ml-auto mr-auto" style={containerStyle}>
                <p className='card-header display-3'>Simple Calculator</p>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <input className='form-control form-control-lg' type="text" placeholder={'Result'} value={this.state.res} disabled />
                        </div>
                    </div>
                    <div className="row" style={{marginTop:'20px', marginLeft:'0px'}}>
                        <div className="col-8">
                            <div className="row">
                                <input className="form-control form-control-lg" id='box1' type="text" placeholder="Enter 1st Number" onChange={this.onChange} value={this.state.val1} />
                            </div>
                            <div className="row">
                                <input className="form-control form-control-lg" style={{marginTop:'10px'}} id='box2' type="text" placeholder="Enter 2nd Number" onChange={this.onChange} value={this.state.val2} />
                            </div>
                            <div className="row">
                                <div className="col-4 mr-auto ml-auto" style={{marginTop:'20px'}}>
                                    <Button operator={'Clear'} onClick={this.onClear.bind(this)} color={'#ff0000'} />
                                </div>
                            </div>

                        </div>
                        <div className="col-4">
                            <div className="col">
                                <Button id='add' operator={"Addition"} onClick={this.onEvaluate.bind(this)} />
                            </div>
                            <div className="col">
                                <Button id='subtract' operator={"Subtraction"} onClick={this.onEvaluate.bind(this)} />
                            </div>
                            <div className="col">
                                <Button id='multiply' operator={"Multiplication"} onClick={this.onEvaluate.bind(this)} />
                            </div>
                            <div className="col">
                                <Button id='divide' operator={"Division"} onClick={this.onEvaluate.bind(this)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;