/*global $, jQuery, google, angular*/

function showError(error) {
    "use strict";
    switch (error.code) {
    case error.PERMISSION_DENIED:
        window.alert("User denied the request for Geolocation.");
        break;
    case error.POSITION_UNAVAILABLE:
        window.alert("Location information is unavailable.");
        break;
    case error.TIMEOUT:
        window.alert("The request to get user location timed out.");
        break;
    case error.UNKNOWN_ERROR:
        window.alert("An unknown error occurred.");
        break;
    }
    window.alert("An unknown error occurred.");
      
}

function initializeMap() {
    "use strict";
    var mapCanvas, mapOptions, map, location, marker;
    
    function fixlocation(position) {
        //window.alert("some" + position.coords.latitude + ";" + position.coords.longitude);
        location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        mapCanvas = document.getElementById('map-canvas');
        mapOptions = {
            center: location,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(mapCanvas, mapOptions);
        marker = new google.maps.Marker({position: location, map: map, title: "You are here!"}); 
    }
    
    //location =  new google.maps.LatLng(44.5403, -78.5463);
   //try to get location
    if (navigator.geolocation) {  
        navigator.geolocation.getCurrentPosition(fixlocation, showError);
    }
}


var app = angular.module('App', []);


app.controller("SensorControllers", function ($scope) {
    "use strict";
    $scope.Temperatura = 11.56;
    $scope.Altitud = 1550;
    $scope.Humedad = 54;
    $scope.Presion = 811.3;
    $scope.Position = "20°39′58″N 103°21′07″O";
    
    //WatchPosition
    navigator.geolocation.watchPosition(function (pos) {
        initializeMap();
        $scope.$apply(function () {
            $scope.Position = pos.coords.latitude + "," + pos.coords.longitude;
        }, showError);
    });
    
    //myQOBject.PositionChanged.
    
});


google.maps.event.addDomListener(window, 'load', initializeMap);

