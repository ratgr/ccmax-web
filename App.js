/*global angular*/
(function () {
    
    "use strict";
    var app = angular.module('App', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {templateUrl: 'partials/Main.html'})
            .when("/Lugar", {templateUrl: 'partials/Lugar.html'})
            .when("/Vehiculo/:id", {
                templateUrl: 'partials/Vehiculo.html',
                controller: "modificarVehiculo"
            })
            .when("/Vehiculo/", {
                templateUrl: 'partials/Vehiculo.html'
               // controller: "AgregarVehiculo"
            });
    });
    
    app.run(function ($rootScope, $location, $anchorScroll) {
        //when the route is changed scroll to the proper element.
        $rootScope.$on('$routeChangeSuccess', function (newRoute, oldRoute) {
            if ($location.hash()) {$anchorScroll(); }
        });

        $rootScope.Lugar = "#/Lugar";
    });
    
    app.factory('VehiculeService', function () {
        var vehiculos, selectedIndex, selected, returnService;
        
        vehiculos = [
            {placa: "HGZ-43453", marca: "Chevy", tipo: "Auto Chico", color: "rojo", ano: 1993},
            {placa: "HGZ-43453", color: "verde"},
            {placa: "HGZ-43453"},
            {placa: "HGZ-43453"}
        ];
        
        selected = 0;
    
        returnService = {};
        
        returnService.vehiculos = vehiculos;
        returnService.selected = selected;
        returnService.add = function () {
            vehiculos[vehiculos.length] = {};
        };
        return returnService;
        
    });
    
    app.controller("SensorController", function ($scope) {
        $scope.Temperatura = 11.56;
        $scope.Altitud = 1550;
        $scope.Humedad = 54;
        $scope.Presion = 811.3;
        $scope.Position = "20°39′58″N 103°21′07″O";
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
        
    });
    
    app.controller("modificarVehiculo", function ($scope, $routeParams, VehiculeService) {
        //window.alert("Alerta!!" + $routeParams.id);
        $scope.id = $routeParams.id;
        $scope.Vehiculo = VehiculeService.vehiculos[$scope.id];
    });
    
  //  app.controller("AgregarVehiculos", function ($scope)


}());