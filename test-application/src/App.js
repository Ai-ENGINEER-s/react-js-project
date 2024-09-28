import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState,useEffect, useCallback, useContext, useReducer, createContext} from 'react';




// square component for the board


function Square({value}, onSquareClick){

function onSquareClick(){

const 

}



  return (
   <button className='square' 
    >{value}
    
    </button>
   
  )
}

function Board(){


const [squares , setSquares] = useState(Array(9).fill(null))





  return (

  <>
  
  <div className='board-row'>

      <Square  value={squares[0]}/>
      <Square value={squares[1]}/>
      <Square value={squares[3]} />


  </div>

  <div className='board-row'>

  <Square value={squares[4]}/>
  <Square value={squares[5]}/>
  <Square value={squares[6]}/>

  </div>

  <div className='board-row'>

  <Square value={squares[7]} />
  <Square value={squares[8]} />
  <Square value={squares[9]}/>

  </div>

    </>
  )
}







export default function  App(){

  return (


    <div>
 
    <Board></Board>
    </div>
  )
}