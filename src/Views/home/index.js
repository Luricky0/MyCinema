import React, {useEffect, useState} from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {Outlet,useNavigate} from "react-router-dom";
import {PlaySquareOutlined} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
const Views = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigateTo=useNavigate()
    const MenuClick=(e)=>{
        navigateTo("/mycinema/"+e.key)
    }
    const [menuItems,setMenuItems]=useState([])
    useEffect(() => {
        const loginState=localStorage.getItem("login")
        console.log(loginState)
        if(loginState==="true"){
            setMenuItems([
                {key:'display',label:'影片展示'},
                {key:'rank',label:'电影排行'},
                {key:'artists',label:'主创作品'},
                {key:'profile',label:'用户信息'}])
        }else{
            setMenuItems([
                {key:'display',label:'影片展示'},
                {key:'rank',label:'电影排行'},
                {key:'artists',label:'主创作品'},
                {key:'login',label:'登录注册'}])
        }
    }, []);
    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center'
                }}

            >
                <div> <img style={{width:'130px',marginTop:'30px'}}  src={process.env.PUBLIC_URL+"/logo.png"}/> </div>
                <Menu
                    theme={"dark"}
                    mode="horizontal"
                    items={menuItems}
                    onClick={MenuClick}
                />
            </Header>
            <Content
                className="site-layout"
                style={{
                    padding: '0 50px',
                }}
            >
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet/>
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >

            </Footer>
        </Layout>
    );
};
export default Views;