import React from 'react'
import { useState } from 'react'
import '../components/square.css'
import player1 from '../assets/player1.png'
import player2 from '../assets/player2.png'
 function Square(props){

const [value , setValue] = useState(null)

const className = value === 'X' ? 'square x' : value === 'O' ? 'square o' : 'square';

function handleClick(){
    setValue(value ==='X' ? 'O' : 'X')
}
    
return <button className={className} onClick={handleClick}>{props.name}
    {value}
    </button>
  }


export default function SquareScope(){

    return (
  <div className='containerScope'>

 <img src={player2} className='player'/>

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
    <img src={player1} className='player'/>
  </div>
    )
}
  