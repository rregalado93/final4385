angular.module('App')
.controller('BiographyController', function ($scope, Speakers, $firebaseArray) {
    $scope.speakers = Speakers.all();
    $scope.remove = function(speaker) {
    Speakers.remove(speaker);
  };
  
})