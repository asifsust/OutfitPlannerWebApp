let y = document.getElementById("city");

function getCity() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showCity);
    } else {
        y.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showCity(position) {
    function reqListener() {
        y.innerHTML = "City: " + JSON.parse(this.responseText).city;
    }
    var req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET",
        "https://geocode.xyz/" +
        + position.coords.latitude
        + ","
        + position.coords.longitude
        + "?geoit=json"
    );
    req.send();
    y.innerHTML = "City: loading..."
}