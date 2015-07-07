/*global angular, google*/


var app = angular.module('App', []);



app.factory('VehiculeService', function () {
    "use strict";
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
    "use strict";
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

app.factory('VictimasService', function () {
    "use strict";
    var victimas, selectedIndex, selected, returnService;

    victimas = [];

    selected = 0;

    returnService = {};

    returnService.victimas = victimas;
    returnService.selected = selected;
    returnService.add = function () {
        victimas[victimas.length] = {};
    };
    returnService.remove = function (index) {
        victimas.splice(index, 1);
    };

    return returnService;
});

app.controller("VictimasControl", function ($scope, VictimasService) {
    "use strict";
    $scope.Victimas = VictimasService.victimas;

    $scope.selected = VictimasService.selected;

    $scope.select = function (index) {
        $scope.selected = index;
    };

    $scope.add = function () {
        $scope.selected = VictimasService.victimas.length;
        VictimasService.add();
    };

    $scope.remove = function (index) {
        VictimasService.remove(index);
    };

});

app.factory('DetenidosService', function () {
    "use strict";
    var detenidos, selectedIndex, selected, returnService;

    detenidos = [];

    selected = 0;

    returnService = {};

    returnService.detenidos = detenidos;
    returnService.selected = selected;
    returnService.add = function () {
        detenidos[detenidos.length] = {};
    };
    returnService.remove = function (index) {
        detenidos.splice(index, 1);
    };

    return returnService;
});

app.controller("DetenidosControl", function ($scope, DetenidosService) {
    "use strict";
    $scope.Detenidos = DetenidosService.detenidos;

    $scope.selected = DetenidosService.selected;

    $scope.select = function (index) {
        $scope.selected = index;
    };

    $scope.add = function () {
        $scope.selected = DetenidosService.detenidos.length;
        DetenidosService.add();
    };

    $scope.remove = function (index) {
        DetenidosService.remove(index);
    };

});

app.factory('TestigosService', function () {
    "use strict";
    var testigos, selectedIndex, selected, returnService;

    testigos = [];

    selected = 0;

    returnService = {};

    returnService.testigos = testigos;
    returnService.selected = selected;
    returnService.add = function () {
        testigos[testigos.length] = {};
    };
    returnService.remove = function (index) {
        testigos.splice(index, 1);
    };

    return returnService;
});

app.controller("TestigosControl", function ($scope, TestigosService) {
    "use strict";
    $scope.Testigos = TestigosService.testigos;

    $scope.selected = TestigosService.selected;

    $scope.select = function (index) {
        $scope.selected = index;
    };

    $scope.add = function () {
        $scope.selected = TestigosService.testigos.length;
        TestigosService.add();
    };

    $scope.remove = function (index) {
        TestigosService.remove(index);
    };

});






