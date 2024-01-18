import React from 'react'
import "./card.css"
export default function Card({username}) {
    
  return (
    <div className='box'>
        <h1>{username}</h1>
      
    </div>
  )
}

