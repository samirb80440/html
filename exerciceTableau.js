/*var fruits,myTableau=[]
//fruits=prompt("saisie du nombre de fruit souhaité")
for (var i= 0; i< fruits; i++)
{
myTableau[i]=prompt("fruits")
}
console.log(myTableau)


function plus(compteur){
    compteur++
    return compteur
}

let compteur=1;
compteur= plus(compteur)
console.log(compteur)

function image(Img){
    t = document.getElementById("Img");
    t.src="papillon.jpg"
}
image()
function produit(X,Y){
     X*X*X
     Z=X*Y
  document.getElementById("ab").innerHTML ="Le cube de " +X+ " est égal à "+X*X*X
  document.getElementById("ba").innerHTML ="Le produit de "+X+" x "+Y+" est égal à "+Z 
  console.log(X*X*X)
  console.log(Z)
  return
}
var X,Z,Y
 X=prompt("Entrez un nombre")
 Y=prompt("Entrez un multiplicateur")
produit(X,Y)



function strtok(str1,str2,n) 
{
    str1="robert ;dupont ;amiens ;8000 "
    c=str1.split(str2)
     return c[n-1]
}
str1=strtok
console.log(strtok (str1, ";", 3))
*/

var myTableau=[];
var total=0
for (var i=0; i<100;i++)
{
myTableau[i]=window.prompt("")
if(myTableau[i]=="")
{  myTableau.pop()
   break
}
total=total + parseInt(myTableau[i])
}
console.log(myTableau.length)
console.log(total)
console.log(total/myTableau.length)
console.log(myTableau)
  
 
