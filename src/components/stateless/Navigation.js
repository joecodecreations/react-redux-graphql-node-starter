/* imports */ 
import React, { Component } from 'react';
/* Components */ 
import NavItem from './NavItem';
/* Styles */ 
import './Navigation.css';
/* Content */ 
import * as content from '../../Content';


class Navigation extends Component {
  render() {
    return (
      <div className="navigation-container">
        <NavItem text="About" link="http://hotmail.com"></NavItem>
        <NavItem text="Projects" link="http://hotmail.com"></NavItem>
        <NavItem text="Github" link="http://hotmail.com"></NavItem>
        <NavItem text="Contact" link="http://hotmail.com"></NavItem>
      </div>
    );
  }
}

export default Navigation;
