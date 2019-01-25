import React from 'react';
import { Layout, Icon, Popconfirm} from 'antd';
import styled from 'styled-components';
import {Redirect} from 'react-router-dom';

const {Header}  = Layout;

const StyledHeader=styled(Header)`
background:#fff;
box-shadow:0 3px 3px #ccc;
text-align:right;
.logoutBtn{
    margin-left:20px;
    cursor:pointer;
}
`;

class HeaderView extends React.Component{
    state={logout:false}
    handleLogout=()=>{
        localStorage.clear();
        this.setState({
            logout:true
        })
    }
    render(){
        if(this.state.logout){
            return <Redirect to="/login" />
        }
        return(
            <StyledHeader>
                <span><Icon type="user" /> {localStorage.getItem('name')}</span>
                <Popconfirm okType="danger" className="logoutBtn" placement="bottomLeft" title="确定要离开么~ QwQ~" onConfirm={this.handleLogout} ><Icon type="logout" /> 注销</Popconfirm>
            </StyledHeader>
        )
    }
}


export default HeaderView;