import React from 'react';
import {Layout,Calendar, Divider,Empty,Affix ,Icon} from 'antd';
import styled from 'styled-components';
import LogoutButton from '@/components/LogoutButton';
import UserInfo from '@/components/UserInfo';
const {Sider,Content,Header}=Layout;
const MyLayout=styled(Layout)`
min-height:100vh;
.header{
    background:#fff;
    box-shadow:0 2px 8px #ddd;
    margin-bottom:3px;
    height:100px;
    z-index:99;
    .logout{
        float:right;
        padding-top:20px;
        a{
            color: red;
        }
    }
    .title{
        font-size:20px;
        line-height:1;
        padding-top:30px;
        display: inline-block;
        .ic{
            float:left;
            font-size:40px;
            color: #000;
            margin-top:2px;
        }
        .name{
            float:left;
            .zh{
                font-size:24px;
                letter-spacing:14px;
                font-weight:lighter;
                color: #1890ff;
            }
            .en{
                text-transform:uppercase;
                font-size:16px;
                color: #1890ff;
                margin-top:4px;
            }
        }
    }
}
.left{
  background:#f0f2f5;
  .userInfo{
      background:#fff;
      margin:3px 5px;
      padding:10px;
      border-radius:4px;
    box-shadow:0 2px 8px #ddd;
  }
  .timebox{
    margin: 5px;
    background:#fff;
    min-height:100%;
    border-radius:4px;
    box-shadow:0 2px 8px #ddd;
  }
}
.right{
  background:#f0f2f5;
  .note{
      margin:3px 5px 5px;
      background:#fff;
      height:calc(100% - 8px);
      border-radius:4px;
      box-shadow:0 2px 8px #ddd;
  }
}
.card{
    padding:20px;
    background:#fff;
    margin-top:3px;
    border-radius:4px;
    box-shadow:0 2px 8px #ddd;
}
`;

export default class extends React.Component{
    render(){
        return(
        <MyLayout>
            <Affix>
            <Header className="header">
                <span className="title">
                    <Icon className="ic" type="book" theme="twoTone" />
                    <span className="name">
                        <div className="zh">在线作业评阅系统</div>
                        <div className="en">homework online marking system</div>
                    </span>
                </span>
                <div className="logout"><LogoutButton /></div>
            </Header>
            </Affix>
            <Layout>
            <Sider width={290} className="left">
                <div>
                    <div>
                        <div className="userInfo">
                            <UserInfo />
                        </div>
                        <div  className="timebox">
                            <Calendar fullscreen={false} />
                        </div>

                    </div>
                </div>
            </Sider>
            <Content>
                <div className="card">
                    <div>消息通知</div>
                    <Divider/>
                    <Empty description="暂无通知" />
                </div>
                <div className="card">
                    <div>课程列表</div>
                    <Divider/>
                    <Empty description="暂无课程" />
                </div>
            </Content>
            <Sider width={290} className="right">
                <div className="note">

                </div>
            </Sider>
            </Layout>
        </MyLayout>
        )
    }
}