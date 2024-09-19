import logo from './logo.svg';
import './App.css';
import React from 'react';


// Props dans React = > properties in React 

const productList = [
  {
    name:"fanta" ,
    price : 200

  },
  {
    name:"habit" ,
    price : 2000
    
  }, 
  {
    name:"Pantalon" ,
    price : 20000
    
  }, 
  {
    name:"Montre" ,
    price : 200
    
  }
]





function MyListOfProduct(){

return (

productList.map((item , index  )=>{

return (
  <ul className='product'>
   
   <li key={index}>
          <strong>{item.name}</strong>: {item.price} FCFA
        </li>

  </ul>
)
})
)




}


 export default function App (){

  return (
    <div>
    <MyListOfProduct/>
    </div>
  )
}



