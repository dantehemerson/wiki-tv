import React, { Component } from 'react'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <Header/>      
	       { this.props.children }
        <Footer/>	    	      
      </div>
    )
  }
}

export default App;
