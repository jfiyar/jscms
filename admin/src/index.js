import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Student from '@/pages/Student';
import Teacher from '@/pages/Teacher';
import Admin from '@/pages/Admin';
import Login from '@/pages/Login';
import Auth from '@/pages/Auth';

if (module.hot) {
    module.hot.accept()
}

class Init extends React.Component{
    componentDidMount(){
        const queryParam=(data={})=>{
            return Object.keys(data).map(k=>{
                return k+'='+data[k]
            }).join('&')
        }
        window.get=(url,data)=>{
            return fetch('http://localhost:8080'+url+'?'+queryParam(data),{
                headers:{
                    'Authorization':localStorage.getItem('token')
                }
            }).then(resp=>resp.json())
        }
        window.post=(url,data)=>{
            return fetch('http://localhost:8080'+url,{
                method: 'post',
                body: queryParam(data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization':localStorage.getItem('token')
                }
            }).then(resp=>resp.json())
        }
    }
    render(){
        return false
    }
}

ReactDOM.render(
<div>
    <Init />
    <HashRouter>
        <Switch>
            <Route path="/student" component={Student} />
            <Route path="/teacher" component={Teacher} />
            <Route path="/admin" component={Admin} />
            <Route path="/login" component={Login} />
            <Route to="/auth" component={Auth}/>
            <Redirect to="/auth" />
        </Switch>
    </HashRouter>
</div>, document.getElementById('root'));

