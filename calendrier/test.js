function myDsc2() {

    let mySaisie=Number(prompt("Entrez la valeur finale:"));
  console.log(mySaisie);
      let Cmptr;
        for (Cmptr = mySaisie; Cmptr >=0; Cmptr -= 2) {
          if (Cmptr !=0) {
          document.write(Cmptr + "-");
        }
        else
         {document.write( "<br>" + "Fin de la boucle.");
        }
        }        
      };