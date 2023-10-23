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

function calculer(){
    const produit = document.querySelector("#produit").value;
    const prixHt = parseFloat(document.querySelector("#ht").value);
    const quantite = parseInt(document.querySelector("#quantite").value);
    const resultat = document.querySelector("#resultat");
    let total = 0;

    if ( prixHt =="" || quantite == ""){
        resultat.textContent = "Veuillez saisir une valeur numérique."
    }
    if (isNaN(prixHt) || isNaN(quantite)){
        resultat.textContent = "Veuillez saisir une valeur numérique."
    }
    if ( prixHt >= 0 && quantite >= 0){
        total = (prixHt*quantite*1.20);
        resultat.textContent = "Pour "+ quantite +" "+ produit + " dont le coût HT est de "+ prixHt +" €, "+ "le prix TTC sera de "+total+" €.";
    }
}