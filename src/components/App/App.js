import React, { Component } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import Discover from '../Discover/Discover';

import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <Header/>
        <Discover/>
        <Footer/>
      </div>
    );
  }
}

export default App;
