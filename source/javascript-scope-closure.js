// Returns a closure, a function that are can be used outside its definition scope
function getClosure() {
    var organizer = 'BrownBagLunch';
    return function init() {
        console.log(organizer);
    }
}

var organizer = 'Google';
var closure = getClosure();
closure();