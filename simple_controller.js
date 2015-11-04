app.controller('myCtrl', function($scope) { // define two properties in the model define by the scope variable
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.quantity = 12;
    $scope.price = 5.99;
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
    $scope.helloTo = {};
    $scope.helloTo.title = "SimpleController";

    $scope.product = { name: 'The Book of Trees', price: 20, currentdate : new Date(), image: 'Koala.jpg', likes: 0}
	
	$scope.plusOne =  function(index) { 
  $scope.product.likes += 1;
    };

  $scope.move = {
    icon: 'img/move.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  };
});
