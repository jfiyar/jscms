import React from 'react'
import {Form, Input, Select, Button} from 'antd'


export default Form.create({
    name:'adminAddUserForm'
})(class extends React.Component{
    state={auth:false}
    handleFormSubmit=e=>{
        e.preventDefault()
        this.props.form.validateFields((err,val)=>{
            console.log(err,val)
        })
    }
    handleAuthChange=val=>{
        if(val===1&&!this.state.classess){
            this.setState({
                classess:[
                    {id:1590001,count:54},
                    {id:1590002,count:54},
                    {id:1590003,count:54},
                    {id:1590004,count:99},
                ]
            })
        }
        this.setState({auth:val})
    }
    render(){
        const {getFieldDecorator}=this.props.form
        const {auth}=this.state
        const addUser=auth===1
        return(
            <Form
                onSubmit={this.handleFormSubmit}
                style={{margin:'20px auto',maxWidth:500}}>
                <h2>添加用户</h2>
                <Form.Item>
                    {getFieldDecorator('username',{
                       rules:[
                           {required:true,message:'请输入用户名'}
                       ] 
                    })(
                        <label>
                            <Input addonBefore="姓名" />
                        </label>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password',{
                       rules:[
                           {required:true}
                       ] 
                    })(
                        <label>
                            <Input type="password" addonBefore="密码" />
                        </label>
                    )}
                </Form.Item>
                <Form.Item>
                    <div>选择身份</div>
                    {getFieldDecorator('auth',{
                       rules:[
                           {required:true,message:'身份不能为空'}
                       ] 
                    })(  
                        <Select onChange={this.handleAuthChange}>
                            <Select.Option value={1}>学生</Select.Option>
                            <Select.Option value={2}>教师</Select.Option>
                            <Select.Option value={3}>辅导员</Select.Option>
                            <Select.Option value={4}>管理员</Select.Option>
                        </Select>
                    )}
                </Form.Item>

                {addUser&&               
                    <Form.Item>
                    <div>请选择班级</div>
                    {getFieldDecorator('student_class_id',{
                       rules:[
                           {required:true}
                       ] 
                    })(
                        <Select showSearch loading={!this.state.classess} placeholder="请选择班级">
                            {this.state.classess&&this.state.classess.map(v=>{
                                return<Select.Option disabled={v.count>=99} title={'123'} value={v.id} >{v.id}</Select.Option>
                            })}
                        </Select>
                    )}
                </Form.Item>}

                <Form.Item>
                    <Button block type="primary" htmlType="submit">添加</Button>
                </Form.Item>
            </Form>
        )
    }
})