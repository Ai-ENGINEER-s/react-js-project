import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState,useEffect, useCallback, useContext, useReducer, createContext} from 'react';



function Square({value ,onSquareClick}){

  return (

    <button className='squarre' onClick={onSquareClick}>{value}

    </button>
  )
}


function Board(){

  const [squares , setSquares] = useState(Array(9).fill(null))
  const [xIsNext , setXisNext] = useState(true);
  
function handleClick(i){
  if(calculateWinner(squares) || squares[i]){
    return ;
  }

  
    const nextSquares = squares.slice()

    if(xIsNext){
      nextSquares[i] = "X";

    }else{

      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXisNext(!xIsNext)
    
  
  }


  const winner = calculateWinner(squares); 
  let status ; 

  if(winner){

    status = winner +'a gagné' ; 
  }else {

    status = 'Prochain tour : ' + (xIsNext ?  'X' : 'O'); 
  }
  
    
  

return (

<>
<h1>{status}</h1>
<div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
</>
)


}

// create victory function to show wich user gonna win the game 



function calculateWinner(squares){

const lines = [

[0,1,2], 
[3,4,5], 
[6,7,8], 
[0,3,6], 
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],



];

for (let i =0;i<lines.length; i++){

  const [a , b ,c ]= lines[i]; 

  if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){

    return squares[a]
  }
}
return null ; 
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