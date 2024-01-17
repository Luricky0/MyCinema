import React, {useEffect, useState} from "react";
import {Avatar, Button, Card, Dropdown, Flex, Image, List, message, Space} from "antd"
import type { MenuProps } from 'antd';
import {FireTwoTone,DownOutlined} from "@ant-design/icons"
import {click} from "@testing-library/user-event/dist/click";
import AreaSelectButton from "../../components/areaSelectButton";
import GenreSelectButton from "../../components/genreSelectButton";
import Meta from "antd/es/card/Meta";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Views=()=>{
    const [movieList,setMovieList]=useState([{
        title:"Dune 1",popularity:60, genre:"科幻", area:'欧美', rate:4,
        imgSrc: process.env.PUBLIC_URL+"/image/1.png",
        videoUrl:"U2Qp5pL3ovA",
        info:"andsandanodandnoieojfoiefwoio"
    },
        {
            title:"Dune 1",popularity:60, genre:"Science Fiction", area:'Western', rate:4,
            imgSrc:"https://th.bing.com/th/id/OIP.gHwohc-AFR9WgOUSOz9SJAAAAA?rs=1&pid=ImgDetMain",
            videoUrl:"U2Qp5pL3ovA",
            info:"andsandanodandnoieojfoiefwoio"
        }
    ])
    const getCardTitle=(type,movie,index)=>{
        //type=1为按热播，type=2为按种类，type=3为按地区
        return(
            <div>
                <span style={{fontSize:'36px',lineHeight:'60px',float:'left'}}>{index} </span>
                <div>
                <span style={{lineHeight:'36px',fontSize:'20px',marginLeft:'8px',marginTop:'8px'}}>{movie.title}</span>
                </div>
                { type===1 &&
                    <div>
                        <span style={{lineHeight:'16px',float:'left',marginLeft:'8px'}}>
                            <span style={{fontSize:'16px',color:'red',marginBottom:'2px'}}>{movie.popularity}</span>
                            <FireTwoTone twoToneColor="red" style={{fontSize:'20px'}}/>
                        </span>
                    </div>}
                { type===2 &&
                    <div>
                        <span style={{lineHeight:'16px',float:'left',fontSize:'14px',marginLeft:'8px',color:'gray'}}>
                            {movie.genre}
                        </span>
                    </div>}

                { type===3 &&
                    <div>
                        <span style={{lineHeight:'16px',float:'left',fontSize:'14px',marginLeft:'8px',color:'gray'}}>
                            {movie.area}
                        </span>
                    </div> }

            </div>
        )
    }
    const [cardTitleType,setCardTitleType]=useState(1);
    const handleButtonClick=(cardType,listType)=>{
        setCardTitleType(cardType)
        getMovieList(listType)
    }
    const getMovieList=(type)=>{
        // const param=encodeURIComponent(type);
        console.log(type)
        const param=type;
        axios.get(`http://localhost:8080/api/data/${param}`,{
            headers: { Accept: 'application/json',//接受json
            }})
            .then(response => {
                const data = response.data.data;
                let newMovieList=[]
                data.forEach(item => {
                    const newItem={
                        title: item.movieName,
                        popularity: item.viewers,
                        rate: item.rate,
                        genre: item.genre,
                        area: item.region,
                        imgSrc: process.env.PUBLIC_URL+"/image/"+item.posterImage,
                        videoUrl: item.videoUrl,
                        info: item.description
                    }
                    newMovieList=[...newMovieList,newItem];
                });
                setMovieList(newMovieList);
            })
            .catch(error => {
                console.log("Axios Error")
            });
    }

    const navigateTo = useNavigate();
    const handleCardClick=(movie)=>{
        navigateTo("/mycinema/info",{state:movie})

    }
    useEffect(() => {
        getMovieList('pop')
    }, []);

    return(
        <div>
            <Flex gap="small" wrap="wrap">
                <Button type="text" onClick={()=>handleButtonClick(1,"pop")}>按热播排行</Button>
                <GenreSelectButton handleButtonClick={(a,b)=>handleButtonClick(a,b)}/>
                <AreaSelectButton handleButtonClick={(a,b)=>handleButtonClick(a,b)}/>
            </Flex>
            <br/>
                        <List
                        grid={{
                            gutter: 16,
                            column: 5,
                        }}
                        size={"Large"}
                        dataSource={movieList}
                        renderItem={(movie,index) => (
                            <List.Item>
                                <Card
                                    hoverable
                                    style={{ width: 270 }}
                                    cover={<img style={{width:'270px',height:'360px',margin:'0 0 0 0'}} src={movie.imgSrc}/>}
                                    onClick={()=> handleCardClick(movie)}
                                >
                                        {getCardTitle(cardTitleType,movie,index+1)}
                                </Card>
                            </List.Item>
                        )}
                    />
        </div>
    )
}
export default Views