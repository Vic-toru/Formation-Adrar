/* console.log("Coin coin fait le canard");

let nb1 = 10;
let nb2 = 5;
let nb3 = nb1;

nb1 = nb2;
nb2 = nb3;

console.log(nb1);
console.log(nb2);


// Exercice 2
let nb1 = prompt();

if (nb1 >= 0) {
    console.log("positif");
} else {
    console.log("négatif");
}

//Exercice 3 
let nb1 = 6;
let nb2 = 5;

if (nb1+nb2 >= 0){
    console.log("positif");
} else {
    console.log("négatif");
}


//Exercice 4 
let nb1 = prompt();
let nb2 = prompt();

if (nb1 < 0 && nb2 < 0 || nb1 > 0 && nb2 > 0 ){
    console.log("Positif");
} else if (nb1 > 0 && nb2 < 0 || nb1 < 0 && nb2 > 0){
    console.log("Négatif");
} else if (nb1 ==0 || nb2 ==0){
    console.log("Egale 0");
}


//Exercice 5 

let age = prompt();

if (age >= 6 && age <= 7){
    console.log("Poussin");
} else if (age >= 8 && age <= 9){
    console.log("Pupille");
} else if (age >= 10 && age <= 11){
    console.log("Minime");
} else if (age >= 12){
    console.log("Cadet");
}

//Second cas

let age = prompt() ;

switch(true){
    case age >= 6 && age <= 7:
    console.log("Poussin")
    break;
    case age >= 8 && age <= 9 :
    console.log("Pupille")
    break;
    case age >= 10 && age <= 11:
    console.log("Minime")
    break;
    case age >= 12:
    console.log("Cadet")
    break;
} 


//Exercice 6 

let mot1 = prompt("Le mot");
let mot2 = prompt("Le mot");
let mot3 = prompt("Le mot");

if (mot1 < mot2 && mot2 < mot3){
    console.log("Triés par ordre alphabétique")
} else {
    console.log("Non triés par ordre alphabétique")
}


//Exercice 7 

let tab = [];
tab[0] = prompt("valeur à rentrer");
tab[1] = prompt("valeur à rentrer");
tab[2] = prompt("valeur à rentrer");

if (tab[0] <= tab[1] && tab[1] <= tab[2]){
    console.log("Les valeurs sont triées par ordre croissant")
} 
else {
    console.log("Les valeurs ne sont pas triées dans l'ordre croissant")
}


// Exercice 8 

let val1 = prompt("Nom de produit");
let val2 = parseFloat(prompt("Prix HT"));
let val3 = parseInt(prompt("Quantité"));

let tab = [val1,val2,val3];
tab [3] = let val4 = val2*1.2*val3;

console.log(tab);

// Variante

let val1 = prompt("Nom de produit");
let val2 = parseFloat(prompt("Prix HT"));
let val3 = parseInt(prompt("Quantité"));

let tab = [val1,val2,val3];
tab.push(val2*1.2*val3);

console.log(tab);
*/

///Exercice 9

let users = [];
for (let i = 1; i < 6 ; i++){
let user = {
    "nom":prompt(`${i}. Entrez votre nom`),
    "prénom":prompt(`${i}. Entrez votre prénom`),
    "age":parseInt(prompt(`${i}. Entrez votre age`)),
    "numéro de téléphone":prompt(`${i}. Entrez votre numéro de téléphone`)
    }
    users.push(user);
}

let ageMini = users[0].age;
let indice = 0;

for (let i = 0 ; i < 5; i++){
    if (ageMini >= users[i].age){
        ageMini = users[i].age; 
    } else {
        indice = indice + 1;
    }
}

console.log(users[indice].nom,users[indice].prénom)
