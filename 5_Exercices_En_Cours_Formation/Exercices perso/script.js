//Créer une fonction qui prend en entré un nombre qui s'ajoute lui même 10 fois. A la 5 eme fois où il s'ajoute divise le resultat final par ce nombre. Afficher le résultat après division dans la console. Nombre de départ 567.

/*
function steVeine(x){
    let y = 0;
    for(let i = 0; i < 9; i++){
        if ( i == 4 ){
            y = x;
        } else {
            x = x + x;
        }
    }
    x = x/y;
    console.log(x);
};

steVeine(567);*/

//La classe des cyberdev de l'ADRAR a mis en place le chocoblast. 
//Jean-Marie se fait chocoblast tous les mercredis, et un mardi sur 2. 
//Sachant qu'il ramène les chocos un jeudi sur 3, combien de tournées de chocolatines en retard aura-t-il après 60 semaines de cours ?



    /*let x = 0;
    for (let i = 0 ; i < 60; i++){
        if (i % 1 == 0 ){
            x++;
        } if (i %2 == 0){
            x++;
        } if (i %3 == 0){
            x--;
        }
    }
    console.log(x);*/

//Romaric arrive à se concentrer durant certaines minutes de la journée.
//Ces minutes « magiques » arrivent lorsque la somme des heures et des minutes est un multiple de 7
//Exemple : 11h10 = 21 ou bien 15h34 = 49
//Combien de minutes est-il concentré par journée de 9h à 17h ?
/*
function romachibre(){
    let t = 0;
    let h = 9;
    for (let i = 0; i < 8; i++){

        let m = 0;
        for (let j=0; j < 60; j++){
            if ( (h+m) % 7 == 0 ){
                m++;
                t++;
            } else {
                m++;
            }
        }
        h++;
    }
    console.log(t);
}

romachibre();*/

//  Farid en a plein le dos de la formation, il en a marre, et se lance dans la pizza. Mais Farid veut créer un concept, il adore Subway, c'est tout naturellement qu'il se tourne vers la création de pizzas sur mesure uniquement. Votre mission, si vous l'acceptez, est d'utiliser un petit bout de code HTML pour utiliser les inputs afin de récupérer la liste des ingrédients, et de calculer le coût de la pizza, puis l'afficher dans la console. Ne gérez pas les éventuelles erreurs, dans un premier temps, il faudra remplir tous les champs avant la validation. 
//PS: l'utilisation d'objet est obligatoire pour l'exercice.

let ingredient = {
    poivron: 4,
    tomate: 5,
    poulet: 2,
    champignon: 3,
    mozzarella: 3,
    creme: 1,
    base_tomate: 1,
    chorizzo: 2,
    raclette: 4,
    merguez: 5,
};