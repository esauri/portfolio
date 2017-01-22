import {Projects} from './projects';

(function() {
	'use strict';

  const SCROLL_TOP_MIN = 700;

  let sidebar = document.querySelector('.nav-global'),
      scrollToTopBtn;

  scrollToTopBtn = (document.getElementById('js-scroll-to-top')) ? document.getElementById('js-scroll-to-top') : null;

  if (scrollToTopBtn !== null) {
    scrollToTopBtn.addEventListener('click', function (event) { scrollTo(document.body); });
    window.addEventListener('scroll', scrollBtnToggle);
  }


  // If work page
  if (document.getElementsByClassName('project-carousel').length > 0) {
    Projects();
  }
  
  function scrollBtnToggle (event) {
    if (document.body.scrollTop >= SCROLL_TOP_MIN) {
      scrollToTopBtn.classList.add('visible');
    }
    else {
      scrollToTopBtn.classList.remove('visible');
    }
  }

  function scrollTo(element) {
    let to = 0,
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

  Math.easeInOutQuad = function (time, start, change, duration) {
  	time /= duration / 2;
  	if (time < 1) return change / 2 * time * time + start;
  	time--;
  	return - change / 2 * (time * (time - 2) - 1) + start;
  };
}());