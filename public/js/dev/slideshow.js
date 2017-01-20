var Slideshow = function () {
  let galleries = Array.from(document.getElementsByClassName('gallery')),
      gallerySlideshows = Array.from(document.getElementsByClassName('gallery-slideshow'));
  
  const MAX_DRAG = 10;

  var xPosition,
      dragTimes;

  // Loop through slideshows
  gallerySlideshows.forEach(function (slideshow) {
    slideshow.addEventListener('mousedown', mousedownEvent);
    slideshow.addEventListener('mousemove', mousemoveEvent);
  });

  function mousedownEvent (event) {
    console.log(event.target);
    let slideshow;

    switch (event.target.nodeName) {
      case 'UL':
        slideshow = event.target;
        break;
      case 'LI':
        slideshow = event.target.parentNode;
        break;
      case 'IMG':
        slideshow = event.target.parentNode.parentNode;
        break;
      default:
        break;
    }
    console.log('slideshow is a ' + slideshow);

    xPosition = event.clientX;
    console.log('xPosition: ' + xPosition);
  }

  function mousemoveEvent (event) {
    event.preventDefault();
    dragTimes++;
    
    if (!xPosition) {
      return;
    }

    if (dragTimes > MAX_DRAG) {
      return;
    }

    let newX = event.clientX;
    let diffX = xPosition - newX;

    console.log('diff: ' + diffX);
    // xPosition = null;
  }
}

export {Slideshow};