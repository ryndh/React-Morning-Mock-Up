import React, { Component } from 'react';
import Button from './button';
import BreakButton from './breakButton';
import { Logo } from './logo';

export default class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <div className='sidebar-top'>
                    <Logo />
                    <Button />
                    <Button />
                    <Button />
                    <BreakButton breaker={this.props.pass}/>
                    <Button />
                    <Button />
                </div>
                <div className='sidebar-bottom'>
                    <Logo />
                </div>

            </div>
        )
    }
}