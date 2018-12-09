import React, { Component } from 'react'

export default class BreakButton extends Component {
    constructor(props) {
        super(props)

        this.state={message: false}
    }
    render() {
        return(
            <button className='button button-bad' onMouseEnter={() => this.setState({message: !this.state.message})} onMouseLeave={() => this.setState({message: !this.state.message})} onClick={this.props.breaker} >{this.state.message ? "DON'T DO IT!!!!!" : 'NOT this Button'}</button>
        )
    } 
}