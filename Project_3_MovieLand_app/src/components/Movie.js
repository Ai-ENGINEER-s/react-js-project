
import './movieStyle.css' ; 

function Movie({moviePic, title , movieDescription}){

return (

<div className="movie">

<div className="movieDescription">
<img src={moviePic} alt="movie for kids" className='moviePic'/>
<p><span className='titleDecoration'>{title}</span></p>
<h6>{movieDescription}</h6>
</div>

</div>


)




}

export default Movie