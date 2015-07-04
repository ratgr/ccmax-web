/*global angular, google*/ 


(function () {
    
    "use strict";
    var app = angular.module('App', []);

    app.factory('VehiculeService', function () {
        var vehiculos, selectedIndex, selected, returnService;
        
        vehiculos = [
        ];
        
        selected = 0;
    
        returnService = {};
        
        returnService.vehiculos = vehiculos;
        returnService.selected = selected;
        returnService.add = function () {
            vehiculos[vehiculos.length] = {};
        };
        
        
        returnService.remove = function (index) {
            vehiculos.splice(index, 1);
        };
        
        return returnService;
        
    });

    app.controller("VehiculeControl", function ($scope, VehiculeService) {
        $scope.Vehiculos = VehiculeService.vehiculos;
        
        $scope.selected = VehiculeService.selected;
    
        $scope.select = function (index) {
            $scope.selected = index;
        };
        
        $scope.add = function () {
            $scope.selected = VehiculeService.vehiculos.length;
            VehiculeService.add();
        };
        
        $scope.remove = function (index) {
            VehiculeService.remove(index);
        };
        
    });

    app.controller("modificarVehiculo", function ($scope, $routeParams, VehiculeService) {
        $scope.id = $routeParams.id;
        $scope.Vehiculo = VehiculeService.vehiculos[$scope.id];
    });
    
}());