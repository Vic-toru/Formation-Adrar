CREATE DATABASE eval_judo;
USE eval_judo;


-- Création des tables 

CREATE TABLE judoka (
    id_judoka INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom_judoka VARCHAR(50) NOT NULL,
    prenom_judoka VARCHAR(50) NOT NULL,
    age_judoka INT NOT NULL,
    sexe_judoka VARCHAR(50) NOT NULL,
    id_niveau INT NOT NULL
)  ENGINE=INNODB;

CREATE TABLE niveau (
    id_niveau INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    couleur_ceinture_niveau VARCHAR(50) NOT NULL
)  ENGINE=INNODB;

CREATE TABLE competition (
    id_competition INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom_competition VARCHAR(50) NOT NULL,
    date_debut_competition DATETIME NOT NULL,
    date_fin_competition DATETIME NOT NULL
)  ENGINE=INNODB;

-- Ajout foreign key

ALTER TABLE judoka
ADD CONSTRAINT fk_posseder_niveau
FOREIGN KEY (id_niveau)
REFERENCES niveau(id_niveau);

-- Création table d'association

CREATE TABLE participer (
    id_judoka INT NOT NULL,
    id_competition INT NOT NULL,
    PRIMARY KEY (id_judoka , id_competition)
)  ENGINE=INNODB;

ALTER TABLE participer 
ADD CONSTRAINT fk_participer_judoka
FOREIGN KEY (id_judoka)
REFERENCES judoka(id_judoka);

ALTER TABLE participer 
ADD CONSTRAINT fk_participer_competition
FOREIGN KEY (id_competition)
REFERENCES competition(id_competition);

-- Requête de mise à jour

-- Données table niveau

INSERT INTO niveau(couleur_ceinture_niveau) 
VALUES ('blanche'),('jaune'),('orange'),('verte'),('bleu'),('marron'),('noir');

-- Données table judoka

INSERT INTO judoka(nom_judoka, prenom_judoka, age_judoka, sexe_judoka, id_niveau) 
VALUES ('Lachance','Dominique','16','F','2'),
('Porter','Gilbert','18','H','3'),
('Lemaître','Anne','15','F','4'),
('Robert','Juliette','12','F','1'),
('Montminy','Pierre','17','H','5'),
('Charrette','Pascal','21','H','6'),
('Guay','Émilie','19','F','6'),
('Maheu','Louise','14','F','4'),
('Poulin','Raymond','26','H','7'),
('Dupret','Alain','20','H','6');

-- Données table compétition

INSERT INTO competition(nom_competition, date_debut_competition, date_fin_competition) 
VALUES ('judo31','2021/02/06 08:00:00','2021/02/07 16:00:00'),
('judo11','2021/02/27 08:00:00','2021/02/28 16:00:00'),
('judo81','2021/03/20 08:00:00','2021/03/21 16:00:00'),
('judo82','2021/04/17 08:00:00','2021/04/18 16:00:00');

-- Données table participer

INSERT INTO participer (id_competition, id_judoka) 
VALUES ('1','1'),
('1','3'),
('1','4'),
('2','2'),
('2','5'),
('2','6'),
('2','9'),
('3','10'),
('3','9'),
('4','1'),
('4','3'),
('4','8'),
('4','4');

-- Mise à jour du niveau des 5 premiers judoka de la table judoka

UPDATE judoka 
SET 
    id_niveau = id_niveau + 1
WHERE
    id_judoka BETWEEN 1 AND 5;

-- Suppression des enregistrements 

INSERT INTO judoka(nom_judoka, prenom_judoka, age_judoka, sexe_judoka, id_niveau) 
VALUES ('Troipommes','Pépin','15','H','7'),
('Neutron','Jimmy','12','H','2');

DELETE FROM judoka WHERE id_judoka BETWEEN 11 AND 12 ;


