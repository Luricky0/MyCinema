import React, {useEffect, useState} from "react";
import Search from "antd/es/input/Search";
import MoviesList from "../../components/moviesList";
import axios from "axios";
const Views=()=>{
    const [movieList,setMovieList]=useState([
        {
            title:"Dune 1",popularity:60, genre:"Science Fiction", area:'Western', rate:4,
            imgSrc:"https://th.bing.com/th/id/OIP.gHwohc-AFR9WgOUSOz9SJAAAAA?rs=1&pid=ImgDetMain",
            videoUrl:"U2Qp5pL3ovA"
        },
       ]
    )

    const getMovieList=(type)=>{
        // const param=encodeURIComponent(type);
        const param=type;
        console.log("getdata:"+param)
        axios.get(`http://localhost:8080/api/data/search/${param}`,{
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
    const onSearch=(str)=>{
        getMovieList(str)
    }
    useEffect(() => {
        getMovieList('李')
    }, []);

    return(
        <div>
            <Search
                placeholder="输入演员名"
                onSearch={(str)=>onSearch(str)}
                size={'large'}
                style={{
                    width: 400
                }}
            />
            <br/><br/>
            <MoviesList movieList={movieList}/>
        </div>
    )
}
export default Views