(function () {
  'use strict';
  angular.module('myFirstApp', [])
  .controller('MyFirstController',function ($scope) {
    $scope.name = "Saulo";
    $scope.sayHello = function () {
      return "Ola";
    };
  });

  angular.module('NameCalculator', [])
  .controller('NameCalculatorController',function ($scope){
    $scope.nameC = "";
    $scope.totalValue = 0;
    $scope.displayNumeric = function () {
      var totalNameValue = calcula($scope.nameC);
      $scope.totalValue = totalNameValue;
    };
    function calcula(string) {
      var totalStringValue = 0;
      for (var i = 0; i < string.length; i++) {
        totalStringValue += string.charCodeAt(i);
      }
      return totalStringValue;
    }


  });

})();
