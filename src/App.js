import React, { Component } from 'react';
import {HashRouter} from "react-router-dom"
import Routes from "./Routes"
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <HashRouter>

  

      {Routes}

      </HashRouter>
      
    );
  }
}

export default App;
