import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState} from 'react';



function Square({value, onClickSquare}){


  return (


    <button className='square'  onClick={onClickSquare}>

{value}
    </button>
  )
}



function Board(){




  const [squares , setSquares] = useState(Array(9).fill(null))

  const [checkSquare , setCheckSquare] = useState(true)



  const nextSquares = squares.slice()
  let  [champion , setChampion] = useState(null)
  
  // handleclick  function  for clicking button 


function handleClick(i){


const gameWinner = winner(nextSquares)




if(nextSquares[i] || gameWinner) return ;

if(gameWinner){
  champion = gameWinner + "vous avez gagné"
}else{
  champion ="Personne n'a gagné au jeux"
}
nextSquares[i] = checkSquare ? "X" : "O"
 
setCheckSquare(!checkSquare)
setSquares(nextSquares)
setChampion(champion)

  }

function winner(squares){

const arrays = [ 


  [0,1,2] , 
  [3,4,5], 
  [6,7,8],
   [0,3,6], 
   [1,4,7], [2,5,8] , [0,4,8], [2,4,6]
]

for (let i = 0; i<arrays.length ; i++){

let a ,b,c ;
 a = arrays[i][0]
 b = arrays[i][1]
 c = arrays[i][2]



if(squares[a]&&squares[a] === squares[b] && squares[b] === squares[c]){
  return squares[a] ; 
}
}
return null ;


}


  return (

   <div>
  <h3>{champion}</h3>  
<div>

<Square  value={squares[0]}  onClickSquare={()=>{handleClick(0)}}/>
<Square  value={squares[1]}  onClickSquare={()=>{handleClick(1)}}/>
<Square  value={squares[2]}  onClickSquare={()=>{handleClick(2)}}/>
</div>

<div>

<Square  value={squares[3]}  onClickSquare={()=>{handleClick(3)}}/>
<Square  value={squares[4]}  onClickSquare={()=>{handleClick(4)}}/>
<Square  value={squares[5]}  onClickSquare={()=>{handleClick(5)}}/>
</div>

<div>

<Square  value={squares[6]}  onClickSquare={()=>{handleClick(6)}}/>
<Square  value={squares[7]}  onClickSquare={()=>{handleClick(7)}}/>
<Square  value={squares[8]}  onClickSquare={()=>{handleClick(8)}}/>
</div>


   </div>
  )
}







function App(){


  return <>
  
  <Board></Board>
  
  </>
}


export default App 

