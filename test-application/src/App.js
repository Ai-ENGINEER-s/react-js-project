import React, { useState } from 'react';
import './App.css'; 


// square 

function Square({value , onclickSquarre}){
  return (

    <button className='square' onClick={onclickSquarre}>{value}</button>
  )
}




function calculateWinner(squares){

const boardSquares = [
[0,1,2], [3,4,5] , [6,7,8], 
[0,3,6],[1,4,7], [2,5,8],[0,4,8],[2,4,6]

]

for (let i =0; i<boardSquares.length ; i++){


  
}

}


function Board(){

  const [squares  , setSquares] = useState(Array(9).fill(null))
 const [checkBoxSquare , setCheckBoxSquare] = useState(true)


const copySquares = squares.slice()

function handleSquareClick(i){
  if(squares[i]){return ;}
 copySquares[i] = checkBoxSquare ? "X" : "O"

 setSquares(copySquares) 
 setCheckBoxSquare(!checkBoxSquare)

  }





  
return (
<div>

<div className='board-row'>
<Square value={squares[0]} onclickSquarre={()=>{handleSquareClick(0)}}/>

<Square value={squares[1]} onclickSquarre={()=>{handleSquareClick(1)}}/>

<Square value={squares[2]} onclickSquarre={()=>{handleSquareClick(2)}}/>

</div>

<div className='board-row'>
<Square value={squares[3]} onclickSquarre={()=>{handleSquareClick(3)}}/>

<Square value={squares[4]} onclickSquarre={()=>{handleSquareClick(4)}}/>

<Square value={squares[5]} onclickSquarre={()=>{handleSquareClick(5)}}/>

</div>

<div className='board-row'>
<Square value={squares[6]} onclickSquarre={()=>{handleSquareClick(6)}}/>

<Square value={squares[7]} onclickSquarre={()=>{handleSquareClick(7)}}/>

<Square value={squares[8]} onclickSquarre={()=>{handleSquareClick(8)}}/>

</div>


</div>
)


}


export default function App(){


  return (

    <Board></Board>
  )



}