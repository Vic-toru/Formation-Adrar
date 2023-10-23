/*const nom = document.querySelector("#nom");
const prenom = document.querySelector("#prenom");
function recup(){
    console.log(nom.value);
    console.log(prenom.value);
}
function tap(a){
    console.log(nom.value);
    console.log(prenom.value);
}*/

/*Exo 4 
Depuis l'exemple ci-dessus et la correction de l'exercice 11 (prix des chocolatines) :
-Dans la page HTML ajouter les éléments suivants :
      --un titre h1 (calculer le prix à payer),
      --un input de type text ( id = quantite),
      --un bouton (onclick = calculer()),
      --un paragraphe (id= resultat),
-Dans la partie JS :
créer une fonction qui va se nommer calculer et qui va éffectuer le calcul du prix à payer des chocolatines :
récupérer la valeur de l'input (id quantité) avec value,
afficher dans le paragraphe (id = résultat) le montant à payer.
Bonus : Tester si le champ quantité est vide => afficher dans le paragraphe "Veuillez choisir un nombre de chocolatine"
*/
function calculer(){
let prixChoco = [ 1.4 , 1.3 , 1.2 ];
let total = 0;
const nbChoco = document.querySelector("#quantite").value;
const resultat = document.querySelector("#result");


    if (nbChoco <= 10 ){
        total = prixChoco[0]*nbChoco;
    } if (nbChoco>10 && nbChoco <= 20){
        total = (prixChoco[0]*10)+(prixChoco[1]*(nbChoco-10));
    } if (nbChoco > 20){
        total = (prixChoco[0]*10)+(prixChoco[1]*10)+(prixChoco[2]*(nbChoco-20));
    }
    if ( nbChoco == ""){
        resultat.style.color = "red";
        resultat.textContent = "Veuillez choisir un nombre de chocolatine.";
    } else {
    resultat.textContent = "Pour "+ nbChoco +" chocolatines le prix sera de "+ total +" €.";
    }
}


