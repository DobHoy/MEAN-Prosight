angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth, $location){
  $scope.identity = mvIdentity;

  $scope.signin = function(username, password){
    console.log('LOGIN IS ' + username + " " + password);
    mvAuth.authenticateUser(username, password)
      .then(function(success){
        if(success){
          mvNotifier.notify('you have successfully signed in'); 
        }
        else {
          mvNotifier.notify('Username/password combo incorrect ');
        }
      });
 
    console.log("hi you've tried to log in");
  }

  $scope.signout = function(){
    mvAuth.logoutUser().then(function(){
      $scope.username = "";
      $scope.password = "";
      mvNotifier.notify('You have successfully signed out');
      $location.path('/');
    });
  }
});