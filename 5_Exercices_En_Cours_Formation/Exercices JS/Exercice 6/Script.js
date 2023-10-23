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
-Afficher le résultat dans le paragraphe (id= resultat)

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
}*/

/* Exercice 6 Partie HTML :
-un titre h1 = liste des tâches,
-un input de type text (id= task),
-un bouton (id = add, onclick = addTask()) texte ajouter,
-un bouton (id = delAllTask, onclick = delAllTask()) texte tout supprimer,
-un bouton (id = reload, onclick = reload()) texte recharger la page,
-une div (id = tasks)
Partie JS :
-Créer une fonction addtask qui va ajouter à chaque clic sur le bouton une nouvelle tache à la div (id = task),
-Créer une fonction delAllTask qui va à chaque clic sur le bouton supprimer tous les enfants (child) contenu dans la div (tasks),
-Créer une fonction qui va à chaque clic sur le bouton recharger la page.*/


function addTask(){
    const list = document.getElementById("list");
    const tasks = document.createElement('div');
    const text = document.querySelector("#task").value;
    list.appendChild(tasks);
    tasks.setAttribute("class","container");
    const container = document.createElement('p');
    const p = document.createElement("input");
    p.setAttribute("id","delTask");
    p.setAttribute("onclick","delTask()");
    tasks.appendChild(container);
    container.textContent = text;
}
function delAllTask(){
    const list = document.getElementById("list");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}
function reload(){
    location.reload();
}
function delTask(){
    const element = document.getElementsByClassName(container);
}


