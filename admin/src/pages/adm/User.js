import React from 'react'
import {Tabs,Icon} from 'antd'
import UserHome from './user/home'
import UserInfoTab from './user/UserInfoTab'
import AddUser from './user/AddUser'

const {TabPane}=Tabs;

export default class extends React.Component{
    state={
        tabs:[],
        active:'home'
    }
    handleAddUserTab=(user=false)=>{
        this.state.tabs.push(user)
        this.setState({tabs:this.state.tabs,active:this.state.tabs.length-1+''})
    }
    render(){
        return(
            <Tabs
                type="editable-card"
                hideAdd
                onTabClick={i=>{this.setState({active:i})}}
                activeKey={this.state.active}
                tabBarStyle={{background:'#fff'}}
                onEdit={(i)=>{
                    this.state.tabs.splice(i,1);
                    if(this.state.tabs.length===0){
                        this.setState({
                            active:'home'
                        })
                    }
                    this.setState({tabs:this.state.tabs});
                }}
            >
                <TabPane closable={false} key="home" tab={<Icon type="home"/>}>
                    <UserHome addUserTab={this.handleAddUserTab} />
                </TabPane>

                {this.state.tabs.map((user,index)=><TabPane closable={true} key={index} tab={user?`${user.auth_name}-${user.username}`:'添加用户'}>
                        {user?<UserInfoTab user={user} />:<AddUser />}
                </TabPane>)}
            </Tabs>
        )
    }
}