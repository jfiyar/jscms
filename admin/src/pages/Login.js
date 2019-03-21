import React, { Component } from 'react';
import { Form, Input, Icon, Button ,Spin,message} from 'antd';
import styled from 'styled-components';
import request from '@/utils/Request';
import { Redirect,Link } from 'react-router-dom';
import md5 from 'md5';




const Styled = styled.div`
width:100%;
height:100%;
position:fixed;
overflow:hidden;
background:${p => p.hide ? '#f0f2f5' : '#fff'};
transition:300ms;
@keyframes rotate{
    from {
transform: rotate(5deg);
    }to{
transform: rotate(-5deg);
    }
}
&::before{
    content:" ";
    display: block;
    width:200%;
    height:100%;
    left:-50%;
    top:${p => p.hide ? '-120%' : '-50%'};
    background:#0089ff;
    position: fixed;
    animation:rotate 10s infinite alternate;
    box-shadow: 0 10px 10px rgba(0,0,0,.3); 
    transition:300ms;
}
.form{
    /* animation:rotate 20s infinite alternate; */
    opacity:${p => p.hide ? 0 : 1};
    transform:scale(${p => p.hide ? 1.5 : 1});
    transition:300ms;
    width:500px;
    height:500px;
    margin:auto;
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:#fff;
    padding:100px 100px 100px;
    border-radius:50%;
    border:10px solid #0089ff;
    box-shadow:0 10px 10px rgba(0,0,0,0.2);
    .name{
        /* animation:rotate 10s infinite alternate; */
        text-align:center;
        font-size:30px;
        padding-bottom:20px;
        /* padding-top:30px; */
    }
}
`;

const { Item } = Form;

class Login extends Component {
    state = { login: !!localStorage.getItem('token'),loading:false,hide:true }
    submit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, val) => {
            if (err) {
                return;
            }
            this.setState({loading:true});
            try{
                const data = await (
                    await request('/open/login', {
                        method: 'post',
                        body: `code=${val.code}&password=${md5(val.password)}`,
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        }
                    })
                ).json();
                this.setState({ loading: false });
                if (data.code === 200) {
                    this.setState({ hide: true });
                    this.timeout = setTimeout(() => {
                        localStorage.setItem('token', data.data.token);
                        localStorage.setItem('auth', data.data.auth);
                        localStorage.setItem('code', data.data.code);
                        localStorage.setItem('id', data.data.id);
                        localStorage.setItem('sex', data.data.sex);
                        localStorage.setItem('username', data.data.username);
                        this.setState({ login: true });
                    }, 0);
                    return;
                }
                message.error(data.message);
            }catch(e){
                message.error("系统好像出错了qaq");
                this.setState({ loading: false });
            }
        })
    };
    componentDidMount(){
        localStorage.clear();
        setTimeout(()=>{
            this.setState({ hide: false });
        },10)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        if (this.state.login) {
            return <Redirect to="/auth" />
        }
        return (
            <Styled hide={this.state.hide}>
                <Form className="form" onSubmit={this.submit}>
                    <Spin spinning={this.state.loading} tip=" 确 认 身 份 i n g ~ ~ ~ " >
                    <Item className="name">
                        作业评阅系统
                    </Item>
                        <Item>
                            {
                                getFieldDecorator('code', { rules: [{ required: true, message: '快输入你的账号' }] })(
                                    <Input prefix={<Icon type="user" />} type="text" placeholder="这er输入账号" />
                                )
                            }
                        </Item>
                        <Item style={{marginBottom:0}}>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '不输密码我信你个鬼' }],
                            })(
                                <Input prefix={<Icon type="lock" />} type="password" placeholder="密码看这er" />
                            )}
                        </Item>
                        <Link style={{lineHeight:'36px'}} to="/retrieve">我忘了~</Link>
                        <Item>
                            <Button block type="primary" htmlType="submit">~ 走 ~ 你 ~</Button>
                        </Item>
                    </Spin>
                </Form>
            </Styled>
        )
    }
}


const LoginForm = Form.create({ name: 'login_form' })(Login);

export default LoginForm;
