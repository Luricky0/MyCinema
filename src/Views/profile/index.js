import React, {useState} from "react";
import {Button, Form, Input, message, Modal} from "antd";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {ArrowRightOutlined} from "@ant-design/icons";
const View=()=>{
    const navigateTo=useNavigate()
    const username=localStorage.getItem("username")
    const handleQuitButtonClick=()=>{
        localStorage.setItem("login",false)
        navigateTo("/mycinema/login")
        window.location.reload()
    }
    const handleVipButtonClick=()=>{
        axios.post('http://localhost:8080/api/vip',username)
            .then(response=>{
                const responseData = response.data;
                if(responseData==="success"){
                    localStorage.setItem("vip",true)
                    message.info("开通成功")
                }else{
                    localStorage.setItem("vip",false)
                    message.info("开通失败")
                }
            })
            .catch(error => {
                    console.log("Axios Error")}
            )
    }

    const accountState=localStorage.getItem("vip")==="true"?"VIP":"普通用户"
    const handlePasswordEditButtonClick=()=>{
        navigateTo("/mycinema/editpsw")
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>你好,{username}!</h1>
            <h3>帐户类型：{accountState}</h3>
            <Button onClick={handleVipButtonClick}>会员开通</Button><br/><br/>
            <Button onClick={handlePasswordEditButtonClick}>密码修改</Button><br/><br/>
            <Button href={'localhost:8080/excel/downExcel'}>POI文件下载</Button><br/><br/>
            <br/>
            <Button onClick={handleQuitButtonClick} type={"text"}>登出<ArrowRightOutlined/></Button>
        </div>
    )

}
export default View