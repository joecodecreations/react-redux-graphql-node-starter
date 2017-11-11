/* imports */ 
import React, { Component } from 'react';
import * as content from '../../Content';
/* Styles */ 
import './ContentContainer.css';


class ContentContainer extends Component {
  constructor() {
    super();
    this.state = {
      clicks: 0
    };
    this.increment = this.increment.bind(this);
    this.deincrement = this.deincrement.bind(this);
  }

  increment() {
    this.setState({
      clicks: ++this.state.clicks
    })
  };

  deincrement() {
    this.setState({
      clicks: --this.state.clicks
    })
  };

  render() {

    return (
      <div className="content-container">
        <img src="images/redhat.png" className="myImage" />
        <button onClick={ this.deincrement } >-</button><input type="number" value=" { this.state.clicks }" listen/>{ this.state.clicks }<button onClick={ this.increment } >+</button>
      </div>
    );
  }
}

export default ContentContainer;
