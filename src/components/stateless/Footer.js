/* imports */ 
import React, { Component } from 'react';
import './Footer.css';
/* Components */ 
/* Content */ 
import * as content from '../../Content';


class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-content">
            {content.siteName} &copy; 2017
        </div>
      </div>
    );
  }
}

export default Footer;
