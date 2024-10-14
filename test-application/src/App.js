    import React  from "react";

    import {useState , useEffect} from 'react'

    import MovieCard  from "./components/MovieCard";
   import Search from './search.svg' ; 

    export default function App()
      {

    
   
    const [realMovies , setMovies] = useState([]);    




        const movieApiKey = 'http://www.omdbapi.com/?i=tt3896198&apikey=1c1bff86' ;  

            const moviesFetching  = async (searchYourMovie)=>{

            try
            {
              const response  = await fetch(`${movieApiKey}&&s=${searchYourMovie}`) ; 

                const   movieData = await  response.json() ;

                setMovies(movieData.Search)
                } 

            catch (error){
            console.log('Error when fetching data : ' , error)
          
          
          }
          
          


          
    moviesFetching()

      } , [])
    }

      





    

           
        
     

  const myMovie = realMovies.map(movie => movie) ; 
  console.log('voici votre film : ' , myMovie) ; 

    return (


      <div>
    <div className="searchBar">
    
    <input className="inputClass">
    
    </input>
    
    <img src={Search} alt='search'
    className="searchImage"
    
    onClick={()=>{moviesFetching()}}/>
    </div>
    
    <div className='movieCard'>
        
          {realMovies.length > 0 ? (
            realMovies.map(movie => (
              <MovieCard key={movie.imdbID} movie={movie}  />
            ))
          ) : (
            <div className="empty"><h2>No movies found</h2></div>
          )}
      
        </div>

      </div>
    )

    }






