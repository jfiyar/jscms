import React from 'react'
import SrhForm from './srhUserForm'
import {Table,Icon} from 'antd'
import styled from 'styled-components'
const Style = styled.div`
background:#fff;
padding: 16px;
.ant-tabs-bar{
    margin:0px;
}
.table{
    margin:0 20px;
    border:1px solid #eee;
}
`;

export default class extends React.Component{
    constructor(props){
        super(props)
        this.addUserTab=props.addUserTab;
    }
    state={data:[],loading:true}
    cols=[
        {title:'用户名',dataIndex:'username'},
        {title:'学号/工号',render:d=>d.student_code?d.student_code:d.staff_code},
        {title:'班级',width:200,render:d=>d.user_auth_id===1?d.student_code:<span style={{color:'#aaa'}}>{d.auth_name}无该属性</span>},
        {title:'性别',render:d=>d.sex===1?
            <span><Icon style={{color:'#1890ff'}} type="man"/>男</span>:d.sex===2?
            <span><Icon style={{color:'#f5222d'}} type="woman"/>女</span>:
            <span><Icon type="question"/>未知</span>},
        {title:'身份',dataIndex:'auth_name'},
        {title:<a onClick={()=>{this.addUserTab()}} href="javascript:void(0)">添加</a>,align:'right',render:item=><a onClick={()=>{this.addUserTab(item)}} href="javascript:void(0)">查看更多</a>},
    ]
    async componentDidMount(){
        const json=await window.get("/admin/user",{offset:0})
        this.setState({loading:false,data:json.data})
    }
    render(){
        const {data,loading} = this.state;
        return(<Style>
        <SrhForm />
        <div style={{background:'#fff'}}>
            <Table
                className="table"
                size="middle"
                columns={this.cols} loading={loading} dataSource={data} />
        </div>
        </Style>)
    }
}