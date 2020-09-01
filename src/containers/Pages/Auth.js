import React from 'react'
import {BrowserRouter as Router, Redirect, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from '../Pages/AuthPages/LoginContainer'
import Register from '../Pages/AuthPages/RegisterContainer'
import ForgetPass from '../Pages/AuthPages/ForgetPassContainer';

export default class Auth extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
            <Route path="/" exact  component={Login}/>
            <Route path="/register" exact  component={Register}/>
            <Route path="/forget" exact  component={ForgetPass}/>
            <Redirect to='/'/>
            </Switch>
        </Router>
        )
    }
}
