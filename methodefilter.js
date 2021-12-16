const array = [1,2,3,4,5,6,7,8,9];

// val fonction callback et filter retourne toujours un tableau avec une condition

const filterdArray = array.filter(val => val>5)
console.log(filterdArray);

const data = [
    {name: "Pablo", age: 31},
    {name: "Maria", age: 28},
    {name: "Ana", age: 25},
    {name: "Juan", age: 40},
]

// Tableau d'objet

const filterPeople = data.filter(obj => obj.age > 30);
console.log(filterPeople);

data.filter(obj => obj.age > 30).forEach(person => console.log(person.name, "is above 30"))