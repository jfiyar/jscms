import React from 'react'
import {Form,Input,Button,Row,Col} from 'antd'

const {Item} = Form


export default Form.create({name:'admin_user_srh'})(
    class extends React.Component{
        render(){
            const {getFieldDecorator}=this.props.form
            return(
                <Form style={{padding:'0 20px'}}>
                <Row>
                    <Col span={6}>
                    <Item>
                        {getFieldDecorator('username',{
                            rules:[{}]
                        })(
                            <Input addonBefore="关键字" />
                        )}
                    </Item>
                    </Col>
                    <Col style={{textAlign:'right'}} span={6} offset={12}>
                    <Item>
                        <Button type="primary" htmlType="submit" >查询</Button>
                    </Item>
                    </Col>
                </Row>
                </Form>
            )
        }
    }
)