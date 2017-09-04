var React = require('react');

var Button = React.createClass({
    render: function(){

        var style = {
            
        }

        if(this.props.color){
            style.background = this.props.color;
        }
        return (
            <div className='col ml-auto mr-auto' style={{paddingBottom:'5px'}}>
                <button id={this.props.id} type='button' className='btn-lg btn-success btn-block' onClick={this.props.onClick} style={style}>{this.props.operator}</button>
            </div>
        );
    }
});

module.exports = Button;