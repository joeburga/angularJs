
// $scope como se comunica el html con el controller.
/* app.controller('AppController', ['$scope', function($scope) { 
    $scope.list = ["Study AngularJs", "Study Comunicaciones", "Study Teoria de Control"]

    $scope.addItem = function() {
        $scope.list.push($scope.addToDo);
    }
}]); */


// $scope como se comunica el html con el controller.
app.controller('AppController', ['$scope', function($scope) { 
    $scope.todo = {
        title: "Things I Need to Do",
        list : ["Study AngularJs", "Study Comunicaciones", "Study Teoria de Control"]
    }

    $scope.books = {
        title: "Books I Need to buy",
        list : []
    }

    // itemList será el todo.list y item se agregará a addToDo. Ver app.html
    $scope.addItem = function(itemList, item) {
        itemList.push(item);
    }
}]);