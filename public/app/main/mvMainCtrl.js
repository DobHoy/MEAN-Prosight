angular.module('app').controller('mvMainCtrl', function($scope){
  $scope.myVar = "Hello angular";
  $scope.courses = [
    {name: "c# for rockstars", featured:true, published: new Date('1/1/2014')}, 
    {name: "c# for rockstars", featured:true, published: new Date('1/1/2013')}, 
    {name: "c# for rockstars", featured:true, published: new Date('1/1/2012')}
  ]

});