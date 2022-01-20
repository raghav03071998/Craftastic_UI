
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" element = {<Home/>} />
                    <Route path="/Signup" element = {<Register/>} />
                </Switch>
            </Router>
        )
    }
}