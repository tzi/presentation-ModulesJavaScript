// Returns a closure,
// a function that can be used outside its definition scope
function getClosure() {
    var organizer = 'BrownBagLunch';
    function init() {
        console.log(organizer);
    }
    return init;
}

var organizer = 'Google';
var closure = getClosure();
closure();