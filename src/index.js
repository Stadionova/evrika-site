import "./styles.less";
import "normalize.css";

function hideMapInfo(mouseEvent) {
    insideMapElem.style.display = "none";
}

function init() {
    var insideMapElem = document.getElementById("mapInfo");
    var closeButton = document.getElementById("cross");
    closeButton.onclick = hideMapInfo;
}

document.addEventListener("DOMContentLoaded", function (event) {
    init();
});

// function showModal(mouseEvent) {
//   modal.style.display = "block";
// }

// function hideModal(mouseEvent) {
//   modal.style.display = "none";
// }

// function init() {
//   console.log("init");

//   modal = document.getElementById("modal");
//   modalClose = document.getElementById("modal-close");
//   bookingBtn = document.getElementById("booking-btn");

//   modalClose.onclick = hideModal;
//   bookingBtn.onclick = showModal;
// }

// document.addEventListener("DOMContentLoaded", function (event) {
//   console.log("DOMContentLoaded");
//   init();
// });