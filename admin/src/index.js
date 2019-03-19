import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Homepage from '@/pages/Homepage';
import Login from '@/pages/Login';

if (module.hot) {
    module.hot.accept()
}
ReactDOM.render(<HashRouter>
    <Switch>
        <Route path="/admin" component={Homepage} />
        <Route path="/login" component={Login} />
        <Redirect to="/admin" />
    </Switch>
</HashRouter>, document.getElementById('root'));

