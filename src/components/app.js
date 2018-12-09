import React, { Component } from 'react';
import Sidebar from './sidebar';
import Content from './content'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {working : true}
    this.handler = this.handler.bind(this)
  }

  handler = function() {
    return(
      this.setState({
        working: !this.state.working
      })
    )
  }.bind(this)
  
  render() {
    return (
      <div>
        <div className={`app ${this.state.working ? 'working': 'broken'}`}>
          <Sidebar pass={this.handler}/>
          <Content />
        </div>
        <div className='fix' onClick={() => this.setState({working: !this.state.working})}>
        I told you not to click that!<br/> Click me to fix this mess. 
      </div>
     </div>
    );
  }
}