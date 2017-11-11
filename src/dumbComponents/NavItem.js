/* imports */ 
import React, { Component } from 'react';
/* Components */ 
/* Styles */ 
import './NavItem.css';
/* Content */ 
import * as content from '../Content';


class NavItem extends Component {
  render() {
    return (
      <a href={this.props.link}>
        <div className="navButton">
            {this.props.text}
        </div>
      </a>
    );
  }
}
export default NavItem;
