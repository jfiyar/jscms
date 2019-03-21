import React from 'react'
import styled from 'styled-components'
import {Divider,Spin, Empty} from 'antd'

const Style=styled.div`
padding:0 20px;
.card{
    border:1px solid #eee;
    padding:20px;
    margin-top: 20px;
}
.spin{
    display: block;
    margin:0 auto;
}
`;

export default class extends React.Component{
    state={loading:true}
    componentDidMount(){
        const {user}=this.props;
        if(user.user_auth_id!==1&&user.user_auth_id!==2){
            this.setState({loading:false})
        }else{
            window.get('/admin/user/info',{
                user_id:user.user_id,
                user_auth_id:user.user_auth_id
            });
        }
    }
    render(){
        const {user}=this.props;
        return(
            <Style>
                <div className="card">
                    <div>基本信息</div>
                    <Divider />
                    <div>用户名：{user.username}</div>
                    <div>身份：{user.auth_name}</div>
                    <div>{user.student_code?'学号':'工号'}：{user.student_code}{user.staff_code}</div>
                </div>
                <div className="card">
                    <div>{user.auth_name}信息</div>
                    <Divider />
                    <Spin className="spin" spinning={this.state.loading}>
                        {this.state.json?<>
                        
                        </>:<Empty />}
                    </Spin>
                </div>
            </Style>
        )
    }
}