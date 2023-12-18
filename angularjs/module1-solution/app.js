(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
    $scope.dishes = "";

    $scope.checkIfTooMuch = function () {
        const words = $scope.dishes.split(',').filter(element => element);
        if (words.length > 3) {
            $scope.message = "Too much!";
        } else {
            $scope.message = "Enjoy!";
        }
    };

    $scope.message = "";
}
})();