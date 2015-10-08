// Returns a closure,
// a function that can be used outside its definition scope
function getClosure() {
    var organizer = 'BrownBagLunch';
    return function() {
        console.log(organizer);
    };
}

var organizer = 'Google';
var closure = getClosure();
closure();