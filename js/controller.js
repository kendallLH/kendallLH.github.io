var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    
    $scope.quote = "initial quote" ;
    function generate_quote() {
    	$scope.quote = "quote goes here" ;
    }
});