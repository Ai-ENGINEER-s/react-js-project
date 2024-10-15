    import React  from "react";

    import {useState , useEffect} from 'react'

    import './App.css'
   import Search from './search.svg' ; 



   const MovieCard = ({movie})=>{


    return (
<div className="movieCard">

<h2>{movie.Title}</h2>
<h6>{movie.Type}</h6>
<img src={movie.Poster !== 'N/A' ? movie.Poster :'https://via.placeholder.com/400'} alt={movie.Title}></img>
<h5>{movie.Year}</h5>
</div>
 
    )
}

    export default function App()
      {

    
   
    const [realMovies , setMovies] = useState([]);    

    const [searchMovie ,setSearchMovie] = useState('')


        const movieApiKey = 'http://www.omdbapi.com/?i=tt3896198&apikey=1c1bff86' ;  

            const moviesFetching  = async (searchYourMovie)=>{

            try
            {
              const response  = await fetch(`${movieApiKey}&&s=${searchYourMovie}`) ; 

                const   movieData = await  response.json() ;

                setMovies(movieData.Search); 
                console.log(movieData.Search)
                } 

            catch (error){
            console.log('Error when fetching data : ' , error)
          
          
          }
          
          


          
   
      
    }

    useEffect(()=>{

      moviesFetching('spiderman')

    }, [])








    

         
     

  
    return (


      <div>
    <div className="searchBar">
    
    <input className="inputClass"  value={searchMovie} onChange={(e)=>{setSearchMovie(e.target.value)}}>
    
    </input>
    
    <img src={Search} alt='search'
    className="searchImage"
    
    onClick={()=>{moviesFetching(searchMovie)}}/>
    </div>
    
    <div className='movieCard'>
        
          {realMovies  ? (
            realMovies.map(movie => (
              <MovieCard movie ={movie}  />
            ))
          ) : (
            <div className="empty"><h2>No movies found</h2></div>
          )}
      
        </div>

      </div>
    )

    }






