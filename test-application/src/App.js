import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState} from 'react';



function Square({value, onClickSquare}){


  return (


    <button className='square'  onClick={onClickSquare}>

{value}
    </button>
  )
}



function Board(){

  const [squares , setSquares] = useState(Array(9).fill(null))

  const [checkSquare , setCheckSquare] = useState(true)



  const nextSquares = squares.slice()
  function handleClick(i){



if(nextSquares[i]) return ;

nextSquares[i] = checkSquare ? "X" : "O"

setCheckSquare(!checkSquare)
setSquares(nextSquares)

  }
  return (

    <>
    <div>

      <Square  value={squares[0]}  onClickSquare={()=>{handleClick(0)}}/>
      <Square  value={squares[1]}  onClickSquare={()=>{handleClick(1)}}/>
      <Square  value={squares[2]}  onClickSquare={()=>{handleClick(2)}}/>
    </div>
    
    <div>

<Square  value={squares[3]}  onClickSquare={()=>{handleClick(3)}}/>
<Square  value={squares[4]}  onClickSquare={()=>{handleClick(4)}}/>
<Square  value={squares[5]}  onClickSquare={()=>{handleClick(5)}}/>
</div>

<div>

<Square  value={squares[6]}  onClickSquare={()=>{handleClick(6)}}/>
<Square  value={squares[7]}  onClickSquare={()=>{handleClick(7)}}/>
<Square  value={squares[8]}  onClickSquare={()=>{handleClick(8)}}/>
</div>

    </>
  )
}



function App(){


  return <>
  
  <Board></Board>
  
  </>
}


export default App 

