import {Button, Form, Input, message} from "antd";
import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {ArrowRightOutlined} from "@ant-design/icons";
const View=()=>{
    const navigateTo=useNavigate()
    const onLogin = ({username,password,confirm}) => {
        if(confirm!==password){
            message.info("确认密码与密码不一致！")}
        else{
            const registration = {
                username,
                password
            };
            axios.post('http://localhost:8080/register', registration)
                .then(response => {
                    const responsedata=response.data
                    if(responsedata==="success"){
                        message.info("注册成功，正在跳转")
                        localStorage.setItem("username",username)
                        localStorage.setItem("vip",false)
                        localStorage.setItem("login",true)
                        navigateTo("/mycinema/display")
                        window.location.reload()
                    } else{
                        message.info("注册失败")
                    }
                })
                .catch(error => {
                    console.log("axios错误")
                });
        }
    }
    return(
        <div style={{textAlign:'center'}}>
            <h1>注册你的My Cinema账号</h1>
            <br/>
            <div style={{width:'40%',marginLeft:'30%'}}>
                <Form
                    name="login-form"
                    onFinish={onLogin}
                    layout="vertical"
                >
                    <Form.Item
                        label="设置用户名"
                        name="username"
                        rules={[
                            { required: true, message: '请输入邮箱！' },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="设置密码"
                        name="password"
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
        </div>
    )

}
export default View