import React from 'react';
import {Popconfirm,Icon} from 'antd';
import {Redirect} from 'react-router-dom';

export default class extends React.Component{
    state={leave:false}
    handleLogout=()=>{
        this.setState({
            leave:true
        })
    }
    render(){
        if(this.state.leave){
            return <Redirect to="/login" />
        }
        return (
            <div>
                <Popconfirm okType="danger" className="logoutBtn" placement="bottomLeft" title="确定要离开么~ QwQ~" onConfirm={this.handleLogout} >
                    <a>
                    <Icon type="logout" /> 退出
                    </a>
                </Popconfirm>
            </div>
        )
    }
}