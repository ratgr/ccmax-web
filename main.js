var app = angular.module('App', ['uiGmapgoogle-maps']);

app.controller("controller", function ($scope, $timeout) {
    angular.extend($scope, {
        map: {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 8,
            markers: [
                {
                  latitude: 41.169444444444444,
                  longitude: -75.87777777777778,
            
                }
            ]
        }
    });
});


app.controller("SensorController", function ($scope) {
    $scope.Temperatura = 11.56;
    $scope.Altitud = 1550;
    $scope.Humedad = 54;
    $scope.Presion = 811.3;
    $scope.Position = "20°39′58″N 103°21′07″O";
    

    navigator.geolocation.watchPosition(function (pos) {
    
            window.alert("0");
            $scope.$apply(function () {
            $scope.Position = pos.coords.latitude + "," + pos.coords.longitude;
        });
    });
});

 

