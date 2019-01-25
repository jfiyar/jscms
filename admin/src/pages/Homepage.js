import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from '@/layouts/BasicLayout';
import SysUser from './sys/User';
import SysAuth from './sys/Auth';
import SysModule from './sys/Module';
export default props =>
    !!localStorage.getItem('token') ? (<Layout>
        <Switch>
            {/* <Route path={`${props.match.path}`} component={() => "default"} /> */}
            <Route path={`${props.match.path}/sys/user`} component={SysUser} />
            <Route path={`${props.match.path}/sys/auth`} component={SysAuth} />
            <Route path={`${props.match.path}/sys/module`} component={SysModule} />
            <Route path={`${props.match.path}/about`} component={() => "404"} />
        </Switch>
    </Layout>)
        : (<Redirect to="/login" />);
