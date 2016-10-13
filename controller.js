(function() {
  'use strict';

  const app = angular.module('validation', [])

  app.controller('getInfo', getInfo)

  function getInfo ($scope, $rootScope) {

    $rootScope.users = []
    $scope.retrieve = function (user){
      $scope.taken = false
      if ($rootScope.users.some(elem => elem.name === user.name)) {
        $scope.taken = true
      } else {
        $rootScope.users.push(user)
        $scope.user = null
      }

    }
  }

}());
