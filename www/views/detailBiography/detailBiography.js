angular.module('App')
.controller('DetailBiographyController', function($scope, Speakers, $stateParams, $firebaseArray){
    $scope.speaker = Speakers.get($stateParams.speakerId)

})