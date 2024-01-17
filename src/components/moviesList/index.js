import React, {useEffect, useState} from "react";
import {Card, List, message, Rate} from "antd";
import {useNavigate, useNavigation} from "react-router-dom";
import { browserHistory } from 'react-router'

const Comp:React.FC=(props)=>{
    const [movieList,setMovieList]=useState(props.movieList);
    const navigateTo=useNavigate();
    const handleCardClick=(movie)=>{
        navigateTo("/mycinema/info",{state:movie})
    }

    useEffect(() => {
        setMovieList(props.movieList);
    }, [props.movieList]);

    return (
        <div>
            <List
                grid={{
                        gutter:16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 5,
                        xxl:5
                    }}
                    size={"Large"}
                    dataSource={movieList}
                    renderItem={(movie,index) => (
                        <List.Item>
                            <Card
                                hoverable
                                style={{ width: 270 }}
                                cover={<img style={{width:'270px',height:'360px',margin:'0 0 0 0'}} src={movie.imgSrc}
                                onClick={()=> handleCardClick(movie)}/>}
                            >
                                <div>
                                    <span style={{fontSize:'36px',lineHeight:'60px',float:'left'}}>{index+1} </span>
                                    <div>
                                                <span style={{lineHeight:'36px',fontSize:'20px',marginLeft:'8px',marginTop:'8px'}}>
                                                    {movie.title}
                                                </span>
                                    </div>
                                    <div>
                                            <span style={{lineHeight:'16px',fontSize:'14px',marginLeft:'8px',color:'gray'}}>
                                                {movie.area} / {movie.genre}
                                            </span>
                                    </div>
                                    <div>
                                        <span style={{lineHeight:'24px',marginLeft:'6px'}}>
                                            <Rate disabled defaultValue={movie.rate} allowHalf  />
                                        </span>
                                        <span style={{lineHeight:'24px',marginLeft:'6px', fontSize:'24px',color:'orange'}}>
                                            {movie.rate}
                                        </span>
                                    </div>

                                </div>
                            </Card>
                        </List.Item>
                    )}
            />
        </div>

    )
}
export default Comp;