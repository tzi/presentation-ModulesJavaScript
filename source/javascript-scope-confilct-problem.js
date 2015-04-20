function id() {
    key = '';
    for (i = 0; i < 16; i++) {
        key += Math.floor(Math.random() * 10);
    }
    return key;
}

var id = id();
console.log(id);

var id2 = id();
console.log(id2);