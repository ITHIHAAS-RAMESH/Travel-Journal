import React from "react";
import ReactDOM from 'react-dom/client'
import './App.css'
import Nav from './Nav'
import Hero from "./Hero";
import data from '../data'
export default function App(){
  const items = data.map(item=>{
    return(
      <Hero
      key={item.id}
      item={item}
      />
    )
  })
  return (
    <div className="app">
    <Nav/>
    <div className='main--content'>
        {items}
        
    </div>
    </div>
  )
}