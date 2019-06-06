

app.controller("myController", function ($scope) {
    $scope.products = ["Milk", "Bread", "Cheese","Rice","Egg"];
    $scope.addItem = function () {
        $scope.products.push($scope.addMe);
    }
});