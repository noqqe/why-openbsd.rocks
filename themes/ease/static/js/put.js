
/**
 *
 * @param {string}    id
 * @param {string}    file
 * @param {string}    location
 * @param {function}  onLocation
 */
function putFile(id, file, location, onLocation)
{
  var targetElem = document.getElementById(id);
  var targetFallbackHTML = "<p>Page not found.</p>";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
    if (this.readyState == 4)
    {
      if (this.status == 200)
      {
        try
        {
          var sourceDoc = (new DOMParser()).parseFromString(this.responseText, 'text/html');
          var sourceElem = sourceDoc.getElementById(id);
          replace_onClick(sourceElem, location, onLocation);
          targetElem.parentElement.replaceChild(sourceElem, targetElem);
          if ( window.history && window.history.replaceState )
          {
             window.history.replaceState({}, sourceDoc.title ,file);
          }
          return;
        }
        catch (e)
        {
          console.error(e);
        }
      }
      targetElem.innerHTML = targetFallbackHTML;
    }
  };
  xhttp.open("GET", file, true);
  xhttp.send();
}

/**
 *
 * @param {HTMLElement} elem
 * @param {string}    location
 * @param {function}  onLocation
 */
function replace_onClick (elem, location, onLocation)
{
  var onClick = function() { onLocation(); return false; };
  var as = elem.getElementsByTagName('a');
  for ( var ai=0, al=as.length, ae ; ai < al ; ++ai )
  {
    /** @type {HTMLLinkElement} ae */
    ae = as[ai];
    if ( ae.href == location )
    {
      ae.onclick = onClick;
    }
  }
}
