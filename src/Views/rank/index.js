import React, {useEffect, useState} from "react";
import {Avatar, Button, Card, Dropdown, Flex, Image, List, Space} from "antd"
import MoviesList from "../../components/moviesList";
import axios from "axios";
const Views=()=>{
    const [movieList,setMovieList]=useState([
            {
                title:"沙丘",popularity:60, genre:"科幻", area:'欧美', rate:3.9,
                imgSrc:"https://th.bing.com/th/id/OIP.gHwohc-AFR9WgOUSOz9SJAAAAA?rs=1&pid=ImgDetMain",
                videoUrl:"U2Qp5pL3ovA",
                info:"andsandanodandnoieojfoiefwoio"
            },
        {
            title:"Dune 1",popularity:60, genre:"Science Fiction", area:'Western', rate:4,
            imgSrc:"https://th.bing.com/th/id/OIP.gHwohc-AFR9WgOUSOz9SJAAAAA?rs=1&pid=ImgDetMain",
            videoUrl:"U2Qp5pL3ovA",
            info:"andsandanodandnoieojfoiefwoio"
        },
        ]
    )

    const getMovieList=(type)=>{
        // const param=encodeURIComponent(type);
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
    const handleButtonClick=(listType)=>{
        getMovieList(listType)
    }

    useEffect(() => {
        getMovieList('rank/weekly')
    }, []);

    return(
        <div>
            <Flex gap="small" wrap="wrap">
                <Button type="text" onClick={()=>handleButtonClick("rank/weekly")}>本周排行</Button>
                <Button type="text" onClick={()=>handleButtonClick("rank/monthly")}>本月排行</Button>
                <Button type="text" onClick={()=>handleButtonClick("rank/total")}>全部排行</Button>
                <Button type="text" onClick={()=>handleButtonClick("rank/rate")}>按好评排行</Button>
            </Flex>
            <br/>
            <MoviesList movieList={movieList}/>
        </div>
    )
}
export default Views