function onKeyDown_blocker(event) {
  event = event || window.event;
  var ae = document.activeElement;
  if (!ae || ae == document.body || ae.tagName == "canvas") {
    if ([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
      if (event.preventDefault) event.preventDefault();
    }
  }
}
