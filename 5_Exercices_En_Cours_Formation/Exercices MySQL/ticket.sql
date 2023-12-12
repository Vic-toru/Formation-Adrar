CREATE DATABASE exemple_ticket;
USE exemple_ticket;

-- Création des tables

CREATE TABLE produit (
    id_produit INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom_produit VARCHAR(50) NOT NULL,
    description_produit TEXT NOT NULL,
    prix_produit DECIMAL(4 , 2 ),
    id_categorie INT NOT NULL
)  ENGINE=INNODB 

CREATE TABLE categorie (
    id_categorie INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom_categorie VARCHAR(50) NOT NULL
)  ENGINE=INNODB 

CREATE TABLE ticket (
    id_ticket INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    date_ticket DATETIME NOT NULL,
    id_vendeur INT NOT NULL
)  ENGINE=INNODB

CREATE TABLE vendeur (
    id_vendeur INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom_vendeur VARCHAR(50) NOT NULL,
    prenom_vendeur VARCHAR(50) NOT NULL
)  ENGINE=INNODB

-- Ajout foreign key

ALTER TABLE produit
ADD CONSTRAINT fk_completer_categorie
FOREIGN KEY (id_categorie)
REFERENCES categorie(id_categorie);

ALTER TABLE ticket
ADD CONSTRAINT fk_vendre_vendeur
FOREIGN KEY (id_vendeur)
REFERENCES vendeur(id_vendeur);

-- Création table d'association

CREATE TABLE ajouter (
    id_produit INT,
    id_ticket INT,
    PRIMARY KEY (id_produit , id_ticket),
    quantite INT NOT NULL
)  ENGINE=INNODB;

ALTER TABLE ajouter
ADD CONSTRAINT fk_ajouter_produit
FOREIGN KEY (id_produit)
REFERENCES produit(id_produit);

ALTER TABLE ajouter
ADD CONSTRAINT fk_ajouter_ticket
FOREIGN KEY (id_ticket)
REFERENCES ticket(id_ticket);

-- Insertion d'éléments dans catégorie

INSERT INTO categorie(nom_categorie) VALUE ('alimentaire'); 
INSERT INTO categorie(nom_categorie) VALUE ('liquide'); 
INSERT INTO categorie(nom_categorie) VALUE ('animalerie'); 

-- Insertion d'éléments dans produit

INSERT INTO produit(nom_produit, description_produit, prix_produit, id_categorie) VALUE ('pomme','pomme en sachet 1kg', 1.89, 1);
INSERT INTO produit(nom_produit, description_produit, prix_produit, id_categorie) VALUE ('poire','poire en sachet 1kg', 2.18, 1);
INSERT INTO produit(nom_produit, description_produit, prix_produit, id_categorie) VALUE ('banane','régiment de banane 1kg', 1.99, 1);
INSERT INTO produit(nom_produit, description_produit, prix_produit, id_categorie) VALUE ('goudale','bouteille 75cl de goudale blonde', 3.15, 2);
INSERT INTO produit(nom_produit, description_produit, prix_produit, id_categorie) VALUE ('croquette pour chat','purina chat stérilisé', 8.95, 3);

-- Insertion d'éléments dans vendeur

INSERT INTO vendeur(nom_vendeur, prenom_vendeur) VALUE ('Petit','Quentin');
INSERT INTO vendeur(nom_vendeur, prenom_vendeur) VALUE ('Chiarandini','Christopher');
INSERT INTO vendeur(nom_vendeur, prenom_vendeur) VALUE ('Michon','Romaric');

-- Ajout ticket de caisse

INSERT INTO ticket(date_ticket, id_vendeur) VALUE ('2023/12/05 14:55:00','1');
INSERT INTO ticket(date_ticket, id_vendeur) VALUE ('2023/12/05 14:58:00','2');
INSERT INTO ticket(date_ticket, id_vendeur) VALUE ('2023/12/05 15:02:00','3');
INSERT INTO ticket(date_ticket, id_vendeur) VALUE ('2023/12/05 15:13:00','2');
INSERT INTO ticket(date_ticket, id_vendeur) VALUE ('2023/12/05 15:16:00','2');


-- Ajout produit et quantité aux tickets

INSERT INTO ajouter(id_produit, id_ticket, quantite) VALUE ('2','1','2');
INSERT INTO ajouter(id_produit, id_ticket, quantite) VALUE ('5','1','1');

INSERT INTO ajouter(id_produit, id_ticket, quantite) VALUE ('1','2','2');
INSERT INTO ajouter(id_produit, id_ticket, quantite) VALUE ('3','2','1');

INSERT INTO ajouter(id_produit, id_ticket, quantite) VALUE ('4','3','8');
INSERT INTO ajouter(id_produit, id_ticket, quantite) VALUE ('5','3','2');

INSERT INTO ajouter(id_produit, id_ticket, quantite) VALUE ('2','4','2');
INSERT INTO ajouter(id_produit, id_ticket, quantite) VALUE ('4','4','2');

INSERT INTO ajouter(id_produit, id_ticket, quantite) VALUE ('1','5','4');
INSERT INTO ajouter(id_produit, id_ticket, quantite) VALUE ('3','5','2');


-- Mettre à jour le prix des produits augmenter le prix de 10%

UPDATE produit 
SET 
    prix_produit = prix_produit * 1.1;

-- Ajouter un nouveau vendeur

INSERT INTO vendeur(nom_vendeur, prenom_vendeur) VALUE ('Morlot','Maxime');

-- Mettre en majuscule le nom et le prenom de tous les vendeurs

UPDATE vendeur 
SET 
    nom_vendeur = UPPER(nom_vendeur);
UPDATE vendeur 
SET 
    prenom_vendeur = UPPER(prenom_vendeur);

-- Remplacer la date (mois) des tickets en rajoutant un mois

UPDATE ticket 
SET 
    date_ticket = '2024/01/01 12:00:00';
    
UPDATE ticket 
SET 
    date_ticket = ADDDATE(date_ticket, INTERVAL 1 MONTH)
WHERE
    MONTH(date_ticket) = 1;

-- Supprimer le vendeur ajouté précédement

DELETE FROM vendeur 
WHERE
    id_vendeur = 4;

-- Requête de consultation avec condition prix plus élevé que 5€

SELECT 
    id_produit, nom_produit, prix_produit
FROM
    produit
WHERE
    prix_produit > 5;

-- Requête de consultation avec condition d'ordre croissant par le nom du produit et le prix si le produit est identique limité à partir du 3ème enregistrements

SELECT 
    id_produit, nom_produit, prix_produit
FROM
    produit
ORDER BY nom_produit ASC , prix_produit ASC
LIMIT 2,3;

-- Requête de consultation du ticket avec une jointure sur vendeur afin d'afficher le nom/prénom rattaché au ticket

SELECT 
    *
FROM
    ticket
        INNER JOIN
    vendeur ON ticket.id_vendeur = vendeur.id_vendeur;

-- Requête de consultation du ticket avec une jointure sur vendeur avec modification du nom de la colonne par un alias

SELECT 
    id_ticket AS id,
    date_ticket AS `date`,
    ticket.id_vendeur AS id_vendeur,
    nom_vendeur AS nom,
    prenom_vendeur AS prenom
FROM
    ticket
        INNER JOIN
    vendeur ON ticket.id_vendeur = vendeur.id_vendeur;

-- Afficher toutes les catégories avec (nom)

SELECT 
    nom_categorie
FROM
    categorie;

-- Afficher tous les vendeurs avec (nom,prénom) trié par nom et prénom ordre croissant 

SELECT 
    nom_vendeur AS nom, prenom_vendeur AS prenom
FROM
    vendeur
ORDER BY nom_vendeur ASC , prenom_vendeur ASC;

-- Afficher la liste des tickets avec (date_ticket) du mois de décembre

SELECT 
    *
FROM
    ticket
WHERE
    MONTH(date_ticket) = 12;

-- Afficher la liste des produits dont le prix est supérieur à 2 € et inférieur à 10 €

SELECT 
    nom_produit, description_produit, prix_produit
FROM
    produit
WHERE
    prix_produit BETWEEN '2' AND '10';

-- Afficher la liste des produits avec (nom_produit, prix_produit, nom_categorie)

SELECT 
    nom_produit, prix_produit, nom_categorie
FROM
    produit
        INNER JOIN
    categorie ON produit.id_categorie = categorie.id_categorie
;

-- Afficher la liste des produits avec (nom_produit, description_produit, prix_produit, nom_categorie) de type alimentaire (nom_categorie)

SELECT 
    nom_produit,
    description_produit,
    prix_produit,
    nom_categorie
FROM
    produit
        INNER JOIN
    categorie ON produit.id_categorie = categorie.id_categorie
WHERE
    categorie.nom_categorie = 'alimentaire'
;

-- Afficher la liste des tickets avec (date_ticket, nom_vendeur, prenom_vendeur)

SELECT 
    date_ticket,
    nom_vendeur,
    prenom_vendeur
FROM
    ticket
        INNER JOIN
    vendeur ON ticket.id_vendeur = vendeur.id_vendeur;

-- Afficher la liste des produits vendus sur le ticket (id_ticket = 1)  avec le nom_produit, prix_produit, quantite produit. 

SELECT 
    nom_produit, prix_produit, quantite
FROM
    ajouter
        INNER JOIN
    produit ON ajouter.id_produit = produit.id_produit
        INNER JOIN
    ticket ON ajouter.id_ticket = ticket.id_ticket
WHERE
    ajouter.id_ticket = 1;
    
-- Afficher la liste des produits qui ne sont pas ajouté sur un ticket avec le (nom_produit, description_produit, prix_produit)

INSERT INTO produit(nom_produit, description_produit, prix_produit, id_categorie) VALUE ('rhum','bouteille de 75cl de Dom Papa', 7.5, 2);

SELECT 
    nom_produit, description_produit, prix_produit
FROM
    ajouter
        RIGHT JOIN
    produit ON ajouter.id_produit = produit.id_produit
        LEFT JOIN
    ticket ON ajouter.id_ticket = ticket.id_ticket
WHERE
    ajouter.id_produit IS NULL;

-- Afficher la liste des vendeurs qui ne sont pas sont pas lié à un ticket (nom_vendeur, prenom_vendeur).

INSERT INTO vendeur(nom_vendeur, prenom_vendeur) VALUE ('Morlot','Maxime');

SELECT 
    nom_vendeur, prenom_vendeur
FROM
    vendeur
        LEFT JOIN
    ticket ON vendeur.id_vendeur = ticket.id_vendeur
WHERE
    ticket.id_vendeur IS NULL;

-- NB  : vous allez devoir utiliser les jointures LEFT et RIGHT JOIN  et tester si la foreign key vaut : null
    
-- Afficher le prix total du ticket 1

SELECT 
    SUM(quantite * prix_produit) AS Total_ticket
FROM
    ajouter
        INNER JOIN
    produit ON ajouter.id_produit = produit.id_produit
WHERE
    ajouter.id_ticket = 1;

-- Afficher le prix total de tous les tickets (en utilisant les fonction d'agrégation)

SELECT 
    SUM(quantite * prix_produit) AS Total_tickets
FROM
    ajouter
        INNER JOIN
    produit ON ajouter.id_produit = produit.id_produit;

-- Afficher le chiffre d'affaire du vendeur (id_vendeur = 1)

SELECT 
    SUM(quantite * prix_produit) AS Ticket_vendeur
FROM
    ajouter
        INNER JOIN
    produit ON ajouter.id_produit = produit.id_produit
        INNER JOIN
    ticket ON ajouter.id_ticket = ticket.id_ticket
WHERE
    ticket.id_vendeur = 1;
    
    SELECT id_vendeur from ticket