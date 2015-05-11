/**
 * Created by 786 computers on 5/11/2015.
 */

var angularModule = angular.module("myApp", []);

angularModule.controller("myCtrl", function($scope){
    $scope.name = "Aisha Batool";

    setInterval(function(){
        alert($scope.name);
    }, 5000);
});