import React, { Component } from 'react'
import '../styles/common.css'
import Auth from './Pages/Auth';
import Application from './Pages/Application';

export default class App extends Component {

  render() {
    const login =false;
    return (
      <div className="form">
        {login===true ? <Application/> : <Auth/> }
      </div>
    )
  }
}
