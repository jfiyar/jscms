import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Homepage from '@/pages/Homepage';
import Login from '@/pages/Login';

if (module.hot) {
    module.hot.accept()
}
ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route path="/admin" component={Homepage} />
        <Route path="/login" component={Login} />
        <Redirect to="/admin" />
    </Switch>
</BrowserRouter>, document.getElementById('root'));

