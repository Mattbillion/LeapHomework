let date = new Date();
let dd = String(date.getDate()).padStart(2, 0);

let mm = String(date.getMonth()).padStart(2, 0);

let yyyy = String(date.getFullYear()).padStart(2, 0);

date = mm + '/' + dd + '/' + yyyy;

document.getElementById("date").innerHTML = "Он сар өдөр: " + date;


function createlist() {
  
}