import React, { Component } from 'react';
/* main */ 
import './App.css';
/* Resources */
import logo from './logo.svg';
/* Components */ 
import Header from './components/stateless/Header';
import Footer from './components/stateless/Footer';
import ContentContainer from './components/stateless/ContentContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logo={logo}/>
        <ContentContainer /> 
        <Footer />
      </div>
    );
  }
}

export default App;
