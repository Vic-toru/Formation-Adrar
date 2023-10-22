// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function displayLast(t) {
    let numéro = t.length - 1;
    console.log(t[numéro]);
}

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.

function returnLast(t) {
    let numéro = t.length - 1;
    return t[numéro];
}

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
function returnMin(t){
    let min = t[0];
    for (let i = 0; i < t.length ; i++){
        if (t[i] < min){
            min = t[i];
        }
    }
    return min;
}
console.log(returnMin([8,9,-4,5,6,1]))

// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.

// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].

// Créer un tableau qui contient [10,20,30,...,77770].

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]