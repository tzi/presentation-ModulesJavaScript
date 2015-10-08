function newButton() {
    return {};
}

var buttonList = [];
for (var i = 0; i < 5; i++) {
    var button = newButton();
    button.onclick = function(){
        console.log(i);
    };
    buttonList[i] = button;
}

for (var j = 0; j < buttonList.length; j++) {
    buttonList[j].onclick();
}