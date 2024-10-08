import React, { useState } from 'react';
import './App.css'; 

// square 
function Square({value, onClickSquare}) {
  return (
    <button className='square' onClick={onClickSquare}>
      {value}
    </button>
  );
}

function calculateWinner(squares){

const lines = [

  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6], 
]


for (let i =0; i <lines.length ; i ++){

const [a , b , c ] = lines[i] ; 


 // [a , b , c] = lines[0] => [a , b , c ] = [0,1,2] = > a = 0 , b= 1 c = 2
if(squares[a]&&squares[a] === squares[b]&&squares[a] ===squares[c])

return [a]; 
}
return null; 

}



function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [checkBoxSquare, setCheckBoxSquare] = useState(true);


  

  const checker = calculateWinner(squares)

  const decisionMaker = checker ? checker + " a gagné le jeu" : "prochain tour " + (checkBoxSquare ? "X" : "O")

  function handleSquareClick(i) {
    // Si la case est déjà remplie ou s'il y a un gagnant, on ne fait rien
    if (squares[i] || checker) {
      return;
    }

    // Créer une copie du tableau des cases
    const copySquares = squares.slice();
    copySquares[i] = checkBoxSquare ? "X" : "O";
    setSquares(copySquares);
    setCheckBoxSquare(!checkBoxSquare);
  }

  return (
    <div>
      <h2>{decisionMaker}</h2>
      <div className='board-row'>
        <Square value={squares[0]} onClickSquare={() => handleSquareClick(0)} />
        <Square value={squares[1]} onClickSquare={() => handleSquareClick(1)} />
        <Square value={squares[2]} onClickSquare={() => handleSquareClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onClickSquare={() => handleSquareClick(3)} />
        <Square value={squares[4]} onClickSquare={() => handleSquareClick(4)} />
        <Square value={squares[5]} onClickSquare={() => handleSquareClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onClickSquare={() => handleSquareClick(6)} />
        <Square value={squares[7]} onClickSquare={() => handleSquareClick(7)} />
        <Square value={squares[8]} onClickSquare={() => handleSquareClick(8)} />
      </div>
    </div>
  );
}

export default function App() {
  return <Board />;
}



/*

function Game(){

const [history , setHistory]= useState([Array(9).fill(null)])

const [currentMove , setCurrentMove] = useState(0);

const xIsNext = currentMove % 2 === 0 ; 

const currentSquares = history[currentMove]

function handleClick(i){

const nextHistory = history.slice(0, currentMove +1)

const currentSquares =  nextHistory[nextHistory.length - 1] ; 
const nextSquares = currentSquares.slice(); 


}



}









*/