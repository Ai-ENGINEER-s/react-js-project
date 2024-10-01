import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState} from 'react';



function Square({value , onClickSquare}){

  return (
<button className='square' onClick={onClickSquare}>{value}</button>
  )
}


function Board(){

  const [squares, setSquares] = useState(Array(9).fill(null));

  const  nextSquares = squares.slice()


function handleClick(){
nextSquares[0]= "x"; 
  setSquares(nextSquares)

}

return (
 <div className='square-row'>
   <Square value={squares[0]} onClickSquare={handleClick} />
   
   </div>
)

}







export default function App(){

return (

  <>
  
<Board/>
  
  
  </>
)


}