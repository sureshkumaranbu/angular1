'use strict';

/**
 * @ngdoc function
 * @name newappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newappApp
 */
angular.module('newappApp')
  .controller('MainController', function ($scope, toDoService) {
    var mainCtrl = this;
    //mainCtrl.a = 'suresh';
    mainCtrl.toDos = toDoService.getToDo();
    mainCtrl.addToDo = function(){
        if(mainCtrl.todo.length>0){
            toDoService.a = mainCtrl.toDos.push({task:mainCtrl.todo, done:false}); 
        }
        mainCtrl.todo = '';
    };
    mainCtrl.clear = function(){
        angular.forEach(mainCtrl.toDos, function(v, k){
            if(v.done === true){
                mainCtrl.toDos.splice(k,1);
            }
        })
    }
  });
