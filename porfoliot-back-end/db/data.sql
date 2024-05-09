-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql_db
-- Généré le : sam. 20 avr. 2024 à 13:51
-- Version du serveur : 8.3.0
-- Version de PHP : 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `porfoliot`
--
CREATE DATABASE IF NOT EXISTS `porfoliot` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `porfoliot`;

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `id_cat` int NOT NULL,
  `nom_cat` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`id_cat`, `nom_cat`) VALUES
(1, 'Développement');
INSERT INTO `categorie` (`id_cat`, `nom_cat`) VALUES
(2, 'Outils');
INSERT INTO `categorie` (`id_cat`, `nom_cat`) VALUES
(3, 'Programmation');
INSERT INTO `categorie` (`id_cat`, `nom_cat`) VALUES
(4, 'Base de données');


-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

CREATE TABLE `projet` (
  `id_projet` int NOT NULL,
  `nom_projet` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `image` varchar(255) NOT NULL,
  `git` varchar(255) NOT NULL,
  `descriptionplus` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `projet`
--

INSERT INTO `projet` (`id_projet`, `nom_projet`, `description` ,`date`, `image`,`git`,`descriptionplus`) VALUES
(1, 'Sportify', 'Sportify est une plateforme sociale qui offre aux utilisateurs la possibilité de pronostiquer sur des matchs sportifs tout en leur permettant de publier et de partager du contenu.', '2024-04-20 12:29:06', 'sportify.png','https://github.com/Rafiklatrikdu69/Sportify_deploy','Ce projet Universitaire à été réaliser en groupe de 4.Dans ce projet je me suis occuper de mettre en place l''architecture de l''application ainsi que du déploiment avec AWS.');
INSERT INTO `projet` (`id_projet`, `nom_projet`, `description` ,`date`, `image`,`git`,`descriptionplus`) VALUES
(2, 'YourFood', 'YourFood est une plateforme conviviale permettant à chacun de commander des repas via une interface simple et accessible à tous.', '2024-04-20 12:29:06', 'yourfood.png','https://forge.univ-lyon1.fr/p2200950/yourfood','Ce projet Universitaire à été réaliser en binome.Ce projet consistait à comprendre l''utilisation des langages natifs tels que CSS et HTML.');
INSERT INTO `projet` (`id_projet`, `nom_projet`, `description` ,`date`, `image`,`git`,`descriptionplus`) VALUES
(3, 'TurboTap', 'TurboTap propose une application de clic rapide pour évaluer la vitesse des joueurs, offrant ainsi un moyen ludique d''améliorer les réflexes et la coordination.', '2024-04-20 12:29:06', 'turbo.png','https://github.com/Rafiklatrikdu69/TurboTap','Dans ce projet professionnel j''ai pu découvrir les frameworks c# et Angular et j''ai donc commencer à apprécier Angular.');
INSERT INTO `projet` (`id_projet`, `nom_projet`, `description` ,`date`, `image`,`git`,`descriptionplus`) VALUES
(4, 'BourseApp', 'BourseApp est une application boursière qui affiche sous forme de graphe des données liés à la crypto-monnaie.', '2024-04-20 12:29:06', 'bourse.png','https://github.com/Rafiklatrikdu69/app-nest','Le But de ce projet été de découvrir le framework NestJS avec Angular.');
INSERT INTO `projet` (`id_projet`, `nom_projet`, `description` ,`date`, `image`,`git`,`descriptionplus`) VALUES
(5, 'Nas''Info', 'Nas''Info est un site web qui affiche les articles que la Nasa publie régulierement.', '2024-04-20 12:29:06', 'nasa.png','https://github.com/Rafiklatrikdu69/NasaInfo','Ce projet m''a permis de m''ameliorer sur l''utilisation des API avec les services Angular.');
INSERT INTO `projet` (`id_projet`, `nom_projet`, `description` ,`date`, `image`,`git`,`descriptionplus`) VALUES
(6, 'Porfoliot', 'Mon portfolio détaille les raisons ayant motivé mon choix de carrière dans le domaine de l''informatique, illustrant mes passions et mes objectifs professionnels.', '2024-04-20 12:29:06', 'porfoliot.png','https://github.com/Rafiklatrikdu69/portfolio','Ce projet personnel m''a permis d''en apprendre un peu plus sur les composants Angular.');
INSERT INTO `projet` (`id_projet`, `nom_projet`, `description` ,`date`, `image`,`git`,`descriptionplus`) VALUES
(7, 'ShopLink', 'ShopLink est un site web permettant de commander des produits frais que l''on retrouve dans les plus grands magazins.', '2024-04-20 12:29:06', 'shoplink.png','https://github.com/Rafiklatrikdu69/ShopLink','Ce projet personnel à été pour une découverte du framework Symfony.');
INSERT INTO `projet` (`id_projet`, `nom_projet`, `description` ,`date`, `image`,`git`,`descriptionplus`) VALUES
(8, 'GraphMap', 'GraphMap est une application permettant aux dispensaires d''hopital de trouver le meilleur trajet pour accompagner les patients en prenant en compte la dangerosité du trajet.', '2024-04-20 12:29:06', 'graphmap.png','https://github.com/Rafiklatrikdu69/GraphMap','Ce Projet Universitaire à été réaliser en binome, dans ce projet je suis occuper principalement de l''IHM avec Swing mais aussi des algorithmes de parcours de graphe.');



-- --------------------------------------------------------

--
-- Structure de la table `projet_techno`
--

CREATE TABLE `projet_techno` (
  `techno_id` int NOT NULL,
  `projet_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `projet_techno`
--
-- projet 1
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(1, 1);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(4, 1);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(5, 1);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(10, 1);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(11, 1);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(9, 1);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(25, 1);
-- projet 2

INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(11, 2);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(10, 2);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(25, 2);
-- projet 3

INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(2, 3);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(16, 3);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(30, 3);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(24, 3);

-- projet 4
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(2, 4);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(3, 4);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(25, 4);
-- projet 5 
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(2, 5);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(29, 5);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(25, 5);

-- projet 6

INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(2, 6);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(3, 6);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(4, 6);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(13, 6);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(25, 6);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(29, 6);

-- projet 7
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(2, 7);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(6, 7);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(29, 7);
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(25, 7);

-- projet 8 
INSERT INTO `projet_techno` (`techno_id`, `projet_id`) VALUES
(23, 8);

-- --------------------------------------------------------

--
-- Structure de la table `technology`
--

CREATE TABLE `technology` (
  `id_techno` int NOT NULL,
  `nom_techno` varchar(255) NOT NULL,
  `image_techno` varchar(255) NOT NULL,
  `categorieIdCat` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `technology`
--

INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(1, 'PHP', 'php.png', 1);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(2, 'Angular', 'angular.png', 1);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(3, 'NestJS', 'nest.png', 1);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(4, 'Docker', 'docker.png', 2);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(5, 'AWS', 'aws.png', 2);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(6, 'Symfony', 'symfony.png', 1);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(7, 'Laravel', 'laravel.png', 1);

INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(9, 'JavaScript', 'js.png', 1);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(10, 'HTML', 'html.png', 1);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(11, 'CSS', 'css.png', 1);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(12, 'SCSS', 'scss.png', 1);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(13, 'GCP', 'google.png', 2);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(14, 'C', 'c.png', 3);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(15, 'C++', 'c++.png', 3);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(16, 'C#', 'csharp.png', 1);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(17, 'Linux', 'linux.png', 2);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(18, 'VueJS', 'vue.png', 1);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(19, 'Kotlin', 'kotlin.png', 3);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(20, 'SQL', 'sql.png', 4);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(21, 'SQLite', 'sqlite.png', 4);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(22, 'MongoDB', 'mongo.png', 4);

INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(23, 'Java', 'java.png', 3);

INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(24, 'Visual Studio', 'visualStudio.png', 2);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(25, 'Vs Code', 'vscode.png', 2);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(26, 'JetBrains', 'jetBrains.png', 2);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(27, 'Arduino', 'Arduino.png', 3);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(28, 'Python', 'Python.png', 3);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(29, 'Postman', 'Postman.png', 2);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(30, 'Swagger', 'swagger.png', 2);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(31, 'GitHub', 'github.png', 2);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(32, 'GitLab', 'gitlab.png', 2);
--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id_cat`);

--
-- Index pour la table `projet`
--
ALTER TABLE `projet`
  ADD PRIMARY KEY (`id_projet`);

--
-- Index pour la table `projet_techno`
--
ALTER TABLE `projet_techno`
  ADD PRIMARY KEY (`techno_id`,`projet_id`),
  ADD KEY `IDX_575e5090f3f677b05cc132bcef` (`techno_id`),
  ADD KEY `IDX_16d556aa57fe111cd3243268b8` (`projet_id`);

--
-- Index pour la table `technology`
--
ALTER TABLE `technology`
  ADD PRIMARY KEY (`id_techno`),
  ADD KEY `FK_a9bbc49184461fda52645ed5668` (`categorieIdCat`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id_cat` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `projet`
--
ALTER TABLE `projet`
  MODIFY `id_projet` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `technology`
--
ALTER TABLE `technology`
  MODIFY `id_techno` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `projet_techno`
--
ALTER TABLE `projet_techno`
  ADD CONSTRAINT `FK_16d556aa57fe111cd3243268b84` FOREIGN KEY (`projet_id`) REFERENCES `projet` (`id_projet`),
  ADD CONSTRAINT `FK_575e5090f3f677b05cc132bcef5` FOREIGN KEY (`techno_id`) REFERENCES `technology` (`id_techno`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `technology`
--
ALTER TABLE `technology`
  ADD CONSTRAINT `FK_a9bbc49184461fda52645ed5668` FOREIGN KEY (`categorieIdCat`) REFERENCES `categorie` (`id_cat`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
