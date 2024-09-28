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