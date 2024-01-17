import React from "react";
import Home from "../Views/home"
import Display from "../Views/display";
import Rank from "../Views/rank";
import Artists from "../Views/artists";
import MoviePlay from "../Views/moviePlay";
import Login from "../Views/login";
import {Navigate} from "react-router-dom";
import Register from "../Views/register";
import Profile from "../Views/profile";
import Info from "../Views/info";
import PasswordEdit from "../Views/passwordEdit";
let routes=[
    {
        path: "/",
        element: <Navigate to={"/mycinema/display"}/>
    },
    {
        path:"/mycinema",
        element: <Home/>,
        children:[
            {
                path:"/mycinema/display",
                element: <Display/>
            },
            {
                path:"/mycinema/rank",
                element: <Rank/>
            },
            {
                path:"/mycinema/artists",
                element: <Artists/>
            },
            {
                path: "/mycinema/info",
                element: <Info/>
            },
            {
                path:"/mycinema/play/*",
                element: <MoviePlay/>
            },
            {
                path: "/mycinema/login",
                element: <Login/>
            },
            {
                path: "/mycinema/register",
                element: <Register/>
            },
            {
                path: "/mycinema/profile",
                element: <Profile/>
            },
            {
                path: "/mycinema/editpsw",
                element: <PasswordEdit/>
            }
        ]
    }
]
export default routes