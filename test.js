console.log("Nous somme la pour vous assister ")

const fruits = ['Apple', 'Banana', 'Orange', 'Strawberry']

const sliceFruits = fruits.slice()


console.log(sliceFruits)


// exercice N1

const animals = ['Lion', 'Elephant' , 'Tiger' , 'Leopard','Zebra', 'Giraffe']

const animalsIndex2 = animals.slice(2)

console.log(animalsIndex2)


// exercice N2 

const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Pink'];



const troisDerniersElements = colors.slice(-3)
console.log(troisDerniersElements)


// exercice N3 

const cities = ['Paris', 'London', 'New York', 'Tokyo', 'Berlin', 'Sydney'];

// Exercice : Utilise slice() pour extraire les éléments de "London" à "Tokyo" (sans inclure "Berlin").


const londonAtoKIO = cities.slice(1,4)
console.log(londonAtoKIO)


// exercice N4 

const numbers = [10, 20, 30, 40, 50, 60, 70];

// Exercice : Utilise slice() pour extraire les éléments de l'index 2 jusqu'à l'avant-dernier élément du tableau.




const elements2jusAlafin = numbers.slice(1, -1)

console.log(elements2jusAlafin)


// exercice N5 

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

// Exercice : Utilise slice() pour créer une copie complète du tableau sans le modifier.


const planetsCopieComplete = planets.slice()


console.log(planetsCopieComplete)






// operateurs logiques en javaScripts 
// en javaScript certaines valeurs sont considerées comme "falsy"

// false  , 0 , null , "", undefined , NaN 

// quand une op


const a = true ; 

const b = false 

const result = a && b ; 
console.log(result)


const value1 = null; 
const value2 = "hello";

const result2 = value1 && value2




// comprehension de l'operateur ...

let mangos = ['Apple' , 'Banana']

let moreFruits = ["Orange" , "pear"]


let allFruits = [...mangos, ...moreFruits]


console.log(allFruits)


let tabNumbers = [1,2]
let moreNumbers = [...tabNumbers , 78]

console.log(moreNumbers)

// creer la copie d'un tableau 

let originalArray = [1,5,96]

let copiedArray = [...originalArray]


console.log("orginal array "+ "\n" + originalArray + "\n" + "copied Array : " + copiedArray )


// ajouter un element au debut du tableau 

let animaux = ['cat' , 'dog']

let moreAnimals = ['lion' , ...animaux]

console.log("la liste des animaux : " + moreAnimals)





const fruitsTictactoegame = ["pomme " , "orange" , "fraise " , "Kiki" ]

const firstThreegame = fruitsTictactoegame.slice(0, 3); 

console.log(firstThreegame)




console.log("test fonction ")


function calculateWinner(squares) {
    // Définition des lignes gagnantes
    const lines = [
      [0, 1, 2], 
      [3, 4, 5], 
      [6, 7, 8], 
      [0, 3, 6], 
      [1, 4, 7], 
      [2, 5, 8], 
      [0, 4, 8], 
      [2, 4, 6]
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      const values = [squares[a], squares[b], squares[c]]; // Récupère les valeurs de la ligne gagnante
  
      // Vérifie si toutes les valeurs sont identiques et non nulles
      if (values[0] && values.every(value => value === values[0])) {
        return values[0]; // Retourne la valeur gagnante ('X' ou 'O')
      }
    }
    return null; // Aucun gagnant
  }
  
  // Exemple de tableau
  const squares = [
    "X", "X", "X", 
    "O", "O", null,
    "X", "O", "X"   
  ];
  
  const status = calculateWinner(squares);
  console.log("Voici le gagnant du jeu : " + status); // Affiche 'X'
  


// Exercice Map 

// exercice N1 

const etudiants = [

    {nom : "BARRY" , note : 85} , 
    {nom : "Sankara" , note : 90} ,
    {nom : "Ouedraogo" , note : 95} ,
    {nom : "Traore" , note : 70} ,
]


const nomsEtudiants = etudiants.map(etudiant => etudiant.nom)


console.log("voici les noms des etudiants : " + nomsEtudiants)


const ajouter10Points = etudiants.map(etudiant=>etudiant.note+10)

console.log("voici les notes des etudiants avec +10 : " + ajouter10Points)



// Exercices avec la fonction map dans JavaScript 


// Exercice 1 : Transformation d'objets complexes 

const produits = [

{nom : "chaise" , prix : 25 , quantité : 4},

{nom : "Tableau" , prix : 100, quantité : 12}, 

{nom : "Telephone" , prix : 2500, quantité : 100}
]


const produitsAvecPrixtotalNoms = produits.map( function(produit){
  return (
     produit.nom + ":"  +  produit.prix * produit.quantité 
  
  )
}

)

console.log( "Exercice 1 :" +"\nproduits prix total et noms : " + produitsAvecPrixtotalNoms)



// exercice 2 



const evenements = [
    { nom: "Conférence", date: new Date(2024, 10, 7) },
    { nom: "Webinaire", date: new Date(2024, 11, 15) },
    { nom: "Workshop", date: new Date(2024, 9, 30) }
  ];

  const evenementsDatesFormatées = evenements.map(function(evenement){

    return (

        evenement.date.getDay() + "-" +`${evenement.date.getMonth()}` + "-" +`${evenement.date.getFullYear()}`

       
    )
  })


  console.log("voici les dates formatées : " + evenementsDatesFormatées)


// exercice 3 


const utilisateurs = [
    { id: 1, nom: "John", email: "john@example.com", age: 25, pays: "France" },
    { id: 2, nom: "Jane", email: "jane@example.com", age: 28, pays: "Canada" },
    { id: 3, nom: "Tom", email: "tom@example.com", age: 30, pays: "USA" }
  ];


  const nomsAdressdEmail = utilisateurs.map(function(utilisateur){
 return    "Nom : " + utilisateur.nom +  "  "  + "Email:" + utilisateur.email
  } )

  console.log(nomsAdressdEmail)



  // Exercice 4 


  const articles = [
    { title: "Introduction to JavaScript", body: "Lorem ipsum...", author: "Alice" },
    { title: "Advanced React", body: "Lorem ipsum...", author: "Bob" },
    { title: "Mastering CSS", body: "Lorem ipsum...", author: "Charlie" }
  ];

  const titlesOfArticles = articles.map(article=>article.title)


  console.log("Voici les titres des articles " + [titlesOfArticles ])


  // Exercice 5 



  const employés = [
    { nom: "Luc", salaire: 50, heuresTravaillées: 160 },
    { nom: "Marie", salaire: 60, heuresTravaillées: 170 },
    { nom: "Paul", salaire: 55, heuresTravaillées: 180 }
  ];

  

  const ajoutSalaireTotal = employés.map(employé => employé.salaire* employé.heuresTravaillées)

  salaireTotalListe = employés.fill(ajoutSalaireTotal)
  console.log("salaires total de chaque employé" + salaireTotalListe)


// methode tres importante map dans javaScript 


// Exemple 1 : Doubler les valeurs d'un tableau 

const numb = [ 1,2,3,4,5,6]

const doubleNumbers = numb.map((number , index) => {
  console.log(`Index : ${index}, valeur actuelle : ${number}`);
  return number*2
})


// Exemple 2 : Ajouter un index a chaque element 


const engFruits = ['Pomme' , 'Banane' , 'Cerise'] ; 

const indexedFruits = engFruits.map((fruit, index) =>{

return `${index +1}.${fruit}`

})

console.log(indexedFruits)


const engStudents = [

  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 23 },
  { name: 'Charlie', age: 24 }
]
const studentList = engStudents.map((student , index)=>{

  return `<li>${index + 1}. ${student.name} - ${student.age} ans</li>`;

})
console.log(studentList)


// Exemple 4 : Tableau d'objets avec map pour filtrer des propriétés 

const engEmployés = [
  { id: 1, name: 'Jean', position: 'Manager' },
  { id: 2, name: 'Claire', position: 'Designer' },
  { id: 3, name: 'Paul', position: 'Développeur' }

]

const justEmployeeNames = engEmployés.map(employé =>{
  return employé.name
})

console.log(justEmployeeNames)



// Exemple 5 : Revenir a des etats precedents dans un jeu 


const gameHistory =  [
  ['_', '_', '_'], // Début du jeu
  ['X', '_', '_'], // Premier mouvement
  ['X', 'O', '_'], // Deuxième mouvement
  ['X', 'O', 'X']  // Troisième mouvement
];


const moves = gameHistory.map((boardState , move)=>{
  return `Move ${move}: ${boardState.join(' ,')}`; 
})

console.log(moves)



// Exemple 6 





// function de comparaison every 

const engNumbers = [2,1,5,6,8,9]

const allEven = engNumbers.every(num=>num %2===0); 

console.log(allEven)