import React from 'react'
import {Outlet , Navigate} from 'react-router-dom'
const PrivateRoutes=()=> {

    let loggedIn = false;
    if(loggedIn)
    {
        return <Outlet/>
    }
    else{
        return <Navigate to="/"/>;
    }
  
}

export default PrivateRoutes
