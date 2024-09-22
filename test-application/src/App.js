import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState,useEffect, useCallback, useContext, useReducer, createContext} from 'react';
import { Fragment } from 'react';
// Props dans React = > properties in React


// function useWindowWidth() {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return width;
// }

// function MyComponent() {
//   const width = useWindowWidth();

//   return <div>La largeur de la fenêtre est : {width}px</div>;
// }


// function App(){
// return (

//   <div>
// <MyComponent/>

//   </div>
// )


// }


// export default App 


// useState =>  

// le hook useState permet de gerer l'etat dans un composant focntionnel . il initialise une valeur  d'etat et retourne un tableau conetenant la valeur actuelle et une fonction pour la mettre a jour 



// N°1 useState 

function Compteur1() {
  const [compte, setCompte] = useState(0);

  return (
    <div>
      <p>Compte : {compte}</p>
      <button onClick={() => setCompte(compte + 1)}>Incrémenter</button>
      <button onClick={()=>setCompte(compte -1 )}>décrimenter</button>
    </div>
  );
}

// useEffect 



function Compteur() {
  const [compte, setCompte] = useState(0);

  useEffect(() => {
    console.log('Compte mis à jour');
  }, [compte]);

  return (
    <div>
      <p>Compte : {compte}</p>
      <button onClick={() => setCompte(compte + 1)}>Incrémenter</button>
    </div>
  );
}



// useContext 

// step by step JSX learning 

// inserer du code javaScript dans jsx en utilisant les calibrances {}


const element = <h1>Hello , world </h1>

const name = "BARRY SANOUSSA"

const jsxCode = <h1>{name}</h1>


function AdminPanel (){

  return (
    <div><h1>Admin pannel content </h1></div>
  )



}

function LoginForm  (){

  return (
    <div className='container'>
      <br/>
   <div className='containerInput'>
   <input placeholder='your email adresse' className='input'></input>
   <input placeholder='your password ' className='input'></input><br/><br/>
   </div>

    


<div className='containerButton'>
<button className='logginButton'>Loggin</button>   
  
  </div>   
      
      </div>
  )

}


// master useState hook 



// syntax de useState 

// le hook useState est l'un des hooks les plus importants en React .Il te permet d'ajouter un état local a un composant foncntionnel . Avant l'introduction des hook , seul les composants de classe pouvaient avoir un état . Grace a 

// syntaxe de base : 



function TextInput() {
  // Initialisation d'une variable d'état "text" avec une chaîne vide
  const [text, setText] = useState('');

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Tapez ici"
      />
      <p>Vous avez tapé : {text}</p>
    </div>
  );
}




export default function  App(){
let content ;

let isLoggedIn = false  ; 

if (isLoggedIn){
  content = <AdminPanel/>
}else{
  content = <LoginForm/>
}

  return (
  <div>
    {content}
    <TextInput/>
  </div>
  )
}