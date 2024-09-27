import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState,useEffect, useCallback, useContext, useReducer, createContext} from 'react';



function Square({value}){

  function handleClick(){
    
  }

  return (
   <button className='square'>{value}</button>
  )
}

function Board(){

  return (

  <>

  <div className='board-row'>

      <Square value="1"/>
      <Square value="2"/>
      <Square value="3"/>


  </div>

  <div className='board-row'>

      <Square value="4"/>
      <Square value="5"/>
      <Square value="6"/>

  </div>

  <div className='board-row'>

      <Square value="7"/>
      <Square value="8"/>
      <Square value="9"/>

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