import React from 'react'
import {Layout,Menu,Icon} from 'antd'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'


const {Sider}=Layout
const {Item}=Menu
const StyleSider = styled(Sider)`
    border-right:1px solid #eee;
    z-index: 99;
.user{
    padding: 20px 20px 10px;
    font-size: 18px;
    font-weight: bold;
    text-align:center;
    .avatar{
        height: 60px;
        width: 60px;
        margin:0 auto;
        background:#f00;
        color:#fff;
        line-height:60px;
        border-radius:30px;
        font-size:36px;
        margin-bottom:4px;
    }
}
.menu{
    border-right:none;
}
`

export default withRouter(class extends React.Component{
    constructor(props){
        super(props)
        let path=props.location.pathname.split('/admin/')
        if(!path[1]){
            this.props.history.push(`${this.props.match.path}/home`)
            path[1]='home'
            console.log(path)
        }
        this.defaultSelectedKey=path[1].split('/')[0]
    }
    sex=localStorage.getItem('sex');
    handleChange=item=>{
        this.props.history.push(`${this.props.match.path}/${item.key}`)
    }
    render(){
        const {sex}=this;
        return(
            <StyleSider style={{background:'#fff'}}>
                <div className="user">
                    <div className="avatar" style={{backgroundColor:`${sex==='男'?'#1890ff':sex==='女'?'#ff00c3':'#aaa'}`}} >{localStorage.getItem('username')[0]}</div>
                    <div>{localStorage.getItem('username')}</div>
                </div>
                <Menu
                    className="menu"
                    inlineCollapsed={true}
                    mode="inline"
                    defaultSelectedKeys={[this.defaultSelectedKey]}
                    onSelect={this.handleChange}
                >
                    <Item key="home"><Icon type="home"/><span>主页</span></Item>
                    <Item key="user"><Icon type="user"/><span>用户管理</span></Item>
                    <Item key="work"><Icon type="user"/><span>作业管理</span></Item>
                </Menu>
            </StyleSider>
        )
    }
})