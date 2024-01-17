import React, {useRef} from "react";
import ReactPlayer from 'react-player'
import {useLocation} from "react-router-dom";
const View:React.FC=()=>{
    const loginState=localStorage.getItem("login")
    const path=useLocation().pathname;
    // const videoUrl='https://youtu.be/'+path.split("/")[2];
    const videoUrl='https://youtu.be/uXGE0vuuaDo'
    return(
        <div>

            {
                loginState==="false" &&
                <ReactPlayer url={videoUrl}
                             controls={true}
                             width={'1200px'}
                             height={'675px'}
                             style={{
                                 marginLeft:'70px'
                             }}
                />
            }


            {
                loginState==="true" ||
                <div>
                    暂无权限！
                </div>

            }

        </div>
    )
}
export default View