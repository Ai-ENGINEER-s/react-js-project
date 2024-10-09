import React , {useState} from 'react'
import './App.css'






function TextEditor() {
  const [history, setHistory] = useState([""]);  // Historique des versions du texte
  const [currentStep, setCurrentStep] = useState(0);  // Étape actuelle de l'écriture

  function handleChange(newText) {
    const newHistory = history.slice(0, currentStep + 1); // Historique jusqu'à l'étape actuelle
    setHistory([...newHistory, newText]); // Ajouter la nouvelle version du texte à l'historique
    setCurrentStep(newHistory.length); // Avancer d'une étape
  }

  function jumpTo(step) {
    setCurrentStep(step);  // Revenir à une étape spécifique
  }

  const buttons = history.map((version, step) => {
    const description = step ? `Go to step #${step}` : "Go to start";  // Description des boutons
    return (
      <li key={step}>
        <button onClick={() => jumpTo(step)}>{description}</button>
      </li>
    );
  });

  return (
    <div>
      <textarea 
        value={history[currentStep]}  // Affiche la version actuelle du texte
        onChange={(e) => handleChange(e.target.value)}  // Met à jour l'historique à chaque changement
      />
      <ul>{buttons}</ul>  
    </div>
  );
}


export default function App(){


  return (

   <TextEditor></TextEditor>
  )
}