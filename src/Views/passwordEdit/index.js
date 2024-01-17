import {Button, Form, Input, message} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";
import React from "react";
import axios, {post} from "axios";

const View=()=>{
    const onEdit=({newpassword,confirm})=>{
        if(newpassword!==confirm){
            message.info("两次输入不一致")
        }else{
            const username=localStorage.getItem("username")
            axios.post('http://localhost:8080/api/editpsw', {username,newpassword})
                .then(response=>{
                    const responseData = response.data;
                    if(responseData==="success"){
                        message.info("修改成功")
                    }else{
                        message.info("修改失败")
                    }
                })
                .catch(error => {
                    console.log("Axios Error")}
                )
        }

    }
    return(
        <div style={{textAlign:'center'}}>
            <h1>设置你的密码</h1>
            <Form
                name="login-form"s
                onFinish={onEdit}
                layout="vertical"
                style={{marginLeft:'30%',width:'40%'}}
            >
                <Form.Item
                    label="设置密码"
                    name="newpassword"
                    rules={[
                        { required: true, message: '请输入密码!' },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="确认密码"
                    name="confirm"
                    rules={[
                        { required: true, message: '请确认密码!' },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <br/>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{width:'75px'}}>
                        <ArrowRightOutlined />
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default View