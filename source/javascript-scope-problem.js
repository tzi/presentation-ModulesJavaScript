for (var i=0; i<10; i++) {
    console.log(getRandomKey(16));
}

function getRandomKey(length) {
    key = '';
    for (i=0; i&lt;length; i++) {
        key += Math.floor(Math.random() * 10);
    }
    return key;
}