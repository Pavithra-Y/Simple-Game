//Define an angular module for our app
var app = angular.module('myApp', []);

app.controller('tasksController', function($scope, $http) {
  getTask(); // Load all available tasks 
  function getTask(){  
  $http.post("ajax/getTask.php").success(function(data){
        $scope.tasks = data;
       });
  };
  
  
  function fightwin(){  
  $http.post("ajax/fightwin.php").success(function(data){
        $scope.tasks = data;
       });
  };
  
  function finwin(){  
  $http.post("ajax/finwin.php").success(function(data){
        $scope.tasks = data;
       });
  };
  
  $scope.addTask = function (task) {
    $http.post("ajax/addTask.php?task="+task).success(function(data){
        getTask();
        $scope.taskInput = "";
      });
  };
  $scope.deleteTask = function (task) {
    if(confirm("Are you sure to delete this line?")){
    $http.post("ajax/deleteTask.php?taskID="+task).success(function(data){
        getTask();
      });
    }
  };
  
  $scope.winTask = function (task) {
    $http.post("ajax/winTask.php?task="+task).success(function(data){
        finwin();
        $scope.taskInput = "";
      });
  };
  
  $scope.fightTask = function (task) {
  $http.post("ajax/fightTask.php?task="+task).success(function(data){
        fightwin();
        $scope.taskInput = "";
      });
  };

  $scope.toggleStatus = function(item, status, task) {
    if(status=='2'){status='0';}else{status='2';}
      $http.post("ajax/updateTask.php?taskID="+item+"&status="+status).success(function(data){
        getTask();
      });
  };

});
