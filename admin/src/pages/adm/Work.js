import React from 'react'
import {Tabs,Icon} from 'antd'
import Home from './work/home'
const {TabPane}=Tabs;

export default class extends React.Component{
    render(){
        return(
            <Tabs
                type="editable-card"
                hideAdd
                tabBarStyle={{background:'#fff'}}
            >
                <TabPane closable={false} key="home" tab={<Icon type="home"/>}><Home /></TabPane>
            </Tabs>
        )
    }
}