//The function used to creat grid
function makeGrid() {
    var table = document.getElementById('pixelCanvas');
    table.innerHTML = "";
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;
    var tabledata = '';
    for (var i = 0; i < height; i++) {
        tabledata += '<tr>';
        for (var x = 0; x < width; x++) {
            tabledata += '<td></td>'
        }
        tabledata += '</tr>';
    }
    table.innerHTML = tabledata;
    AddEventForTD();
}

// The function to add action(color) on TD when click 
function AddEventForTD() {
    var tds = document.getElementsByTagName('td');
    for (var i = 0; i < tds.length; i++) {
        tds[i].addEventListener("click", function(event) {
            var currenttd = event.target;
            currenttd.style.backgroundColor = document.getElementById('colorPicker').value;
        })
    }
}
document.addEventListener('DOMContentLoaded', function() {
    AddEventForTD();
})