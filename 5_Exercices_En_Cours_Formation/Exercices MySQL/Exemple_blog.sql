CREATE DATABASE exemple_Blog;
USE exemple_Blog;

-- Création des tables

CREATE TABLE utilisateur(
id_utilisateur INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_utilisateur VARCHAR(50) NOT NULL,
prenom_utilisateur VARCHAR(50) NOT NULL,
email_utilisateur VARCHAR(50) UNIQUE NOT NULL,
password_utilisateur VARCHAR(100) NOT NULL,
active_utilisateur TINYINT(1) DEFAULT(1),
id_roles INT NOT NULL
) ENGINE=INNODB ; 

CREATE TABLE article (
id_article INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
titre_article VARCHAR(50) NOT NULL,
contenu_article TEXT NOT NULL,
date_creation_article DATE NOT NULL,
active_article TINYINT(1) DEFAULT(1),
id_utilisateur INT NOT NULL
) ENGINE=INNODB ;

CREATE TABLE roles (
    id_roles INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom_roles VARCHAR(50) NOT NULL
)  ENGINE=INNODB;

CREATE TABLE commentaire(
id_commentaire INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
texte_commentaire VARCHAR(255) NOT NULL,
date_creation_commenaire DATETIME NOT NULL,
active_commentaire TINYINT(1) DEFAULT(1),
id_article INT NOT NULL,
id_utilisateur INT NOT NULL
) ENGINE=INNODB ;

CREATE TABLE categorie (
    id_categorie INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom_categorie VARCHAR(50) NOT NULL
)  ENGINE=INNODB;

-- Ajout des foreign keys

ALTER TABLE utilisateur
ADD CONSTRAINT fk_posseder_roles
FOREIGN KEY (id_roles)
REFERENCES roles(id_roles);

ALTER TABLE article
ADD CONSTRAINT fk_rediger_utilisateur
FOREIGN KEY (id_utilisateur)
REFERENCES utilisateur(id_utilisateur);

ALTER TABLE commentaire
ADD CONSTRAINT fk_ecrire_utilisateur
FOREIGN KEY (id_utilisateur)
REFERENCES utilisateur(id_utilisateur);

ALTER TABLE commentaire 
ADD CONSTRAINT fk_ajouter_article
FOREIGN KEY (id_article)
REFERENCES article(id_article);

-- Création table d'association 

CREATE TABLE completer (
    id_article INT,
    id_categorie INT,
    PRIMARY KEY (id_categorie , id_article)
)  ENGINE=INNODB;

ALTER TABLE completer
ADD CONSTRAINT fk_completer_article
FOREIGN KEY (id_article)
REFERENCES article(id_article);

ALTER TABLE completer
ADD CONSTRAINT fk_completer_categorie
FOREIGN KEY (id_categorie)
REFERENCES categorie(id_categorie);

-- ajouter une colonne avec contrainte 

ALTER TABLE utilisateur
ADD COLUMN code_postal_utilisateur INT NOT NULL;

ALTER TABLE utilisateur
ADD CONSTRAINT verif_code_postal
CHECK(code_postal_utilisateur LIKE '_____');


