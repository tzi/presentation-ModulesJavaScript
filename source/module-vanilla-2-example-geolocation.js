// Definition - File `geolocation.js`
var geolocationModule = (function geolocationGenerator() {
    "use strict";

    // Protected scope
    var timeout = 10000;
    var maximumAge = 300000;

    function isAvailable() {
        return 'geolocation' in navigator;
    }

    function setTimeout(value) {
        timeout = value;
    }

    function setMaximumAge(value) {
        maximumAge = value;
    }

    function geolocate(successCallback, errorCallback) {
        if (!isAvailable()) {
            errorCallback();
            return;
        }
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
            timeout: timeout,
            maximumAge: maximumAge
        });
    }

    // Exposed function
    return {
        isAvailable: isAvailable,
        setTimeout: setTimeout,
        setMaximumAge: setMaximumAge,
        geolocate: geolocate
    };
})();

// Usage - File `main.js`
// [...]
if (geolocationModule.isAvailable()) {
    geolocationModule.geolocate(console.log, console.log);
}