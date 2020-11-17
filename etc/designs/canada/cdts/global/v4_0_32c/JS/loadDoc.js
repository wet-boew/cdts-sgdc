function loadDoc(strFiles) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	document.getElementById("main_menu").innerHTML =
	this.responseText;
	}
};
xhttp.open("GET", strFiles, true);
xhttp.send();