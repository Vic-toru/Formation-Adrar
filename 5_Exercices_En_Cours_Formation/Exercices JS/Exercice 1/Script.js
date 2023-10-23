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

// Exercices 10
let notes = []; 
let nbEleves = parseInt(prompt("Entrez le nombre d'élèves"))
if (nbEleves != 0){
    let somme = 0 ;
    for( let i= 0 ; i < nbEleves; i++){
        let eleves = {
            "prénom":parseInt(prompt("Saisir le prénom")),
            "note":parseInt(prompt("Saisir la note")),
        }
        notes.push(eleves);
    }
    for (let i = 0 ; i < notes.length ; i++){
        somme+= notes[i].note;
    }
    let moyenne = somme / nbEleves;
    console.log(moyenne);
}
*/

/*Exercice 11 : 
Une boulangerie vend des chocolatines. Pour calculer le prix qu'elle va facturer a ses clients elle a besoin d'un programme. 
-Une chocolatine coûte 1€40 a l'unité jusqu'à 10. 
-Les 10 suivantes coûtent 1€30 pièce et 
-Au-delà elles coûtent 1€20 pièce.
Écrire un programme qui calcule le prix à payer  en fonction de la quantité (depuis un prompt) 
Afficher dans la console le montant à payer.

let chocolatines = [ 1.4 , 1.3 , 1.2 ];
let nbChoco = parseInt(prompt("Entrez le nombre de chocolatines"));
let total = 0;

if (nbChoco <= 10 ){
    total = chocolatines[0]*nbChoco;
} if (nbChoco>10 && nbChoco <= 20){
    total = (chocolatines[0]*10)+(chocolatines[1]*(nbChoco-10));
} if (nbChoco > 20){
    total = (chocolatines[0]*10)+(chocolatines[1]*10)+(chocolatines[2]*(nbChoco-20));
}

console.log(total)
*/

/*Exercice 12 Boucles :
Pour son nouveau spectacle, un mentaliste a besoin d'un programme pour s'exercer à deviner un nombre entre 1 et 100.
Pour réussir son tour il doit deviner le nombre en moins de 10 tentatives.
A chaque tour il va demander si le nombre qu’il énonce est plus petit ou plus grand que le nombre choisi.
-Si il réussit à découvrir le nombre en moins de 10 essais 
-> son entrainement acharné a payé, 
-Sinon 
-> il est un mauvais mentaliste et il va devoir changer de métier.
Il souhaite savoir en cas de réussite (en moins de 10 essais) -> le nombre d'essai qu'il a effectué pour trouver le nombre. 

let nb = Math.floor((Math.random()*100)+1);
let essai = 0;

while (essai < 10){
    let valeur = parseInt(prompt("Nombre donné par le mentaliste"))
    if ( nb < valeur){
        console.log("Plus petit que ça!")
    }
    if ( nb > valeur){
        console.log("Plus grand que ça !")
    }
    if (essai == 9){
        console.log("Si tu sais pas deviner, change de métier !")
    }
    if ( nb == valeur){
        console.log("Ton entrainement acharné a payé, tu as trouvé en ",`${essai}`,"essai(s) !")
        essai = 10;
    } 
    essai = essai + 1;
}
*/


/*Exercice 13 
Nous avons un jeu de dés que nous souhaitons automatiser.
Les règles de ce jeu de dès sont les suivantes :
-Il y à 2 participants : la banque et le joueur.
-Le jeu dure 5 tours.
-A chaque tour :
    --La banque lance un dès de 6 faces (score 1 à 6).
    --Le joueur lance un dès de 6 faces (score 1 à 6).
    --Si le joueur fait plus que la banque, ajouter 1 pts au score du joueur,
    --Si le joueur fait le même lancé que la banque, ajouter 2 pts au score du joueur.
    --Si le joueur fait moins que la banque, ajouter 1 pts au score de la banque.
-A la fin des 5 tours le gagnant est celui qui a le score le plus élevé.
-> Afficher le gagnant et son score (nbr de pts).*/

let bank = 0;
let player = 0;
let tour = 0;

while (tour < 5){
    let diceBank = Math.floor((Math.random()*6)+1);
    let dicePlayer = Math.floor((Math.random()*6)+1);
    if ( diceBank < dicePlayer ){
        player++;
        tour++;
    }
    if ( diceBank > dicePlayer ){
        bank++;
        tour++;
    }
    if ( diceBank == dicePlayer ){
        player = player + 2;
        tour++;
    }
}

if ( bank < player ){
    console.log("Le joueur a gagné avec",`${player}`,"points")
} if ( bank > player ){
    console.log("La banque a gagné avec",`${bank}`,"points")
} if ( bank == player ){
    console.log("La banque et le joueur sont à égalité avec",`${bank}`,"points")
}
