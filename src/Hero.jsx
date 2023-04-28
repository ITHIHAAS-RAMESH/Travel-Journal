import React from 'react'
import ReactDOM from 'react-dom/client'

import './Hero.css'

export default function Hero(props){
    
    return(
        <>
        <div className='outer--container'>
            <img className="countryImg" src={`/images/${props.item.img}`}/>
            <div className='inner--container'>
                <div className='link'>
                    <img src='/images/pin.png' alt='pin logo'/>
                    <h4 >{props.item.country}</h4>
                    <a target="_blank"href={props.item.link}>View on Google Maps</a>
                </div>
                <h1>{props.item.name}</h1>
                <h3>{props.item.date}</h3>
                <p>{props.item.content}</p>

            </div>
        </div>
        {props.item.id!=3 && <hr></hr>}
        </>
    )
    
}


/*
Photos from Unsplash
(can use these URLs as your img src)

Japan
https://source.unsplash.com/WLxQvbMyfas

Australia
https://source.unsplash.com/JmuyB_LibRo

Norway
https://source.unsplash.com/3PeSjpLVtLg
*/