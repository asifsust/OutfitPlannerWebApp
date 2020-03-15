let z = document.getElementById("weather");

function getWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showWeather);
    } else {
        z.innerHTML = "Weather could not be requested.";
    }
}

function showWeather(position) {
    function reqListener() {
        z.innerHTML = "Todays Temperature: " + JSON.parse(this.responseText).daily.data[0].temperatureHigh + "°F ." +
        	JSON.parse(this.responseText).daily.data[0].summary +
			"<br>Temperature Tomorrow: " + JSON.parse(this.responseText).daily.data[1].temperatureHigh + "°F" +
			"<br>Temperature Day After: " + JSON.parse(this.responseText).daily.data[2].temperatureHigh + "°F" +
			"<br>Temperature Day After: " + JSON.parse(this.responseText).daily.data[3].temperatureHigh + "°F" +
			"<br>Temperature Day After: " + JSON.parse(this.responseText).daily.data[4].temperatureHigh + "°F" +
			"<br>Temperature Day After: " + JSON.parse(this.responseText).daily.data[5].temperatureHigh + "°F" +
			"<br>Temperature Day After: " + JSON.parse(this.responseText).daily.data[6].temperatureHigh + "°F";

    }
    var req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET","https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/6dc5080d80ece1bec5cb3367b4837f0b/" + position.coords.latitude + "," + position.coords.longitude);

    req.send();
    z.innerHTML = "Weather: loading..."
}
