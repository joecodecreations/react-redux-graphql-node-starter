import React, { Component } from 'react';
/* main */ 
import './App.css';
/* Resources */
import logo from './logo.svg';
/* Components */ 
import Header from './dumbComponents/Header';
import Footer from './dumbComponents/Footer';
import ContentContainer from './dumbComponents/ContentContainer';

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
