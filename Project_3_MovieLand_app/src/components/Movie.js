
import './movieStyle.css' ; 

function Movie({moviePic, title , movieDescription}){

return (

<div className="movie">
<img src={moviePic} alt="movie for kids" className='moviePic'/>
<div className="movieDescription">
<p>{title}</p>
<h6>{movieDescription}</h6>
</div>

</div>


)




}

export default Movie