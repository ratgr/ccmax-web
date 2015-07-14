var app = angular.module('App', []);

app.factory('IndiciosService', function () {
    "use strict";
    var indicios, selectedIndex, selected, returnService;

    indicios = [];

    selected = 0;

    returnService = {};

    returnService.indicios = indicios;
    returnService.selected = selected;
    returnService.add = function () {
        indicios[indicios.length] = {};
    };
    returnService.remove = function (index) {
        indicios.splice(index, 1);
    };

    return returnService;

});

app.controller("IndiciosControl", function ($scope, IndiciosService) {
    "use strict";
    $scope.Indicios = IndiciosService.indicios;

    $scope.selected = IndiciosService.selected;

    $scope.select = function (index) {
        $scope.selected = index;
    };

    $scope.add = function () {
        $scope.selected = IndiciosService.indicios.length;
        IndiciosService.add();
    };

    $scope.remove = function (index) {
        IndiciosService.remove(index);
    };

});