var app = angular.module('App', ['uiGmapgoogle-maps']);

var map;

function initializeMap() {
    "use strict";
    
    var mapCanvas, mapOptions, latlng;
    
    latlng = new google.maps.LatLng(21, -103);
    
    mapOptions = {
        zoom: 15,
        center: latlng
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function createMarker(origin, Title) {
    
    var marker, infoWnd;
    
    
    infoWnd = new google.maps.InfoWindow();
    
    marker = new google.maps.Marker({
        title: Title,
        position: origin,
        map: map,
        animation: google.maps.Animation.DROP
    });

    google.maps.event.addListener(marker, "click", function () {
        infoWnd.setContent("<strong>" + Title + "</strong><br>");
        infoWnd.open(map, marker);
    });
            
    return marker;
}

google.maps.event.addDomListener(window, "load", initializeMap);

/*
app.controller("controller", function ($scope) {
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
});*/

app.controller("SensorController", function ($scope) {
    $scope.Temperatura = 11.56;
    $scope.Altitud = 1550;
    $scope.Humedad = 54;
    $scope.Presion = 811.3;
    $scope.Position = "20°39′58″N 103°21′07″O";
    
    navigator.geolocation.watchPosition(function (pos) {
        $scope.$apply(function () {
            $scope.Position = pos.coords.latitude + "," + pos.coords.longitude;
            
            
            var currentLatlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
            createMarker(currentLatlng, "Posición actual");
            map.setCenter(currentLatlng);
        });
    });
});

 
