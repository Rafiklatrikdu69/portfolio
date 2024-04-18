-- Structure de la table `projet`
CREATE TABLE `projet` (
  `id_projet` INT NOT NULL AUTO_INCREMENT,
  `nom_projet` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `date` DATETIME NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_projet`)
);

-- Structure de la table `Technology`
CREATE TABLE `Technology` (
    `id_techno` INT AUTO_INCREMENT PRIMARY KEY,
    `nom_techno` VARCHAR(255) NOT NULL,
    `image_techno` VARCHAR(255) NOT NULL,
    `id_projet` INT,
    FOREIGN KEY (`id_projet`) REFERENCES `projet`(`id_projet`) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Insertion des données dans la table `projet`
INSERT INTO `projet` (`id_projet`, `nom_projet`, `description`, `date`, `image`) VALUES
(1, 'Sportify', 'Réseau social permettant de pronostiquer sur des matchs.', '2024-04-13 17:30:21', 'asdad'),
(2, 'BourseApp', 'Application boursière développée avec NestJS et Angular.', '2024-04-14 00:00:00', 'image1.jpg'),
(3, 'TurboTap', 'Application de click rapide développée avec C# et Angular.', '2024-04-15 00:00:00', 'image2.jpg'),
(4, 'ShopeLink', 'Application de vente permettant d\'acheter des produits alimentaires. Cette application est développée avec les frameworks NestJS et Angular.', '2024-04-16 00:00:00', 'image3.jpg');

-- Insertion des données dans la table `Technology`
INSERT INTO `Technology` (`nom_techno`, `id_projet`, `image_techno`) VALUES ('PHP', 1, ''),
('Docker', 1, '');
