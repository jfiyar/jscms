import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './adm/Home';
import User from './adm/User';
import Work from './adm/Work';
import {Layout} from 'antd';
import styled from 'styled-components';
import LogoutBtn from '@/components/LogoutButton'
import Sider from '@/components/AdminSider'

const {Header,Content,Footer}=Layout;

const MyLayout = styled(Layout)`
min-height:100vh;
.header{
    background:#fff;
    .title{
        font-size: 26px;
        letter-spacing:3px;
        /* text-shadow:0 1px 1px #000; */
        .name{
            float:left;
            /* color: #379fff; */
            font-weight: lighter;
        }
    }
    .logoutBtn{
        float:right;
    }
}
.content{
    background:#fff;
}
.footer{
    text-align:center;
}

`;

export default props =>(
        <MyLayout>
            <Sider />
            <Layout>
                <Header className="header">
                    <div className="title">
                        <span className="name">在线作业评阅管理系统</span>
                    </div>
                    <div className="logoutBtn">
                        <LogoutBtn />
                    </div>
                </Header>
            <Content className="content">
                <Switch>
                <Route path={`${props.match.path}/home`} component={Home} />
                <Route path={`${props.match.path}/user`} component={User} />
                <Route path={`${props.match.path}/work`} component={Work} />
                <Redirect to={`${props.match.path}/home`}  />
                </Switch>
            </Content>
            <Footer className="footer">
            <div>在线作业评阅管理系统 | 重庆工程学院 | 万良红</div>
            <div>技能鉴定项目 | 2019年 应届毕业生</div>
            </Footer>
            </Layout>
        </MyLayout>
    );
