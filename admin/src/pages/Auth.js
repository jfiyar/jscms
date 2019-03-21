import React from 'react'
import {Redirect} from 'react-router-dom'

export default ()=>{
    if(localStorage.getItem("auth")==="1"){
        return <Redirect to="/student" />
    }else if(localStorage.getItem("auth")==="2"){
        return <Redirect to="/teacher" />
    }else if(localStorage.getItem("auth")==="4"){
        return <Redirect to="/admin" />
    }else{
        return <Redirect to="/login" />
    }
};