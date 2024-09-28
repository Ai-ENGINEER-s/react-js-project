import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState,useEffect, useCallback, useContext, useReducer, createContext} from 'react';


function Square({prop}){

return (


  <button className='square' >{prop}</button>
)


}




function Board(){

  const [squares , setSquares] = useState(Array(9).fill(null))

  function handleClick(){

    const nextBoard = squares.slice()

    nextBoard[0]= "X"
    setSquares(squares)

  }

  return (

  <>
  <div className='square-row'>
  <Square prop ={0}/>
  <Square/>
  <Square/>

  </div>

  <div className='square-row'>
  <Square/>
  <Square/>
  <Square/>
  </div>

  <div className='square-row'>
  <Square/>
  <Square/>
  <Square/>

  </div>

  </>

  )
}



function App(){

  return (
<>
<Board></Board>
</>
   
  )
}

export default App 