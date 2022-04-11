window.onload = function() {
  $(".flexslider").flexslider({
    directionNav: !1
  })

  // load dynamic slides background images
  var loadSlides = document.getElementsByClassName('js-load-slide');
  for (var i=0; i < loadSlides.length; i++) {
    var loadSlide = loadSlides[i];
    loadSlide.style.backgroundImage = "url('" + loadSlide.getAttribute('data-src') + "')";
  };
}
