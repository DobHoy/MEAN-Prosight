angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
    });
  $routeProvider
    .when('/', {templateUrl: '/partials/main/main', controller: 'mvMainCtrl'});
}]);

// angular.module('app').controller('mainCtrl', function($scope){
//   $scope.myVar = "Hello angular";
// });