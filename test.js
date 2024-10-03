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