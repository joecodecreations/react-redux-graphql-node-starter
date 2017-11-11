import React, { Component } from 'react';
import './Header.css';
import Navigation from './Navigation';
import * as content from '../../Content';

let injectedStyles = `
  .header-container {
    left:0;
    right:0; 
    background:rgb(48, 48, 48);
    width:100%;
    height: 65px;
  }

  .header-title {
    position: absolute;
    left: 63px;
    top: -12px;
    color:white;
  }

  .header-logo {
    animation: logo-spin infinite 5s linear;
    height: 50px;
    position:absolute;
    left:2px;
    top:5px;
  }

  @keyframes logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

`;


class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <h1 className="header-title">{content.siteName}</h1>
        <img src={this.props.logo} className="header-logo" alt="logo" />
        <Navigation></Navigation>
      </div>
    );
  }
}

export default Header;
