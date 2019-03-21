import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './stu/Home';
import Write from './stu/Write';

export default props =>
    !!localStorage.getItem('token') ? (<Switch>
      <Route path={`${props.match.path}/home`} component={Home} />
      <Route path={`${props.match.path}/write`} component={Write} />
      <Redirect to={`${props.match.path}/home`} />
    </Switch>)
        : (<Redirect to="/login" />);
