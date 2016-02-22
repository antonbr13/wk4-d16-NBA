angular.module('lectureApp', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider) {

      $stateProvider
            .state('list', {
               url: '/list',
               controller: 'listController',
               templateUrl: 'list-tmpl.html'
            })

            .state('list', {
               url: '/details/:foodId',
               controller: 'detailsController',
               templateUrl: 'details-tmpl.html'
            });



});
