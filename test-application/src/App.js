import React, { useState } from 'react';
import './App.css'; 


// square 

function Square({value , onclickSquarre}){


  return (

    <button className='square' onClick={onclickSquarre}>{value}</button>
  )
}







function Board(){

  const [squares  , setSquares] = useState([Array(9).fill(null)])

  const copySquares = squares.slice()
  function handleSquareClick(i){

return   copySquares[i] ="S"
  

  
  }

  setSquares(copySquares) 


  
return (
 <Square value={squares[0]} onclickSquarre={()=>{handleSquareClick(0)}}/>
)


}


export default function App(){


  return (

    <Board></Board>
  )



}