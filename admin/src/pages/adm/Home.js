import React from 'react'
import {Statistic, Card, Row, Col, Divider,Empty} from 'antd'

export default class extends React.Component{
    render(){
        return(
            <div>
               <div style={{ padding: '30px' }}>
                    <Row gutter={16}>
                    <Col span={8}>
                        <Card>
                        <Statistic
                            title="班级"
                            value={11}
                            prefix={"共"}
                            suffix="个"
                        />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                        <Statistic
                            title="学生"
                            value={59124}
                            prefix="共"
                            suffix="名"
                        />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                        <Statistic
                            title="职工"
                            value={824}
                            prefix="共"
                            suffix="位"
                        />
                        </Card>
                    </Col>
                    </Row>
                    <Card style={{marginTop:20}}>
                        消息通知
                        <Divider />
                        <Empty description="暂无通知" />
                    </Card>
                    <Card style={{marginTop:20}}>
                        通报
                        <Divider />
                        <Empty description="暂无通报" />
                    </Card>
                </div>
            </div>
        )
    }
}