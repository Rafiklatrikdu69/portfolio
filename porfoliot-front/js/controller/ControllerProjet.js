
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('projet', {
        url: '/projet/:id',
        templateUrl: 'projet.html',
        controller: 'controllerProjet'
    })
   
  
});

app.controller('myCtrl', function($scope, $http) {
    $http.get(url+'projet/get')
        .then(function(response) {
            $scope.projets = response.data;
            console.log(response.data[0].id_projet);
        })
        .catch(function(error) {
            console.error('Error during GET request:', error);
        });
});

app.controller('controllerProjet', ['$scope', '$stateParams', function($scope, $stateParams) {
    $scope.id = $stateParams.id;
 window.location.href="projet.html?id="+$scope.id;
}]);
