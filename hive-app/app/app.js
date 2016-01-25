var routerApp = angular.module('hive-angular', ['ui.router','hive.controllers','hive.services','easypiechart']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.otherwise('/app');
    
  $stateProvider

  .state('app', {
    url: '/app',
    // abstract: true,
    templateUrl: 'templates/menu.html',
    // controller: 'AppCtrl'
  })

  .state('app.mykpi', {
    url: '/mykpi',
    templateUrl: 'templates/my-kpis.html',
    controller: 'KPICtrl'
  })

  .state('app.expectations', {
    url: '/expectations',
    templateUrl: 'templates/expectations.html',
    controller: 'ExpectationsCtrl'
  }) 

  .state('app.glossary', {
    url: '/glossary',
    templateUrl: 'templates/glossary.html',
    controller: 'GlossaryCtrl'
  })

  .state('app.organization', {
    url: '/organization',
    views: {
      'menuContent': {
        templateUrl: 'templates/organization.html',
          controller: 'OrganizationCtrl'
      }
    }
  })
        
});