import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Details} from './components/details'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <div className=" app">
                    <Route exact path='/' component={Dashboard}/>
                    <Route exact path='/details' component={Details}/>
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
