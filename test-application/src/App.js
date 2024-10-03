import React, { useState } from 'react';
import './App.css';

function Square({ value, onClickSquare }) {
  return (
    <button className='square' onClick={onClickSquare}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [checkSquare, setCheckSquare] = useState(true);
  const [champion, setChampion] = useState('Next player: X');

  function handleClick(i) {
    if (squares[i] || winner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[i] = checkSquare ? 'X' : 'O';
    setSquares(nextSquares);

    const gameWinner = winner(nextSquares);
    if (gameWinner) {
      setChampion(gameWinner + ' a gagné');
    } else {
      setChampion('Next player: ' + (checkSquare ? 'O' : 'X'));
    }

    setCheckSquare(!checkSquare);
  }

  function winner(squares) {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of winPatterns) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div>
      <h3>{champion}</h3>
      <div>
        <Square value={squares[0]} onClickSquare={() => handleClick(0)} />
        <Square value={squares[1]} onClickSquare={() => handleClick(1)} />
        <Square value={squares[2]} onClickSquare={() => handleClick(2)} />
      </div>
      <div>
        <Square value={squares[3]} onClickSquare={() => handleClick(3)} />
        <Square value={squares[4]} onClickSquare={() => handleClick(4)} />
        <Square value={squares[5]} onClickSquare={() => handleClick(5)} />
      </div>
      <div>
        <Square value={squares[6]} onClickSquare={() => handleClick(6)} />
        <Square value={squares[7]} onClickSquare={() => handleClick(7)} />
        <Square value={squares[8]} onClickSquare={() => handleClick(8)} />
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Board />
    </>
  );
}

export default App;
