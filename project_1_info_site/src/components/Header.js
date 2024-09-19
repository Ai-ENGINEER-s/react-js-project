import React from 'react'
import './Header.css'
import logo from  '../assets/logo.svg'

function Header(){

    return (



       
        <header className='header'>
         
         <img src={logo} alt='svg image' width={100} className='image'></img>
        <h1>Bienvenue sur mon premier projet React</h1>
        <p> Ceci est l'en-tete du site </p>

        </header>
    )
}

export default Header ; 