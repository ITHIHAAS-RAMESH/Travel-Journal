import React from "react";
import ReactDOM from 'react-dom/client'
import './Nav.css'

export default function Nav(){
    return(
    <div className="Nav">
        <img src="/images/logo.png" alt='logo'/>
        <h3 className="title">my travel journal.</h3>
    </div>)
}