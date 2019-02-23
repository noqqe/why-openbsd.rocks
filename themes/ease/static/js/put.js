function putFile(id, file) {
  var xhttp;
  let element = document.getElementById(id);
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {element.innerHTML = this.responseText;}
          if (this.status == 404) {element.innerHTML = "Page not found.";}
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
    }
}
