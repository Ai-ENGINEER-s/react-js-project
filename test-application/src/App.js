import React, { useState } from 'react';
import './App.css'; 


// square 

function Square({value , onclickSquarre}){
  return (

    <button className='square' onClick={onclickSquarre}>{value}</button>
  )
}


function calculateWinner(squares) {
  // Définition des lignes gagnantes
  const lines = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
  ];
  
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    const values = [squares[a], squares[b], squares[c]]; // Récupère les valeurs de la ligne gagnante

    // Vérifie si toutes les valeurs sont identiques et non nulles
    if (values[0] && values.every(value => value === values[0])) {
      return values[0]; // Retourne la valeur gagnante ('X' ou 'O')
    }
  }
  return null; // Aucun gagnant
}


function Board(){






const [squares  , setSquares] = useState(Array(9).fill(null))



const [checkBoxSquare , setCheckBoxSquare] = useState(true)


const copySquares = squares.slice()
let winner   = calculateWinner(squares); 
let status ; 
function handleSquareClick(i){
 
   if (winner){
    status = winner + " a gagné le jeu "
   }
  if(squares[i] || winner){return ;}
 copySquares[i] = checkBoxSquare ? "X" : "O"

 setSquares(copySquares) 
 setCheckBoxSquare(!checkBoxSquare)

  }




return (
<div>
{status}
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