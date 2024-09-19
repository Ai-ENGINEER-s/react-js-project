import React, { useState } from 'react';

// function TodoApp() {
//     const [tasks, setTasks] = useState([]);
//     const [inputValue, setInputValue] = useState('');

//     const addTask = () => {
//         if (inputValue.trim()) {
//             setTasks([...tasks, inputValue]);
//             setInputValue('');
//         }
//     };

//     const removeTask = (index) => {
//         const newTasks = tasks.filter((_, i) => i !== index);
//         setTasks(newTasks);
//     };

//     return (
//         <div>
//             <h1>Gestionnaire de Tâches</h1>
//             <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 placeholder="Ajouter une tâche"
//             />
//             <button onClick={addTask}>Ajouter</button>
//             <ul>
//                 {tasks.map((task, index) => (
//                     <li key={index}>
//                         {task}
//                         <button onClick={() => removeTask(index)}>Supprimer</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default TodoApp;



const articles = [


  {
    title:'Article 1 ' , description : 'Fanta pour les enfants ', 

    
     title:'Article 1 ' , description : 'Fanta pour les enfants ',

      title:'Article 1 ' , description : 'Fanta pour les enfants '

    
  }
]



function ArticleList() {
  return (
    <div>
      {articles.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
}




function Welcome(props) {
  return <h1>Bonjour, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}

export default App