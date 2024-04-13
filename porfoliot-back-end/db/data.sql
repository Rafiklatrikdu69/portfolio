CREATE TABLE projet (
    id_projet INT AUTO_INCREMENT PRIMARY KEY,
    nom_projet VARCHAR(255) NOT NULL,
    description VARCHAR(500),
    date DATE,
    image VARCHAR(255) NOT NULL
);
