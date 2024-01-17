import React from "react";
import {Button, Card, message, Rate} from "antd";
import {useLocation, useNavigate, useParams, useRoute} from "react-router-dom";
import {PlaySquareOutlined} from "@ant-design/icons";
const View=()=>{
    const movie=useLocation().state
    console.log(movie)

    const navigateTo=useNavigate()
    const handlePlayButtonClick=(url:string)=>{
        const loginState=localStorage.getItem("login")
        const vipState=localStorage.getItem("vip")
        if(loginState==="true" && vipState ==="true"){
            navigateTo('/mycinema/play')
        }else{
            message.info("仅已登录的会员用户有播放权限！")
        }
    }
    return(
        <div style={{height:'700px'}}>
            <div style={{float:'left'}}>
                <img style={{width:'540px',height:'720px',borderRadius:'10px'}} src={movie.imgSrc}/>
            </div>
            <div style={{float:'left',width:'48%',fontSize:'20px',marginLeft:'100px',marginTop:'50px',textAlign:'center'}}>
                <span style={{fontSize:'44px'}}>{movie.title}</span>
                <div>
                    <Rate disabled defaultValue={movie.rate} allowHalf/>
                    <span style={{lineHeight:'24px',marginLeft:'6px', fontSize:'24px',color:'orange'}}>
                        {movie.rate}
                    </span>
                </div>
                <div>
                    <span style={{fontSize:'18px',color:'gray'}}>{movie.area} / {movie.genre}</span><br/>
                </div>
                <div>
                    <Button size={'large'} onClick={handlePlayButtonClick}><PlaySquareOutlined />在线播放</Button>
                </div>

                <div style={{height:'200px'}}>
                    <span>
                    {/*{movie.info}*/}
                        钳工胡建林（大鹏 饰）在集团裁员之际阴差阳错被调入总部，裹挟在“错调”事件中的人事经理马杰（白客 饰）为保饭碗被迫为其隐瞒四处周旋。从“工厂”到“大厂”，从“蓝领”变“金领”，胡建林因与大厂环境格格不入而笑料百出，也像一面“职场照妖镜”照出职场众生相......胡建林为何能在裁员之际一路升职加薪制霸大厂？马杰又能否在“错调”事件中全身而退？这场离谱的“错调”背后又隐藏着什么惊天大瓜……
                    </span>
                </div>

            </div>

        </div>
    )
}
export default View