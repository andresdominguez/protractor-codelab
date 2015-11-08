(function() {
  var app = angular.module('protractorTestApp', [
    'ngResource',
    'ngRoute'
  ]);

  app.controller('Exercise1Ctrl', function() {
    this.name = 'hello';
  })
})();
