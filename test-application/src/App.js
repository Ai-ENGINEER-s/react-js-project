import React, { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ squares, onClick }) {
  return (
    <>
      <div className="board-row">
         <Square value={squares[1]} onSquareClick={() => onClick(1)} />
        <Square value={squares[2]} onSquareClick={() => onClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => onClick(3)} />
        <Square value={squares[4]} onSquareClick={() => onClick(4)} />
        <Square value={squares[5]} onSquareClick={() => onClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => onClick(6)} />
        <Square value={squares[7]} onSquareClick={() => onClick(7)} />
        <Square value={squares[8]} onSquareClick={() => onClick(8)} />
      </div>
    </>
  );
}

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]); // Historique des mouvements
  const [currentMove, setCurrentMove] = useState(0); // Mouvement actuel (indice dans l'historique)
  const currentSquares = history[currentMove]; // Plateau actuel en fonction de l'historique

  // Fonction qui gère le clic sur une case et met à jour l'état du jeu
  function handleClick(i) {
    const nextHistory = history.slice(0, currentMove + 1); // Historique jusqu'au mouvement actuel
    const nextSquares = currentSquares.slice(); // Copie du plateau actuel

    if (calculateWinner(currentSquares) || nextSquares[i]) {
      return; // Si le jeu est terminé ou la case est remplie, on ne fait rien
    }

    const xIsNext = currentMove % 2 === 0; // Calcul de xIsNext ici
    nextSquares[i] = xIsNext ? 'X' : 'O'; // Placement du symbole

    setHistory([...nextHistory, nextSquares]); // Mise à jour de l'historique
    setCurrentMove(nextHistory.length); // Passage au prochain mouvement
  }

  function jumpTo(move) {
    setCurrentMove(move); // Revenir à un mouvement précédent
  }

  const winner = calculateWinner(currentSquares);
  const status = winner
    ? 'Winner: ' + winner
    : 'Next player: ' + (currentMove % 2 === 0 ? 'X' : 'O');

  const moves = history.map((step, move) => {
    const description = move ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
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

export default function App() {
  return (
    <>
      <Game />
    </>
  );
}
