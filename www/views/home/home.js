angular.module('App')
    .controller('HomeController', function($scope, $firebaseArray) {
        
        var ref = firebase.database().ref().child("Message");
        // create a synchronized array
        // click on `index.html` above to see it used in the DOM!
        $scope.messages = $firebaseArray(ref);

    })
