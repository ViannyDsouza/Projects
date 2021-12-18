angular.module('myNewApp', [
    'homeModule',
    'aboutModule',
    'ngRoute'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'pages/page-home/home.html',
        controller: 'HomeController'
      })
      .when('/about', {
        templateUrl: 'pages/page-about/about.html',
        controller: 'AboutController'
      })
      .otherwise({
        redirectTo: '/home'
      });
  
    $locationProvider.hashPrefix('');
  });
  