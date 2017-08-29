'use strict';

/**
 * @ngdoc function
 * @name newappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the newappApp
 */
angular.module('newappApp')
  .controller('AboutController', function ($scope, toDoService) {
    var aboutCtrl = this;
    aboutCtrl.toDos = toDoService.getToDo();
  });
