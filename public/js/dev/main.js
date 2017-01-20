import {Projects} from './projects';

(function() {
	'use strict';

  let openSidebarBtn = document.getElementById('open-menu-btn'),
      closeSidebarBtn = document.getElementById('close-menu-btn'),
      sidebar = document.querySelector('.nav-global'),
      scrollToTopBtn;
  
  scrollToTopBtn = (document.getElementById('js-scroll-to-top')) ? document.getElementById('js-scroll-to-top') : null;

  openSidebarBtn.addEventListener('click', openSidebar);
  closeSidebarBtn.addEventListener('click', closeSidebar);
  
  if (scrollToTopBtn !== null) {
    scrollToTopBtn.addEventListener('click', function (event) { scrollTo(document.body); });
  }

  function openSidebar (event) {
    sidebar.classList.add('open');
  }

  function closeSidebar (event) {
    sidebar.classList.remove('open');
  }

  // If work page
  if (document.getElementsByClassName('project-slideshow').length > 0) {
    Projects();
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

  Math.easeInOutQuad = function (t, b, c, d) {
  	t /= d/2;
  	if (t < 1) return c/2*t*t + b;
  	t--;
  	return -c/2 * (t*(t-2) - 1) + b;
  };
}());