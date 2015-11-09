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
    users: $resource('/users'),
    persistent: $resource('/persistent/:facet', {}, {
      list: {
        method: 'GET',
        params: {
          facet: 'list'
        }
      },
      create: {
        method: 'POST',
        params: {
          facet: 'add'
        }
      }
    })
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

app.controller('Exercise3Ctrl', function($location, userService) {
  var vm = this;

  vm.userList = [];
  vm.userCreated = false;

  vm.dismiss = function() {
    vm.userCreated = false;
    $location.search({});
  };

  userService.persistent.list({}, function(response) {
    vm.userCreated = $location.search().created;
    vm.userList = response.list;
  });
});

app.controller('AddUserCtrl', function($location, userService) {
  var vm = this;

  vm.user = {};
  vm.isSaving = false;

  this.save = function() {
    vm.isSaving = true;
    var newUser = angular.copy(vm.user);

    var createPromise = userService.persistent.create({user: newUser})
        .$promise;

    createPromise.then(function() {
      vm.isSaving = false;
      $location.path('/exercise3').search({created: true});
    }, function(error) {
      console.log(error);
    });

    createPromise['finally'](function() {
      vm.isSaving = false;
    });
  };
});
