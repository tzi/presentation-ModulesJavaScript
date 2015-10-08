var organizer = 'Google';
var closure1 = function() {
    console.log(organizer);
};

organizer = 'BrownBagLunch';
var closure2 = function() {
    console.log(organizer);
};

closure1();
closure2();