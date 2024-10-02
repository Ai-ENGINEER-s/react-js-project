import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState} from 'react';



// function Square({value , onClickSquare}){

//   return (
// <button className='square' onClick={onClickSquare}>{value}</button>
//   )
// }


// function calculateWinner(squares){
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   for(let i = 0; i<lines.length ; i++){
//     const [a , b ,c ] = lines[i]

//     if(squares[a] && squares[a] === squares[b] && squares[b]=== squares[c]){
//       return squares[a] // Retourne 'X' ou 'O' si l'un a gagné 
//     }
//   }
//   return null ; // retourne null s'il n'y a pas encore de gagnant 

// }
// function Board(){

//   const [squares, setSquares] = useState(Array(9).fill(null));
//   const [next , setNext] = useState(true)

//   const  nextSquares = squares.slice()


// const winner = calculateWinner(squares)
// let status ;
// if(winner){

//   status = 'Winner : ' + winner // si un gagant est trouvé on l'affiche 
// }else{

//   status = 'Next player' + (next ? 'X' : 'O') // sinon on affiche le prochain joueur 
// }
// function handleClick(i){
//   if(squares[i] || winner) return ;

//   if(next){
//     nextSquares[i]= "X"

//   }else{
//     nextSquares[i]= "0"
//   }

//   setSquares(nextSquares)
//   setNext(!next)

// }

// return (
// <div className='board'>

// <h5>{status}</h5>

// <div className='square-row'>

// <Square value={squares[0]} onClickSquare={()=>handleClick(0)} />
// <Square value={squares[1]} onClickSquare={()=>handleClick(1)} />  <Square value={squares[2]} onClickSquare={()=>handleClick(2)} />

// </div>

//  <div className='square-row'>
//  <Square value={squares[3]} onClickSquare={()=>handleClick(3)}/>
//  <Square value={squares[4]} onClickSquare={()=>handleClick(4)} />  <Square value={squares[5]} onClickSquare={()=>handleClick(5)} />

//  </div>

// <div className='square-row'>

// <Square value={squares[6]} onClickSquare={()=>handleClick(6)} />
// <Square value={squares[7]} onClickSquare={()=>handleClick(7)} />  <Square value={squares[8]} onClickSquare={()=>handleClick(8)} />

// </div>

// </div>
// )

// }







// export default function App(){

// return (

//   <>
  
// <Board/>
  
  
//   </>
// )


// }

function Square({value , clickOnSquare}){

return (
 
  <button className='square' onClick={clickOnSquare} >{value}</button>
)

}



function Board(){

const [squares , setSquares] = useState(Array(9).fill(null))
const [checkButton , setCheckButton ] = useState(true)


let status ; 
const winnerPlayer = winner(squares)
  function handleClick(i){
    if(squares[i] || winnerPlayer) return ; 

squares[i] = checkButton ? "X" : "O";

setCheckButton(!checkButton)
setSquares(squares)

  }
  

function winner(squares){

const winnerSquares =   [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  
  ]



  for (let i =0; i<=winnerSquares.length; i++){
  let a , b , c; 
  squares  = [a , b ,c ]
 
  squares = winnerSquares[i]

if(squares[a] && squares [a] === squares [a] && squares [b]=== squares [c]){

  return squares [a]
}


  }

}


  return (
<>

<div className='board-row'>

  
<Square value ={squares[0]} clickOnSquare={()=>handleClick(0)}/>
    <Square value ={squares[1]} clickOnSquare={()=>handleClick(1)}/>
    <Square value ={squares[2]} clickOnSquare={()=>handleClick(2)}/>
</div>

<div className='board-row'>

  
<Square value ={squares[3]} clickOnSquare={()=>handleClick(3)}/>
    <Square value ={squares[4]} clickOnSquare={()=>handleClick(4)}/>
    <Square value ={squares[5]} clickOnSquare={()=>handleClick(5)}/>
</div>

 
<div className='board-row'>

  
<Square value ={squares[6]} clickOnSquare={()=>handleClick(6)}/>
    <Square value ={squares[7]} clickOnSquare={()=>handleClick(7)}/>
    <Square value ={squares[8]} clickOnSquare={()=>handleClick(8)}/>
</div>

</>
)
}




function App(){

  return (

   <>
   
   <Board/>
   
   </>
  )
}

export default App 