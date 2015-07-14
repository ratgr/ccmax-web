/*global angular, google, geocoder*/

var app = angular.module('App', []);

app.factory('DocServidoresService', function () {
    "use strict";
    var docServidoresService, selectedIndex, selected, returnService;

    docServidoresService = [
    ];

    selected = 0;

    returnService = {};

    returnService.docServidoresService = docServidoresService;
    returnService.selected = selected;
    returnService.add = function () {
        docServidoresService[docServidoresService.length] = {};
    };
    returnService.remove = function (index) {
        vehiculos.splice(index, 1);
    };

    return returnService;

});

app.controller("DocServidoresControl", function ($scope, DocServidoresService) {
    "use strict";
    $scope.DocServidores = DocServidoresService.docServidoresService;

    $scope.selected = DocServidoresService.selected;

    $scope.select = function (index) {
        $scope.selected = index;
    };

    $scope.add = function () {
        $scope.selected = DocServidoresService.docServidoresService.length;
        DocServidoresService.add();
    };

    $scope.remove = function (index) {
        DocServidoresService.remove(index);
    };

});

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

app.factory('DestinosService', function () {
    "use strict";
    var destinos, selectedIndex, selected, returnService;

    destinos = [];

    selected = 0;

    returnService = {};

    returnService.destinos = destinos;
    returnService.selected = selected;
    returnService.add = function () {
        destinos[destinos.length] = {};
    };
    returnService.remove = function (index) {
        victimas.splice(index, 1);
    };

    return returnService;
});

app.controller("DestinosControl", function ($scope, DestinosService) {
    "use strict";
    $scope.Destinos = DestinosService.destinos;

    $scope.selected = DestinosService.selected;

    $scope.select = function (index) {
        $scope.selected = index;
    };

    $scope.add = function () {
        $scope.selected = DestinosService.destinos.length;
        DestinosService.add();
    };

    $scope.remove = function (index) {
        DestinosService.remove(index);
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

app.factory('ServidoresService', function () {
    "use strict";
    var servidores, selectedIndex, selected, returnService;

    servidores = [];

    selected = 0;

    returnService = {};

    returnService.servidores = servidores;
    returnService.selected = selected;
    returnService.add = function () {
        servidores[servidores.length] = {};
    };
    returnService.remove = function (index) {
        servidores.splice(index, 1);
    };

    return returnService;
});

app.controller("ServidoresControl", function ($scope, ServidoresService) {
    "use strict";
    $scope.Servidores = ServidoresService.servidores;

    $scope.selected = ServidoresService.selected;

    $scope.select = function (index) {
        $scope.selected = index;
    };

    $scope.add = function () {
        $scope.selected = ServidoresService.servidores.length;
        ServidoresService.add();
    };

    $scope.remove = function (index) {
        ServidoresService.remove(index);
    };

});

function getAddress() {
    "use strict";
    
    var geocoder, numero, calle, colonia, municipio, estado, pais, zip;
    
    geocoder = new google.maps.Geocoder();
    
    geocoder.geocode({ address: "20.6558107,-103.3991779"}, function (results, status) {
        var lat, lng, i, count, input;

        if (status === google.maps.GeocoderStatus.OK) {
            
            count = results[0].address_components.length;

            for (i = 0; i < count; i++){
                
                switch (results[0].address_components[i].types[0]) {
                    case "street_number":
                        numero = results[0].address_components[i].long_name;
                        input = document.getElementById("numero-in");
                        input.value = numero;
                        break;
                      
                    case "route":
                        calle = results[0].address_components[i].long_name;
                        input = document.getElementById("calle-in");
                        input.value = calle;
                        break;
                     
                    case "neighborhood":
                        colonia = results[0].address_components[i].long_name;
                        input = document.getElementById("colonia-in");
                        input.value = colonia;
                        break;
                    
                    case "locality":
                        municipio = results[0].address_components[i].long_name;
                        break;
                        
                    case "administrative_area_level_1":
                        estado = results[0].address_components[i].long_name;
                        break;
                    
                    case "country":
                        pais = results[0].address_components[i].long_name;
                        break;
                    
                    case "postal_code":
                        zip = results[0].address_components[i].long_name;
                        input.value = zip;
                        break;
                }
            }
            
        } else {
            window.alert("Geocode was not successful for the following reason: " + status);
        }
    });
}      

getAddress();

 $(document).ready(function(){
      var count, calles;
        
        $.getJSON('http://api.geonames.org/findNearbyStreetsOSMJSON?lat=20.6558107&lng=-103.3991779&username=dixi1903', function(data) {
            calles = [];
            
            $.each(data.streetSegment, function(i, field){
                if(calles.indexOf(field.name) === -1)
                {
                    calles.push(field.name);
                }
            });
            
            
            $( "#calle-in").autocomplete({
                source: calles
            });

        });
});



