angular.module('newappApp')
    .factory('toDoService', function(){
    var a = [
            {task:'reading', done:true},
            {task:'writing', done:false}
            ]
    return{
        getToDo: function(){        
        return a;
        }
    }
})