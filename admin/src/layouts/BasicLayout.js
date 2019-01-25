import React from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Sider from './Sider';
import Content from './Content';
import Footer from './Footer';
import styled from 'styled-components';

const StyledLayout=styled(Layout)`
min-height:100vh;
`;

const BasicLayout = props=>{
    return (
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

export default BasicLayout;