/* Just a debug function to test this script out delete in prod */
function debug(btn_name) {
    console.log("Clicking button: " + btn_name);
}

function swapStyleSheet(sheet_name) {
    document.getElementById("style").setAttribute("href", sheet_name);
}

/*function initiate() {
    var style1 = document.getElementById("stylesheet1");
    var style2 = document.getElementById("stylesheet2");

    style1.onclick = swapStyleSheet("alternate.css");
    style2.onclick = swapStyleSheet("style.css");
}*/