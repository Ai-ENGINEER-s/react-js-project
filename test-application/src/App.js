import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState,useEffect, useCallback, useContext, useReducer, createContext} from 'react';



function Square(){

  const [value , setValue] = useState(null)



  function handleClick(){
      setValue('X')
  }

  return (
   <button className='square' onClick={handleClick} 
    >{value}
    
    </button>
   
  )
}

function Board(){

  return (

  <>

  <div className='board-row'>
      <Square />
      <Square />
      <Square />


  </div>

  <div className='board-row'>

  <Square />
  <Square />
  <Square />

  </div>

  <div className='board-row'>

  <Square />
  <Square />
  <Square />

  </div>

    </>
  )
}







export default function  App(){

  return (


    <div>
 
    <Board></Board>
    </div>
  )
}