(function() {
  var app = angular.module('protractorTestApp', [
    'ngResource',
    'ngRoute'
  ]);

  app.config(function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'main.html'
    }).when('/exercise1', {
      templateUrl: 'exercise1.html',
      controller: 'Exercise1Ctrl',
      controllerAs: 'ctrl'
    }).when('/exercise2', {
      templateUrl: 'exercise2.html',
      controller: 'Exercise2Ctrl',
      controllerAs: 'ctrl'
    }).when('/exercise3', {
      templateUrl: 'exercise3.html',
      controller: 'Exercise3Ctrl',
      controllerAs: 'ctrl'
    }).when('/addUser', {
      templateUrl: 'add-user.html',
      controller: 'AddUserCtrl',
      controllerAs: 'ctrl'
    }).otherwise({
      redirectTo: '/'
    });
  });

  app.service('userService', function($resource) {
    return {
      users: $resource('/users')
    };
  });

  app.controller('Exercise1Ctrl', function() {
    var vm = this;

    vm.user = {
      name: 'Bruce Lee',
      email: 'bruce.lee@google.com',
      phone: '212 555-1234'
    };

    vm.updateData = function() {
      vm.displayUser = angular.copy(vm.user);
    };
    vm.updateData();
  });

  app.controller('Exercise2Ctrl', function(userService) {
    var vm = this;

    vm.userList = [];
    userService.users.get({}, function(response) {
      vm.userList = response.list;
    });
  });
})();
