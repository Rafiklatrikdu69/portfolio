var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope,$http) {

    // Utilisation d'Axios pour effectuer la requête GET
    $http.get('http://localhost:3000/projet/get')
        .then(function (response) {
            // Réussite de la requête
            $scope.myWelcome = response.data[0].id_projet;
            console.log(response.data[0].id_projet)
        })
        .catch(function (error) {
            // Gestion des erreurs
            console.error('Error during GET request:', error);
        });
});
