import React  from "react";
import '../App.css'


const MovieCard = ({movie})=>{


    return (
<div className="movieCard">

<h2>{movie.Title}</h2>
<h6>{movie.Type}</h6>
<img src={movie.Poster} alt={movie.title}></img>
<h5>{movie.Year}</h5>
</div>
 
    )
}



export default MovieCard