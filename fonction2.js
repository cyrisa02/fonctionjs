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
    }
