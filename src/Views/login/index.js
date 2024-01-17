import React from "react";
import {Button, Form, Input, message} from "antd";
import {
    ArrowRightOutlined
} from '@ant-design/icons';
import axios from "axios";
import {useNavigate} from "react-router-dom";
const View=()=>{
    const navigateTo=useNavigate();
    const onLogin = ({username,password}) => {
        const credentials = {
            username,
            password
        };
        axios.post('http://localhost:8080/api/login', credentials)
            .then(response => {
                const responseData = response.data;
                if(responseData==="vip"){
                    message.info("登录成功，正在跳转")
                    localStorage.setItem("username",username)
                    localStorage.setItem("login",true)
                    localStorage.setItem("vip",true)
                    navigateTo("/mycinema/display")
                    window.location.reload()
                }else if(responseData==="normal"){
                    message.info("登录成功，正在跳转")
                    localStorage.setItem("username",username)
                    localStorage.setItem("login",true)
                    localStorage.setItem("vip",false)
                    navigateTo("/mycinema/display")
                    window.location.reload()
                }else if(responseData==="failed"){
                    localStorage.setItem("username","")
                    localStorage.setItem("login",false)
                    localStorage.setItem("vip",false)
                    message.info("用户名或密码错误！")
                }else{
                    localStorage.setItem("username","")
                    localStorage.setItem("login",false)
                    localStorage.setItem("vip",false)
                    message.info("axios错误")
                }

            })
            .catch(error => {
                console.log("Axios Error")
            });
    };
    return(
        <div>
            <div style={{textAlign:'center'}}>
                <h2>登录My Cinema</h2>
                <Form
                    name="login-form"
                    onFinish={onLogin}
                    layout="vertical"
                    style={{marginLeft:'30%',width:'40%'}}
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[
                            { required: true, message: '请输入邮箱！' },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <div style={{display:'flex'}}>
                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[
                                { required: true, message: '请输入密码!' },
                            ]}
                            style={{width:'90%'}}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item style={{width:'10%',marginTop:'30px'}}>
                            <Button type="primary" htmlType="submit" style={{width:'90%'}}>
                                <ArrowRightOutlined />
                            </Button>
                        </Form.Item>
                    </div>

                </Form>
                <br/><br/>
                没有My Cinema账号？
                <Button style={{color:'rgba(56,117,246)'}}  type={"text"} onClick={()=>navigateTo("/mycinema/register")} >
                    立即创建你的My Cinema账号<ArrowRightOutlined />
                </Button>

            </div>


        </div>
    )

}
export default View