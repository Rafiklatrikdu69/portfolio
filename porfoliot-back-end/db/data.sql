-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql_db
-- Généré le : dim. 09 juin 2024 à 18:10
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
-- Structure de la table `apprentissage_critique`
--

CREATE TABLE `apprentissage_critique` (
  `id_apprentissage` int NOT NULL,
  `nom_apprentissage` varchar(255) NOT NULL,
  `id_niveau` int DEFAULT NULL,
  `description_apprentissage` varchar(255) NOT NULL,
  `poids_apprentissage` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `apprentissage_critique`
--

INSERT INTO `apprentissage_critique` (`id_apprentissage`, `nom_apprentissage`, `id_niveau`, `description_apprentissage`, `poids_apprentissage`) VALUES
(1, 'Vérifier la validité des taches', 2, 'Respecter les besoins du client   via le cahier des charges', 8),
(2, 'Algorithmie', 1, 'Utiliser les des algorithmes adaptés avec les bonnes structures de données.', 8),
(3, 'Tester son code', 1, 'Veiller à la qualité du code avec des tests unitaires,de non régression,etc...', 8),
(4, 'Utiliser les bonnes resources', 1, 'Choisir les ressources adaptées pour le ou les projets', 6),
(5, 'Développer efficacement', 1, 'Developper des interfaces accessible par la majorité des utilisateurs', 8),
(6, 'Analyse Algorithmique', 3, 'Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données...)', 4),
(7, 'Comprehension', 3, 'Comparer des algorithmes pour des problèmes classiques (tris simples, recherche...)', 4),
(8, 'Traduction algorithmique', 3, 'Formaliser et mettre en œuvre des outils mathématiques pour l’informatique.', 4),
(9, 'Comprendre l\'architecture ', 4, 'Identifier les différents composants (matériels et logiciels) d’un système numérique.', 6),
(10, 'Gestion d\'un OS', 4, 'Utiliser les fonctionnalités de base d’un système multitâches / multiutilisateurs sous windows.', 7),
(11, 'Configuration Systeme', 4, 'Installer et configurer un système d’exploitation et des outils de développement.', 7),
(12, 'Développer des applications avec API', 14, 'Concevoir et développer des applications communicantes avec des API.', 8),
(13, 'Déploiement', 14, 'Utiliser des serveurs et des services réseaux virtualisés(Docker,kuburnetes)', 9),
(14, 'Compréhension du besoin', 7, 'Appréhender les besoins du client et de l\'utilisateur via un cahier des charges prédefini.', 7),
(15, 'Requêter une base de données', 8, 'Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers une application).', 7),
(16, 'Réalisation du modelé de données(MCD,MLD)', 8, 'Concevoir une base de données relationnelle à partir d’un cahier des charges.', 5),
(17, 'Rechercher les principer RSE d\'une entreprise', 9, 'Appréhender l’écosystème numérique en analysant ces principe de développement durable,RSE.', 6),
(18, 'Recherche professionelle', 9, 'Découvrir les aptitudes requises selon les différents secteurs informatiques.', 5),
(19, 'Développer une interface', 10, 'Mettre en place une interface ergnomique en Java.', 7),
(20, 'Optimiser son code', 10, 'Vérifier la qualité du code.', 6),
(21, 'Choix Structure adapter', 11, 'Utiliser les structures dynamique (liste chainée,doublement chainée,liste de liste).', 7),
(22, 'Communication avec une base données', 12, 'Savoir interagir avec une base de données.', 7),
(23, 'Décrire les objectifs atteints', 13, 'Rendre compte de son activité professionnelle.', 8),
(24, 'Travail en équipe', 13, 'Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique.', 7),
(25, 'Développement continue', 14, 'Choisir et implémenter les architectures adaptées comme des design pattern (Observable,MVC).', 7),
(26, 'CI/CD ,integration continue', 14, 'Utiliser des outils pousser , conteneurisation,etc...', 7),
(27, 'Structure de données avancer', 15, 'J\'ai appris à utiliser des structures de données adapter au besoins pour mon application.', 5),
(28, 'Sécurité', 1, 'Développer une  application sécuriser et robuste.', 7),
(29, 'Ecriture d\'algorithme.', 3, 'Ecrire des algorithmes de tris.', 3),
(30, 'Calcule de compléxité', 3, 'Calculer la complexite d\'un algorithme est déterminer si il est performant ou non.', 4),
(31, 'Capture de trames https', 4, 'Capturer des trames http pour les analyser.', 6),
(32, 'Rédaction du travail ', 4, 'Rédaction d\'une notice explicative du projet', 7),
(33, 'Rédiger un rapport ', 8, 'Rédaction d\'un rapport avec le MCD,MLD , les problémes rencontrer.', 5),
(34, 'SQL', 8, 'Comprendre le langage SQL', 8),
(35, 'Analyse de la base de données', 8, 'Savoir analyser une base données existante et la remplir avec un jeu de données.', 5),
(36, 'HTML,CSS', 7, 'Savoir utiliser les langages de base pour un site web.', 9),
(37, 'Validateur HTML/CSS', 7, 'Utiliser des outils de correction du code avec des validateurs', 8),
(38, 'GIT', 7, 'Utilisation d\'outil de versioning pour travailler en équipe.', 7),
(39, 'Design', 7, 'Réaliser des maquettes pour un site web.', 4),
(40, 'Recherche', 9, 'Rechercher des informations liées à une entreprise du numérique.', 5),
(41, 'Communication', 9, 'Savoir communiquer avec un groupe.', 7),
(42, 'Rédaction', 9, 'Rédaction d\'un rapport detailler avec les sources,images,etc...', 3),
(43, 'Visualiser', 12, 'Visualiser des données avec Power BI', 4),
(44, 'Gestion des données', 12, 'Organiser la restitution de données à travers la programmation et la visualisation.', 6),
(45, 'Documentation', 10, 'Ecrire un code lisible et savoir faire une documentation', 7),
(46, 'Tests', 10, 'Réaliser des phases de tests.', 7),
(47, 'Programmer', 10, 'Réaliser des programmes pour résoudre un problème donné.', 6),
(52, 'Comprendre les structure de données', 11, 'Analyser et comprendre les enjeux et l’impact d’un algorithme existant.', 4),
(53, 'Python', 11, 'Utiliser les classes en python', 3),
(54, 'Implémentation', 11, 'Implémenter des algorithmes en python.', 4),
(55, 'Optimiser', 11, 'Optimiser les algorithmes existants.', 4),
(56, 'Graphique', 12, 'Savoir personnaliser des graphiques sur Power BI.', 2),
(57, 'Déploiement', 6, 'Déployer un site web sur un serveur apache et NginX', 7),
(58, 'Trames', 6, 'Capturer des trames avec Wireshark', 8),
(59, 'Rédaction', 6, 'Rédiger un rapport technique.', 6),
(60, 'Configuration', 6, 'Configurer plusieurs routeurs avec plusieurs sites.', 8),
(61, 'VM', 6, 'Travailler avec des machines virtuelles.', 10),
(63, 'OBS,WBS,PBS', 2, 'Utiliser des méthodes de découpages sur un projet.', 7),
(64, 'AGILE', 2, 'Travailler en modes agiles.', 6),
(66, 'Cahier des charges', 2, 'Rédiger un cahier des charges avec les différentes méthode adaptées.', 9),
(67, 'Importer', 12, 'Importer des données existantes sur Power BI.', 10),
(68, 'Réaliser une affiche', 13, 'Réaliser une affiche sur un sujet informatique avec la lecture en Z et d\'autres principes.', 9),
(69, 'Arbre binaire', NULL, 'Travaille avec des arbres binaires.', 6),
(70, 'PHP', NULL, 'Utilisation de langages orientés objets.', 9),
(71, 'PHP', 14, 'Utilisation de langages orientés objets.', 9),
(72, 'Conception', 16, 'Conceptualiser un modèle de données avec salesforces.', 5),
(73, 'Composants', 16, 'Développer des composant LWC avec Salesforce.', 8),
(74, 'Mailer', 16, 'Envoyer des emails dans Salesforce via des emails templates.', 6),
(75, 'Trigger/Test', 16, 'Développer des triggers permettant la vérification des règles d\'intégrités (vérification de doublons , erreur, etc...)', 9);

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
  `description` varchar(255) NOT NULL,
  `niveauCompetenceIdNiveau` int DEFAULT NULL,
  `projetIdProjet` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `competence`
--

INSERT INTO `competence` (`id_competence`, `nom_competence`, `id_semestre`, `description`, `niveauCompetenceIdNiveau`, `projetIdProjet`) VALUES
(1, 'Competence 1', 1, 'Développer, concevoir, coder, tester et intégrer — une solution informatique pour un client', 1, 9),
(2, 'Competence 5', 2, 'Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d’exécution, précision, consommation de ressources..', 2, NULL),
(3, 'Competence 2', 1, 'Proposer des applications informatiques\noptimisées en fonction de critères spécifiques :\ntemps d’exécution, précision, consommation de\nressources...', 3, 12),
(4, 'Competence 3', 1, 'Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d’une organisation.', 4, NULL),
(5, 'Competence 3', 2, 'Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des\r\ninfrastructures, des services et des réseaux et\r\noptimiser le système informatique d’une\r\norganisation.', 6, NULL),
(6, 'Competence 5', 1, 'Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client.', 7, 2),
(7, 'Competence 4', 1, 'Concevoir, gérer, administrer et exploiter les données de l’entreprise et mettre à disposition toutes les informations pour un bon pilotage de l’entreprise.', 8, 10),
(8, 'Competence 6', 1, '', 9, NULL),
(9, 'Competence 1', 3, 'Développer — c’est-à-dire concevoir, coder, tester et intégrer — une solution informatique pour un client.', 14, 1),
(10, 'Competence 1', 2, 'Développer — c’est-à-dire concevoir, coder, tester et intégrer — une solution informatique pour un client.', 10, 8),
(11, 'Competence 2', 2, 'Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d’exécution, précision, consommation de ressources.', 11, 8),
(12, 'Competence 4', 2, 'Concevoir, gérer, administrer et exploiter les données de l’entreprise et mettre à disposition toutes les informations pour un bon pilotage de l’entreprise.', 12, 11),
(13, 'Competence 6', 2, 'Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.', 13, NULL),
(15, 'Competence 1', 4, 'Développement d\'une application', 14, 1),
(16, 'Stage', 4, '', 16, 14);

-- --------------------------------------------------------

--
-- Structure de la table `experience`
--

CREATE TABLE `experience` (
  `id_experience` int NOT NULL,
  `nom_experience` varchar(255) NOT NULL,
  `desc_experience` varchar(500) NOT NULL,
  `date_experience` date DEFAULT NULL,
  `scolaire` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `experience`
--

INSERT INTO `experience` (`id_experience`, `nom_experience`, `desc_experience`, `date_experience`, `scolaire`) VALUES
(1, 'Intérim Chez ID Logistics', 'Situer à villette d\'Anthon je travaille pendant les petites et grandes vacances en tant que manutentionnaire(déchargement de conteneur, roulage, cerclage, filmage de palette).', '2021-06-27', 0),
(2, 'Stage chez CGI ', 'J\'ai effectuer un stage de 2 mois chez CGI pour apprendre l\'environnement Salesforce et découvrir le monde du travail.', '2023-04-15', 0),
(3, 'Stage de 3 éme', 'Ce Stage à été pour moi une révélation c\'est à ce moment la que j\'ai commencer a m\'intéresser à l\'informatique.', '2020-05-01', 0),
(5, 'BAC Technologique au lycée la pléiade', 'Obtention du BAC Technologique avec mention', '2020-06-30', 1),
(6, 'BUT Informatique', 'Actuellement en 2éme année de BUT.', '2025-07-01', 1);

-- --------------------------------------------------------

--
-- Structure de la table `niveau`
--

CREATE TABLE `niveau` (
  `id_niveau` int NOT NULL,
  `nom_niveau` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `niveau`
--

INSERT INTO `niveau` (`id_niveau`, `nom_niveau`) VALUES
(1, 'Niveau 1'),
(2, 'Niveau 2'),
(3, 'Niveau 1'),
(4, 'Niveau 1'),
(5, 'Niveau 2'),
(6, 'Niveau 2'),
(7, 'Niveau 1'),
(8, 'Niveau 1'),
(9, 'Niveau 1'),
(10, 'Niveau 2'),
(11, 'Niveau 2'),
(12, 'Niveau 2'),
(13, 'Niveau 2'),
(14, 'Niveau 3'),
(15, 'Niveau 2'),
(16, 'Niveau 2');

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
  `projet_id` int DEFAULT NULL,
  `universitaire` tinyint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `projet`
--

INSERT INTO `projet` (`id_projet`, `nom_projet`, `description`, `date`, `image`, `git`, `descriptionplus`, `projet_id`, `universitaire`) VALUES
(1, 'Sportify', 'Sportify est une plateforme sociale qui offre aux utilisateurs la possibilité de pronostiquer sur des matchs sportifs tout en leur permettant de publier et de partager du contenu.', '2024-04-20 12:29:06', 'sportify.png', 'https://github.com/Rafiklatrikdu69/Sportify_deploy', 'Ce projet Universitaire à été réaliser en groupe de 4.Dans ce projet je me suis occuper de mettre en place l\'architecture de l\'application ainsi que du déploiment avec AWS.', 2, 1),
(2, 'YourFood', 'YourFood est une plateforme conviviale permettant à chacun de commander des repas via une interface simple et accessible à tous.', '2024-04-20 12:29:06', 'yourfood.png', 'https://forge.univ-lyon1.fr/p2200950/yourfood', 'Ce projet Universitaire à été réaliser en binome.Ce projet consistait à comprendre l\'utilisation des langages natifs tels que CSS et HTML.', NULL, 1),
(3, 'TurboTap', 'TurboTap propose une application de clic rapide pour évaluer la vitesse des joueurs, offrant ainsi un moyen ludique d\'améliorer les réflexes et la coordination.', '2024-04-20 12:29:06', 'turbo.png', 'https://github.com/Rafiklatrikdu69/TurboTap', 'Dans ce projet professionnel j\'ai pu découvrir les frameworks c# et Angular et j\'ai donc commencer à apprécier Angular.', NULL, 0),
(4, 'BourseApp', 'BourseApp est une application boursière qui affiche sous forme de graphe des données liés à la crypto-monnaie.', '2024-04-20 12:29:06', 'bourse.png', 'https://github.com/Rafiklatrikdu69/app-nest', 'Le But de ce projet été de découvrir le framework NestJS avec Angular.', NULL, 0),
(5, 'Nas\'Info', 'Nas\'Info est un site web qui affiche les articles que la Nasa publie régulierement.', '2024-04-20 12:29:06', 'nasa.png', 'https://github.com/Rafiklatrikdu69/NasaInfo', 'Ce projet m\'a permis de m\'ameliorer sur l\'utilisation des API avec les services Angular.', NULL, 0),
(6, 'Portfolio', 'Mon portfolio détaille les raisons ayant motivé mon choix de carrière dans le domaine de l\'informatique, illustrant mes passions et mes objectifs professionnels.', '2024-04-20 12:29:06', 'porfoliot.png', 'https://github.com/Rafiklatrikdu69/portfolio', 'Ce projet personnel m\'a permis d\'en apprendre un peu plus sur les composants Angular.', NULL, 0),
(7, 'ShopLink', 'ShopLink est un site web permettant de commander des produits frais que l\'on retrouve dans les plus grands magazins.', '2024-04-20 12:29:06', 'shoplink.png', 'https://github.com/Rafiklatrikdu69/ShopLink', 'Ce projet personnel à été pour une découverte du framework Symfony.', NULL, 0),
(8, 'GraphMap', 'GraphMap est une application permettant aux dispensaires d\'hopital de trouver le meilleur trajet pour accompagner les patients en prenant en compte la dangerosité du trajet.', '2024-04-20 12:29:06', 'graphmap.png', 'https://github.com/Rafiklatrikdu69/GraphMap', 'Ce Projet Universitaire à été réaliser en binome, dans ce projet je suis occuper principalement de l\'IHM avec Swing mais aussi des algorithmes de parcours de graphe.', NULL, 0),
(9, 'Annuaire Client', 'Ce projet Universitaire à pour but de traiter une annuaire de client ,permettant , de rechercher,filtrer ,supprimer des clients avec la programmation en C.', '2024-05-26 12:55:19', 'annuaire.png', 'https://forge.univ-lyon1.fr/p2200950/sae-c', ' ', NULL, 1),
(10, 'Base de données pour un Grossiste', 'une grossiste spécialisé dans la vente en gros de fleurs, souhaite mettre en place une application pour gérer ses opérations de vente et de distribution. L\'objectif est de simplifier la gestion des stocks, des commandes avec  base de données SQL.', '2024-05-26 13:29:47', 'grossisteprojet.png', '', '', NULL, 1),
(11, 'Adventure Works', 'Ce projet Universitaire  avait pour but d\'apprendre à visualiser des données d\'une grande entreprise afin de prendre les bonnes décisions pour vendre des produits.', '2024-05-26 16:09:00', 'power.png', '', '', NULL, 1),
(12, 'Comparaison algorithmique', 'Ce projet universitaire consiste à corriger des algorithmes de tris et à les ameliorer puis de calculer leurs complexité en mémoire.', '2024-05-26 16:12:16', 'projetalgo.png', '', '', NULL, 1),
(14, 'Certif\'S', 'Certif\'S est un projet que j\'ai réaliser lors de mon stage pour découvrir la technologie Salesforce.', '2024-06-06 20:46:37', 'projetSales.png', 'https://github.com/Rafiklatrikdu69/certifs', '', NULL, 0);

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
(14, 9),
(16, 3),
(20, 10),
(23, 8),
(24, 3),
(25, 1),
(25, 2),
(25, 4),
(25, 5),
(25, 6),
(25, 7),
(28, 12),
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
(32, 2),
(33, 11),
(34, 14);

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
(1, 'Semestre 1'),
(2, 'Semestre 2'),
(3, 'Semestre 3'),
(4, 'Semestre 4');

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
(32, 'GitLab', 'gitlab.png', 2),
(33, 'Power BI', 'powerbi.png', 4),
(34, 'Salesforce', 'sales.png', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `apprentissage_critique`
--
ALTER TABLE `apprentissage_critique`
  ADD PRIMARY KEY (`id_apprentissage`),
  ADD KEY `FK_a34cdb30441ec5ff399dbfc616f` (`id_niveau`);

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
  ADD KEY `FK_576cafd83616d2c5d31b0ac7f86` (`id_semestre`),
  ADD KEY `FK_c4ac07b77d38e6f7d6444db69b8` (`niveauCompetenceIdNiveau`),
  ADD KEY `FK_8d97c88950578df20f698634c03` (`projetIdProjet`);

--
-- Index pour la table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`id_experience`);

--
-- Index pour la table `niveau`
--
ALTER TABLE `niveau`
  ADD PRIMARY KEY (`id_niveau`);

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
-- AUTO_INCREMENT pour la table `apprentissage_critique`
--
ALTER TABLE `apprentissage_critique`
  MODIFY `id_apprentissage` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT pour la table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id_cat` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `competence`
--
ALTER TABLE `competence`
  MODIFY `id_competence` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `experience`
--
ALTER TABLE `experience`
  MODIFY `id_experience` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `niveau`
--
ALTER TABLE `niveau`
  MODIFY `id_niveau` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `projet`
--
ALTER TABLE `projet`
  MODIFY `id_projet` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `semestre`
--
ALTER TABLE `semestre`
  MODIFY `id_semestre` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `technology`
--
ALTER TABLE `technology`
  MODIFY `id_techno` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `apprentissage_critique`
--
ALTER TABLE `apprentissage_critique`
  ADD CONSTRAINT `FK_a34cdb30441ec5ff399dbfc616f` FOREIGN KEY (`id_niveau`) REFERENCES `niveau` (`id_niveau`);

--
-- Contraintes pour la table `competence`
--
ALTER TABLE `competence`
  ADD CONSTRAINT `FK_576cafd83616d2c5d31b0ac7f86` FOREIGN KEY (`id_semestre`) REFERENCES `semestre` (`id_semestre`),
  ADD CONSTRAINT `FK_8d97c88950578df20f698634c03` FOREIGN KEY (`projetIdProjet`) REFERENCES `projet` (`id_projet`),
  ADD CONSTRAINT `FK_c4ac07b77d38e6f7d6444db69b8` FOREIGN KEY (`niveauCompetenceIdNiveau`) REFERENCES `niveau` (`id_niveau`);

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
