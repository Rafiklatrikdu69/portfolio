// Contrôleur dans un autre fichier par exemple 'controllerProjetDescription.js'
app.controller('controllerProjetDescription', function($scope, $http) {
    var urlPage = window.location.href;
    var params = (new URL(urlPage)).searchParams;
    var id = params.get('id');
    $scope.id = id
    console.log(url+"projet/"+$scope.id)
    $http.get(url+"projet/"+$scope.id).
    then(function(response) {
        $scope.projet = response.data;
        console.log(response.data);
    })
    .catch(function(error) {
        console.error('Error during GET request:', error);
    });
});
