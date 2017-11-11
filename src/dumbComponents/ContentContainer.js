/* imports */ 
import React, { Component } from 'react';
import * as content from '../Content';
/* Styles */ 
import './ContentContainer.css';


class ContentContainer extends Component {
  render() {
    return (
      <div className="content-container">
        <img src="images/redhat.png" className="myImage" />
      </div>
    );
  }
}

export default ContentContainer;
