import React, { Component } from 'react'
import '../styles/common.css'
import LoginForm from '../components/forms/LoginForm'
import RegistrationForm from '../components/forms/RegistrationForm'
import ForgetPassForm from  '../components/forms/ForgetPassForm'

export default class App extends Component {
  render() {
    return (
      <div className="form">
      <LoginForm/>
   <RegistrationForm/>
   <ForgetPassForm/>
   
      </div>
    )
  }
}
