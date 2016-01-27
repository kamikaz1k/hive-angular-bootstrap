var routerApp = angular.module('hive-angular', ['ui.router','hive.controllers','hive.services','easypiechart']);

routerApp

.directive('sidebarDirective', function() {
  return {
    link : function(scope, element, attr) {
      scope.$watch(attr.sidebarDirective, function(newVal) {
        if(newVal) { 
          element.addClass('show');
        } else {
          element.removeClass('show');
        }
      });
    }
  };
})

.config(function($stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.otherwise('/app/mykpi');
    
  $stateProvider

  .state('app', {
    url: '/app',
    // abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
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
    templateUrl: 'templates/organization.html',
    controller: 'OrganizationCtrl'
  })
        
});