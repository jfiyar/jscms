import React from 'react';
import { Layout } from 'antd';

const {Sider,Header,Content,Footer} = Layout;

const StyledLayout=styled(Layout)`
min-height:100vh;
`;


export default class extends React.Component{
    render(){
        return(
            <StyledLayout>
                <Sider />
                <Layout>
                    <Header />
                    <Content >{props.children}</Content>
                    <Footer />
                </Layout>
            </StyledLayout>
        )
    }
};