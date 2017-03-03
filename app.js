var app = angular.module('app', ['ngTouch', 'ui.grid']);

app.controller('MainCtrl', ['$scope', function ($scope) {

  $scope.gridConfig = {
    enableCellEditOnFocus: false,
    enableFiltering: true,
    multiSelect: false,
    enableGridMenu: true,
    paginationPageSizes: [25, 50, 75],
    paginationPageSize: 10,
    data: [
      {
          "firstName": "Cox",
          "lastName": "Carney",
          "company": "Enormo",
          "employed": true
      },
      {
          "firstName": "Lorraine",
          "lastName": "Wise",
          "company": "Comveyer",
          "employed": false
      },
      {
          "firstName": "Nancy",
          "lastName": "Waters",
          "company": "Fuelton",
          "employed": false
      }
    ],
  };
}]);
