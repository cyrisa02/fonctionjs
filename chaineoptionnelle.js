const country = {
  name: "Finland",
  population: 5000000,
  shores: true,
  forest: true,
  welcome() {
    console.log("Tervetuloa suomeen");
    //Bienvenue en Finlande
  },
  superficy: 338440,
  border: ["Sweden", "Russia", "Norway"],
};

//propriétes de l'objet: forest, shores etc...

console.log(country?.superficy);
// Estce que la méthode welcome existe si oui je l'excute
country.welcome?.()

//est ce que les bordures existent si oui , alors je prends le premier
const borders = country.border?.[0]
console.log(borders)

country.border?.forEach(border => console.log (border))