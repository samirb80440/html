function verif2() {
  Coordonées = document.getElementById("Société").value
  Filtre = new RegExp("^[A-Za-z]")
  FiltreCode = new RegExp("^([0-9]{5})*$")
  FiltreEmail = new RegExp("^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$")
  // Filtretel=new RegExp("^0[1-9]([-. ]?\d{2}){4}$")
  resultat = Filtre.test(Coordonées)
  if (resultat == false) {
    alert("Entrez le nom de la société");
  }
  Coordonées = document.getElementById("Personne").value
  resultat = Filtre.test(Coordonées)
  if (resultat == false) {
    alert("Entrez le nom de la Personne à contacter")
  }
  Coordonées = document.getElementById("Codepostal").value
  resultat2 = FiltreCode.test(Coordonées)
  if (resultat2 == false) {
    alert("Entrez le code postal")
  }
  Coordonées = document.getElementById("Ville").value
  resultat = Filtre.test(Coordonées)
  if (resultat == false) {
    alert("Entrez la ville");
  }
  Coordonées = document.getElementById("Email").value
  resultat3 = FiltreEmail.test(Coordonées)
  if (resultat3 == false) {
    alert("Entrez un Email");
  }
}
const re = document.getElementById("Choissis")
const choixElement = document.getElementById("Choissez");
//const textareaElement = document.getElementById("Sélectionnez");

choixElement.addEventListener("change", () => {
  //const choix = choixElement.value;
  //if (choix !== "Choissis") {
    //textareaElement.style.dislplay = "block";
    re.remove("Choissis");
  //} else {
    //textareaElement.style.display = "none";
  })
//};
