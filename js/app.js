var ballparks = [{
    title: 'PNC Park',
    lat: 40.4470471765,
    lng: -80.0061745423
}, {
    title: 'Fakie Field',
    lat: 33,
    lng: -75
}];

var Ballpark = function(data) {
    this.title = ko.observable(data.title);
    this.lat = ko.observable(data.lat);
    this.lng = ko.observable(data.lng);
};

var ViewModel = function() {
    var self = this;

    this.ballparkList = ko.observableArray([]);

    ballparks.forEach(function(ballparkItem) {
        self.ballparkList.push(new Ballpark(ballparkItem));

    });

    this.getMarker = function() {
        var markerJSON = {
            map: map,
            position: {
                lat: 33,
                lng: -75
            },
            title: 'Fakie Field'
        };
        return markerJSON;
    };
};

ko.applyBindings(new ViewModel());

// Google Maps callback function
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        // coordinates to show entire US on a 1600x900px display
        center: {
            lat: 40.4470471765,
            lng: -80.0061745423
        },
        zoom: 4
    });

    // create map markers for all ballparks
    for (i = 0; i < ballparks.length; i++) {
        var marker = new google.maps.Marker({
            map: map,
            title: ballparks[i].title,
            position: new google.maps.LatLng(ballparks[i].lat, ballparks[i].lng)
        });
    }

};