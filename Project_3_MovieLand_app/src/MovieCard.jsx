
import React  from "react"

const MovieCard = ({oneMovie})=>{

return (
    <div className='movie'>

    <div>

        <p>{oneMovie.Year}</p>
    </div>

    <div>

    <img src={oneMovie.Poster !== 'N/A' ? oneMovie.Poster :'https://via.placeholder.com/400'} alt={oneMovie.Title}></img>
    </div>
    <div>
        <span>
            {oneMovie.Type}
        </span>
        <h3>{oneMovie.Title}</h3>
    </div>



</div>
)
 

}


export default MovieCard