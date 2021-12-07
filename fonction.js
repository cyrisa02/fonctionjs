let a,b;
a=parseInt(prompt("Saisissez la valeur a"));
b = parseInt(prompt("Saisissez la valeur b"));



function Bonjour () {
  document.write("Bonjour de Picardie");
};

function Double (x,y) {
  x=x*2;
  y=y*2;

  document.write("Le couple doublé est" + x + "et" + y);
}

function Maxi (a,b) {
  if ( a > b ) {
    return a;
  }
  else {
    return b;
  }
  
};

console.log(Maxi(a,b));

document.write("le maximum est" + Maxi(a, b));

function Arrondi (Valeur){
  return parseFloat(Valeur).toFixed(2);
}


myDecimal=parseFloat(prompt("Entrez un nombre décimal:"));
myDecimal=myDecimal/3;

myArrondi=Arrondi(myDecimal);

document.write("l'arrondi" + myDecimal*3 + " à 2 chiffes est " + myArrondi);

