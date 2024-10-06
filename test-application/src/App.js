import React, { useState } from 'react';
import './App.css'; 
// Fonction qui calcule le gagnant
function calculateWinner(squares) {
  const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
  ];
  
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Retourne 'X' ou 'O' si l'un a gagné
    }
  }
  return null; // Retourne null s'il n'y a pas encore de gagnant
}

// Composant Square pour chaque case du plateau
function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

// Composant Board pour l'ensemble du plateau
function Board() {
  const [squares, setSquares] = useState([Array(9).fill(null)]); // Etat des cases
  const [xIsNext, setXIsNext] = useState(true); // Etat pour savoir quel joueur joue
  const [playerMove  , setPlayerMove] = useState(0)
  const nextSquares = squares.slice(); // Copie du tableau des cases

const [storicSquares , setStoricSquares] = useState(0)
console.log("le nombre de mise a jour  : " + storicSquares)
  

console.log(playerMove)


  const winner = calculateWinner(squares); // Calcul du gagnant à chaque rendu
  let status;
  
  if (winner) {
    status = 'Winner: ' + winner; // Si un gagnant est trouvé, on l'affiche
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O'); // Sinon, on affiche le prochain joueur
  }

  console.log("la taille nexsquare : "+ nextSquares.length)



  // Fonction qui se déclenche lorsqu'une case est cliquée
  function handleClick(i) {
    if (nextSquares[i] || winner) return; // Si la case est déjà remplie ou 
    if (playerMove % 2 ===0){
      nextSquares[i]  = "X"
    }else {
      nextSquares[i]  = "O"
    }

    // Si c'est au tour de X, on place un X, sinon un O
    setSquares(nextSquares); // Mise à jour de l'état des cases
    // Alterne le joueur (si c'était X, maintenant c'est O, et vice versa)
    setPlayerMove(playerMove +1)
 
  }




  // Affichage du plateau avec 9 cases
  return (
    <div className='board'>
   
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
}



 
export default Board;
