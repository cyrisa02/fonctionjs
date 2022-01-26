const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger"); // il y a plusieurs modal-triigerr

modalTriggers.forEach(trigger.addEventListener("click", toggleModal))

//à chaque clic sur déclencher=trigger ça va déclenchait le toggle et ontulise la fcontion suivante

function toggleModal(){
    modalContainer.classList.toggle("active") // je rajoute la class active qui est lié au CSS et display none ou pas!
}



