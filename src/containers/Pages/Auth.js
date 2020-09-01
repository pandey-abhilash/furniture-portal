import React from 'react'
import {BrowserRouter as Router, Redirect, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import LoginForm from '../../components/forms/LoginForm'
import RegistrationForm from '../../components/forms/RegistrationForm'
import ForgetPassForm from '../../components/forms/ForgetPassForm'

export default class Auth extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
            <Route path="/" exact  component={LoginForm}/>
            <Route path="/register" exact  component={RegistrationForm}/>
            <Route path="/forget" exact  component={ForgetPassForm}/>
            <Redirect to='/'/>
            </Switch>
        </Router>
        )
    }
}
