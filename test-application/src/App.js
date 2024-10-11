import React , {useState} from 'react' ; 



function Square({value , onSquareClick}){
  return (

    <button className='square' onClick={onSquareClick}>{value}</button>
  )
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
 
 
  ];

 
  for (let i =0; i<lines.length ; i++){
    const [a , b , c] = lines[i]; 

    if(squares[a]&&squares[a]  === squares[b] &&squares[a] === squares[c]){
      return squares[a]
    }

  

  }
return null ; 

}



function Board({squares , onClick}){


return (

  <>
  
  <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => onClick(0)} />
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
) ;

}
