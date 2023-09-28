/*// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.

function f1(){
    console.log(17);
}

// Utiliser la fonction f1 pour afficher 17 dans la console.

f1();

// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 18.

function f2(){
    return 18;
}

// Utiliser la fonction f2 pour afficher 18 dans la console.

console.log(f2());

// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?

//Elle est bien plus utile car f1 permet uniquement d'afficher.

// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.

function f3(a){
    let b = 2 * a;
    console.log(b);
}

// Utiliser la fonction f3 pour écrire dans la console le double de 98.

f3(98);

// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.

function f4(a){
    let b = 2 * a;
    return b;
}

// Utiliser la fonction f4 pour écrire dans la console le double de 99.

console.log(f4(99));

// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.

let a = f4(99);

// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.

function f5(a,b){
    console.log(a+b);
}

// Utiliser la fonction f5 pour écrire dans la console la somme de 41 et 77.

f5(41,75);

// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.

function f6(a,b){
    let c = a + b;
    return c;
}

// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.

console.log(f6(42,77));

// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.

a = a + f6(42,77);
a = f6(a,f6(42,77));

// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.

function f7(a,b){
    if (a>b){
        return a 
    } else {
        return b
    }
}

// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).

function f8(a,b,c){
    if (a>=b && a>=c){
        return a 
    } else if (b>=a && b>=c) {
        return b
    } else {
        return c
    }
}

console.log(f8(1,2,3));
console.log(f8(3,2,1));
console.log(f8(2,3,1));


// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.


function f9(a,word){
    for (let i = 0 ; i < a ; i++){
        console.log(word);
    }
}

f9(5,"coin");
f9(10,"ujgfkuhgf");
*/