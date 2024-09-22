import React  from "react";
import tic_tac_toe_image from '../assets/tic_tac_toe_image.png';
import '../pages/LandingPage.css'



function LandingPage (){

return (

    <div>

<h1 className="titre">

Welcome to my <span className="game"> tic tac toe</span> game 

</h1>
<div className="imageContainer">

<img  src={tic_tac_toe_image}  className="image"/>
</div>
</div>
)

 }

 export default LandingPage 