import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState,useEffect, useCallback, useContext, useReducer, createContext} from 'react';

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


function AdminPanelContent() {
  return (
    <div>
      <h1>This is the content of Admin Panel</h1>
    </div>
  );
}

function LoginFormContent() {
  return (
    <div>
      <h1>This is the content of Login form</h1>
    </div>
  );
}

function AdmiPanel({ setShowContent }) {
  return (
    <div>
      <button onClick={() => setShowContent('admin')}>
        Click to see admin panel content
      </button>
    </div>
  );
}

function LoginForm({ setShowContent }) {
  return (
    <div>
      <button onClick={() => setShowContent('login')}>
        Click to see the content of Login page
      </button>
    </div>
  );
}

function App() {
  const [showContent, setShowContent] = useState(null); // État pour gérer le contenu à afficher
  const isLoggedIn = true; // Simule l'état de connexion

  let content;
  if (isLoggedIn) {
    content = <AdmiPanel setShowContent={setShowContent} />;
  } else {
    content = <LoginForm setShowContent={setShowContent} />;
  }

  return (
    <div>
      {content}
      {/* Affiche le contenu en fonction du clic */}
      {showContent === 'admin' && <AdminPanelContent />}
      {showContent === 'login' && <LoginFormContent />}
    </div>
  );
}

export default App;
