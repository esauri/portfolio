(function() {
  'use strict';

  var projectPanel = document.getElementById('project-panel');

  window.addEventListener('click', handleClick);
  window.addEventListener("hashchange", closeProjectPanel, false);

  function handleClick (event) {
    let element = event.target,
      elementId = element.getAttribute('id');

    if (element.classList.contains('gallery-image')) {
      // Show lightbox
      showLightbox(element);
    }
    else if (element.classList.contains('scroll-to-top')) {
      scrollTo();
    }
    else if (element.classList.contains('lightbox-image') || element.classList.contains('show-lightbox')) {
      // Hide lightbox
      hideLightbox();
    }
    else if (elementId === 'project-panel-close-button') {
      closeProjectPanel();
    }
    else if (elementId === 'nav-panel-open') {
      toggleProjectPanel();
    }
  }

  function closeProjectPanel() {
    projectPanel.classList.remove('open');
  }

  function toggleProjectPanel() {
    projectPanel.classList.toggle('open');
  }

  function showLightbox(element) {
    // Get the lightbox element
    let lightbox = document.getElementById('lightbox'),
        imageElement = element.cloneNode(),
        titleElement = document.createElement('h5');

    // Remove gallery-image class from image element
    imageElement.classList.remove('gallery-image');

    // Add new lightbox-image class to image element
    imageElement.classList.add('lightbox-image');

    // Append a title to the newly created paragraph
    titleElement.appendChild(document.createTextNode(imageElement.getAttribute('title')));

    // Append the image element to it
    lightbox.appendChild(imageElement);

    // Append paragraph element to it
    lightbox.appendChild(titleElement);

    // Add show-lightbox class
    lightbox.classList.add('show-lightbox');
  }

  function hideLightbox() {
    // Get the lightbox element
    let lightbox = document.getElementById('lightbox');

    // While the lightbox has children
    while (lightbox.hasChildNodes()) {
      // Remove children
      lightbox.removeChild(lightbox.firstChild);
    }

    // Remove show-lightbox class
    lightbox.classList.remove('show-lightbox');
  }

  function scrollTo() {
    let element = document.body,
        to = 0,
        duration = 500,
        start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function(){
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
  	t /= d/2;
  	if (t < 1) return c/2*t*t + b;
  	t--;
  	return -c/2 * (t*(t-2) - 1) + b;
  };
}());
