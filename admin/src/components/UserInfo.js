import React from 'react';
import {Avatar} from 'antd';
import styled from 'styled-components';
const Styled=styled.div`
text-align:center;
margin-bottom:10px;
.avatar{
    background:#f00;
    width:60px;
    height:60px;
    line-height:60px;
    font-size:34px;
    margin-top:10px;
}
.name{
    font-weight:bold;
    margin-top:10px;
    font-size:20px;
}
`;
export default class extends React.Component{
    render(){
        const sex=localStorage.getItem('sex');
        return (
            <Styled>
                 <Avatar style={{backgroundColor:`${sex==='男'?'#1890ff':sex==='女'?'#ff00c3':'#aaa'}`}} className="avatar" size="large">
                    {localStorage.getItem('username')[0]}
                </Avatar>
                <div className="name">{localStorage.getItem('username')}</div>
            </Styled>
        )
    }
}