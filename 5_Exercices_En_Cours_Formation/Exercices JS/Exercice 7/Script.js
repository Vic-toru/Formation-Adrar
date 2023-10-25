/* Exercice 5 Transformer l'exercice 8 pour que le programme utilise des éléments HTML plutôt que des prompts et console.log.
Partie HTML 
Ajouter  les éléments suivants :
-un titre h1 -> calculer le prix TTC,
-un input de (type text, id = prixHt),
-un input de (type text, id = quantite),
-un bouton (onclick =calculer()),
-un paragraphe (id= resultat),
Partie JS :
Créer une fonction calculer :
-récupérer les valeurs des 2 inputs,
-refaire le calcul comme dans l'exercice 8 (correction),
-Afficher le résultat dans le paragraphe (id= resultat)*/



/*
function calculer(){
    const produit = document.querySelector("#produit").value;
    const prixHt = parseFloat(document.querySelector("#ht").value);
    const quantite = parseInt(document.querySelector("#quantite").value);
    const caseProduit = document.querySelector("#produit");
    const casePrixHt = document.querySelector("#ht");
    const caseQuantite = document.querySelector("#quantite");
    const resultat = document.querySelector("#resultat");
    let total = 0;

    if ( prixHt =="" || isNaN(prixHt)){
        resultat.textContent = "Veuillez saisir une valeur numérique."
        casePrixHt.style.backgroundColor = "red"
    }
    if ( quantite =="" || isNaN(quantite)){
        resultat.textContent = "Veuillez saisir une valeur numérique."
        caseQuantite.style.backgroundColor = "red"
    }
    if ( prixHt >= 0 && quantite >= 0){
        total = (prixHt*quantite*1.20);
        caseProduit.style.backgroundColor = "green";
        casePrixHt.style.backgroundColor = "green";
        caseQuantite.style.backgroundColor = "green";
        resultat.textContent = "Pour "+ quantite +" "+ produit + " dont le coût HT est de "+ prixHt +" €, "+ "le prix TTC sera de "+total+" €.";
    }
    if (produit == ""){
        resultat.textContent = "Veuillez saisir une valeur.";
        caseProduit.style.backgroundColor = "red";
    }
}*/

let produit = document.querySelector("#produit");
let prixHt = document.querySelector("#ht");
let quantite = document.querySelector("#quantite");

function calculer(){
    const resultat = document.querySelector("#resultat");
    let total = 0;
    if ( prixHt.value >= 0 && quantite.value >= 0){
        total = (parseFloat(prixHt.value)*parseInt(quantite.value)*1.20);
        resultat.textContent = "Pour "+ quantite.value +" "+ produit.value + " dont le coût HT est de "+ prixHt.value +" €, "+ "le prix TTC sera de "+total+" €.";
    }
}

const bt = document.querySelector("#bt");
const input = document.querySelectorAll("input");

bt.addEventListener("click", ()=>{
    for (let i = 0 ; i < input.length ; i++){
        if (produit.value == "" ){
            input[i].style.backgroundColor = "red";
            resultat.textContent = "Veuillez saisir une valeur.";
        } else {
            if (isNaN(prixHt.value)){
                prixHt.style.backgroundColor = "red";
                resultat.textContent = "Veuillez saisir une valeur numérique."
                produit.style.backgroundColor = "green";
            }
            if (isNaN(quantite.value)){
                quantite.style.backgroundColor = "red";
                resultat.textContent = "Veuillez saisir une valeur numérique."
                produit.style.backgroundColor = "green";
            } else {
            input[i].style.backgroundColor = "green";
        }
        }
    }
    calculer();
})



