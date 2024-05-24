-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql_db
-- Généré le : ven. 24 mai 2024 à 11:33
-- Version du serveur : 8.4.0
-- Version de PHP : 8.2.19

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
(1, 'Développement'),
(2, 'Outils'),
(3, 'Programmation'),
(4, 'Base de données');

-- --------------------------------------------------------

--
-- Structure de la table `competence`
--

CREATE TABLE `competence` (
  `id_competence` int NOT NULL,
  `nom_competence` varchar(255) NOT NULL,
  `id_semestre` int DEFAULT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `competence`
--

INSERT INTO `competence` (`id_competence`, `nom_competence`, `id_semestre`, `description`) VALUES
(1, 'Competence 1', 1, 'Développer, concevoir, coder, tester et intégrer — une solution informatique pour un client');
INSERT INTO `competence` (`id_competence`, `nom_competence`, `id_semestre`, `description`) VALUES
(2, 'Competence 2', 1, 'Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d’exécution, précision, consommation de ressources..');

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
  `descriptionplus` varchar(255) NOT NULL,
  `projet_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `projet`
--

INSERT INTO `projet` (`id_projet`, `nom_projet`, `description`, `date`, `image`, `git`, `descriptionplus`, `projet_id`) VALUES
(1, 'Sportify', 'Sportify est une plateforme sociale qui offre aux utilisateurs la possibilité de pronostiquer sur des matchs sportifs tout en leur permettant de publier et de partager du contenu.', '2024-04-20 12:29:06', 'sportify.png', 'https://github.com/Rafiklatrikdu69/Sportify_deploy', 'Ce projet Universitaire à été réaliser en groupe de 4.Dans ce projet je me suis occuper de mettre en place l''architecture de l''application ainsi que du déploiment avec AWS.', 2),
(2, 'YourFood', 'YourFood est une plateforme conviviale permettant à chacun de commander des repas via une interface simple et accessible à tous.', '2024-04-20 12:29:06', 'yourfood.png', 'https://forge.univ-lyon1.fr/p2200950/yourfood', 'Ce projet Universitaire à été réaliser en binome.Ce projet consistait à comprendre l''utilisation des langages natifs tels que CSS et HTML.', NULL),
(3, 'TurboTap', 'TurboTap propose une application de clic rapide pour évaluer la vitesse des joueurs, offrant ainsi un moyen ludique d''améliorer les réflexes et la coordination.', '2024-04-20 12:29:06', 'turbo.png', 'https://github.com/Rafiklatrikdu69/TurboTap', 'Dans ce projet professionnel j''ai pu découvrir les frameworks c# et Angular et j''ai donc commencer à apprécier Angular.', NULL),
(4, 'BourseApp', 'BourseApp est une application boursière qui affiche sous forme de graphe des données liés à la crypto-monnaie.', '2024-04-20 12:29:06', 'bourse.png', 'https://github.com/Rafiklatrikdu69/app-nest', 'Le But de ce projet été de découvrir le framework NestJS avec Angular.', NULL),
(5, 'Nas''Info', 'Nas''Info est un site web qui affiche les articles que la Nasa publie régulierement.', '2024-04-20 12:29:06', 'nasa.png', 'https://github.com/Rafiklatrikdu69/NasaInfo', 'Ce projet m''a permis de m''ameliorer sur l''utilisation des API avec les services Angular.', NULL),
(6, 'Portfolio', 'Mon portfolio détaille les raisons ayant motivé mon choix de carrière dans le domaine de l''informatique, illustrant mes passions et mes objectifs professionnels.', '2024-04-20 12:29:06', 'porfoliot.png', 'https://github.com/Rafiklatrikdu69/portfolio', 'Ce projet personnel m''a permis d''en apprendre un peu plus sur les composants Angular.', NULL),
(7, 'ShopLink', 'ShopLink est un site web permettant de commander des produits frais que l''on retrouve dans les plus grands magazins.', '2024-04-20 12:29:06', 'shoplink.png', 'https://github.com/Rafiklatrikdu69/ShopLink', 'Ce projet personnel à été pour une découverte du framework Symfony.', NULL),
(8, 'GraphMap', 'GraphMap est une application permettant aux dispensaires d''hopital de trouver le meilleur trajet pour accompagner les patients en prenant en compte la dangerosité du trajet.', '2024-04-20 12:29:06', 'graphmap.png', 'https://github.com/Rafiklatrikdu69/GraphMap', 'Ce Projet Universitaire à été réaliser en binome, dans ce projet je suis occuper principalement de l''IHM avec Swing mais aussi des algorithmes de parcours de graphe.', NULL);

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
(1, 1),
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(2, 7),
(3, 4),
(3, 6),
(4, 1),
(4, 6),
(5, 1),
(6, 7),
(9, 1),
(10, 1),
(10, 2),
(11, 1),
(11, 2),
(13, 6),
(16, 3),
(23, 8),
(24, 3),
(25, 1),
(25, 2),
(25, 4),
(25, 5),
(25, 6),
(25, 7),
(29, 5),
(29, 6),
(29, 7),
(30, 3),
(31, 1),
(31, 3),
(31, 4),
(31, 5),
(31, 6),
(31, 7),
(31, 8),
(32, 2);

-- --------------------------------------------------------

--
-- Structure de la table `semestre`
--

CREATE TABLE `semestre` (
  `id_semestre` int NOT NULL,
  `nom_semestre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `semestre`
--

INSERT INTO `semestre` (`id_semestre`, `nom_semestre`) VALUES
(1, 'Semestre 1');

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
(1, 'PHP', 'php.png', 1),
(2, 'Angular', 'angular.png', 1),
(3, 'NestJS', 'nest.png', 1),
(4, 'Docker', 'docker.png', 2),
(5, 'AWS', 'aws.png', 2),
(6, 'Symfony', 'symfony.png', 1),
(7, 'Laravel', 'laravel.png', 1),
(9, 'JavaScript', 'js.png', 1),
(10, 'HTML', 'html.png', 1),
(11, 'CSS', 'css.png', 1),
(12, 'SCSS', 'scss.png', 1),
(13, 'GCP', 'google.png', 2),
(14, 'C', 'c.png', 3),
(15, 'C++', 'c++.png', 3),
(16, 'C#', 'csharp.png', 1),
(17, 'Linux', 'linux.png', 2),
(18, 'VueJS', 'vue.png', 1),
(19, 'Kotlin', 'kotlin.png', 3),
(20, 'SQL', 'sql.png', 4),
(21, 'SQLite', 'sqlite.png', 4),
(22, 'MongoDB', 'mongo.png', 4),
(23, 'Java', 'java.png', 3),
(24, 'Visual Studio', 'visualStudio.png', 2),
(25, 'Vs Code', 'vscode.png', 2),
(26, 'JetBrains', 'jetBrains.png', 2),
(27, 'Arduino', 'Arduino.png', 3),
(28, 'Python', 'Python.png', 3),
(29, 'Postman', 'Postman.png', 2),
(30, 'Swagger', 'swagger.png', 2),
(31, 'GitHub', 'github.png', 2),
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
-- Index pour la table `competence`
--
ALTER TABLE `competence`
  ADD PRIMARY KEY (`id_competence`),
  ADD KEY `FK_576cafd83616d2c5d31b0ac7f86` (`id_semestre`);

--
-- Index pour la table `projet`
--
ALTER TABLE `projet`
  ADD PRIMARY KEY (`id_projet`),
  ADD KEY `FK_58cf3bcc60a14f995035ee68da6` (`projet_id`);

--
-- Index pour la table `projet_techno`
--
ALTER TABLE `projet_techno`
  ADD PRIMARY KEY (`techno_id`,`projet_id`),
  ADD KEY `IDX_575e5090f3f677b05cc132bcef` (`techno_id`),
  ADD KEY `IDX_16d556aa57fe111cd3243268b8` (`projet_id`);

--
-- Index pour la table `semestre`
--
ALTER TABLE `semestre`
  ADD PRIMARY KEY (`id_semestre`);

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
  MODIFY `id_cat` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `competence`
--
ALTER TABLE `competence`
  MODIFY `id_competence` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `projet`
--
ALTER TABLE `projet`
  MODIFY `id_projet` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `semestre`
--
ALTER TABLE `semestre`
  MODIFY `id_semestre` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `technology`
--
ALTER TABLE `technology`
  MODIFY `id_techno` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `competence`
--
ALTER TABLE `competence`
  ADD CONSTRAINT `FK_576cafd83616d2c5d31b0ac7f86` FOREIGN KEY (`id_semestre`) REFERENCES `semestre` (`id_semestre`);

--
-- Contraintes pour la table `projet`
--
ALTER TABLE `projet`
  ADD CONSTRAINT `FK_58cf3bcc60a14f995035ee68da6` FOREIGN KEY (`projet_id`) REFERENCES `competence` (`id_competence`);

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
