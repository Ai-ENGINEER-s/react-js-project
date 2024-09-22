import React from 'react'



 function Square(props){

    return <button className='square'>{props.name}</button>
  }


export default function SquareScope(){

    return (
        <div className='scopeSquareContainer'>
        <div className='squareContainer'> 
        <Square name="0"/>
        <Square name="1"/>
        <Square name="1"/>
        <Square name="1"/>
        <Square name="0"/>
        <Square name="0"/>
        <Square name="1"/>
        <Square name="0"/>
        <Square name="0"/>
        </div>
        </div>
    )
}
  