/*var element = document.getElementById("button1")

element.addEventListener("click", function fenetre() {

 tex= document.getElementById("textbox").value
 alert("Vous avez saisi "+tex);
})

*/
const random =Math.floor(Math.random()*100)+1
console.log(random)
function verif(){
    tex= document.getElementById("textBox1").value
    filtreNombre = new RegExp("^[0-9]+$")
    resultat= filtreNombre.test(tex)
    console.log(resultat)
    if(resultat== false){
    alert("veuillez entrez que de nombre et chiffre")
    }
    else if(tex < random && resultat == true){
        alert("trop petit")
    }
   else if(tex > random && resultat==true){
    alert("trop grand")
   }
   else if (tex= random && resultat==true)
{
    alert("Bon réponse")
}
    else
    alert("Erreur")
}

