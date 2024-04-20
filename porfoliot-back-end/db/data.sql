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
(1, 'Web');
INSERT INTO `categorie` (`id_cat`, `nom_cat`) VALUES
(2, 'Utils');
INSERT INTO `categorie` (`id_cat`, `nom_cat`) VALUES
(3, 'Programmation');


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
  `git` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `projet`
--

INSERT INTO `projet` (`id_projet`, `nom_projet`, `description`, `date`, `image`,`git`) VALUES
(1, 'Sportify', 'Sportify est réseau social permettant de pronostiquer sur des matchs et aussi publier des posts liés au sport.', '2024-04-20 12:29:06', 'sportify.png','');
INSERT INTO `projet` (`id_projet`, `nom_projet`, `description`, `date`, `image`,`git`) VALUES
(2, 'YourFood', 'YourFood est site web permettant de commander des menus via une interface accessible par tous le monde.', '2024-04-20 12:29:06', 'yourfood.png','');
INSERT INTO `projet` (`id_projet`, `nom_projet`, `description`, `date`, `image`,`git`) VALUES
(3, 'TurboTap', 'TurboTap est une application de click rapide permettant de tester la rapidité des joueurs', '2024-04-20 12:29:06', 'turbo.png','');
INSERT INTO `projet` (`id_projet`, `nom_projet`, `description`, `date`, `image`,`git`) VALUES
(4, 'BourseApp', 'BourseApp est une application boursière qui affiche sous forme de graphe des données liés à la crypto-monnaie.', '2024-04-20 12:29:06', 'bourse.png','');
INSERT INTO `projet` (`id_projet`, `nom_projet`, `description`, `date`, `image`,`git`) VALUES
(5, 'Nas''Info', 'Nas''Info est site web qui affiche les articles que la Nasa publie régulierement.', '2024-04-20 12:29:06', 'nasa.png','');



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
(8, 'Java', 'java.png', 3);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(9, 'JavaScript', 'js.png', 1);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(10, 'HTML', 'html.png', 1);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(11, 'CSS', 'css.png', 1);
INSERT INTO `technology` (`id_techno`, `nom_techno`, `image_techno`, `categorieIdCat`) VALUES
(12, 'SCSS', 'scss.png', 1);

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
