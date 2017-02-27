import {Projects} from './projects';
import {Gallery} from './gallery';
import _ from 'lodash';

(function() {
	'use strict';

  const SCROLL_TOP_MIN = 700;

  let header = document.getElementById('header'),
      projectPanel = document.getElementById('js-project-panel'),
      projectPanelButtonOpen = document.getElementById('js-project-panel-open-button'),
      projectPanelButtonClose = document.getElementById('js-project-panel-close-button'),
      scrollToTopBtns = Array.from(document.getElementsByClassName('js-scroll-to-top')),
      SCROLL_THRESHOLD = 30;


  projectPanelButtonClose.addEventListener('click', closeProjectPanel);
  projectPanelButtonOpen.addEventListener('click', toggleProjectPanel);

  if (scrollToTopBtns !== null) {
    scrollToTopBtns.forEach((scrollToTopBtn) => {
      scrollToTopBtn.addEventListener('click', function (event) { scrollTo(document.body); });
    });
    
    window.addEventListener('scroll', _.debounce((event) => {
    scrollBtnToggle(event);
  }, SCROLL_THRESHOLD));
  }

  
  // If work page
  if (document.getElementsByClassName('project-carousel').length > 0) {
    Projects();
  }
  
  if (document.getElementsByClassName('gallery-container').length > 0) {
    let galleries = Array.from(document.getElementsByClassName('gallery-container'));

    galleries.forEach(function (gallery) {
      Gallery(gallery);
    });
  }

  function scrollBtnToggle(event) {
    // check window size first
    let windowWidth = window.innerWidth < 760;

    if (windowWidth) {
      return;
    }

    if (document.body.scrollTop >= SCROLL_TOP_MIN) {
      scrollToTopBtns[1].classList.add('visible');
    }
    else {
      scrollToTopBtns[1].classList.remove('visible');
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

  function toggleProjectPanel(event) {
    // Toggle Project Panel class
    projectPanel.classList.toggle('open');
    header.classList.toggle('panel-open');
  }

  function closeProjectPanel(event) {
    // Remove Project Panel class 'open'
    header.classList.remove('panel-open');
    projectPanel.classList.remove('open');
  }

  Math.easeInOutQuad = function (time, start, change, duration) {
  	time /= duration / 2;
  	if (time < 1) return change / 2 * time * time + start;
  	time--;
  	return - change / 2 * (time * (time - 2) - 1) + start;
  };
}());