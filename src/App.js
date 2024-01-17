import React from 'react';
import {Route, Router, Routes, useRoutes,} from "react-router-dom";
import router from "./router";


function App(){
    const Outlet=useRoutes(router)
    return(
        <div>
            {Outlet}
        </div>
    )
}

export default App;