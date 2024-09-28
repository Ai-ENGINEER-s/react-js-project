import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState,useEffect, useCallback, useContext, useReducer, createContext} from 'react';



function Square({value , onClickSquare}){

  return (

    <button className='squarre' onClick={onClickSquare}>{value}

    </button>
  )
}


function Board(){

  const [squares , setSquares] = useState(Array(9).fill(null))

  

  function handleClick(){

    const nextSquares = squares.slice()
    nextSquares[0] = "X"
  
    setSquares(nextSquares)
  }

return (

  <div>

    <Square value={squares[0]} onClickSquare={handleClick}/>
  </div>
)


}

function App(){

return (
 <>
<Board>

</Board>
 
 </>
)

}

export default App 