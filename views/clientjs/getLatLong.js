let x = document.getElementById("latlong");

function getLatLong() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLatLong);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showLatLong(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude.toFixed(5) +
        "<br>Longitude: " + position.coords.longitude.toFixed(5);
}