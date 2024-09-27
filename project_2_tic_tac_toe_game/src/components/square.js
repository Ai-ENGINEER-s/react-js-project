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

const [squares , setSquares] = useState(Array(9).fill(null));


    return (
  <div className='containerScope'>

<div className='player'>
    <img src={player2} />
    </div>

<div className='scopeSquareContainer'>
            
<div className='squareContainer'> 
            <Square value={squares[0]}/>
            <Square value={squares[1]}/>
            <Square value={squares[2]}/>
            <Square value = {squares[3]}/>
            <Square value = {squares[4]}/>
            <Square value = {squares[5]}/>
            <Square value = {squares[6]}/>
            <Square value = {squares[7]}/>
            <Square value = {squares[8]}/>
    
</div>
 </div>
    <div className='player'>
    <img src={player1}/>
    </div>
  </div>
    )
}
  