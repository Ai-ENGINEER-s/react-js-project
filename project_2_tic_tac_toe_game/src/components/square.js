import React from 'react'
import { useState } from 'react'

 function Square(props){

const [value , setValue] = useState(null  )


function handleClick(){
    setValue('X')
}
    
    return <button className='square' onClick={handleClick}>{props.name}
    {value}
    </button>
  }


export default function SquareScope(){

    return (
        <div className='scopeSquareContainer'>
        <div className='squareContainer'> 
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        </div>
        </div>
    )
}
  