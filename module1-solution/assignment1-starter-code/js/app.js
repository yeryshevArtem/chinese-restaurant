(function () {
  'use strict';
  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {

    function isEmpty (inputValue) {
      return !(inputValue.length === 0 || !inputValue.trim());
    }

    $scope.listOfLunch = "";
    $scope.helperMessage = "";
    $scope.textColor = "black";
    $scope.borderOfTextbox = "inherit";

    $scope.checkListOfLunch = function () {
      var message = "";
      var color = "";
      var border = "";
      if (!isEmpty($scope.listOfLunch)) {
        message = "Please enter data first!";
        color = "red";
        border = "red";
      } else {
        var arrayOfLunchList = $scope.listOfLunch.split(",");

        // do NOT consider and empty item, as an item towards to the count

        var arrayOfLunchListWithoutEmptyElements = arrayOfLunchList.filter(isEmpty);
        arrayOfLunchList = arrayOfLunchListWithoutEmptyElements;

        if (arrayOfLunchList.length <= 3) {
          message = "Enjoy!";
        } else {
          message = "Too much!";
        }
        color = "green";
        border = "green";
      }
      $scope.helperMessage = message;
      $scope.textColor = color;
      $scope.borderOfTextbox = border;
    }
  }
})();
