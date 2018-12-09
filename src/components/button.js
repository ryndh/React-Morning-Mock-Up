import React, { Component } from 'react';

export default class Button extends Component {
    constructor(props) {
        super(props)

        this.state={
            count: 0,
            mouse: false,
        }
        this.mousey = this.mousey.bind(this)
    }

    mousey = function() {
        this.setState({mouse: !this.state.mouse})
    }
        
    render(){
        return (
            <button className='button' onClick={() => this.setState({count : this.state.count + 1}) } onMouseEnter={this.mousey} onMouseLeave={this.mousey}>{this.state.mouse ? `Click count is ${this.state.count}` : 'Click this button'}</button>
        )
    }
}

