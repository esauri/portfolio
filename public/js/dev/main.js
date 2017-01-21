import {Projects} from './projects';
import {Slideshow} from './slideshow';

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
  if (document.getElementsByClassName('project-carousel').length > 0) {
    Projects();
  }

  // if (document.getElementsByClassName('gallery').length > 0) {
  //   Slideshow();
  // }
  
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