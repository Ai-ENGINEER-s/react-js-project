import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState,useEffect} from 'react';

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


const [something , setSomething] = useState(setSomething)

function Counter(){

  const [myConuntNumber , setMyCounteNumber] = useState(0);

  return (

    <div>
      Vous avez cliqué {myConuntNumber} fois 
    </div>

    <button onClick={()=>set}></button>
  )
}