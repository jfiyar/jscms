import React from 'react';
import {Layout, Icon,Menu} from 'antd';
import styled from 'styled-components';
import {Link,withRouter} from 'react-router-dom';

const {Sider} = Layout;

const {SubMenu,Item} = Menu;

const StyledSider=styled(Sider)`
.ant-menu-item > a{
    display:inline-block
}
.logo{
    background:#002041;
    padding:20px 0 14px;
    &>div{
    color:#ffffff;
    font-size:20px;
    font-weight:lighter;
    letter-spacing:2px;
    margin:0 30px;
    text-align:center;
    white-space: nowrap;
    text-overflow:ellipsis; 
    overflow:hidden;
    }
    .icon{
        padding-right:10px;
    }
}
`;
var i = 0;
class MenuView extends React.Component{
    constructor(props){
        super(props);
        console.log(this);
        this.state={
            key:props.location.pathname,
            width:0,
        }
    }

    componentDidMount() {
        this.siv=setInterval(()=>{
            var w = this.state.width + 30;
            this.setState({width:w});
            if(w>=240){
                this.setState({width:240});
                clearInterval(this.siv);
            }
        },20);
        console.log(this.props.history)
        this.listener =this.props.history.listen((route) => {
            this.setState({key:route.pathname});
            console.log(i++);
        });
        
    }

    componentWillUnmount(){
        this.listener();
    }

    render(){
        return (<StyledSider collapsible defaultCollapsed={false} width={this.state.width}>
            <div className='logo'>
                <div>
                    <Icon type="fire" className="icon" />
                    <span>后台管理系统</span>
                </div>
            </div>
            <Menu selectedKeys={[this.state.key]} theme="dark" mode="inline">
                <SubMenu
                    key="system"
                    title={
                        <span>
                            <Icon type="deployment-unit" />
                            <span>系统管理</span>
                        </span>
                    }
                >
                    <Item key="/admin/sys/user"><Icon type="user" /><Link to="/admin/sys/user">用户信息</Link></Item>
                    <Item key="/admin/sys/auth"><Icon type="lock" /><Link to="/admin/sys/auth">权限信息</Link></Item>
                    <Item key="/admin/sys/module"><Icon type="lock" /><Link to="/admin/sys/module">功能模块</Link></Item>
                </SubMenu>
                <SubMenu
                    key="/index"
                    title={
                        <span>
                            <Icon type="html5" />
                            <span>首页内容管理</span>
                        </span>
                    }
                >
                    <Item ></Item>
                </SubMenu>
            </Menu>
        </StyledSider>)
    }
}

export default withRouter(MenuView);