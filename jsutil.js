function injectJS(url) {
  var script = document.createElement('script');
  script.setAttribute("type", "application/javascript");
  script.setAttribute("src", url);
  document.documentElement.appendChild(script); // run the script
}

function injectCSS (url) {
  var link = document.createElement('link');
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute("href", url);
  document.documentElement.appendChild(link); // run the script
}


