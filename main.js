var app = angular.module('App', ['uiGmapgoogle-maps']);

app.controller("controller", function ($scope) {
  angular.extend($scope, {
    map: {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom:8,
    }
  });
})


app.controller("SensorController", function ($scope) {
    $scope.Temperatura = 11.56;
    $scope.Altitud = 1550;
    $scope.Humedad = 54;
    $scope.Presion = 811.3;
    $scope.Position = "20°39′58″N 103°21′07″O";
});

 

