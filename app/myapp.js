'use script';

// Initiate the angular app
myApp = angular.module('myapp', []);

// Add a factory method to get the current time
myApp.factory('CurrentTimeService', function () {
    var factory = {};

    factory.getCurrentTime = function () {
        var currentTime = new Date();
        return ('0' + currentTime.getHours()).slice(-2) + ':' + ('0' + currentTime.getMinutes()).slice(-2) + ':' + ('0' + currentTime.getSeconds()).slice(-2);
    }

    return factory;
})

// Add a controller to control the data
myApp.controller('firstController', function ($scope, CurrentTimeService, $interval) {
    $scope.title = "World!";

    $interval(function () {
        $scope.time = CurrentTimeService.getCurrentTime();
    }, 10); // change the delay depending upon the precision
})