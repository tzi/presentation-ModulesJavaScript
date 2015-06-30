function newButton() {
    var button = {};
    button.onclick = function(){
        console.log(i);
    }
    return button;
}

var buttonList = [];
for (var i = 0; i < 5; i++) {
    buttonList.push(newButton());
}

for (var j = 0; j < buttonList.length; j++) {
    buttonList[j].onclick();
}