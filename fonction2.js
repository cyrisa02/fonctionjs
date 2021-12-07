  function myBoucleIf () {
    let myResultatHtml=document.querySelector('#myResultat');
    console.log(myResultatHtml);

    let mySaisie;

    mySaisie=parseFloat(prompt("Nombre (Positif ou négatif):"));

    if (mySaisie > 0) {
      myResultatHtml.innerHTML='Valeur positive';
    }

  };

  function myBoucleIfElse(){
    let myResultatHtml=document.querySelector('#myResultat');
    var mySaisie;

    mySaisie=parseFloat(prompt("Nombre (Positif ou négatif) : "));

    if (mySaisie > 0 ){
      myResultatHtml.innerHTML='Valeur positive';
    }
    else {
      myResultatHtml.innerHTML='Valeur négative';
    }
    };

 
    function myBoucleSwitch(){
      let myResultatHtml1 = document.querySelector("#myResultat");   
      
      let leMot, nbreVoyelles, Cmptr;
      leMot=prompt("Saisissez un mot :");
      leMot = leMot.toUpperCase();
      nbreVoyelles=0;
      for ( Cmptr = 0; Cmptr <= leMot.length; Cmptr++) {
        switch (leMot.charAt(Cmptr)) {
          case "A":
            nbreVoyelles = nbreVoyelles + 1;
            break;
          case "E":
            nbreVoyelles = nbreVoyelles + 1;
            break;
          case "I":
            nbreVoyelles = nbreVoyelles + 1;
            break;
          case "O":
            nbreVoyelles = nbreVoyelles + 1;
            break;
          case "U":
            nbreVoyelles = nbreVoyelles + 1;
            break;
          case "Y":
            nbreVoyelles = nbreVoyelles + 1;
            break;
        }
      }
      myResultatHtml1.innerHTML = "Le mot :" + leMot + "contient" + nbreVoyelles + "Voyelles";
    }

    
