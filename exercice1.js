  function myAsc() {
    let Cmptr;
      for (Cmptr=0; Cmptr <=19 ; Cmptr +=2) {
      document.write(Cmptr + "-");
      if (Cmptr == 18) {
        document.write( "20");
      }
    }

  };

  function myAsc2() {
    
    let mySaisie=Number(prompt("Entrez la valeur finale:"));
  console.log(mySaisie);
      let Cmptr;
        for (Cmptr = 0; Cmptr <= mySaisie; Cmptr += 2) {
          if (Cmptr >=mySaisie) {
          document.write(Cmptr + "<br>" + "Fin de la boucle.");
        }
        else
         {document.write(Cmptr + "-");
        }
        }        
      };
  
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
  

     function Nbreprem(){
       document.write("Les nombres premiers sompris entre 1 et 100 sont ");
       for(let Cmptr=2; Cmptr<=100; Cmptr++){
         if (nbrPremier(Cmptr)){
           document.write(Cmptr + "-");
         }
       }
     }

      function nbrPremier(nbr) {
        for(let i=2; i<nbr; i++)
        if (nbr%i === 0) return false;
        return nbr >1;
      }

  