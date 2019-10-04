import "./styles.less";
import "normalize.css";

let insideMapElem;
let closeButton;

function hideMapInfo(mouseEvent) {
    insideMapElem.style.display = "none";
}

function init() {
    insideMapElem = document.getElementById("mapInfo");
    closeButton = document.getElementById("cross");
    closeButton.onclick = hideMapInfo;
}

document.addEventListener("DOMContentLoaded", function (event) {
    init();
});