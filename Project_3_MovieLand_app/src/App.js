import './App.css';
import {useState , useEffect } from 'react' ; 




const Counter = ()=>{


  const [counter , setCounter] = useState(0) ;
  
  useEffect(()=>{
 
function handleCouncter(){

  return (
    <h2>BARRRY SAONUSSA</h2>
  )
}


handleCouncter()
      } , [counter])
  return (

  <>
    <button onClick={()=>{setCounter(counter +1)}}>+</button>
    <h1>{counter}</h1>
    <button onClick={()=>{setCounter(counter -1)}}>-</button>
  </>
  )
}


 const  App =  ()=>{


  return (
<Counter/>
  )

}

export default App 