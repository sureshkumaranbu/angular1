'use strict';

/**
 * @ngdoc function
 * @name newappApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the newappApp
 */
angular.module('newappApp')
  .controller('TodoCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
