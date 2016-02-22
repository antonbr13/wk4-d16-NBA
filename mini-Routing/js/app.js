angular.module('miniRouting', ['ui.router'])


.config( function($stateProvider, $urlRouterProvider) {

   $stateProvider

      .state('home', {
         templateUrl: 'js/home/homeTmpl.html',
         controller: 'homeCtrl',
         url: '/home'

      })

      .state('products', {
         templateUrl: 'js/products/productsTmpl.html',
         controller: 'productsCtrl',
         url: '/products/:id'

      })

      .state('settings', {
         templateUrl: 'js/settings/settingsTmpl.html',
         controller: 'settingsCtrl',
         url: '/settings'

      });

      $urlRouterProvider.otherwise('/home');

});
