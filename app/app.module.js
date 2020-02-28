angular.module('designApp', [
  'ngMaterial',
  'ngRoute',
  'ngResource'
]).config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('gray')
    .accentPalette('teal');
});
