import React from 'react'
import SrhForm from './srhUserForm'
import {Table} from 'antd'
import styled from 'styled-components'

const Style = styled.div`

`;

export default class extends React.Component{
    state={data:[],loading:false}
    cols=[
        {title:'用户名',dataIndex:'name'},
        {title:'学号/工号',dataUIndex:'code'},
        {title:'班级',dataUIndex:'class'},
        {title:'性别',dataUIndex:'sex'},
        {title:'账户类型',dataUIndex:'auth'},
        {title:'操作',render:item=>item.id&&<span>123{item.name}</span>},
    ]
    render(){
        const {data,loading} = this.state;
        return(<Style>
        <SrhForm />
        <div style={{background:'#fff',margin:'0 20px'}}>
            <Table 
                size="middle"
                columns={this.cols} loading={loading} dataSource={data} />
        </div>
        </Style>)
    }
}