(function() {
  'use strict';

  const app = angular.module('validation', [])

  app.controller('getInfo', getInfo)

  function getInfo ($scope, $rootScope) {

    $rootScope.users = []

    $scope.retrieve = function (user){
      $scope.taken = false
      if ($rootScope.users.some(elem => elem.username === user.username)) {
        $scope.taken = true
      } else {
        $rootScope.users.push(user)
        $scope.testForm.$setPristine()
        $scope.user = null

      }

    }
  }

}());
