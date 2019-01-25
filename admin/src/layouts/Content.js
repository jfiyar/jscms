import React from 'react';
import {Layout} from 'antd';

const {Content} = Layout;

const ContentView =props=>(
    <Content>
        {props.children}
    </Content>
)

export default ContentView;