/**
 *
 * @param {string}    id
 * @param {string}    file
 * @param {string}    location
 * @param {function}  onLocation
 */
function putFile(id, file, location, onLocation)
{
  const targetElem = document.getElementById(id);
  const targetFallbackHTML = "<p>Page not found.</p>";

  fetch(file)
    .then(response => {
      if (!response.ok) {
	throw new Error("Failed to get page");
      }
      return response.text();
    })
    .then(text => {
      const sourceDoc = (new DOMParser()).parseFromString(text, 'text/html');
      const sourceElem = sourceDoc.getElementById(id);
      replace_onClick(sourceElem, location, onLocation);
      targetElem.parentElement.replaceChild(sourceElem, targetElem);

      if (window.history && window.history.replaceState) {
      	window.history.replaceState({}, sourceDoc.title, file);
      }
    })
    .catch(() => targetElem.innerHtml = targetFallbackHTML);
}

/**
 *
 * @param {HTMLElement} elem
 * @param {string}    location
 * @param {function}  onLocation
 */
function replace_onClick (elem, location, onLocation)
{
  const onClick = () => { onLocation(); return false; };
  const as = elem.getElementsByTagName('a');
  for (let ai=0, al=as.length, ae; ai < al; ++ai)
  {
    /** @type {HTMLLinkElement} ae */
    ae = as[ai];
    if ( ae.href === location ) {
      ae.onclick = onClick;
    }
  }
}
