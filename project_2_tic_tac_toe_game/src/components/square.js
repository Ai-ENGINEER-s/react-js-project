import React, { useState } from 'react';
import '../components/square.css';
import player1 from '../assets/player1.png';
import player2 from '../assets/player2.png';

function Square({ value, clickOnSquare }) {
  return (
    <button className='square' onClick={clickOnSquare}>
      {value}
    </button>
  );
}

function Board({ value, handleBoardState }) {
  return (
    <>
      {value.map((square, i) => (
        <Square key={i} value={square} clickOnSquare={() => handleBoardState(i)} />
      ))}
    </>
  );
}

export default function SquareScope() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  function handleClickSquare(i) {
    if (currentSquares[i] || calculateWinner(currentSquares)) return;

    const nextSquares = [...currentSquares]; // Copie du tableau
    nextSquares[i] = currentMove % 2 === 0 ? 'X' : 'O';

    const newHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(newHistory);
    setCurrentMove(currentMove + 1);
  }

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
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className='containerScope'>
      <div className='player'>
        <img src={player2} alt='Player 2' />
      </div>

      <div className='scopeSquareContainer'>
        <div className='squareContainer'>
          <Board value={currentSquares} handleBoardState={handleClickSquare} />
        </div>
      </div>

      <div className='player'>
        <img src={player1} alt='Player 1' />
      </div>
    </div>
  );
}
