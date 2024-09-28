import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState,useEffect, useCallback, useContext, useReducer, createContext} from 'react';


function Square({value , onClickSquare}){


  return (

    <button className='squarre' onClick={onClickSquare}>{value}</button>
  )
}



function Board(){

  const [squares , setSquares] = useState(Array(9).fill(null))
  const [checkBox , setCheckBox] = useState(true)

const winnerBoard = [

[0,1,2,],[3,4,5],
[6,7,8] ,[]






]

 function handleClick(i){

  const nexSquares = squares.slice()
  if(squares[i]){
    return ; 
  }
  if(checkBox){
    nexSquares[i]= "X"
  }else{
    nexSquares[i]= "0"
  }

  setSquares(nexSquares)
  setCheckBox(!checkBox)

  
 }


  return (
    <>
 <div>
 <Square value={squares[0]} onClickSquare={()=>{handleClick(0)}}/>
 <Square value={squares[1]} onClickSquare={()=>{handleClick(1)}}/>
 <Square value={squares[2]} onClickSquare={()=>{handleClick(2)}}/>
 
 </div>

 <div>
<Square value={squares[3]} onClickSquare={()=>{handleClick(3)}}/>
<Square value={squares[4]} onClickSquare={()=>{handleClick(4)}}/>
<Square value={squares[5]} onClickSquare={()=>{handleClick(5)}}/>

</div>
   
<div>
<Square value={squares[6]} onClickSquare={()=>{handleClick(6)}}/>
<Square value={squares[7]} onClickSquare={()=>{handleClick(7)}}/>
<Square value={squares[8]} onClickSquare={()=>{handleClick(8)}}/>

</div>
   
    
    
    </>
  )


}



export default function App(){


  return (

    <>
    
<Board></Board>
    
    
    </>
  )
}