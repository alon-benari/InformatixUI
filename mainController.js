var norCalApp = angular.module('NorCalApp', ['ngRoute','ngResource',  'ngMaterial','ngMessages']);

norCalApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
      when('/home',{
        templateUrl:'component/norCalHome/norCalHome.html',
        controller:'NorCalHomeController'
      }).
      when('/Visualization',{
        templateUrl:'component/visualization/visualization.html',
        controller:'VisualizationController'
      }).
      when('/ConsultNetwork',{
        templateUrl:'component/visualization/consult.html',
        controller:'ConsultNetworkController'
      }).

      otherwise({
        redirectTo:'/home'
      })


  }])

norCalApp.controller('MainController',['$scope', function($scope) {
      console.log('running')
  
    $scope.main = {}
    $scope.main.CliniApps = ['NorCal Clinical Apps']
    

  $scope.update = function(){
    console.log('update')
    console.log($scope.main)
  
    
  }  
}]);