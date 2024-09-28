import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState,useEffect, useCallback, useContext, useReducer, createContext} from 'react';


function Square({prop, onClickSquarre}){

return (


  <button className='square' onClick={onClickSquarre}>{prop}</button>
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
  <Square value={0} onClick={handleClick}/>
  <Square/>
  <Square/>

  </div>

  <div className='square-row'>
  
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