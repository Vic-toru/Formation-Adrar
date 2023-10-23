/* Exo 3 
Exercice 15 DOM :
Créer une page HTML qui va contenir les éléments suivants :
-Un titre h1 -> "Liste des utilisateurs",
-Une div,
-Dans la div ajouter :
    --1 balise img,
        --3 paragraphes,
Depuis l'objet JS ci-dessous :
 const user = {
  'id' : 1,
  'nom': 'votre nom',
  'prenom': 'votre prénom',
  'age': votre age,
  'image' :'./logo.jpg'
}

-Ajouter un attribut id à la div qui va avoir en valeur -> (user.id),
-Remplacer le contenu des 3 paragraphes par les valeurs user.nom, user.prenom et user.age,
-Remplacer l'image par l'url contenu dans user.image
Mettre en forme en JS les éléments suivants :
-paragraphe nom, prenom, age : police taille 11 px, couleur blue,
-taille de l'image : 100 px de large et 100 px de long,
-Aligner l'image à en haut à droite et ajouter un margin de 10 px.
-remplacer la couleur de fond de la div : rgb(220, 220, 220).
NB : pour remplacer le contenu text d'un élément HTML, utilisez textContent*/

const user = {
    'id' : 1,
    'nom': 'Rodrigues',
    'prenom': 'Victor',
    'age': 31,
    'image' :'./logo.jpg'
}
const div = document.querySelector ("div");
div.setAttribute("id", "user.id");
const par = document.querySelectorAll ("p");
par[0].textContent = user.nom;
par[1].textContent = user.prenom;
par[2].textContent = user.age;
const pic = document.querySelector ("img");
pic.setAttribute("id", "photo");
document.getElementById("photo").src= user.image;
for( let i = 0 ; i < par.length ; i++){
par[i].style.fontSize = "11px" ;
par[i].style.color = "blue" ;
}
pic.style.width = "100px";
pic.style.height = "100px";
pic.style.float = "right";
pic.style.margin = "10px";
div.style.backgroundColor = "rgb(220, 220, 220)";




