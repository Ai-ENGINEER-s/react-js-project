import React from 'react'
import { useEffect ,useState} from 'react';
import './App.css' ; 
import SearchIcon from './search.svg' ; 






const App = () =>{




const movieApiKey = 'http://www.omdbapi.com/?i=tt3896198&apikey=1c1bff86' ; 

const searchMovies = async (title )=>{

 const response = await fetch(`${movieApiKey}&s=${title}`) ; 


 const data = await response.json(); 
 console.log(data.Search)

}


useEffect(()=>{

searchMovies('Spiderman')

} , [])


return (

<div className='app'>

<h1>MovieLand</h1>

<div className='search'>

<input 

placeholder='Search for movies'

value={"Superman"} 
onChange={()=>{}}
/>

<img src={SearchIcon} alt='search'

onClick={()=>{}}
/>
</div>

</div>


)



}


export default App ;  