import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nebo from '../Components/nebo';
import Blog from '../Components/blog';

class Rutiranje extends Component {
    render() {
        return (
            <Switch>
                <Route path="/About" component={Nebo}></Route>
                <Route path='/' component={Blog}></Route>
            </Switch>
        )
    }
}

export default Rutiranje;