// Returns a closure,
// a function that can be used outside its definition scope
function getClosure(organizer) {
    return function() {
        console.log(organizer);
    };
}

var closure1 = getClosure('Google');
var closure2 = getClosure('BrownBagLunch');

closure1();
closure2();